/*
 * Teachers Page (Chinese) — Gan Jing Campus
 * Design: Warm, professional page for educators
 * Covers Teacher Premium Channel, Handbook, CDE certification, and testimonials
 */
import { useEffect, useRef, useMemo } from "react";
import SEOHead from "@/components/SEOHead";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  Video,
  BookOpen,
  Music,
  Hash,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  Sparkles,
  Play,
  Heart,
  Landmark,
  Languages,
  Calculator,
  FlaskConical,
  Music2,
  Palette,
} from "lucide-react";
import TeacherResources, { type ResourceSubject } from "@/components/TeacherResources";

const GJW = "https://www.ganjingworld.com";
const ZH = `${GJW}/zh-TW`;

// 對應 https://www.ganjingworld.com/@乾淨校園 頻道上的「教學資源」清單
const resourceSubjects: ResourceSubject[] = [
  {
    title: "品德與社會情緒學習",
    icon: Heart,
    links: [
      { label: "社會情緒學習（SEL）教案", href: `${ZH}/collection/1hq2o981a993rdNkI7jdNTd1d20p` },
      { label: "#SEL社會情緒學習", href: `${GJW}/hashtag/SEL%E7%A4%BE%E6%9C%83%E6%83%85%E7%B7%92%E5%AD%B8%E7%BF%92` },
      { label: "國小品德", href: `${GJW}/s/qKgJ8G1Yrw` },
      { label: "Kindness is cool", href: `${GJW}/hashtag/KindnessIsCool?tab=Featured&l=KindnessIsCool` },
      { label: "兒童網路安全", href: `${ZH}/collection/1gvkl23ukvs2TH0hU6SKHxH1h00p` },
    ],
  },
  {
    title: "國語文",
    icon: BookOpen,
    links: [
      { label: "學齡前童話故事", href: `${ZH}/collection/1geo51m91go3sP2cOWmTRRG1220p` },
      { label: "國小國語", href: `${GJW}/s/Gkmr08e8wO` },
      { label: "國小古典詩詞", href: `${ZH}/collection/1geo6uc5b0oam6l06RaWirT1v40p` },
      { label: "國小成語故事", href: `${ZH}/collection/1geo54dlt276J3pyvGElJgW1bd0p` },
      { label: "書法", href: `${ZH}/collection/1gf777pubn66CGHkTKc5Sv21pp0p` },
    ],
  },
  {
    title: "英語文",
    icon: Languages,
    links: [
      { label: "學齡前英語", href: `${ZH}/gjwplus/kids/themes/tag_1757947635109_video` },
      { label: "國小英語", href: `${ZH}/collection/1gesog4r9b84KzRJAsJC5rf11m0p` },
      { label: "國中英語", href: `${ZH}/collection/1gdfru7oamn4s2uyFa6lvKK1c30p` },
      { label: "高中英語", href: `${ZH}/collection/1gdf1c79a1m6YwXPq2IoMit1hh0p` },
    ],
  },
  {
    title: "數學",
    icon: Calculator,
    links: [
      { label: "國小數學", href: `${ZH}/channel/1gbom2fu3gd4Q8gmQESvYjYGB1050c/collection/1glk0uakn8t2Y6AXn6yfH0t1370p` },
      { label: "高中數學", href: `${ZH}/collection/1geo9lnljk84xkTNTi49cYG1lo0p` },
    ],
  },
  {
    title: "自然科學",
    icon: FlaskConical,
    links: [
      { label: "國小自然", href: `${ZH}/collection/1gg2tr7inen608SyxlRI0K81ti0p` },
      { label: "國中生物", href: `${ZH}/collection/1gipvisfi4g3ySXJRoe1oPE1lf0p` },
      { label: "太空探索", href: `${ZH}/playlist/1f5oh8pcnh82LHIbOZF8rIf15m0p` },
    ],
  },
  {
    title: "歷史與傳統文化",
    icon: Landmark,
    links: [
      { label: "國小傳統文化", href: `${ZH}/collection/1geql36cvkb7x4oDlT9614P18p0p` },
      { label: "24節氣", href: `${ZH}/collection/1gj2hna50b14lZ8YvV2JMhM18i0p` },
      { label: "國小台灣歷史", href: `${ZH}/collection/1gc9a7ss3eoPaX4HvnABfAf1gm0p` },
      { label: "國中中國歷史", href: `${ZH}/collection/1gc9au7fm4642Bsd3nASciU1ck0p` },
      { label: "中華文明史", href: `${ZH}/channel/1eiqjdnq7go5pVcjheW81Z1KD1er0c/playlist/1fnilmqv0mf7x7AuKoxBxpD1o30p` },
    ],
  },
  {
    title: "藝術",
    icon: Palette,
    links: [
      { label: "國小美勞", href: `${GJW}/s/qKgJxwbZjl` },
      { label: "國小國畫", href: `${ZH}/collection/1gdf33e8cca2YVlpPY1pcEq1870p` },
      { label: "高中藝術賞析", href: `${ZH}/collection/1geo6g0k1v73LdNQ211iXs61ct0p` },
    ],
  },
  {
    title: "音樂",
    icon: Music2,
    links: [
      { label: "學齡前童謠", href: `${ZH}/collection/1gcfcrq95th1hB0JjzXIeEr1h70p` },
      { label: "國小音樂", href: `${ZH}/collection/1geo80i6l4g4VXYbIkFkKOp1tu0p` },
      { label: "鋼琴", href: `${ZH}/collection/1ggqvrlg7cv3ToZhiGxH7WU1s50p` },
    ],
  },
];

const TEACHERS_VIDEO_EMBED_URL =
  "https://www.ganjingworld.com/embed/1iafn44i1v312BPq0nEUkwTUU1g51c";

const TEACHERS_VIDEO_2_EMBED_URL =
  "https://www.ganjingworld.com/embed/1ielb916s392SZoegKoN89LsN1oh1c";

const TEACHERS_HERO =
  "/images/teachers-premium-channel.webp";

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

const features = [
  { icon: Video, title: "多格式內容", desc: "創建和分享多種格式的影片、文章和教育資源。" },
  { icon: BookOpen, title: "策展工具", desc: "將教育內容組織和策劃成播放列表和合集，供您的學生使用。" },
  { icon: Music, title: "免費音樂庫", desc: "使用免版稅的音樂庫來豐富您的教育內容。" },
  { icon: Hash, title: "自訂標籤", desc: "創建自訂標籤來組織內容並圍繞主題建立社群。" },
  { icon: Users, title: "直播教學工具", desc: "通過互動式直播教學功能和即時協作吸引學生。" },
  { icon: Shield, title: "安全環境", desc: "100% 無廣告平台，採用道德 AI，確保所有內容安全、正面。" },
];

const testimonials = [
  {
    name: "Laurence Jossomme Lefebvre",
    location: "法國",
    quote: "這對老師來說是一份很棒的禮物。這個平台為我們提供了在安全的環境中創建有意義的教育內容所需的工具。",
    initials: "LJ",
    color: "bg-sky/15 text-sky",
  },
  {
    name: "Leejun Taylor",
    location: "美國紐約",
    quote: "我們使用乾淨世界舉辦『善良很酷』影片比賽。學生們喜歡創作宣揚正面價值觀的內容。",
    initials: "LT",
    color: "bg-sunshine/15 text-sunshine-dark",
  },
  {
    name: "Adel Mansilla",
    location: "美國波士頓",
    quote: "這個平台在社交和學術上賦予學生力量。它改變了我們學校品格教育的方式。",
    initials: "AM",
    color: "bg-coral/15 text-coral",
  },
  {
    name: "鄭雅莉",
    location: "台灣",
    quote: "我在這個平台上舉辦課堂活動和策劃資源。它已成為我教學工具包中不可或缺的一部分。",
    initials: "YZ",
    color: "bg-meadow/15 text-meadow",
  },
  {
    name: "Sibylle Schneller",
    location: "瑞士",
    quote: "對學生的正面影響是不可否認的。他們參與的內容在學習的同時塑造品格。",
    initials: "SS",
    color: "bg-sky/15 text-sky",
  },
];

const cdeSteps = [
  { step: "1", title: "申請免費高級頻道", desc: "註冊並在乾淨校園上獲取您的免費教師高級頻道。" },
  { step: "2", title: "完成手冊課程", desc: "按照免費課程學習如何設置您的頻道、創建內容和策劃資源。" },
  { step: "3", title: "建立您的內容庫", desc: "使用平台工具為您的學生創建和組織教育內容。" },
  { step: "4", title: "獲得 CDE 認證", desc: "有資格成為乾淨校園認可的認證數位教育家 (CDE)。" },
];

export default function TeachersZh() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "教師專區 — 乾淨校園",
      description: "獲取免費的教師高級頻道，使用工具創建內容、策劃資源並獲得 CDE 認證。",
      url: "https://ganjingcampus.org/zh/teachers",
      mainEntity: {
        "@type": "Course",
        name: "認證數位教育家 (CDE) 計劃",
        description: "為乾淨校園上的教育工作者提供的免費認證計劃。",
        provider: { "@type": "Organization", name: "乾淨校園" },
        isAccessibleForFree: true,
      },
    }),
    []
  );

  return (
    <>
      <SEOHead
        title="教師專區 — 免費高級頻道與 CDE 認證"
        description="加入全球 400 多名教師的行列，在乾淨校園獲取免費高級頻道、教學工具，並成為認證數位教育家 (CDE)。"
        canonicalPath="/zh/teachers"
        keywords="乾淨校園教師, 免費教師頻道, CDE認證, 數位教育家, 教學資源, 教育平台, 善良教育"
        ogImage="/images/teachers-premium-channel.webp"
        jsonLd={jsonLd}
      />
      {/* ===== HERO ===== */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[oklch(0.45_0.12_30)] via-[oklch(0.55_0.14_40)] to-[oklch(0.65_0.12_50)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-40 h-40 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute bottom-[20%] right-[10%] w-60 h-60 bg-sunshine/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 pt-24 pb-16 md:pt-28 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <GraduationCap className="w-4 h-4 text-sunshine" />
                <span className="text-white/90 text-sm font-medium font-['Noto_Sans_SC']">
                  所有教育工作者免費
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 font-['Noto_Sans_SC']">
                教學、連結、
                <br />
                <span className="text-sunshine">啟發</span>
              </h1>

              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl mb-8 font-['Noto_Sans_SC']">
                獲取免費的教師高級頻道，使用工具創建內容、策劃資源，並建立學習者社群——一切都在最安全的教育平台上進行。
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.ganjingworld.com/zh-TW/article/1i314rcntbn2YrFKWDHav9ujW1in1c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 justify-center rounded-full bg-sunshine px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-sunshine-dark transition-all hover:scale-105 no-underline font-['Noto_Sans_SC']"
                >
                  立即申請 — 免費
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://www.ganjingworld.com/zh-TW/article/1i3fdp55sv85HOqeJT2LgXl4y1uh1c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white/15 backdrop-blur-sm border-2 border-white/30 px-8 py-4 text-lg font-bold text-white hover:bg-white/25 transition-all no-underline font-['Noto_Sans_SC']"
                >
                  查看手冊
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={TEACHERS_HERO}
                  alt="使用乾淨校園的教師"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-sky/15 text-sky font-semibold text-sm px-4 py-1.5 rounded-full mb-4 font-['Noto_Sans_SC']">
                高級頻道功能
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 font-['Noto_Sans_SC']">
                您<span className="text-sky">教學</span>所需的一切
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-['Noto_Sans_SC']">
                您的免費教師高級頻道配備了專為教育工作者設計的各種工具。
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-border/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 rounded-xl bg-sky/10 text-sky flex items-center justify-center mb-4">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 font-['Noto_Sans_SC']">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-['Noto_Sans_SC']">
                    {f.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED VIDEO ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-cream">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block bg-coral/15 text-coral font-semibold text-sm px-4 py-1.5 rounded-full mb-4 font-['Noto_Sans_SC']">
                <Play className="w-3.5 h-3.5 inline-block mr-1 -mt-0.5" />
                精選影片
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 font-['Noto_Sans_SC']">
                真實的教師，真實的<span className="text-coral">課堂</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-['Noto_Sans_SC']">
                了解為何世界各地的教師選擇乾淨校園進行安全、有意義的數位教育。
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-foreground/5">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src={TEACHERS_VIDEO_EMBED_URL}
                    title="真實的教師，真實的課堂。為何教師選擇乾淨校園"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-center text-muted-foreground text-sm mt-4 font-['Noto_Sans_SC']">
                在{" "}
                <a
                  href="https://www.ganjingworld.com/zh-TW/video/1iafn44i1v312BPq0nEUkwTUU1g51c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky hover:underline font-medium"
                >
                  乾淨世界
                </a>
                上觀看
              </p>
            </div>
          </AnimatedSection>

          {/* Second video */}
          <AnimatedSection delay={0.2}>
            <div className="max-w-4xl mx-auto mt-12">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-foreground/5">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src={TEACHERS_VIDEO_2_EMBED_URL}
                    title="乾淨校園教師計劃 — 教育工作者的故事"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-center text-muted-foreground text-sm mt-4 font-['Noto_Sans_SC']">
                在{" "}
                <a
                  href="https://www.ganjingworld.com/zh-TW/video/1ielb916s392SZoegKoN89LsN1oh1c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky hover:underline font-medium"
                >
                  乾淨世界
                </a>
                上觀看
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CDE PATH ===== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-sunshine/15 text-sunshine-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-4 font-['Noto_Sans_SC']">
                認證途徑
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 font-['Noto_Sans_SC']">
                成為<span className="text-sunshine-dark">認證數位教育家</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-['Noto_Sans_SC']">
                參與我們的免費課程，獲得全球乾淨校園認可的 CDE 認證。
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-6">
            {cdeSteps.map((s, i) => (
              <AnimatedSection key={s.step} delay={i * 0.1}>
                <div className="flex gap-5 bg-white rounded-2xl p-6 border border-border/60 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-sunshine/15 flex items-center justify-center">
                    <span className="font-display text-2xl font-extrabold text-sunshine-dark">
                      {s.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-1 font-['Noto_Sans_SC']">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-['Noto_Sans_SC']">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED STORY: 陳靜容 ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block bg-meadow/15 text-meadow font-semibold text-sm px-4 py-1.5 rounded-full mb-4 font-['Noto_Sans_SC']">
                <Star className="w-3.5 h-3.5 inline-block mr-1 -mt-0.5" />
                師鐸獎教師故事
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 font-['Noto_Sans_SC']">
                用乾淨校園<span className="text-meadow">改變課堂</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-meadow/5 to-sky/5 rounded-3xl p-8 md:p-12 border border-border/60">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-20 h-20 shrink-0 rounded-2xl bg-meadow/15 flex items-center justify-center">
                  <span className="font-display text-2xl font-extrabold text-meadow">陳</span>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="font-display text-xl font-bold text-foreground font-['Noto_Sans_SC']">陳靜容老師</h3>
                    <span className="bg-sunshine/15 text-sunshine-dark text-xs font-bold px-3 py-1 rounded-full font-['Noto_Sans_SC']">2025 師鐸獎得主</span>
                    <span className="text-muted-foreground text-sm font-['Noto_Sans_SC']">台灣屏東 · 潮昇國小</span>
                  </div>
                  <p className="text-foreground leading-relaxed mb-4 font-['Noto_Sans_SC']">
                    從事教學27年的陳靜容老師，使用乾淨校園平台帶領學生參與「善良很酷」等活動，全班善行影片登上紐約時代廣場。她的學生不僅在品德教育上表現卓越，學力檢測也達到全學年最高。2025年，她獲得台灣教育界最高榮譽「師鐸獎」，由總統賴清德親自頒獎。
                  </p>
                  <blockquote className="border-l-4 border-meadow pl-4 mb-4">
                    <p className="text-muted-foreground italic leading-relaxed font-['Noto_Sans_SC']">
                      「透過一個數位平台，是把孩子的視野是打開的。我在屏東做，我是沒有侷限性，我還是一樣跟美國波士頓的資優班的小朋友，一起在做這件事情。善良很酷，善念點亮台灣，小孩子非常得喜歡。」
                    </p>
                  </blockquote>
                  <p className="text-muted-foreground text-sm leading-relaxed font-['Noto_Sans_SC']">
                    她的故事證明：乾淨校園不僅是一個安全的數位平台，更是連結全球教育工作者、激發學生善良本性的橋樑。來自美國、加拿大、日本、韓國的家長和教師紛紛留言，讚嘆台灣孩子的善良與勇氣。
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== 教學資源 + 申請 / 支持 ===== */}
      <TeacherResources
        badge="教學資源"
        heading="各科免費教學資源"
        intro="乾淨世界上精選、無廣告的頻道與播放清單，從學齡前到高中，可直接分享給學生使用。"
        subjects={resourceSubjects}
        channelLink={{ label: "到乾淨校園頻道查看全部教學資源", href: `${GJW}/@%E4%B9%BE%E6%B7%A8%E6%A0%A1%E5%9C%92` }}
        apply={{
          title: "免費申請高級教師頻道",
          desc: "乾淨校園為教師提供高級頻道功能、專業發展課程與善良活動工具包，幫助您打造正向、互動的班級社群，提升學生士氣。",
          cta: "立即免費申請",
          href: `${GJW}/creators/ganjingcampus/form`,
        }}
        support={{
          title: "支持乾淨校園老師",
          desc: "每天一杯咖啡，就能支持兩位教師一整年。您的支持能讓全球更多老師和學生，在乾淨、安全、正向的網絡環境中學習。",
          cta: "立即行動支持",
          href: `${ZH}/support-us`,
        }}
      />

      {/* ===== STATS ===== */}
      <section className="py-16 bg-gradient-to-r from-sky via-sky to-[oklch(0.65_0.16_230)]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "400+", label: "全球教師" },
              { num: "1,000", label: "2026年底目標" },
              { num: "6", label: "大洲" },
              { num: "100%", label: "免費使用" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl font-extrabold text-sunshine">
                  {s.num}
                </div>
                <div className="text-white/80 text-sm mt-1 font-['Noto_Sans_SC']">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-coral/15 text-coral font-semibold text-sm px-4 py-1.5 rounded-full mb-4 font-['Noto_Sans_SC']">
                教師心聲
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 font-['Noto_Sans_SC']">
                聽聽教師怎麼<span className="text-coral">說</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-border/60 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center`}>
                      <span className="font-display font-bold text-sm">{t.initials}</span>
                    </div>
                    <div>
                      <div className="font-display font-bold text-foreground text-base font-['Noto_Sans_SC']">{t.name}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1 font-['Noto_Sans_SC']">
                        <Globe className="w-3 h-3" /> {t.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-sunshine fill-sunshine" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed italic flex-1 font-['Noto_Sans_SC']">
                    "{t.quote}"
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-sunshine via-sunshine to-sunshine-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-[10%] left-[5%] w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 font-['Noto_Sans_SC']">
              加入全球 400+ 教育家的行列
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-['Noto_Sans_SC']">
              立即獲取免費的教師高級頻道。創建內容、策劃資源，並成為認證數位教育家。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.ganjingworld.com/zh-TW/article/1i314rcntbn2YrFKWDHav9ujW1in1c"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-sunshine-dark shadow-xl hover:shadow-2xl transition-all hover:scale-105 no-underline font-['Noto_Sans_SC']"
              >
                <CheckCircle className="w-5 h-5" />
                申請免費頻道
              </a>
              <a
                href="https://www.ganjingworld.com/zh-TW/article/1i3fdp55sv85HOqeJT2LgXl4y1uh1c"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center rounded-full bg-white/20 border-2 border-white/50 px-8 py-4 text-lg font-bold text-white hover:bg-white/30 transition-all no-underline font-['Noto_Sans_SC']"
              >
                <BookOpen className="w-5 h-5" />
                閱讀手冊
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
