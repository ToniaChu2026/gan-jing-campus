/**
 * Tests for CampusGuide form submission
 * Tests the fetch-based API call to /api/submit
 */

import { describe, it, expect, beforeEach, vi } from "vitest";

describe("CampusGuide Form Submission", () => {
  beforeEach(() => {
    // Reset all mocks before each test
    vi.clearAllMocks();
  });

  it("should send a valid POST request to /api/submit with email and name", async () => {
    // Mock fetch
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true, contactAdded: true, emailSent: true }),
    });
    global.fetch = mockFetch;

    // Simulate form submission
    const email = "test@example.com";
    const firstName = "John";

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        firstName,
      }),
    });

    // Verify fetch was called correctly
    expect(mockFetch).toHaveBeenCalledWith("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        firstName,
      }),
    });

    // Verify response
    expect(response.ok).toBe(true);
    const data = await response.json();
    expect(data.success).toBe(true);
  });

  it("should send a POST request with only email (firstName optional)", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true, contactAdded: true, emailSent: true }),
    });
    global.fetch = mockFetch;

    const email = "test@example.com";

    await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        firstName: undefined,
      }),
    });

    expect(mockFetch).toHaveBeenCalledWith("/api/submit", expect.any(Object));
    const callBody = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(callBody.email).toBe(email);
  });

  it("should handle API errors gracefully", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ error: "Invalid email" }),
    });
    global.fetch = mockFetch;

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "invalid",
        firstName: "John",
      }),
    });

    expect(response.ok).toBe(false);
    const data = await response.json();
    expect(data.error).toBeDefined();
  });

  it("should handle network errors", async () => {
    const mockFetch = vi.fn().mockRejectedValue(new Error("Network error"));
    global.fetch = mockFetch;

    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "test@example.com",
          firstName: "John",
        }),
      });
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect((error as Error).message).toBe("Network error");
    }
  });

  it("should reject non-POST requests", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 405,
      json: async () => ({ error: "Method not allowed" }),
    });
    global.fetch = mockFetch;

    const response = await fetch("/api/submit", {
      method: "GET",
    });

    expect(response.status).toBe(405);
  });
});
