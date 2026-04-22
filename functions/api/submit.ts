/**
 * Cloudflare Pages Functions API
 * Simple POST endpoint to submit lead data to Brevo
 * 
 * Endpoint: POST /api/submit
 * Body: { email: string, firstName?: string }
 */

interface Env {
  BREVO_API_KEY?: string;
  BREVO_LIST_ID?: string;
}

interface SubmitRequest {
  email: string;
  firstName?: string;
}

interface BrevoResponse {
  id?: number;
  email?: string;
  message?: string;
}

/**
 * Add contact to Brevo list
 */
async function addContactToBrevo(
  email: string,
  firstName: string | undefined,
  apiKey: string,
  listId: string
): Promise<boolean> {
  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: firstName || "Parent",
        },
        listIds: [parseInt(listId)],
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error(`[Brevo] Failed to add contact: ${error}`);
      return false;
    }

    const data: BrevoResponse = await response.json();
    console.log(`[Brevo] Contact added: ${data.id}`);
    return true;
  } catch (error) {
    console.error("[Brevo] Error adding contact:", error);
    return false;
  }
}

/**
 * Send guide email via Brevo transactional API
 */
async function sendGuideEmail(
  email: string,
  firstName: string | undefined,
  guideUrl: string,
  apiKey: string
): Promise<boolean> {
  try {
    const name = firstName || "Parent";
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: [{ email, name }],
        sender: {
          name: "Gan Jing Campus",
          email: "noreply@ganjingcampus.org",
        },
        subject: "Your 30-Minute Family Screen Reset Guide",
        htmlContent: `
          <h2>Hi ${name},</h2>
          <p>Thank you for your interest in the 30-Minute Family Screen Reset guide!</p>
          <p>You can access your guide here: <a href="${guideUrl}">${guideUrl}</a></p>
          <p>We hope this resource helps your family build healthier digital habits.</p>
          <p>Best regards,<br>Gan Jing Campus Team</p>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error(`[Brevo] Failed to send email: ${error}`);
      return false;
    }

    console.log(`[Brevo] Email sent to: ${email}`);
    return true;
  } catch (error) {
    console.error("[Brevo] Error sending email:", error);
    return false;
  }
}

/**
 * Main handler for POST /api/submit
 */
export async function onRequest(
  context: {
    request: Request;
    env: Env;
  }
): Promise<Response> {
  const { request, env } = context;

  // Only accept POST requests
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Check for required environment variables
  const apiKey = env.BREVO_API_KEY;
  const listId = env.BREVO_LIST_ID;

  if (!apiKey || !listId) {
    console.error("[API] Missing Brevo credentials");
    return new Response(
      JSON.stringify({ error: "Server configuration error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    // Parse request body
    const body: SubmitRequest = await request.json();
    const { email, firstName } = body;

    // Validate email
    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Please enter a valid email address" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const guideUrl =
      "https://drive.google.com/file/d/1MjRHcNaj8riFOgyb99DNzQ6tsnAUiZLa/view?usp=sharing";

    // Add contact to Brevo list
    const contactAdded = await addContactToBrevo(email, firstName, apiKey, listId);

    // Send guide email
    const emailSent = await sendGuideEmail(email, firstName, guideUrl, apiKey);

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        contactAdded,
        emailSent,
        message: "Thank you! Check your email for the guide.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("[API] Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
