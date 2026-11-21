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
  /** Short page name for the "Home → page" BreadcrumbList (omit on homepages). */
  breadcrumb?: string;
  /**
   * Page component, relative to client/src. The sitemap's <lastmod> is the
   * date of the last commit that touched this file or anything it imports.
   */
  source?: string;
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
    source: "pages/Home.tsx",
    title: "Safe, Ad-Free Learning for Kids & Teachers",
    description:
      "Ad-free videos and free classroom tools for kids 4–16, curated by educators. Free Premium Channel for teachers, free screen guide for parents.",
    canonicalPath: "/",
    keywords:
      "Gan Jing Campus, safe education, ad-free learning, children education, kindness, summer camp, ethical AI education, digital learning platform",
  },
  "/summer-camp": {
    source: "pages/SummerCamp.tsx",
    title: "Free Online Summer Camp Recap, Ages 4–16",
    description:
      "Revisit our free 8-week online summer camp for ages 4–16: weekly themes, 100+ curated films, and offline kindness activities. No ads.",
    canonicalPath: "/summer-camp",
    breadcrumb: "Summer Camp",
    keywords:
      "Gan Jing Summer Camp, summer camp recap, free summer camp online, kids summer program, kindness camp, creative learning, children ages 4-16, ad-free summer camp, ethical AI education",
    ogImage: "/images/summer-camp-hero.jpg",
  },
  "/teachers": {
    source: "pages/Teachers.tsx",
    title: "Free Classroom Video Channel for Teachers",
    description:
      "Get a free Premium Channel to share safe, ad-free videos with your class, run kindness projects, and earn Certified Digital Educator status.",
    canonicalPath: "/teachers",
    breadcrumb: "For Teachers",
    keywords:
      "Gan Jing Campus teachers, free teacher channel, CDE certification, digital educator, teacher resources, education platform, kindness education",
    ogImage: "/images/teachers-hero.jpg",
  },
  "/kindness": {
    source: "pages/Kindness.tsx",
    title: "Kindness Stories from Real Classrooms",
    description:
      "Real stories from teachers in Boston, New York and Taiwan who used kindness projects and Gan Jing Campus to transform their classrooms.",
    canonicalPath: "/kindness",
    breadcrumb: "Kindness Stories",
    keywords:
      "kindness stories, KindnessIsCool, character education, classroom kindness, Gan Jing Campus stories, global education, kindness awards, positive values",
    ogImage: "/images/kindness-hero.jpg",
  },
  "/about": {
    source: "pages/About.tsx",
    title: "About Us: Mission & Safety Model",
    description:
      "Who runs Gan Jing Campus, how our three-layer safety model works, and how teachers in 6 continents use it. Operated by Gan Jing World.",
    canonicalPath: "/about",
    breadcrumb: "About",
    keywords:
      "about Gan Jing Campus, education mission, ethical AI safety, triple-layered safety model, children digital safety, global education platform, ad-free education",
    ogImage: "/images/about-hero.jpg",
  },
  "/free-guide": {
    source: "pages/CampusGuide.tsx",
    title: "30-Minute Family Screen Reset Free Guide",
    description:
      "A free guide for parents: replace risky screen defaults in 10 minutes and shape healthier screen habits without banning technology.",
    canonicalPath: "/free-guide",
    breadcrumb: "Free Parent Guide",
    keywords:
      "family screen reset, digital parenting guide, screen time, children digital safety, values-driven parenting, Gan Jing Campus guide",
    ogImage: "/images/guide-family-reading.jpg",
  },
  "/privacy-and-safety": {
    title: "Privacy & Safety for Families and Schools",
    description:
      "How Gan Jing Campus keeps content safe for kids 4–16, what this website collects, and where parents and schools can ask privacy questions.",
    canonicalPath: "/privacy-and-safety",
    breadcrumb: "Privacy & Safety",
    source: "pages/PrivacySafety.tsx",
    keywords:
      "Gan Jing Campus privacy, child safety, ad-free kids videos, content review, school privacy questions, parent guide privacy",
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
    source: "pages/zh/HomeZh.tsx",
    title: "兒童安全無廣告學習與免費教師頻道",
    description:
      "乾淨校園是一個無廣告、對教育工作者友好的平台，為4-16歲的兒童推廣善良、創意和安全的數位學習。由道德AI驅動。加入遍布6大洲的400多名教師的行列。",
    canonicalPath: "/zh/",
    keywords:
      "乾淨校園, 安全教育, 無廣告學習, 兒童教育, 善良, 夏令營, 道德AI教育, 數位學習平台",
  },
  "/zh/summer-camp": {
    source: "pages/zh/SummerCampZh.tsx",
    title: "乾淨校園夏令營回顧 — 為期8週的善良與創意冒險",
    description:
      "回顧乾淨校園夏令營：一個為4-16歲兒童設計的免費、為期8週的線上活動。重溫每週主題，在100%安全、無廣告的環境中探索善良、創意、中華文化、STEM等。",
    canonicalPath: "/zh/summer-camp",
    breadcrumb: "夏令營",
    keywords:
      "乾淨校園夏令營, 夏令營回顧, 免費線上夏令營, 兒童暑期活動, 善良品格營, 創意學習, 4-16歲兒童, 無廣告夏令營, 道德AI教育",
    ogImage: "/images/summer-camp-hero.jpg",
  },
  "/zh/teachers": {
    source: "pages/zh/TeachersZh.tsx",
    title: "教師專區 — 免費高級頻道與 CDE 認證",
    description:
      "加入全球 400 多名教師的行列，在乾淨校園獲取免費高級頻道、教學工具，並成為認證數位教育家 (CDE)。",
    canonicalPath: "/zh/teachers",
    breadcrumb: "教師專區",
    keywords:
      "乾淨校園教師, 免費教師頻道, CDE認證, 數位教育家, 教學資源, 教育平台, 善良教育",
    ogImage: "/images/teachers-hero.jpg",
  },
  "/zh/kindness": {
    source: "pages/zh/KindnessZh.tsx",
    title: "善良故事 — 來自全球教室的真實感動",
    description:
      "探索『#善良很酷』運動如何改變從波士頓到台灣的教室。了解乾淨校園如何在全球推廣同情心與品格教育。",
    canonicalPath: "/zh/kindness",
    breadcrumb: "善良故事",
    keywords:
      "善良故事, KindnessIsCool, 品格教育, 教室中的善良, 乾淨校園故事, 全球教育, 善良獎, 正面價值觀",
    ogImage: "/images/kindness-hero.jpg",
  },
  "/zh/about": {
    source: "pages/zh/AboutZh.tsx",
    title: "關於乾淨校園 — 使命、安全與全球影響力",
    description:
      "了解乾淨校園為全球兒童提供安全、無廣告教育的使命。探索我們的三層安全模型、道德AI技術以及在6大洲獲得的認可。",
    canonicalPath: "/zh/about",
    breadcrumb: "關於我們",
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

/** "Home → page" BreadcrumbList, or null for homepages and pages without a breadcrumb name. */
export function breadcrumbJsonLd(seo: PageSeo) {
  if (!seo.breadcrumb) return null;
  const lang = langForPath(seo.canonicalPath);
  const home = lang === "en" ? { name: "Home", path: "/" } : { name: "首頁", path: "/zh/" };
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: home.name, item: absoluteUrl(home.path) },
      { "@type": "ListItem", position: 2, name: seo.breadcrumb, item: absoluteUrl(seo.canonicalPath) },
    ],
  };
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
