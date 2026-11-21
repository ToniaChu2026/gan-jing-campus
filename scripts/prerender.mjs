/*
 * Prerender page bodies into the per-route HTML files.
 *
 * `vite build` writes one HTML file per route (head only, empty #root).
 * `vite build --ssr` builds client/src/entry-server.tsx into dist/ssr.
 * This script renders each route with that entry and puts the markup inside
 * <div id="root"> so search and AI crawlers that don't run JavaScript see
 * the real page text. The browser then hydrates that markup (hydrateRoot).
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(root, "dist/public");
const ssrDir = path.join(root, "dist/ssr");

const entryFile = ["entry-server.js", "entry-server.mjs"]
  .map((f) => path.join(ssrDir, f))
  .find((f) => fs.existsSync(f));
if (!entryFile) {
  throw new Error(`[prerender] SSR entry not found in ${ssrDir}`);
}
const { render } = await import(pathToFileURL(entryFile).href);

/** "index.html" → "/", "about.html" → "/about", "zh/index.html" → "/zh/" */
function urlForFile(rel) {
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) return `/${rel.slice(0, -"index.html".length)}`;
  return `/${rel.slice(0, -".html".length)}`;
}

function htmlFiles(dir, base = "") {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      if (entry.name === "assets" || entry.name === "images") continue;
      out.push(...htmlFiles(path.join(dir, entry.name), rel));
    } else if (entry.name.endsWith(".html") && entry.name !== "404.html") {
      out.push(rel);
    }
  }
  return out;
}

const EMPTY_ROOT = '<div id="root"></div>';
let count = 0;
for (const rel of htmlFiles(publicDir)) {
  const file = path.join(publicDir, rel);
  const html = fs.readFileSync(file, "utf-8");
  if (!html.includes(EMPTY_ROOT)) {
    throw new Error(`[prerender] ${rel} has no empty #root to fill`);
  }
  const url = urlForFile(rel);
  const body = await render(url);
  if (!body || body.length < 200) {
    throw new Error(`[prerender] ${url} rendered almost nothing (${body?.length ?? 0} chars)`);
  }
  // Content must be in place, not streamed in later: a hidden segment swapped
  // in by script after first paint pushes the footer down (layout shift).
  if (/<template id="B:|<div hidden id="S:|<!--\$\?-->/.test(body)) {
    throw new Error(`[prerender] ${url} has a deferred Suspense segment; content must be inline`);
  }
  fs.writeFileSync(file, html.replace(EMPTY_ROOT, () => `<div id="root">${body}</div>`), "utf-8");
  count++;
}

// The SSR bundle is only needed at build time; keep it out of the deploy.
fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`[prerender] rendered ${count} pages`);
