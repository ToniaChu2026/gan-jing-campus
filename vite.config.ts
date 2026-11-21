import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, loadEnv, type Plugin, type ViteDevServer } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";
import {
  BASE_URL,
  DEFAULT_OG_IMAGE,
  OG_LOCALES,
  SEO_ROUTES,
  SITE_NAMES,
  absoluteUrl,
  alternatesFor,
  breadcrumbJsonLd,
  fullTitle,
  langForPath,
  type PageSeo,
} from "./client/src/lib/seoRoutes";
import { FAQ_EN, FAQ_ZH, faqPageJsonLd } from "./client/src/lib/faq";

// =============================================================================
// Manus Debug Collector - Vite Plugin
// Writes browser logs directly to files, trimmed when exceeding size limit
// =============================================================================

const PROJECT_ROOT = import.meta.dirname;
const LOG_DIR = path.join(PROJECT_ROOT, ".manus-logs");
const MAX_LOG_SIZE_BYTES = 1 * 1024 * 1024; // 1MB per log file
const TRIM_TARGET_BYTES = Math.floor(MAX_LOG_SIZE_BYTES * 0.6); // Trim to 60% to avoid constant re-trimming

type LogSource = "browserConsole" | "networkRequests" | "sessionReplay";

function ensureLogDir() {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
}

function trimLogFile(logPath: string, maxSize: number) {
  try {
    if (!fs.existsSync(logPath) || fs.statSync(logPath).size <= maxSize) {
      return;
    }

    const lines = fs.readFileSync(logPath, "utf-8").split("\n");
    const keptLines: string[] = [];
    let keptBytes = 0;

    // Keep newest lines (from end) that fit within 60% of maxSize
    const targetSize = TRIM_TARGET_BYTES;
    for (let i = lines.length - 1; i >= 0; i--) {
      const lineBytes = Buffer.byteLength(`${lines[i]}\n`, "utf-8");
      if (keptBytes + lineBytes > targetSize) break;
      keptLines.unshift(lines[i]);
      keptBytes += lineBytes;
    }

    fs.writeFileSync(logPath, keptLines.join("\n"), "utf-8");
  } catch {
    /* ignore trim errors */
  }
}

function writeToLogFile(source: LogSource, entries: unknown[]) {
  if (entries.length === 0) return;

  ensureLogDir();
  const logPath = path.join(LOG_DIR, `${source}.log`);

  // Format entries with timestamps
  const lines = entries.map((entry) => {
    const ts = new Date().toISOString();
    return `[${ts}] ${JSON.stringify(entry)}`;
  });

  // Append to log file
  fs.appendFileSync(logPath, `${lines.join("\n")}\n`, "utf-8");

  // Trim if exceeds max size
  trimLogFile(logPath, MAX_LOG_SIZE_BYTES);
}

/**
 * Vite plugin to collect browser debug logs
 * - POST /__manus__/logs: Browser sends logs, written directly to files
 * - Files: browserConsole.log, networkRequests.log, sessionReplay.log
 * - Auto-trimmed when exceeding 1MB (keeps newest entries)
 */
function vitePluginManusDebugCollector(): Plugin {
  return {
    name: "manus-debug-collector",

    transformIndexHtml(html) {
      if (process.env.NODE_ENV === "production") {
        return html;
      }
      return {
        html,
        tags: [
          {
            tag: "script",
            attrs: {
              src: "/__manus__/debug-collector.js",
              defer: true,
            },
            injectTo: "head",
          },
        ],
      };
    },

    configureServer(server: ViteDevServer) {
      // POST /__manus__/logs: Browser sends logs (written directly to files)
      server.middlewares.use("/__manus__/logs", (req, res, next) => {
        if (req.method !== "POST") {
          return next();
        }

        const handlePayload = (payload: any) => {
          // Write logs directly to files
          if (payload.consoleLogs?.length > 0) {
            writeToLogFile("browserConsole", payload.consoleLogs);
          }
          if (payload.networkRequests?.length > 0) {
            writeToLogFile("networkRequests", payload.networkRequests);
          }
          if (payload.sessionEvents?.length > 0) {
            writeToLogFile("sessionReplay", payload.sessionEvents);
          }

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ success: true }));
        };

        const reqBody = (req as { body?: unknown }).body;
        if (reqBody && typeof reqBody === "object") {
          try {
            handlePayload(reqBody);
          } catch (e) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: false, error: String(e) }));
          }
          return;
        }

        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });

        req.on("end", () => {
          try {
            const payload = JSON.parse(body);
            handlePayload(payload);
          } catch (e) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: false, error: String(e) }));
          }
        });
      });
    },
  };
}

/**
 * Umami analytics is optional: inject the script only when both env vars are set,
 * so an unconfigured build never ships a broken "%VITE_ANALYTICS_ENDPOINT%" request.
 */
function vitePluginOptionalUmami(env: Record<string, string>): Plugin {
  return {
    name: "optional-umami",
    transformIndexHtml(html) {
      const endpoint = env.VITE_ANALYTICS_ENDPOINT;
      const websiteId = env.VITE_ANALYTICS_WEBSITE_ID;
      if (!endpoint || !websiteId) return html;
      return {
        html,
        tags: [
          {
            tag: "script",
            attrs: {
              defer: true,
              src: `${endpoint.replace(/\/$/, "")}/umami`,
              "data-website-id": websiteId,
            },
            injectTo: "body",
          },
        ],
      };
    },
  };
}

/**
 * The Manus dev tooling under client/public/__manus__ is only useful on the dev
 * server; drop it from the production output.
 */
function vitePluginStripManusAssets(): Plugin {
  let outDir = "";
  return {
    name: "strip-manus-assets",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      fs.rmSync(path.join(outDir, "__manus__"), { recursive: true, force: true });
    },
  };
}

// =============================================================================
// Per-route HTML, 404.html and sitemap.xml
// The app is a client-rendered SPA, so without this every URL would serve the
// same HTML (English home title/image) to crawlers and link-preview bots that
// don't run JavaScript. After the bundle is written we stamp each route's meta
// from lib/seoRoutes.ts into its own HTML file.
// =============================================================================

const escapeAttr = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

function replaceOnce(html: string, pattern: RegExp, replacement: string, label: string) {
  if (!pattern.test(html)) {
    throw new Error(`[route-html] could not find ${label} in index.html`);
  }
  return html.replace(pattern, () => replacement);
}

function renderRouteHtml(template: string, seo: PageSeo): string {
  const lang = langForPath(seo.canonicalPath);
  const title = escapeAttr(fullTitle(seo));
  const description = escapeAttr(seo.description);
  const url = absoluteUrl(seo.canonicalPath);
  const image = absoluteUrl(seo.ogImage || DEFAULT_OG_IMAGE);
  const siteName = escapeAttr(SITE_NAMES[lang]);
  const robots = seo.noindex
    ? "noindex, follow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  const meta = (attr: "name" | "property", key: string, content: string) =>
    [
      new RegExp(`<meta\\s+${attr}="${key}"\\s+content="[^"]*"\\s*/>`),
      `<meta ${attr}="${key}" content="${content}" />`,
      `meta ${key}`,
    ] as const;

  let html = template;
  html = replaceOnce(html, /<html lang="[^"]*">/, `<html lang="${lang}">`, "<html lang>");
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`, "<title>");

  const metas = [
    meta("name", "description", description),
    meta("name", "robots", robots),
    meta("name", "author", siteName),
    meta("name", "language", lang),
    meta("property", "og:url", url),
    meta("property", "og:title", title),
    meta("property", "og:description", description),
    meta("property", "og:image", image),
    meta("property", "og:site_name", siteName),
    meta("property", "og:locale", OG_LOCALES[lang]),
    meta("name", "twitter:title", title),
    meta("name", "twitter:description", description),
    meta("name", "twitter:image", image),
  ];
  if (seo.keywords) metas.push(meta("name", "keywords", escapeAttr(seo.keywords)));
  for (const [pattern, replacement, label] of metas) {
    html = replaceOnce(html, pattern, replacement, label);
  }

  // The default hero's pixel size doesn't apply to other share images.
  if (seo.ogImage && seo.ogImage !== DEFAULT_OG_IMAGE) {
    html = html.replace(/\s*<meta property="og:image:(width|height)"[^>]*\/>/g, "");
  }

  html = replaceOnce(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${url}" />`,
    "canonical link"
  );

  const alternates = alternatesFor(seo.canonicalPath)
    .map((alt) => `<link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`)
    .join("\n    ");
  let firstAlternate = true;
  html = html.replace(/[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*"\s*\/>\n?/g, () => {
    if (!firstAlternate) return "";
    firstAlternate = false;
    return `    ${alternates}\n`;
  });
  if (firstAlternate) throw new Error("[route-html] could not find hreflang links in index.html");

  // English pages don't need the (large) Chinese web font; LayoutZh adds it at
  // runtime if a visitor switches to Chinese without a full page load.
  if (lang === "en") {
    html = html.replace(/&family=Noto\+Sans\+SC:[^&"]*/g, "");
  }

  // Preload this page's own hero image (its share image) instead of the homepage's.
  if (seo.canonicalPath !== "/" && seo.canonicalPath !== "/zh/") {
    html = seo.ogImage
      ? html.replace(
          /<link rel="preload" as="image" href="[^"]*" \/>/,
          `<link rel="preload" as="image" href="${seo.ogImage}" />`
        )
      : html.replace(/[ \t]*<link rel="preload" as="image" href="[^"]*" \/>\n?/, "");
  }

  // Page-specific structured data, in the raw HTML so crawlers that don't run
  // JavaScript can read it: "Home → page" breadcrumbs and the homepage FAQs.
  const jsonLd: object[] = [];
  const breadcrumb = breadcrumbJsonLd(seo);
  if (breadcrumb) jsonLd.push(breadcrumb);
  if (seo.canonicalPath === "/") jsonLd.push(faqPageJsonLd(FAQ_EN));
  if (seo.canonicalPath === "/zh/") jsonLd.push(faqPageJsonLd(FAQ_ZH));
  if (jsonLd.length) {
    const scripts = jsonLd
      .map(
        (data) =>
          `    <script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`
      )
      .join("\n");
    html = replaceOnce(html, /<\/head>/, `${scripts}\n  </head>`, "</head>");
  }

  return html;
}

/** "/about" → "about.html", "/zh/" → "zh/index.html" (Cloudflare Pages serves both without the extension). */
function routeFile(canonicalPath: string): string {
  if (canonicalPath === "/") return "index.html";
  if (canonicalPath.endsWith("/")) return `${canonicalPath.slice(1)}index.html`;
  return `${canonicalPath.slice(1)}.html`;
}

function renderNotFoundHtml(template: string): string {
  let html = replaceOnce(
    template,
    /<title>[^<]*<\/title>/,
    "<title>Page Not Found | Gan Jing Campus</title>",
    "<title>"
  );
  html = replaceOnce(
    html,
    /<meta\s+name="robots"\s+content="[^"]*"\s*\/>/,
    '<meta name="robots" content="noindex, follow" />',
    "meta robots"
  );
  // A 404 has no canonical URL or language alternates.
  html = html.replace(/[ \t]*<link rel="canonical" href="[^"]*"\s*\/>\n?/, "");
  html = html.replace(/[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*"\s*\/>\n?/g, "");
  return html;
}

function renderSitemap(routes: PageSeo[], lastmod: string): string {
  const urls = routes
    .filter((seo) => !seo.noindex)
    .map((seo) => {
      const alternates = alternatesFor(seo.canonicalPath)
        .map(
          (alt) =>
            `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`
        )
        .join("\n");
      return `  <url>\n    <loc>${absoluteUrl(seo.canonicalPath)}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
}

function vitePluginRouteHtml(): Plugin {
  let outDir = "";
  return {
    name: "route-html",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const templatePath = path.join(outDir, "index.html");
      if (!fs.existsSync(templatePath)) return;
      const template = fs.readFileSync(templatePath, "utf-8");
      const routes: PageSeo[] = Object.values(SEO_ROUTES);

      for (const seo of routes) {
        const file = path.join(outDir, routeFile(seo.canonicalPath));
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, renderRouteHtml(template, seo), "utf-8");
      }

      // With a top-level 404.html Cloudflare Pages answers unknown URLs with a
      // real 404 status instead of falling back to index.html with a 200.
      fs.writeFileSync(path.join(outDir, "404.html"), renderNotFoundHtml(template), "utf-8");

      const lastmod = new Date().toISOString().slice(0, 10);
      fs.writeFileSync(path.join(outDir, "sitemap.xml"), renderSitemap(routes, lastmod), "utf-8");

      console.log(
        `[route-html] wrote ${routes.length} route pages, 404.html and sitemap.xml (${BASE_URL})`
      );
    },
  };
}

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, import.meta.dirname, "VITE_");
  const isBuild = command === "build";
  // Manus runtime / JSX locator / debug collector are dev-only: the runtime alone
  // inlines ~370KB into index.html, so keep all three out of production builds.
  const plugins = [
    react(),
    tailwindcss(),
    ...(isBuild
      ? [vitePluginStripManusAssets(), vitePluginRouteHtml()]
      : [jsxLocPlugin(), vitePluginManusRuntime(), vitePluginManusDebugCollector()]),
    vitePluginOptionalUmami(env),
  ];

  return {
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  publicDir: path.resolve(import.meta.dirname, "client", "public"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
};
});
