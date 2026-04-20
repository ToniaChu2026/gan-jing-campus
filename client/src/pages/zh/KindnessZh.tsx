/*
 * Kindness Stories Page (Chinese) — Gan Jing Campus
 * Design: Warm, heartfelt page showcasing real kindness stories
 * Features stories from Boston, Taiwan, and the global kindness movement
 */
import { useEffect, useRef, useMemo } from "react";
import SEOHead from "@/components/SEOHead";
import { motion, useInView } from "framer-motion";
import {
  Heart,
  Star,
  Globe,
  ArrowRight,
  Award,
  Sparkles,
  Users,
  BookOpen,
  MapPin,
} from "lucide-react";
import { Link } from "wouter";

const KINDNESS_HERO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/kindness-hero-NNsaYWbcqqnPPW3ascmMvs.webp";

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

const stories = [
  {
    title: "從「問題學生」到善良冠軍",
    location: "美國波士頓",
    teacher: "Adel Mansilla",
    school: "明星學院",
    summary:
      "教師Adel Mansilla透過善良和乾淨校園的資源，改變了一位問題學生。最初只是課堂上的#善良很酷競賽，後來發展成全校運動。該校在時代廣場的頒獎典禮上榮獲『善良微笑獎』，證明了善良可以改變一切。",
    quote:
      "這個平台在社交和學術上都賦予了學生力量。一個善舉引發了改變，並擴散到我們整個學校。",
    impact: ["全校性的善良運動", "時代廣場頒獎典禮", "學生行為轉變"],
    color: "border-l-coral",
    iconColor: "bg-coral/15 text-coral",
    href: "https://www.ganjingworld.com/zh-TW/news/1htqniht6hp3u3PVR5BpnRHqB1ic1c",
  },
  {
    title: "沒有壞孩子，只有需要愛的孩子",
    location: "台灣",
    teacher: "陳靜絨",
    school: "獲獎教育家",
    summary:
      "台灣頂尖教育榮譽得主陳靜絨老師，利用乾淨校園幫助一位問題學生找到方向。她的理念是——『沒有壞孩子，只有需要愛的孩子』。現在，學生們使用安全的乾淨平台，避免了網絡成癮。",
    quote:
      "沒有壞孩子，只有需要愛的孩子。乾淨校園為我們提供了透過安全、有意義的內容來表達這份愛的工具。",
    impact: ["台灣頂尖教育榮譽", "學生網絡安全", "品格轉變"],
    color: "border-l-sky",
    iconColor: "bg-sky/15 text-sky",
    href: "https://www.ganjingworld.com/zh-TW/news/1htqng1kqt45DWMGkHwsYvRcf1gk1c",
  },
  {
    title: "善良很酷影片競賽",
    location: "美國紐約",
    teacher: "Leejun Taylor",
    school: "紐約市教育家",
    summary:
      "教師Leejun Taylor利用乾淨世界發起了『善良很酷』影片競賽，鼓勵學生創作宣揚正面價值觀的內容。這項活動向學生們展示，善良不僅是好事，而且很酷。該競賽成為其他學校整合品格教育與數位素養的典範。",
    quote:
      "我們用乾淨世界舉辦『善良很酷』影片競賽。學生們喜歡創作宣揚正面價值觀的內容。",
    impact: ["學生創作的善良內容", "數位素養+品格教育", "成為其他學校的典範"],
    color: "border-l-sunshine-dark",
    iconColor: "bg-sunshine/15 text-sunshine-dark",
    href: "https://www.ganjingworld.com/zh-TW/news/1htqniht6hp3u3PVR5BpnRHqB1ic1c",
  },
];

const globalRecognition = [
  {
    country: "印尼",
    detail: "巴淡市宣布『乾淨世界日』",
    icon: "🇮🇩",
  },
  {
    country: "阿根廷",
    detail: "某省認可乾淨世界為具有教育意義的平台",
    icon: "🇦🇷",
  },
  {
    country: "全球",
    detail: "數千所學校參加全球善良影片獎",
    icon: "🌍",
  },
];

export default function KindnessZh() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "善良故事 — 乾淨校園",
      description: "來自波士頓、台灣及世界各地的真實故事，展示善良如何改變教室。",
      url: "https://ganjingsummercamp-fejrdh2z.manus.space/zh/kindness",
    }),
    []
  );

  return (
    <>
      <SEOHead
        title="善良故事 — 來自全球教室的真實感動"
        description="探索『#善良很酷』運動如何改變從波士頓到台灣的教室。了解乾淨校園如何在全球推廣同情心與品格教育。"
        canonicalPath="/zh/kindness"
        keywords="善良故事, KindnessIsCool, 品格教育, 教室中的善良, 乾淨校園故事, 全球教育, 善良獎, 正面價值觀"
        ogImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/kindness-hero-NNsaYWbcqqnPPW3ascmMvs.webp"
        jsonLd={jsonLd}
      />
      {/* ===== HERO ===== */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[oklch(0.65_0.12_15)] via-[oklch(0.72_0.14_20)] to-[oklch(0.78_0.12_30)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[12%] left-[8%]"
          >
            <Heart className="w-14 h-14 text-white/20" fill="currentColor" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[18%] right-[12%]"
          >
            <Sparkles className="w-10 h-10 text-sunshine/40" />
          </motion.div>
        </div>

        <div className="container relative z-10 pt-24 pb-16 md:pt-28 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <Heart className="w-4 h-4 text-white" fill="currentColor" />
                <span className="text-white/90 text-sm font-medium font-['Noto_Sans_SC']">
                  真實故事，真實影響
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 font-['Noto_Sans_SC']">
                善良
                <br />
                <span className="text-sunshine">改變一切</span>
              </h1>

              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl mb-8 font-['Noto_Sans_SC']">
                探索世界各地的師生如何利用乾淨校園傳播善良、改變教室、共創更美好的未來。
              </p>

              <a
                href="https://www.ganjingworld.com/zh-TW/news/1htqniht6hp3u3PVR5BpnRHqB1ic1c"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center rounded-full bg-sunshine px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-sunshine-dark transition-all hover:scale-105 no-underline font-['Noto_Sans_SC']"
              >
                閱讀完整故事
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={KINDNESS_HERO}
                  alt="孩子們實踐善良"
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

      {/* ===== FEATURED STORIES ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-coral/15 text-coral font-semibold text-sm px-4 py-1.5 rounded-full mb-4 font-['Noto_Sans_SC']">
                精選故事
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 font-['Noto_Sans_SC']">
                啟迪人心的<span className="text-coral">故事</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-['Noto_Sans_SC']">
                來自教育工作者的真實分享，他們利用善良和乾淨校園改變了教室和社區。
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-10">
            {stories.map((story, i) => (
              <AnimatedSection key={story.title} delay={i * 0.1}>
                <div
                  className={`bg-white rounded-2xl border border-border/60 border-l-4 ${story.color} overflow-hidden hover:shadow-xl transition-all duration-300`}
                >
                  <div className="p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${story.iconColor} font-['Noto_Sans_SC']`}>
                        <MapPin className="w-3 h-3" />
                        {story.location}
                      </span>
                      <span className="text-sm text-muted-foreground font-['Noto_Sans_SC']">
                        {story.teacher} &middot; {story.school}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 font-['Noto_Sans_SC']">
                      {story.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-4xl font-['Noto_Sans_SC']">
                      {story.summary}
                    </p>

                    <blockquote className="bg-cream rounded-xl p-5 mb-6 border-l-4 border-sunshine">
                      <p className="text-foreground/80 italic leading-relaxed font-['Noto_Sans_SC']">
                        “{story.quote}”
                      </p>
                    </blockquote>

                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      {story.impact.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 bg-muted/60 px-3 py-1.5 rounded-full text-sm font-medium text-muted-foreground font-['Noto_Sans_SC']"
                        >
                          <Star className="w-4 h-4 text-sunshine" fill="currentColor" />
                          {item}
                        </span>
                      ))}
                    </div>

                    <a
                      href={story.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-bold text-coral hover:text-coral/80 transition-colors no-underline font-['Noto_Sans_SC']"
                    >
                      閱讀報導 <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GLOBAL RECOGNITION ===== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-sky/15 text-sky font-semibold text-sm px-4 py-1.5 rounded-full mb-4 font-['Noto_Sans_SC']">
                全球認可
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 font-['Noto_Sans_SC']">
                善良的<span className="text-sky">全球運動</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-['Noto_Sans_SC']">
                從印尼到阿根廷，乾淨校園的正面影響力正在獲得世界各地的認可。
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {globalRecognition.map((item) => (
                <div key={item.country} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2 font-['Noto_Sans_SC']">{item.country}</h3>
                  <p className="text-muted-foreground font-['Noto_Sans_SC']">{item.detail}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-sky to-teal">
        <div className="container text-center">
          <AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="/summer-camp"
                className="inline-block bg-white rounded-2xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-shadow no-underline"
              >
                <div className="inline-flex items-center gap-2 bg-sunshine/20 text-sunshine-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-6 font-['Noto_Sans_SC']">
                  <Sparkles className="w-4 h-4" />
                  夏令營現已開放
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4 max-w-3xl mx-auto font-['Noto_Sans_SC']">
                  加入我們的夏令營，探索更多精彩活動！
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 font-['Noto_Sans_SC']">
                  在充滿樂趣和創意的活動中，繼續您的善良之旅。我們的夏令營提供安全、引人入勝的內容，培養品格與創造力。
                </p>
                <div className="inline-flex items-center gap-2 justify-center rounded-full bg-teal px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-teal/90 transition-all no-underline font-['Noto_Sans_SC']">
                  探索夏令營
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
