/*
 * Build-time server entry used only for prerendering (see scripts/prerender.mjs).
 * It renders the same <App> the browser does, for a given URL, so every route's
 * HTML file ships its body text — crawlers that don't run JavaScript (ChatGPT,
 * Claude, Perplexity) can then read the page content, not just the <head>.
 * `prerender` waits for the lazily loaded page chunks before producing HTML.
 *
 * `progressiveChunkSize: Infinity` keeps every Suspense boundary inline. By
 * default React moves a finished boundary larger than ~12.8 KB (every page
 * body here) into a `<div hidden>` after the footer and swaps it in with a
 * script, after first paint. The footer then jumps down (CLS 0.40).
 */
import { prerender } from "react-dom/static";
import { Router } from "wouter";
import App from "./App";

export async function render(url: string): Promise<string> {
  const { prelude } = await prerender(
    <Router ssrPath={url}>
      <App />
    </Router>,
    { progressiveChunkSize: Infinity }
  );
  return await new Response(prelude).text();
}
