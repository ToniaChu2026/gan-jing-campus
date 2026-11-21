/*
 * FAQ content — single source for the on-page FAQ section and the FAQPage
 * structured data that vite.config.ts bakes into the homepage HTML.
 *
 * Keep answers to claims the site already makes or the client has confirmed.
 * Keep this file free of imports and browser APIs — the Vite config loads it in Node.
 */

export const CONTACT_EMAIL = "creators@ganjingworld.com";
export const TEACHER_APPLY_URL = "https://www.ganjingworld.com/creators/ganjingcampus/form";

export interface FaqItem {
  question: string;
  answer: string;
  link?: { label: string; href: string };
}

export const FAQ_EN: FaqItem[] = [
  {
    question: "Is Gan Jing Campus free for teachers?",
    answer:
      "Yes. Teachers can apply for a free Teacher Premium Channel, sponsored by Gan Jing Campus, take the free handbook course, and earn Certified Digital Educator (CDE) status at no cost.",
    link: { label: "Apply for a free channel", href: TEACHER_APPLY_URL },
  },
  {
    question: "Who runs Gan Jing Campus?",
    answer:
      `Gan Jing Campus is a project of Gan Jing World, launched in December 2023 to give educators an ad-free, family-friendly place to teach and share. You can reach the team at ${CONTACT_EMAIL}.`,
  },
  {
    question: "How is content reviewed for safety?",
    answer:
      "Content passes three layers: Ethical AI filters harmful, violent and inappropriate material; trained educators and content specialists review it for age-appropriateness and educational value; and parents, teachers and community members can flag anything that slips through.",
  },
  {
    question: "What ages is it for?",
    answer:
      "Children ages 4 to 16. Shows and activities are grouped by age, from preschool picks for ages 4 and under to STEM, culture and character stories for ages 8 to 16.",
  },
  {
    question: "Are there ads?",
    answer:
      "No. Gan Jing Campus is ad-free, so children can watch and learn without commercials or ad-driven recommendations.",
  },
  {
    question: "How is it different from general video sites?",
    answer:
      "It is built for classrooms and families: content is curated by educators for ages 4–16, teachers get a free Premium Channel with playlists, custom hashtags and live teaching tools, and kindness projects like #KindnessIsCool give students a place to share their work.",
  },
  {
    question: "How do I apply for a Premium Channel?",
    answer:
      "Fill in the short application form on Gan Jing World. After approval, follow the free handbook course to set up your channel, build your content library and work toward CDE certification.",
    link: { label: "Open the application form", href: TEACHER_APPLY_URL },
  },
  {
    question: "Is there a Chinese version?",
    answer:
      "Yes. The whole site is also available in Traditional Chinese, and the Chinese 乾淨校園 channel shares teaching resources for Chinese-speaking teachers and families.",
    link: { label: "Visit the Chinese site", href: "/zh/" },
  },
];

export const FAQ_ZH: FaqItem[] = [
  {
    question: "乾淨校園對老師免費嗎？",
    answer:
      "是的。老師可以免費申請由乾淨校園贊助的高級教師頻道，參加免費的教師手冊課程，並免費取得認證數位教育家（CDE）資格。",
    link: { label: "免費申請頻道", href: TEACHER_APPLY_URL },
  },
  {
    question: "乾淨校園是由誰營運的？",
    answer:
      `乾淨校園是乾淨世界（Gan Jing World）的專項計劃，於 2023 年 12 月推出，為教育工作者提供無廣告、適合全家的教學與分享空間。聯絡信箱：${CONTACT_EMAIL}。`,
  },
  {
    question: "內容如何確保安全？",
    answer:
      "內容經過三層把關：道德 AI 自動過濾有害、暴力和不當內容；受過訓練的教育工作者與內容專員審核是否適齡、具教育價值；家長、老師和社群成員也可以回報任何不妥之處。",
  },
  {
    question: "適合幾歲的孩子？",
    answer:
      "4 到 16 歲。節目和活動依年齡分組，從 4 歲以下的學齡前精選，到 8–16 歲的 STEM、文化與品格故事。",
  },
  {
    question: "有廣告嗎？",
    answer: "沒有。乾淨校園無廣告，孩子可以專心觀看與學習，不會被廣告或廣告導向的推薦打擾。",
  },
  {
    question: "怎麼申請高級教師頻道？",
    answer:
      "在乾淨世界填寫簡短的申請表。通過後，跟著免費的教師手冊課程設定頻道、建立內容庫，並朝 CDE 認證邁進。",
    link: { label: "開啟申請表", href: TEACHER_APPLY_URL },
  },
  {
    question: "有英文版嗎？",
    answer: "有。整個網站都有英文版，英文 @GanJingCampus 頻道也提供英語教學資源。",
    link: { label: "前往英文網站", href: "/" },
  },
];

/** schema.org FAQPage for a list of FAQ items. */
export function faqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
