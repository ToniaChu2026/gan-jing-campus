/**
 * Cloudflare Pages Functions adapter for tRPC
 * This file handles all /api/* requests and routes them to the tRPC router
 * 
 * Cloudflare Pages Functions use a different runtime than Node.js:
 * - No Express server needed
 * - Fetch-based API
 * - Environment variables passed via context.env
 */

import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "../../server/routers";
import type { User } from "../../drizzle/schema";
import { sdk } from "../../server/_core/sdk";

export interface Env {
  // Cloudflare environment variables
  BREVO_API_KEY?: string;
  BREVO_LIST_ID?: string;
  DATABASE_URL?: string;
  JWT_SECRET?: string;
  VITE_APP_ID?: string;
  OAUTH_SERVER_URL?: string;
  VITE_OAUTH_PORTAL_URL?: string;
  OWNER_OPEN_ID?: string;
  OWNER_NAME?: string;
  BUILT_IN_FORGE_API_URL?: string;
  BUILT_IN_FORGE_API_KEY?: string;
  VITE_FRONTEND_FORGE_API_KEY?: string;
  VITE_FRONTEND_FORGE_API_URL?: string;
}

/**
 * Create tRPC context for Cloudflare Functions
 * Adapts the Fetch API request/response to tRPC's expected format
 */
async function createCloudflareContext(
  request: Request,
  env: Env
): Promise<{
  req: Request;
  res: Response;
  user: User | null;
}> {
  let user: User | null = null;

  try {
    // Authenticate using the SDK (same as Express context)
    // Note: sdk.authenticateRequest expects a Node.js-like request object
    // For Cloudflare, we pass the Fetch API request directly
    user = await sdk.authenticateRequest(request as any);
  } catch (error) {
    // Authentication is optional for public procedures
    user = null;
  }

  return {
    req: request,
    res: new Response(),
    user,
  };
}

/**
 * Handle all /api/* requests
 * Cloudflare Pages Functions entry point
 */
export async function onRequest(context: {
  request: Request;
  env: Env;
  params: Record<string, string>;
}): Promise<Response> {
  const { request, env, params } = context;

  // Extract the path after /api/
  const path = params.path ? params.path.join("/") : "";

  // Only handle /api/trpc/* requests
  if (!path.startsWith("trpc/")) {
    return new Response("Not Found", { status: 404 });
  }

  try {
    // Inject environment variables into process.env for the tRPC handlers
    // This allows server code to access Brevo API keys, etc.
    Object.assign(process.env, env);

    // Create context for this request
    const trpcContext = await createCloudflareContext(request, env);

    // Use tRPC's fetch adapter to handle the request
    const response = await fetchRequestHandler({
      endpoint: "/api/trpc",
      req: request,
      router: appRouter,
      createContext: async () => trpcContext,
      onError: ({ error, path: trpcPath }) => {
        console.error(`[tRPC] Error at ${trpcPath}:`, error);
      },
    });

    return response;
  } catch (error) {
    console.error("[Cloudflare Function] Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
