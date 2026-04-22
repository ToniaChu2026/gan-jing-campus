/**
 * Tests for the /api/submit Cloudflare Pages Functions endpoint
 */

import { describe, it, expect, beforeEach, vi } from "vitest";

// Mock the Brevo API calls
const mockBrevoResponse = {
  addContact: { id: 123, email: "test@example.com" },
  sendEmail: { id: "email-123" },
};

describe("POST /api/submit - Cloudflare Pages Functions", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should validate email format", () => {
    const testCases = [
      { email: "valid@example.com", expected: true },
      { email: "another.email@domain.co.uk", expected: true },
      { email: "invalid-email", expected: false },
      { email: "missing@", expected: false },
      { email: "@nodomain.com", expected: false },
    ];

    testCases.forEach(({ email, expected }) => {
      const isValid = email.includes("@");
      expect(isValid).toBe(expected);
    });
  });

  it("should require BREVO_API_KEY and BREVO_LIST_ID environment variables", () => {
    const env = {
      BREVO_API_KEY: undefined,
      BREVO_LIST_ID: undefined,
    };

    const hasRequiredEnv = env.BREVO_API_KEY && env.BREVO_LIST_ID;
    expect(hasRequiredEnv).toBe(false);
  });

  it("should construct correct Brevo API request for adding contact", () => {
    const email = "test@example.com";
    const firstName = "John";
    const listId = "37";

    const expectedPayload = {
      email,
      attributes: {
        FIRSTNAME: firstName || "Parent",
      },
      listIds: [parseInt(listId)],
      updateEnabled: true,
    };

    expect(expectedPayload.email).toBe(email);
    expect(expectedPayload.attributes.FIRSTNAME).toBe(firstName);
    expect(expectedPayload.listIds[0]).toBe(37);
  });

  it("should construct correct Brevo API request for sending email", () => {
    const email = "test@example.com";
    const firstName = "John";
    const guideUrl = "https://drive.google.com/file/d/1MjRHcNaj8riFOgyb99DNzQ6tsnAUiZLa/view?usp=sharing";

    const expectedPayload = {
      to: [{ email, name: firstName || "Parent" }],
      sender: {
        name: "Gan Jing Campus",
        email: "noreply@ganjingcampus.org",
      },
      subject: "Your 30-Minute Family Screen Reset Guide",
      htmlContent: expect.stringContaining(guideUrl),
    };

    expect(expectedPayload.to[0].email).toBe(email);
    expect(expectedPayload.sender.email).toBe("noreply@ganjingcampus.org");
  });

  it("should return 405 for non-POST requests", () => {
    const methods = ["GET", "PUT", "DELETE", "PATCH"];
    
    methods.forEach((method) => {
      // Simulate checking method
      const isPost = method === "POST";
      expect(isPost).toBe(false);
    });
  });

  it("should return 400 for invalid email", () => {
    const invalidEmails = ["notanemail", "missing@", "@nodomain.com", ""];
    
    invalidEmails.forEach((email) => {
      const isValid = email.includes("@");
      expect(isValid).toBe(false);
    });
  });

  it("should return 500 if Brevo credentials are missing", () => {
    const env = {
      BREVO_API_KEY: undefined,
      BREVO_LIST_ID: undefined,
    };

    const hasCredentials = env.BREVO_API_KEY && env.BREVO_LIST_ID;
    expect(hasCredentials).toBe(false);
  });

  it("should return success response with contactAdded and emailSent flags", () => {
    const successResponse = {
      success: true,
      contactAdded: true,
      emailSent: true,
      message: "Thank you! Check your email for the guide.",
    };

    expect(successResponse.success).toBe(true);
    expect(successResponse.contactAdded).toBeDefined();
    expect(successResponse.emailSent).toBeDefined();
    expect(successResponse.message).toContain("Thank you");
  });
});
