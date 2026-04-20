import { describe, expect, it } from "vitest";
import { validateBrevoApiKey } from "./brevo";

describe("Brevo API Key Validation", () => {
  it("should validate the Brevo API key is working", async () => {
    const isValid = await validateBrevoApiKey();
    expect(isValid).toBe(true);
  });
});
