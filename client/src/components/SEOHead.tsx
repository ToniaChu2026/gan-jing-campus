/*
 * SEOHead — Per-page meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
 * Renders into <head> via useEffect for client-side SPA SEO
 */
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  jsonLd?: Record<string, unknown>;
}

const SITE_NAME = "Gan Jing Campus";
const BASE_URL = "https://ganjingsummercamp-fejrdh2z.manus.space";
const DEFAULT_OG_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/campus-hero-gdhxb86x5iLK854PVxdpfu.webp";

export default function SEOHead({
  title,
  description,
  canonicalPath,
  ogImage,
  ogType = "website",
  keywords,
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    // Title
    document.title = `${title} | ${SITE_NAME}`;

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
    setMeta("name", "robots", "index, follow, max-image-preview:large");
    setMeta("name", "author", "Gan Jing Campus");

    // Open Graph
    setMeta("property", "og:title", `${title} | ${SITE_NAME}`);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:url", `${BASE_URL}${canonicalPath}`);
    setMeta("property", "og:image", ogImage || DEFAULT_OG_IMAGE);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "en_US");

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", `${title} | ${SITE_NAME}`);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage || DEFAULT_OG_IMAGE);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${BASE_URL}${canonicalPath}`);

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
  }, [title, description, canonicalPath, ogImage, ogType, keywords, jsonLd]);

  return null;
}
