/*
 * seoRoutes — single source of truth for per-page SEO metadata.
 *
 * Used in two places:
 *   1. <SEOHead {...pageSeo("/about")} /> at runtime (client-side navigation)
 *   2. vite.config.ts at build time, which writes one HTML file per route with
 *      these tags baked in, so crawlers and link previews that don't run
 *      JavaScript (Facebook, LINE, etc.) see the right title/image/language.
 *
 * Keep this file free of imports and browser APIs — the Vite config loads it in Node.
 */

export const BASE_URL = "https://ganjingcampus.org";
export const DEFAULT_OG_IMAGE = "/images/campus-hero.webp";

export type SeoLang = "en" | "zh-Hant";

export interface PageSeo {
  title: string;
  description: string;
  canonicalPath: string;
  keywords?: string;
  ogImage?: string;
  /** Keep the page out of search results and the sitemap (e.g. thank-you pages). */
  noindex?: boolean;
}

export const SITE_NAMES: Record<SeoLang, string> = {
  en: "Gan Jing Campus",
  "zh-Hant": "乾淨校園",
};

export const OG_LOCALES: Record<SeoLang, string> = {
  en: "en_US",
  "zh-Hant": "zh_TW",
};

/** English paths that have a Chinese counterpart under /zh. */
const BILINGUAL_PATHS = ["/", "/summer-camp", "/teachers", "/kindness", "/about"];

export const SEO_ROUTES = {
  "/": {
    title: "Where Learning Meets Kindness",
    description:
      "Gan Jing Campus is an ad-free, educator-friendly platform promoting kindness, creativity, and safe digital learning for children ages 4-16. Powered by Ethical AI. Join 400+ teachers across 6 continents.",
    canonicalPath: "/",
    keywords:
      "Gan Jing Campus, safe education, ad-free learning, children education, kindness, summer camp, ethical AI education, digital learning platform",
  },
  "/summer-camp": {
    title: "Summer Camp Recap — 8 Weeks of Kindness & Creativity",
    description:
      "Look back at Gan Jing Summer Camp: a free, 8-week online program for children ages 4-16. Revisit every weekly theme — kindness, creativity, Chinese culture, STEM, and more — in a 100% safe, ad-free environment.",
    canonicalPath: "/summer-camp",
    keywords:
      "Gan Jing Summer Camp, summer camp recap, free summer camp online, kids summer program, kindness camp, creative learning, children ages 4-16, ad-free summer camp, ethical AI education",
    ogImage: "/images/summer-camp-hero.jpg",
  },
  "/teachers": {
    title: "For Teachers — Free Premium Channel & CDE Certification",
    description:
      "Join 400+ teachers worldwide on Gan Jing Campus. Get a free Premium Channel, access teaching tools, curate resources, and earn your Certified Digital Educator (CDE) certification.",
    canonicalPath: "/teachers",
    keywords:
      "Gan Jing Campus teachers, free teacher channel, CDE certification, digital educator, teacher resources, education platform, kindness education",
    ogImage: "/images/teachers-hero.jpg",
  },
  "/kindness": {
    title: "Kindness Stories — Real Stories from Classrooms Worldwide",
    description:
      "Discover inspiring stories of how the #KindnessIsCool movement is transforming classrooms from Boston to Taiwan. See how Gan Jing Campus promotes compassion and character education globally.",
    canonicalPath: "/kindness",
    keywords:
      "kindness stories, KindnessIsCool, character education, classroom kindness, Gan Jing Campus stories, global education, kindness awards, positive values",
    ogImage: "/images/kindness-hero.jpg",
  },
  "/about": {
    title: "About Gan Jing Campus — Mission, Safety & Global Impact",
    description:
      "Learn about Gan Jing Campus's mission to provide safe, ad-free education for children worldwide. Discover our triple-layered safety model, Ethical AI technology, and recognition across 6 continents.",
    canonicalPath: "/about",
    keywords:
      "about Gan Jing Campus, education mission, ethical AI safety, triple-layered safety model, children digital safety, global education platform, ad-free education",
    ogImage: "/images/about-hero.jpg",
  },
  "/free-guide": {
    title: "The 30-Minute Family Screen Reset — Free Guide",
    description:
      "A simple, practical setup guide for values-driven parents who want to shape their kids' digital future without banning technology. Free from Gan Jing Campus.",
    canonicalPath: "/free-guide",
    keywords:
      "family screen reset, digital parenting guide, screen time, children digital safety, values-driven parenting, Gan Jing Campus guide",
    ogImage: "/images/guide-family-reading.jpg",
  },
  "/free-guide/thank-you": {
    title: "Thank You — Your Screen Reset Guide is on the Way",
    description:
      "Your 30-Minute Family Screen Reset Guide is being sent to your inbox. Explore the complete Gan Jing Campus solution.",
    canonicalPath: "/free-guide/thank-you",
    keywords: "thank you, screen reset guide, Gan Jing Campus",
    noindex: true,
  },
  "/zh/": {
    title: "讓學習與善良相遇",
    description:
      "乾淨校園是一個無廣告、對教育工作者友好的平台，為4-16歲的兒童推廣善良、創意和安全的數位學習。由道德AI驅動。加入遍布6大洲的400多名教師的行列。",
    canonicalPath: "/zh/",
    keywords:
      "乾淨校園, 安全教育, 無廣告學習, 兒童教育, 善良, 夏令營, 道德AI教育, 數位學習平台",
  },
  "/zh/summer-camp": {
    title: "乾淨校園夏令營回顧 — 為期8週的善良與創意冒險",
    description:
      "回顧乾淨校園夏令營：一個為4-16歲兒童設計的免費、為期8週的線上活動。重溫每週主題，在100%安全、無廣告的環境中探索善良、創意、中華文化、STEM等。",
    canonicalPath: "/zh/summer-camp",
    keywords:
      "乾淨校園夏令營, 夏令營回顧, 免費線上夏令營, 兒童暑期活動, 善良品格營, 創意學習, 4-16歲兒童, 無廣告夏令營, 道德AI教育",
    ogImage: "/images/summer-camp-hero.jpg",
  },
  "/zh/teachers": {
    title: "教師專區 — 免費高級頻道與 CDE 認證",
    description:
      "加入全球 400 多名教師的行列，在乾淨校園獲取免費高級頻道、教學工具，並成為認證數位教育家 (CDE)。",
    canonicalPath: "/zh/teachers",
    keywords:
      "乾淨校園教師, 免費教師頻道, CDE認證, 數位教育家, 教學資源, 教育平台, 善良教育",
    ogImage: "/images/teachers-hero.jpg",
  },
  "/zh/kindness": {
    title: "善良故事 — 來自全球教室的真實感動",
    description:
      "探索『#善良很酷』運動如何改變從波士頓到台灣的教室。了解乾淨校園如何在全球推廣同情心與品格教育。",
    canonicalPath: "/zh/kindness",
    keywords:
      "善良故事, KindnessIsCool, 品格教育, 教室中的善良, 乾淨校園故事, 全球教育, 善良獎, 正面價值觀",
    ogImage: "/images/kindness-hero.jpg",
  },
  "/zh/about": {
    title: "關於乾淨校園 — 使命、安全與全球影響力",
    description:
      "了解乾淨校園為全球兒童提供安全、無廣告教育的使命。探索我們的三層安全模型、道德AI技術以及在6大洲獲得的認可。",
    canonicalPath: "/zh/about",
    keywords:
      "關於乾淨校園, 教育使命, 道德AI安全, 三層安全模型, 兒童數位安全, 全球教育平台, 無廣告教育",
    ogImage: "/images/about-hero.jpg",
  },
} satisfies Record<string, PageSeo>;

export type SeoRoutePath = keyof typeof SEO_ROUTES;

export function pageSeo(path: SeoRoutePath): PageSeo {
  return SEO_ROUTES[path];
}

export function langForPath(canonicalPath: string): SeoLang {
  return canonicalPath === "/zh" || canonicalPath.startsWith("/zh/")
    ? "zh-Hant"
    : "en";
}

export function fullTitle(seo: Pick<PageSeo, "title" | "canonicalPath">): string {
  return `${seo.title} | ${SITE_NAMES[langForPath(seo.canonicalPath)]}`;
}

export function absoluteUrl(pathOrUrl: string): string {
  return pathOrUrl.startsWith("/") ? `${BASE_URL}${pathOrUrl}` : pathOrUrl;
}

/**
 * hreflang alternates for a page. Pages that exist in both languages point at
 * each other; single-language pages only reference themselves.
 */
export function alternatesFor(
  canonicalPath: string
): { hreflang: string; href: string }[] {
  const lang = langForPath(canonicalPath);
  const enPath =
    lang === "en" ? canonicalPath : canonicalPath.replace(/^\/zh/, "") || "/";

  if (!BILINGUAL_PATHS.includes(enPath)) {
    const self = absoluteUrl(canonicalPath);
    return [
      { hreflang: lang, href: self },
      { hreflang: "x-default", href: self },
    ];
  }

  const zhPath = enPath === "/" ? "/zh/" : `/zh${enPath}`;
  return [
    { hreflang: "en", href: absoluteUrl(enPath) },
    { hreflang: "zh-Hant", href: absoluteUrl(zhPath) },
    { hreflang: "x-default", href: absoluteUrl(enPath) },
  ];
}
