/*
 * Build-time server entry used only for prerendering (see scripts/prerender.mjs).
 * It renders the same <App> the browser does, for a given URL, so every route's
 * HTML file ships its body text — crawlers that don't run JavaScript (ChatGPT,
 * Claude, Perplexity) can then read the page content, not just the <head>.
 * `prerender` waits for the lazily loaded page chunks before producing HTML.
 */
import { prerender } from "react-dom/static";
import { Router } from "wouter";
import App from "./App";

export async function render(url: string): Promise<string> {
  const { prelude } = await prerender(
    <Router ssrPath={url}>
      <App />
    </Router>
  );
  return await new Response(prelude).text();
}
