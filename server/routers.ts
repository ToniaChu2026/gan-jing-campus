import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { addContactToBrevo, sendGuideEmail } from "./brevo";
import { notifyOwner } from "./_core/notification";

const GUIDE_URL = "https://drive.google.com/file/d/1MjRHcNaj8riFOgyb99DNzQ6tsnAUiZLa/view?usp=sharing";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  lead: router({
    submit: publicProcedure
      .input(
        z.object({
          email: z.string().email("Please enter a valid email address"),
          firstName: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const { email, firstName } = input;
        const name = firstName || "Parent";

        // 1. Add contact to Brevo list
        const contactAdded = await addContactToBrevo(email, firstName);
        if (!contactAdded) {
          console.warn(`[Lead] Failed to add contact to Brevo: ${email}`);
        }

        // 2. Send the guide email
        const emailSent = await sendGuideEmail(email, name, GUIDE_URL);
        if (!emailSent) {
          console.warn(`[Lead] Failed to send guide email to: ${email}`);
        }

        // 3. Notify owner of new lead
        try {
          await notifyOwner({
            title: `New Lead: ${name} (${email})`,
            content: `A new parent signed up for the 30-Minute Family Screen Reset guide.\n\nName: ${name}\nEmail: ${email}\nContact added to Brevo: ${contactAdded ? "Yes" : "No"}\nGuide email sent: ${emailSent ? "Yes" : "No"}`,
          });
        } catch (err) {
          console.warn("[Lead] Failed to notify owner:", err);
        }

        return {
          success: true,
          contactAdded,
          emailSent,
        };
      }),
  }),
});

export type AppRouter = typeof appRouter;
