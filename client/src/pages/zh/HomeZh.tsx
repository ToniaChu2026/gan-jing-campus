/*
 * Home Page (Chinese) — Gan Jing Campus
 * Design: Warm, inviting campus overview with hero, mission pillars,
 * featured programs, embedded video, safety highlights, and global recognition
 * SEO: Per-page meta tags, JSON-LD structured data
 */
import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { Link } from "wouter";
import {
  Shield,
  Heart,
  BookOpen,
  Globe,
  Users,
  Sparkles,
  Sun,
  ArrowRight,
  Star,
  GraduationCap,
  Palette,
  Music,
  Play,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";

const CAMPUS_HERO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/campus-hero-gdhxb86x5iLK854PVxdpfu.webp";
const SUMMER_CAMP_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/hero-banner-iqxoTcBJNU64e8KpLGpYJY.webp";
const TEACHERS_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/teachers-hero-NfGYecHrTG2AyDfm2uGxh3.webp";
const KINDNESS_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/kindness-hero-NNsaYWbcqqnPPW3ascmMvs.webp";

const VIDEO_EMBED_URL =
  "https://www.ganjingworld.com/embed/1gdir87tbl5mrCAq7hrglVjAd1v21c";

const pillars = [
  {
    icon: Shield,
    title: "100% 安全",
    desc: "採用道德AI的三重安全模型過濾有害內容。100%的家長報告從未見過有害內容。",
    color: "bg-sky/15 text-sky",
  },
  {
    icon: Heart,
    title: "善良第一",
    desc: "每一項內容都促進同情、尊重和正向價值觀。我們的 #善良很酷 活動啟發了全球的教室。",
    color: "bg-coral/15 text-coral",
  },
  {
    icon: BookOpen,
    title: "精選學習",
    desc: "由教育工作者精心挑選的100多部教育影視作品。為4-16歲兒童組織的適齡內容。",
    color: "bg-sunshine/15 text-sunshine-dark",
  },
  {
    icon: Globe,
    title: "全球社區",
    desc: "遍布6大洲的400多名教師。其教育意義獲得印尼和阿根廷政府的認可。",
    color: "bg-meadow/15 text-meadow",
  },
];

const programs = [
  {
    title: "夏令營",
    desc: "為期8週的探險之旅，為4-16歲的兒童帶來善良、創意和發現。",
    img: SUMMER_CAMP_IMG,
    href: "/summer-camp",
    badge: "2026 夏令營",
    badgeColor: "bg-sunshine text-white",
  },
  {
    title: "教師專區",
    desc: "免費高級頻道，提供教學、聯繫和啟發的工具。成為認證數位教育家。",
    img: TEACHERS_IMG,
    href: "/teachers",
    badge: "免費使用",
    badgeColor: "bg-sky text-white",
  },
  {
    title: "善良故事",
    desc: "從波士頓到台灣，真實故事講述善良如何改變教室。",
    img: KINDNESS_IMG,
    href: "/kindness",
    badge: "鼓舞人心",
    badgeColor: "bg-coral text-white",
  },
];

const categories = [
  { icon: Sun, label: "夏令營", color: "text-sunshine-dark" },
  { icon: GraduationCap, label: "教材", color: "text-sky" },
  { icon: Users, label: "校園生活", color: "text-meadow" },
  { icon: BookOpen, label: "語言學習", color: "text-coral" },
  { icon: Palette, label: "中華傳統文化", color: "text-sunshine-dark" },
  { icon: Music, label: "藝術與音樂", color: "text-sky" },
];

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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

export default function HomeZh() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "乾淨校園 — 讓學習與善良相遇",
      description:
        "一個無廣告、對教育工作者友好的平台，為全球兒童推廣善良、創意和安全的數位學習。",
      url: "https://ganjingsummercamp-fejrdh2z.manus.space/zh/",
      mainEntity: {
        "@type": "EducationalOrganization",
        name: "乾淨校園",
        description:
          "為4-16歲兒童設立的無廣告教育平台，擁有遍布6大洲的400多名教師。",
      },
    }),
    []
  );

  return (
    <>
      <SEOHead
        title="讓學習與善良相遇"
        description="乾淨校園是一個無廣告、對教育工作者友好的平台，為4-16歲的兒童推廣善良、創意和安全的數位學習。由道德AI驅動。加入遍布6大洲的400多名教師的行列。"
        canonicalPath="/zh/"
        keywords="乾淨校園, 安全教育, 無廣告學習, 兒童教育, 善良, 2026夏令營, 道德AI教育, 數位學習平台"
        jsonLd={jsonLd}
      />

      {/* ===== HERO SECTION ===== */}
      <section
        ref={heroRef}
        className="relative min-h-[100vh] flex items-center overflow-hidden bg-gradient-to-br from-sky via-sky to-[oklch(0.58_0.18_230)]"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[5%]"
          >
            <Sun className="w-16 h-16 text-sunshine opacity-60" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[15%] right-[8%]"
          >
            <Sparkles className="w-12 h-12 text-white/30" />
          </motion.div>
          <div className="absolute top-[8%] left-[30%] w-32 h-12 bg-white/15 rounded-full blur-sm" />
          <div className="absolute top-[20%] right-[20%] w-28 h-10 bg-white/10 rounded-full blur-sm" />
        </div>

        <div className="container relative z-10 pt-24 pb-16 md:pt-28 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <Shield className="w-4 h-4 text-white" />
                <span className="text-white/90 text-sm font-medium font-['Noto_Sans_SC']">
                  無廣告 &middot; 安全 &middot; 道德AI驅動
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 font-['Noto_Sans_SC']">
                讓學習與
                <br />
                <span className="text-sunshine">善良</span>相遇
              </h1>

              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl mb-8 font-['Noto_Sans_SC']">
                乾淨校園是一個無廣告、對教育工作者友好的平台，為全球兒童推廣善良、創意和安全的數位學習。由道德AI驅動。
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/summer-camp"
                  className="inline-flex items-center gap-2 justify-center rounded-full bg-sunshine px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-sunshine-dark transition-all hover:scale-105 hover:shadow-2xl no-underline font-['Noto_Sans_SC']"
                >
                  探索夏令營
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 px-8 py-4 text-lg font-bold text-white hover:bg-white/30 transition-all no-underline font-['Noto_Sans_SC']"
                >
                  了解更多
                </Link>
              </div>
            </motion.div>

            {/* Right illustration */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={CAMPUS_HERO}
                  alt="孩子們在乾淨校園學習和玩耍"
                  className="w-full h-auto"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky/20 to-transparent" />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-2xl shadow-xl p-3 md:p-4"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-meadow/20 flex items-center justify-center">
                    <Star className="w-5 h-5 text-meadow" fill="currentColor" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-foreground font-['Noto_Sans_SC']">
                      100% 安全
                    </div>
                    <div className="text-xs text-muted-foreground font-['Noto_Sans_SC']">
                      無廣告平台
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="w-full h-auto text-background"
            fill="currentColor"
          >
            <path d="M1440,100H0V60c100-30,300-60,600-60s500,30,840,60V100z" />
          </svg>
        </div>
      </section>

      {/* ===== PILLARS SECTION ===== */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 font-['Noto_Sans_SC']">
              我們的承諾
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-['Noto_Sans_SC']">
              「乾淨校園」計劃打造純淨美好的網絡學習環境，為教師提供專享頻道功能和專業教學資源，師生可以增強課堂互動，是一個卓越的教育平台。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, i) => (
              <AnimatedCard key={pillar.title} delay={i * 0.1}>
                <div
                  className={`p-8 rounded-2xl h-full flex flex-col items-start ${pillar.color}`}
                >
                  <div className="w-12 h-12 rounded-full bg-current/10 flex items-center justify-center mb-4">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-current mb-2 font-['Noto_Sans_SC']">
                    {pillar.title}
                  </h3>
                  <p className="text-current/80 text-sm leading-relaxed font-['Noto_Sans_SC']">
                    {pillar.desc}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROGRAMS ===== */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 font-['Noto_Sans_SC']">
              特色項目
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-['Noto_Sans_SC']">
              從我們的夏令營到為教育工作者提供的專屬資源，探索乾淨校園提供的各種機會。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <AnimatedCard key={program.title} delay={i * 0.1}>
                <Link
                  href={program.href}
                  className="block bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full no-underline group"
                >
                  <div className="relative">
                    <img
                      src={program.img}
                      alt={program.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div
                      className={`absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-bold ${program.badgeColor}`}
                    >
                      {program.badge}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2 font-['Noto_Sans_SC']">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-['Noto_Sans_SC']">
                      {program.desc}
                    </p>
                    <div className="flex items-center text-sky font-bold text-sm group-hover:underline font-['Noto_Sans_SC']">
                      了解更多 <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VIDEO & CATEGORIES ===== */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedCard>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src={VIDEO_EMBED_URL}
                title="Gan Jing Campus Introduction"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 rounded-2xl"></div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-4 font-['Noto_Sans_SC']">
              探索無盡的學習機會
            </h2>
            <p className="text-muted-foreground mb-6 font-['Noto_Sans_SC']">
              從語言學習到藝術，我們的平台提供由教育工作者策劃的各種主題，以激發年輕人的思想。
            </p>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((cat) => (
                <div key={cat.label} className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${cat.color} bg-current/10`}
                  >
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-foreground font-['Noto_Sans_SC']">{cat.label}</span>
                </div>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* ===== STATS & TESTIMONIALS ===== */}
      <section
        ref={statsRef}
        className="py-20 md:py-28 bg-gradient-to-br from-sky/80 via-sky to-[oklch(0.58_0.18_230)] text-white"
      >
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedCard>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 font-['Noto_Sans_SC']">
              受到全球信賴
            </h2>
            <p className="text-lg text-white/85 leading-relaxed mb-8 font-['Noto_Sans_SC']">
              我們的平台已對全球數千名學生和教育工作者產生了積極影響。數據不言而喻。
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 text-center">
              {[{
                  value: "100+",
                  label: "教育影片與節目",
                },
                {
                  value: "400+",
                  label: "全球教師",
                },
                {
                  value: "50+",
                  label: "國家參與善良很酷",
                },
                {
                  value: "6",
                  label: "大洲",
                },].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                >
                  <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
                  <div className="text-sm md:text-base text-white/80 mt-1 font-['Noto_Sans_SC']">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 space-y-8">
              {/* Testimonial 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/adel-mansilla-avatar-o3hY99q33b66472pY8855u.webp"
                    alt="Adel Mansilla 博士"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white/90 mb-3 leading-relaxed font-['Noto_Sans_SC']">
                    「乾淨世界校園為全球教育工作者提供免費優質頻道與高品質學習資源，讓孩子在安全的環境中學習與成長。」
                  </p>
                  <div className="font-bold text-sm font-['Noto_Sans_SC']">Adel Mansilla 博士</div>
                  <div className="text-xs text-white/70 font-['Noto_Sans_SC']">波士頓</div>
                </div>
              </div>
              {/* Testimonial 2 - 陳靜容 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-meadow/20 flex items-center justify-center">
                  <span className="font-display font-bold text-meadow text-lg">陳</span>
                </div>
                <div>
                  <p className="text-white/90 mb-3 leading-relaxed font-['Noto_Sans_SC']">
                    「善良很酷，善念點亮台灣，小孩子非常得喜歡。他覺得我小小的年紀，我願意去幫助別人，這也是一個善舉。」
                  </p>
                  <div className="font-bold text-sm font-['Noto_Sans_SC']">陳靜容老師</div>
                  <div className="text-xs text-white/70 font-['Noto_Sans_SC']">
                    2025師鐸獎得主 · 台灣屏東
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/boris-wittgen-avatar-X8qY67oY4o4411qY89895Y.webp"
                    alt="Boris Wittgen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white/90 mb-3 leading-relaxed font-['Noto_Sans_SC']">
                    「乾淨校園優先考慮教育而非參與度指標，提供精心策劃的、具有文化豐富性的媒體，促進全面兒童發展。這是兒童數位媒體的範式轉變。」
                  </p>
                  <div className="font-bold text-sm font-['Noto_Sans_SC']">Boris Wittgen</div>
                  <div className="text-xs text-white/70 font-['Noto_Sans_SC']">
                    認證教育家與學校發展培訓師
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-sunshine via-sunshine to-sunshine-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-[10%] left-[5%] w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <AnimatedCard>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 font-['Noto_Sans_SC']">
              準備好加入我們了嗎？
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-['Noto_Sans_SC']">
              無論您是尋找安全內容的家長，還是尋求免費工具的教師，或熱衷於善良教育的教育工作者——乾淨校園都有您的位置。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/summer-camp"
                className="inline-flex items-center gap-2 justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-sunshine-dark shadow-xl hover:shadow-2xl transition-all hover:scale-105 no-underline font-['Noto_Sans_SC']"
              >
                <Sun className="w-5 h-5" />
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
          </AnimatedCard>
        </div>
      </section>
    </>
  );
}
