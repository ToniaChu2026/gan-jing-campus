import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

/**
 * Tests for the lead.submit tRPC procedure.
 * We mock global fetch to avoid hitting the real Brevo API.
 */

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("lead.submit", () => {
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    // Mock fetch to simulate Brevo API responses
    globalThis.fetch = vi.fn(async (input: string | URL | Request) => {
      const url = typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;

      // Mock Brevo contacts endpoint (add contact)
      if (url.includes("/v3/contacts")) {
        return new Response(JSON.stringify({ id: 12345 }), {
          status: 201,
          headers: { "Content-Type": "application/json" },
        });
      }

      // Mock Brevo smtp/email endpoint (send transactional email)
      if (url.includes("/v3/smtp/email")) {
        return new Response(JSON.stringify({ messageId: "abc-123" }), {
          status: 201,
          headers: { "Content-Type": "application/json" },
        });
      }

      // Mock notification endpoint (notifyOwner)
      if (url.includes("notification")) {
        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }

      // Default: return OK for any other calls
      return new Response(JSON.stringify({}), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }) as typeof fetch;
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it("should accept a valid email and return success", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.lead.submit({
      email: "test@example.com",
    });

    expect(result).toMatchObject({
      success: true,
      contactAdded: true,
      emailSent: true,
    });
  });

  it("should accept email with optional firstName", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.lead.submit({
      email: "parent@example.com",
      firstName: "Sarah",
    });

    expect(result).toMatchObject({
      success: true,
      contactAdded: true,
      emailSent: true,
    });

    // Verify fetch was called with the correct firstName in the contact payload
    const fetchMock = globalThis.fetch as ReturnType<typeof vi.fn>;
    const contactCall = fetchMock.mock.calls.find(
      (call: unknown[]) => typeof call[0] === "string" && (call[0] as string).includes("/v3/contacts")
    );
    expect(contactCall).toBeDefined();

    const contactBody = JSON.parse((contactCall![1] as RequestInit).body as string);
    expect(contactBody.email).toBe("parent@example.com");
    expect(contactBody.attributes.FIRSTNAME).toBe("Sarah");
  });

  it("should reject an invalid email with a zod validation error", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.lead.submit({ email: "not-an-email" })
    ).rejects.toThrow();
  });

  it("should reject when email is missing", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      // @ts-expect-error — intentionally passing invalid input
      caller.lead.submit({})
    ).rejects.toThrow();
  });

  it("should still return success even if Brevo contact add fails", async () => {
    // Override fetch to fail on contacts but succeed on email
    globalThis.fetch = vi.fn(async (input: string | URL | Request) => {
      const url = typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;

      if (url.includes("/v3/contacts")) {
        return new Response("Internal Server Error", { status: 500 });
      }
      if (url.includes("/v3/smtp/email")) {
        return new Response(JSON.stringify({ messageId: "abc-123" }), {
          status: 201,
          headers: { "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({}), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }) as typeof fetch;

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.lead.submit({
      email: "fail-contact@example.com",
    });

    // The mutation still succeeds — it doesn't throw on Brevo failures
    expect(result.success).toBe(true);
    expect(result.contactAdded).toBe(false);
    expect(result.emailSent).toBe(true);
  });

  it("should still return success even if Brevo email send fails", async () => {
    globalThis.fetch = vi.fn(async (input: string | URL | Request) => {
      const url = typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;

      if (url.includes("/v3/contacts")) {
        return new Response(JSON.stringify({ id: 12345 }), {
          status: 201,
          headers: { "Content-Type": "application/json" },
        });
      }
      if (url.includes("/v3/smtp/email")) {
        return new Response("Service Unavailable", { status: 503 });
      }
      return new Response(JSON.stringify({}), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }) as typeof fetch;

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.lead.submit({
      email: "fail-email@example.com",
    });

    expect(result.success).toBe(true);
    expect(result.contactAdded).toBe(true);
    expect(result.emailSent).toBe(false);
  });
});
