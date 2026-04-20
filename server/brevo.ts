/**
 * Brevo (Sendinblue) integration for:
 * 1. Adding contacts to a list
 * 2. Sending a transactional email with the PDF guide
 */

const BREVO_API_URL = "https://api.brevo.com/v3";

function getBrevoApiKey(): string {
  const key = process.env.BREVO_API_KEY;
  if (!key) throw new Error("BREVO_API_KEY is not configured");
  return key;
}

function getBrevoListId(): number {
  const id = process.env.BREVO_LIST_ID;
  return id ? parseInt(id, 10) : 37;
}

/**
 * Add or update a contact in Brevo and assign them to the configured list.
 */
export async function addContactToBrevo(email: string, firstName?: string): Promise<boolean> {
  const apiKey = getBrevoApiKey();
  const listId = getBrevoListId();

  try {
    const response = await fetch(`${BREVO_API_URL}/contacts`, {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: firstName || "",
        },
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.warn(`[Brevo] Failed to add contact (${response.status}): ${detail}`);
      // If contact already exists and we're updating, that's still OK
      if (response.status === 204 || detail.includes("Contact already exist")) {
        return true;
      }
      return false;
    }

    console.log(`[Brevo] Contact added: ${email}`);
    return true;
  } catch (error) {
    console.error("[Brevo] Error adding contact:", error);
    return false;
  }
}

/**
 * Send a transactional email with the PDF guide download link.
 */
export async function sendGuideEmail(
  email: string,
  firstName: string,
  guideUrl: string
): Promise<boolean> {
  const apiKey = getBrevoApiKey();

  try {
    const response = await fetch(`${BREVO_API_URL}/smtp/email`, {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: "Gan Jing Campus",
          email: "noreply@ganjingworld.com",
        },
        to: [
          {
            email,
            name: firstName || "Parent",
          },
        ],
        subject: "Your Free Guide: The 30-Minute Family Screen Reset",
        htmlContent: buildEmailHtml(firstName, guideUrl),
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.warn(`[Brevo] Failed to send email (${response.status}): ${detail}`);
      return false;
    }

    console.log(`[Brevo] Guide email sent to: ${email}`);
    return true;
  } catch (error) {
    console.error("[Brevo] Error sending email:", error);
    return false;
  }
}

/**
 * Validate that the Brevo API key is working by fetching account info.
 */
export async function validateBrevoApiKey(): Promise<boolean> {
  const apiKey = getBrevoApiKey();

  try {
    const response = await fetch(`${BREVO_API_URL}/account`, {
      method: "GET",
      headers: {
        "accept": "application/json",
        "api-key": apiKey,
      },
    });

    return response.ok;
  } catch {
    return false;
  }
}

function buildEmailHtml(firstName: string, guideUrl: string): string {
  const name = firstName || "there";
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0; padding:0; background-color:#f5f8fc; font-family: 'Source Sans Pro', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f8fc; padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 2px 12px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #133960, #0087FD); padding:32px 40px; text-align:center;">
              <h1 style="color:#ffffff; font-size:24px; margin:0 0 8px;">Gan Jing Campus</h1>
              <p style="color:rgba(255,255,255,0.8); font-size:14px; margin:0;">Technology for Humanity</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="color:#133960; font-size:22px; margin:0 0 16px;">Hi ${name},</h2>
              
              <p style="color:#5a7a9a; font-size:16px; line-height:1.6; margin:0 0 16px;">
                Thank you for downloading <strong style="color:#133960;">The 30-Minute Family Screen Reset</strong>. 
                You've just taken the first step toward designing your family's digital environment with intention.
              </p>

              <p style="color:#5a7a9a; font-size:16px; line-height:1.6; margin:0 0 24px;">
                Click the button below to download your free guide:
              </p>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="${guideUrl}" 
                       style="display:inline-block; background-color:#E79E24; color:#ffffff; font-size:18px; font-weight:600; text-decoration:none; padding:14px 36px; border-radius:50px;">
                      Download Your Free Guide
                    </a>
                  </td>
                </tr>
              </table>

              <p style="color:#5a7a9a; font-size:14px; line-height:1.6; margin:24px 0 0; text-align:center;">
                <em>If the button doesn't work, copy and paste this link into your browser:</em><br>
                <a href="${guideUrl}" style="color:#0087FD; word-break:break-all;">${guideUrl}</a>
              </p>

              <!-- Divider -->
              <hr style="border:none; border-top:1px solid #e8eef4; margin:32px 0;">

              <!-- Upsell -->
              <h3 style="color:#133960; font-size:18px; margin:0 0 12px;">Ready for the next step?</h3>
              <p style="color:#5a7a9a; font-size:15px; line-height:1.6; margin:0 0 16px;">
                The guide resets your home. <strong style="color:#133960;">Gan Jing Campus</strong> extends that alignment 
                to school, classroom, and beyond — with curated, values-driven content your whole family can trust.
              </p>
              <p style="text-align:center;">
                <a href="https://ganjingcampus.org" 
                   style="color:#0087FD; font-size:15px; font-weight:600; text-decoration:none;">
                  Explore Gan Jing Campus &rarr;
                </a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#00AAFF; padding:24px 40px; text-align:center;">
              <p style="color:#ffffff; font-size:16px; font-weight:700; letter-spacing:1px; margin:0 0 4px;">GAN JING WORLD</p>
              <p style="color:rgba(255,255,255,0.85); font-size:13px; font-style:italic; margin:0 0 8px;">Technology for Humanity</p>
              <p style="color:rgba(255,255,255,0.65); font-size:12px; margin:0;">&copy; ${new Date().getFullYear()} Ganjingworld Corporation. All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
