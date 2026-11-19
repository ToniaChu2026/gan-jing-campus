/*
 * NotFound — 404 page in the site's own look, in English or Chinese.
 * Rendered inside Layout (English) or LayoutZh (under /zh), so it only supplies
 * the page body. Marks itself noindex so stray URLs never reach search results.
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { Home, SearchX } from "lucide-react";

const COPY = {
  en: {
    docTitle: "Page Not Found | Gan Jing Campus",
    heading: "Page Not Found",
    body: "Sorry, the page you are looking for doesn't exist. It may have been moved or deleted.",
    home: "Back to Home",
    lang: "en",
  },
  zh: {
    docTitle: "找不到頁面 | 乾淨校園",
    heading: "找不到頁面",
    body: "抱歉，您要找的頁面不存在，可能已被移動或刪除。",
    home: "回到首頁",
    lang: "zh-Hant",
  },
} as const;

export default function NotFound() {
  // LayoutZh nests the router under /zh, so read the real URL to pick a language.
  const isZh = /^\/zh(\/|$)/.test(window.location.pathname);
  const copy = isZh ? COPY.zh : COPY.en;

  useEffect(() => {
    document.title = copy.docTitle;
    document.documentElement.lang = copy.lang;

    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, follow");

    // The previous page's canonical / hreflang no longer describe this URL.
    document
      .querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang]')
      .forEach((el) => el.remove());
  }, [copy]);

  return (
    <section
      className={`min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-sky-light to-white px-4 pt-28 pb-20 ${
        isZh ? "font-['Noto_Sans_SC']" : ""
      }`}
    >
      <div className="w-full max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-sunshine/15">
          <SearchX className="h-10 w-10 text-sunshine-dark" aria-hidden="true" />
        </div>

        <p className="font-display text-6xl font-extrabold text-sky mb-2">404</p>

        {/* Baloo 2 has no CJK glyphs; let Chinese fall through to Noto Sans SC. */}
        <h1
          className={`text-2xl md:text-3xl font-bold text-foreground mb-4 ${
            isZh ? "" : "font-display"
          }`}
        >
          {copy.heading}
        </h1>

        <p className="text-foreground/70 leading-relaxed mb-8">{copy.body}</p>

        {/* Inside LayoutZh "/" is relative to /zh, so this goes to the right home page. */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 justify-center rounded-full bg-sunshine px-8 py-3.5 text-base font-bold text-white shadow-lg hover:bg-sunshine-dark transition-all hover:scale-105 no-underline"
        >
          <Home className="w-5 h-5" aria-hidden="true" />
          {copy.home}
        </Link>
      </div>
    </section>
  );
}
