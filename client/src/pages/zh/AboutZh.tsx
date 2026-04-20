/*
 * About Page (Chinese) — Gan Jing Campus
 * Design: Clean, informative page about the platform
 * Covers mission, safety model, Ethical AI, and global recognition
 */
import { useEffect, useRef, useMemo } from "react";
import SEOHead from "@/components/SEOHead";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import {
  Shield,
  Heart,
  Brain,
  Eye,
  Users,
  Globe,
  Star,
  ArrowRight,
  CheckCircle,
  Lock,
  Sparkles,
  BookOpen,
  GraduationCap,
} from "lucide-react";

const CAMPUS_HERO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/campus-hero-gdhxb86x5iLK854PVxdpfu.webp";

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

const safetyLayers = [
  {
    icon: Brain,
    title: "道德AI層",
    desc: "我們專有的AI技術可在有害、暴力和不當內容觸及兒童之前自動過濾。與其他平台不同，我們的AI提倡善良而非單純追求互動率。",
    color: "bg-sky/15 text-sky",
    borderColor: "border-sky/30",
  },
  {
    icon: Eye,
    title: "人工策劃層",
    desc: "每一項內容都由訓練有素的教育工作者和內容專家審核。我們的團隊確保內容適合年齡、具有教育價值並符合正向價值觀。",
    color: "bg-sunshine/15 text-sunshine-dark",
    borderColor: "border-sunshine/30",
  },
  {
    icon: Users,
    title: "社群層",
    desc: "家長、教師和社群成員透過反饋和報告為內容品質做出貢獻。我們以社群為導向的方法確保了持續的改進。",
    color: "bg-meadow/15 text-meadow",
    borderColor: "border-meadow/30",
  },
];

const values = [
  { icon: Heart, title: "善良", desc: "每一項功能和內容都促進同情與尊重。" },
  { icon: Shield, title: "安全", desc: "100%無廣告，並有三層內容保護。" },
  { icon: BookOpen, title: "教育", desc: "優先考慮學習成果而非互動指標。" },
  { icon: Globe, title: "包容", desc: "為不同文化、語言和年齡段提供內容。" },
  { icon: Star, title: "卓越", desc: "由教育工作者策劃，達到最高品質標準。" },
  { icon: Lock, title: "隱私", desc: "不收集數據。兒童的隱私神聖不可侵犯。" },
];

const timeline = [
  { year: "啟動", event: "乾淨校園作為一個無廣告的教育平台上線" },
  { year: "成長", event: "來自6大洲的400多名教師加入平台" },
  { year: "認可", event: "印尼巴淡市宣布設立「乾淨世界日」" },
  { year: "影響", event: "阿根廷認可乾淨世界的教育意義" },
  { year: "2026目標", event: "觸及1000名教師並將夏令營擴展至全球" },
];

export default function AboutZh() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "關於乾淨校園",
      description: "了解乾淨校園的使命、三層安全模型、道德AI技術以及全球認可。",
      url: "https://ganjingsummercamp-fejrdh2z.manus.space/zh/about",
      mainEntity: {
        "@type": "EducationalOrganization",
        name: "乾淨校園",
        foundingDate: "2023",
        areaServed: "全球",
        numberOfEmployees: { "@type": "QuantitativeValue", value: 400, unitText: "教師" },
      },
    }),
    []
  );

  return (
    <>
      <SEOHead
        title="關於乾淨校園 — 使命、安全與全球影響力"
        description="了解乾淨校園為全球兒童提供安全、無廣告教育的使命。探索我們的三層安全模型、道德AI技術以及在6大洲獲得的認可。"
        canonicalPath="/zh/about"
        keywords="關於乾淨校園, 教育使命, 道德AI安全, 三層安全模型, 兒童數位安全, 全球教育平台, 無廣告教育"
        ogImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/campus-hero-gdhxb86x5iLK854PVxdpfu.webp"
        jsonLd={jsonLd}
      />
      {/* ===== HERO ===== */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[oklch(0.35_0.08_250)] via-[oklch(0.42_0.12_240)] to-[oklch(0.52_0.14_230)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-40 h-40 bg-sky/10 rounded-full blur-2xl" />
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
                <Sparkles className="w-4 h-4 text-sunshine" />
                <span className="text-white/90 text-sm font-medium font-['Noto_Sans_SC']">
                  關於乾淨校園
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 font-['Noto_Sans_SC']">
                教育優先
                <br />
                而非<span className="text-sunshine">互動率</span>
              </h1>

              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl mb-8 font-['Noto_Sans_SC']">
                乾淨校園是一個無廣告、對教育工作者友善的平台，由道德AI驅動。我們相信科技應服務於兒童的成長，而非剝削他們的注意力。
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.ganjingworld.com/zh-TW/@乾淨校園"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 justify-center rounded-full bg-sunshine px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-sunshine-dark transition-all hover:scale-105 no-underline font-['Noto_Sans_SC']"
                >
                  訪問校園
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  href="/summer-camp"
                  className="inline-flex items-center justify-center rounded-full bg-white/15 backdrop-blur-sm border-2 border-white/30 px-8 py-4 text-lg font-bold text-white hover:bg-white/25 transition-all no-underline font-['Noto_Sans_SC']"
                >
                  夏令營
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={CAMPUS_HERO}
                  alt="乾淨校園"
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

      {/* ===== MISSION & VALUES ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-sunshine/15 text-sunshine-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-4 font-['Noto_Sans_SC']">
                我們的價值觀
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 font-['Noto_Sans_SC']">
                我們的<span className="text-sunshine-dark">立場</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-['Noto_Sans_SC']">
                我們做的每一個決定都以這些核心價值為指導。它們塑造了我們的平台、我們的內容和我們的社群。
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-border/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 rounded-xl bg-sky/10 text-sky flex items-center justify-center mb-4">
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 font-['Noto_Sans_SC']">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-['Noto_Sans_SC']">
                    {v.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRIPLE SAFETY MODEL ===== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-sky/15 text-sky font-semibold text-sm px-4 py-1.5 rounded-full mb-4 font-['Noto_Sans_SC']">
                安全模型
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 font-['Noto_Sans_SC']">
                三層<span className="text-sky">保護</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-['Noto_Sans_SC']">
                我們獨特的三層安全模型確保每一項內容都是安全的、有教育意義的，並符合正向價值觀。
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
            {safetyLayers.map((layer, i) => (
              <AnimatedSection key={layer.title} delay={i * 0.12}>
                <div
                  className={`bg-white rounded-2xl p-8 border ${layer.borderColor} hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex gap-6 items-start">
                    <div
                      className={`w-16 h-16 shrink-0 rounded-2xl ${layer.color} flex items-center justify-center`}
                    >
                      <layer.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-display text-xs font-bold text-muted-foreground uppercase tracking-wider font-['Noto_Sans_SC']">
                          第 {i + 1} 層
                        </span>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3 font-['Noto_Sans_SC']">
                        {layer.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed font-['Noto_Sans_SC']">
                        {layer.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-10 text-center">
              <div className="inline-flex items-center gap-2 bg-meadow/10 text-meadow font-semibold text-sm px-5 py-2.5 rounded-full font-['Noto_Sans_SC']">
                <CheckCircle className="w-4 h-4" />
                100% 的家長表示從未見過有害內容
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHAT MAKES US DIFFERENT ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-coral/15 text-coral font-semibold text-sm px-4 py-1.5 rounded-full mb-4 font-['Noto_Sans_SC']">
                我們的方法
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 font-['Noto_Sans_SC']">
                我們的<span className="text-coral">不同之處</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.1}>
                <div className="bg-red-50/50 rounded-2xl p-6 border border-red-100">
                  <h3 className="font-display text-lg font-bold text-red-800 mb-4 font-['Noto_Sans_SC']">
                    其他平台
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "互動率驅動的演算法",
                      "廣告支持並收集數據",
                      "自動播放導致有害內容",
                      "無教師專用工具",
                      "成癮性設計模式",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-red-700/80 font-['Noto_Sans_SC']">
                        <span className="text-red-400 mt-0.5">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-meadow/5 rounded-2xl p-6 border border-meadow/20">
                  <h3 className="font-display text-lg font-bold text-meadow mb-4 font-['Noto_Sans_SC']">
                    乾淨校園
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "教育優先的內容策劃",
                      "100%無廣告，不收集數據",
                      "道德AI過濾有害內容",
                      "免費教師高級頻道",
                      "為全人發展而設計",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-meadow/90 font-['Noto_Sans_SC']">
                        <CheckCircle className="w-4 h-4 text-meadow shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== JOURNEY TIMELINE ===== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-meadow/15 text-meadow font-semibold text-sm px-4 py-1.5 rounded-full mb-4 font-['Noto_Sans_SC']">
                我們的旅程
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 font-['Noto_Sans_SC']">
                共同<span className="text-meadow">成長</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto">
            {timeline.map((t, i) => (
              <AnimatedSection key={t.year} delay={i * 0.1}>
                <div className="flex gap-5 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-sky/15 flex items-center justify-center shrink-0">
                      <span className="font-display text-xs font-bold text-sky font-['Noto_Sans_SC']">
                        {t.year}
                      </span>
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-sky/20 mt-2" />
                    )}
                  </div>
                  <div className="pt-2.5 pb-4">
                    <p className="text-foreground font-medium leading-relaxed font-['Noto_Sans_SC']">
                      {t.event}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-sky via-sky to-[oklch(0.58_0.18_230)] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-[10%] left-[5%] w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 font-['Noto_Sans_SC']">
              成為未來教育的一部分
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-['Noto_Sans_SC']">
              加入由教育工作者、家長和孩子組成的成長中社群，共同信仰一個更善良、更安全的數位世界。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/summer-camp"
                className="inline-flex items-center gap-2 justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-sky shadow-xl hover:shadow-2xl transition-all hover:scale-105 no-underline font-['Noto_Sans_SC']"
              >
                <Star className="w-5 h-5" fill="currentColor" />
                夏令營
              </Link>
              <Link
                href="/teachers"
                className="inline-flex items-center gap-2 justify-center rounded-full bg-white/20 border-2 border-white/50 px-8 py-4 text-lg font-bold text-white hover:bg-white/30 transition-all no-underline font-['Noto_Sans_SC']"
              >
                <GraduationCap className="w-5 h-5" />
                教師專區
              </Link>
              <a
                href="https://www.ganjingworld.com/zh-TW/@乾淨校園"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center rounded-full bg-white/20 border-2 border-white/50 px-8 py-4 text-lg font-bold text-white hover:bg-white/30 transition-all no-underline font-['Noto_Sans_SC']"
              >
                <Globe className="w-5 h-5" />
                訪問校園
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
