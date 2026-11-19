/*
 * SEOHead — Per-page meta tags, Open Graph, Twitter Cards, hreflang and JSON-LD.
 * Updates <head> on client-side navigation. The same data (lib/seoRoutes.ts) is
 * baked into each route's HTML at build time, so both paths stay in sync.
 */
import { useEffect } from "react";
import {
  DEFAULT_OG_IMAGE,
  OG_LOCALES,
  SITE_NAMES,
  absoluteUrl,
  alternatesFor,
  fullTitle,
  langForPath,
  type PageSeo,
} from "@/lib/seoRoutes";

interface SEOProps extends PageSeo {
  ogType?: string;
  jsonLd?: Record<string, unknown>;
}

export default function SEOHead({
  title,
  description,
  canonicalPath,
  ogImage,
  ogType = "website",
  keywords,
  noindex = false,
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    const lang = langForPath(canonicalPath);
    const siteName = SITE_NAMES[lang];
    const pageTitle = fullTitle({ title, canonicalPath });
    const pageUrl = absoluteUrl(canonicalPath);

    document.title = pageTitle;
    document.documentElement.lang = lang;

    // Helper to set or create a meta tag
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Standard meta
    setMeta("name", "description", description);
    if (keywords) setMeta("name", "keywords", keywords);
    setMeta(
      "name",
      "robots",
      noindex ? "noindex, follow" : "index, follow, max-image-preview:large"
    );
    setMeta("name", "author", siteName);
    setMeta("name", "language", lang);

    // Social previews need absolute image URLs; pages pass site paths like /images/x.webp
    const shareImage = absoluteUrl(ogImage || DEFAULT_OG_IMAGE);

    // Open Graph
    setMeta("property", "og:title", pageTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:url", pageUrl);
    setMeta("property", "og:image", shareImage);
    setMeta("property", "og:site_name", siteName);
    setMeta("property", "og:locale", OG_LOCALES[lang]);

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", pageTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", shareImage);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", pageUrl);

    // hreflang alternates — replace whatever the previous page left behind
    document
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((el) => el.remove());
    for (const alt of alternatesFor(canonicalPath)) {
      const link = document.createElement("link");
      link.setAttribute("rel", "alternate");
      link.setAttribute("hreflang", alt.hreflang);
      link.setAttribute("href", alt.href);
      document.head.appendChild(link);
    }

    // JSON-LD structured data
    const existingLd = document.querySelector('script[data-seo-ld]');
    if (existingLd) existingLd.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-seo-ld", "true");
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup JSON-LD on unmount
      const ld = document.querySelector('script[data-seo-ld]');
      if (ld) ld.remove();
    };
  }, [title, description, canonicalPath, ogImage, ogType, keywords, noindex, jsonLd]);

  return null;
}
