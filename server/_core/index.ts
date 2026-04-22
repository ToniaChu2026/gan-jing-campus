import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";
import { addContactToBrevo, sendGuideEmail } from "../brevo";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  // OAuth callback under /api/oauth/callback
  registerOAuthRoutes(app);

  // Simple POST /api/submit endpoint for lead capture form
  app.post("/api/submit", express.json(), async (req, res) => {
    try {
      const { email, firstName } = req.body;

      // Validate email
      if (!email || !email.includes("@")) {
        return res.status(400).json({ error: "Please enter a valid email address" });
      }

      const guideUrl = "https://drive.google.com/file/d/1MjRHcNaj8riFOgyb99DNzQ6tsnAUiZLa/view?usp=sharing";
      const name = firstName || "Parent";

      // Add contact to Brevo list
      const contactAdded = await addContactToBrevo(email, firstName);
      if (!contactAdded) {
        console.warn(`[Lead] Failed to add contact to Brevo: ${email}`);
      }

      // Send guide email
      const emailSent = await sendGuideEmail(email, name, guideUrl);
      if (!emailSent) {
        console.warn(`[Lead] Failed to send guide email to: ${email}`);
      }

      // Return success response
      res.json({
        success: true,
        contactAdded,
        emailSent,
        message: "Thank you! Check your email for the guide.",
      });
    } catch (error) {
      console.error("[API] /api/submit error:", error);
      res.status(500).json({ error: "Failed to process request" });
    }
  });

  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
