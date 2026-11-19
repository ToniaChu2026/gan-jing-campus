/**
 * Tests for the /api/submit Cloudflare Pages Function (functions/api/submit.ts).
 * Kept outside functions/ because Cloudflare turns every file there into a route.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { onRequest } from "../functions/api/submit";

const env = { BREVO_API_KEY: "test-key", BREVO_LIST_ID: "37" };

function post(body: unknown, method = "POST") {
  return new Request("https://ganjingcampus.org/api/submit", {
    method,
    headers: { "Content-Type": "application/json" },
    body: method === "GET" ? undefined : JSON.stringify(body),
  });
}

describe("POST /api/submit (Cloudflare Pages Function)", () => {
  const fetchMock = vi.fn();

  beforeEach(() => {
    fetchMock.mockReset();
    fetchMock.mockResolvedValue(new Response(JSON.stringify({ id: 1 }), { status: 201 }));
    vi.stubGlobal("fetch", fetchMock);
    vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("rejects non-POST requests with 405", async () => {
    const res = await onRequest({ request: post(null, "GET"), env });
    expect(res.status).toBe(405);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("returns 500 when Brevo credentials are missing", async () => {
    const res = await onRequest({ request: post({ email: "a@b.com" }), env: {} });
    expect(res.status).toBe(500);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it.each(["", "notanemail"])("returns 400 for invalid email %j", async (email) => {
    const res = await onRequest({ request: post({ email }), env });
    expect(res.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("adds the contact and sends the guide email", async () => {
    const res = await onRequest({
      request: post({ email: "parent@example.com", firstName: "Ann" }),
      env,
    });
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({ success: true, contactAdded: true, emailSent: true });

    const [contactUrl, contactInit] = fetchMock.mock.calls[0];
    expect(contactUrl).toBe("https://api.brevo.com/v3/contacts");
    expect(JSON.parse(contactInit.body)).toMatchObject({
      email: "parent@example.com",
      attributes: { FIRSTNAME: "Ann" },
      listIds: [37],
    });

    const [emailUrl, emailInit] = fetchMock.mock.calls[1];
    expect(emailUrl).toBe("https://api.brevo.com/v3/smtp/email");
    expect(JSON.parse(emailInit.body).to).toEqual([{ email: "parent@example.com", name: "Ann" }]);
  });

  it("still returns success when Brevo calls fail", async () => {
    fetchMock.mockResolvedValue(new Response("boom", { status: 500 }));
    const res = await onRequest({ request: post({ email: "parent@example.com" }), env });
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({ success: true, contactAdded: false, emailSent: false });
  });
});
