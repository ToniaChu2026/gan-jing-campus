/*
 * Summer Camp Page (Chinese) — 乾淨校園夏令營
 * Design: Matches English Summer Camp page layout with all sections
 * Hero, About, Age Groups, Weekly Themes, Video, Why Gan Jing, Testimonials, CTA
 */
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sun,
  Sparkles,
  ArrowDown,
  Shield,
  Heart,
  Film,
  BookOpen,
  Users,
  Baby,
  BookHeart,
  GraduationCap,
  Play,
  Palette,
  Globe,
  Brain,
  Music,
  Leaf,
  Star,
  Lightbulb,
  ShieldCheck,
  Eye,
  Ban,
  Lock,
  Smile,
  Quote,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/hero-banner-iqxoTcBJNU64e8KpLGpYJY.webp";
const ACTIVITIES_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/activities-section-nHHGtKZpC6E9bfJK8TpfT4.webp";
const KINDNESS_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/kindness-section-3qy49Wh4Qnft6Lwe2fRkwM.webp";
const CTA_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/cta-background-5H7ZhWpykPiuKW8LACeKTC.webp";
const VIDEO_EMBED_URL =
  "https://www.ganjingworld.com/embed/1hkfg1b8ls819ca1gaHm04ldx1kf1c";
const VIDEO_WATCH_URL =
  "https://www.ganjingworld.com/zh-TW/video/1hkfg1b8ls819ca1gaHm04ldx1kf1c";
const CAMPUS_URL = "https://www.ganjingworld.com/zh-TW/ganjingcampus";

/* ─── Shared AnimatedCard ─── */
function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Data ─── */
const features = [
  {
    icon: Shield,
    color: "bg-sky/15 text-sky",
    title: "100% 安全無廣告",
    desc: "採用道德AI過濾有害內容。無廣告、無追蹤、無不當素材——只有純粹的學習與樂趣。",
  },
  {
    icon: Heart,
    color: "bg-coral/15 text-coral",
    title: "品格教育為本",
    desc: "每部影片和活動都經過精心策劃，培養孩子的善良、韌性、創造力和良好品格。",
  },
  {
    icon: Film,
    color: "bg-meadow/15 text-meadow",
    title: "100+ 精選節目",
    desc: "豐富的教育影片、動畫系列和創意內容，按年齡組別和每週主題精心編排。",
  },
];

const ageGroups = [
  {
    id: "early",
    label: "幼兒探索",
    age: "4歲以下",
    icon: Baby,
    color: "bg-coral",
    lightColor: "bg-coral/10",
    textColor: "text-coral",
    shows: [
      { name: "Pocoyo", desc: "好奇心、想像力、情緒智能" },
      { name: "Pinkfong", desc: "音樂學習、語言發展" },
      { name: "Cocoland", desc: "冒險、友誼、遊戲中學習" },
      { name: "吉他與鼓", desc: "情緒智能、友誼、團隊合作" },
    ],
    description: "為最小的學習者設計的溫柔多彩內容。專注於基本情緒、簡單故事和音樂學習。",
  },
  {
    id: "young",
    label: "快樂學習",
    age: "5-7歲",
    icon: BookHeart,
    color: "bg-sky",
    lightColor: "bg-sky/10",
    textColor: "text-sky",
    shows: [
      { name: "超級飛俠", desc: "問題解決、團隊合作、文化認知" },
      { name: "Too Too Boy", desc: "冒險、問題解決、創造力" },
      { name: "Splash & Bubbles", desc: "海洋探索、海洋生物、友誼" },
      { name: "Zippy & 小樹", desc: "自然、善良、環境保護" },
    ],
    description: "引人入勝的故事培養問題解決能力、團隊合作和文化認知。隨著孩子好奇心的增長而成長的內容。",
  },
  {
    id: "growing",
    label: "成長思維",
    age: "8-16歲",
    icon: GraduationCap,
    color: "bg-meadow",
    lightColor: "bg-meadow/10",
    textColor: "text-meadow",
    shows: [
      { name: "STEM探險", desc: "科學、編程、實驗、工程" },
      { name: "世界文化", desc: "地理、傳統、語言" },
      { name: "品格故事", desc: "真實英雄、道德勇氣、領導力" },
      { name: "創意藝術", desc: "繪畫、音樂創作、講故事" },
    ],
    description: "為青少年設計的啟發性內容。STEM探索、世界文化、品格發展和創意表達。",
  },
];

const weeks = [
  {
    num: 1,
    title: "我的戶外時光",
    icon: Leaf,
    color: "text-meadow",
    bgColor: "bg-meadow/10",
    numBg: "bg-meadow",
    tags: ["自然探索", "戶外活動", "動植物", "環保"],
    desc: "走出家門，擁抱大自然！通過精選的自然紀錄片和戶外活動，讓孩子認識動植物、學習環保知識。",
  },
  {
    num: 2,
    title: "漢語學堂",
    icon: BookOpen,
    color: "text-sky",
    bgColor: "bg-sky/10",
    numBg: "bg-sky",
    tags: ["漢字", "成語", "詩詞", "書法"],
    desc: "探索中華語言之美！從漢字故事到成語典故，從古詩詞到書法藝術，感受漢語的博大精深。",
  },
  {
    num: 3,
    title: "宇宙與自然",
    icon: Globe,
    color: "text-[oklch(0.55_0.2_280)]",
    bgColor: "bg-[oklch(0.55_0.2_280)]/10",
    numBg: "bg-[oklch(0.55_0.2_280)]",
    tags: ["太空", "星球", "科學", "探索"],
    desc: "仰望星空，探索宇宙奧秘！通過科學影片和趣味實驗，帶領孩子認識太陽系、星座和自然現象。",
  },
  {
    num: 4,
    title: "藝術音樂之旅",
    icon: Music,
    color: "text-coral",
    bgColor: "bg-coral/10",
    numBg: "bg-coral",
    tags: ["音樂", "繪畫", "舞蹈", "手工"],
    desc: "用藝術點亮生活！欣賞經典音樂、學習繪畫技巧、體驗舞蹈樂趣，激發孩子的藝術天賦。",
  },
  {
    num: 5,
    title: "傳統文化之旅",
    icon: Star,
    color: "text-sunshine-dark",
    bgColor: "bg-sunshine/10",
    numBg: "bg-sunshine-dark",
    tags: ["傳統節日", "歷史故事", "禮儀", "文化"],
    desc: "穿越時空，探索傳統文化！從節日習俗到歷史故事，從禮儀之道到文化傳承，培養文化自信。",
  },
  {
    num: 6,
    title: "DIY創意手工",
    icon: Palette,
    color: "text-sky",
    bgColor: "bg-sky/10",
    numBg: "bg-sky",
    tags: ["手工", "創意", "動手", "設計"],
    desc: "動手創造無限可能！跟隨教學影片製作手工藝品、設計小發明，培養孩子的創造力和動手能力。",
  },
  {
    num: 7,
    title: "快樂學英文",
    icon: Brain,
    color: "text-meadow",
    bgColor: "bg-meadow/10",
    numBg: "bg-meadow",
    tags: ["英語", "歌曲", "故事", "對話"],
    desc: "在歡樂中學習英語！通過英語歌曲、動畫故事和趣味對話，讓孩子自然而然地愛上英語。",
  },
  {
    num: 8,
    title: "神祕探索歷險記",
    icon: Lightbulb,
    color: "text-sunshine-dark",
    bgColor: "bg-sunshine/10",
    numBg: "bg-sunshine-dark",
    tags: ["冒險", "解謎", "發現", "想像力"],
    desc: "開啟神祕探索之旅！跟隨精彩的冒險故事，解開謎題、發現寶藏，為整個夏天畫上完美句號。",
  },
];

const safetyFeatures = [
  {
    icon: Brain,
    title: "道德AI檢測",
    desc: "先進的AI在有害或不當內容到達您的孩子之前就將其攔截。",
    num: 1,
  },
  {
    icon: Eye,
    title: "人工審核",
    desc: "每一項內容都經過真人審核，確保安全且適合相應年齡。",
    num: 2,
  },
  {
    icon: ShieldCheck,
    title: "專家策劃",
    desc: "兒童發展專家圍繞健康成長的關鍵領域構建內容體系。",
    num: 3,
  },
];

const benefits = [
  {
    icon: Ban,
    title: "非成癮算法",
    desc: "不使用追蹤式推薦。所有推薦都基於有意義的、適齡的內容。",
  },
  {
    icon: Lock,
    title: "最高隱私保護",
    desc: "無評論、無聊天、無不必要的聯繫。僅使用匿名數據，全面保護孩子隱私。",
  },
  {
    icon: Smile,
    title: "100% 無廣告",
    desc: "您的孩子享受安全、不間斷的內容——讓您完全放心。",
  },
];

const expertQuote = {
  text: "乾淨校園優先考慮教育而非參與度指標，提供精心策劃的、具有文化豐富性的媒體，促進全面兒童發展。這是兒童數位媒體的範式轉變。",
  author: "Boris Wittgen",
  role: "認證教育家與學校發展培訓師",
};

const testimonials = [
  {
    text: "這是給教師的一份大禮。這個平台提供了一個安全的空間，讓我可以分享教育內容，而不必擔心不當廣告或推薦。",
    author: "Laurence Jossomme Lefebvre",
    location: "法國",
    stars: 5,
  },
  {
    text: "乾淨世界讓孩子在網上學習時不會接觸暴力或色情內容，幫助他們自然遠離TikTok，令家長安心。",
    author: "林志彥",
    location: "臺灣",
    stars: 5,
  },
  {
    text: "乾淨校園在社交和學業上賦能學生。我們學校贏得了善良微笑獎，這一切都始於一個課堂善良實驗。",
    author: "Adel Mansilla",
    location: "波士頓，美國",
    stars: 5,
  },
  {
    text: "沒有壞孩子，只有需要愛的孩子。乾淨校園通過安全、精選的內容幫助我的學生避免網絡成癮。",
    author: "陳靜蓉",
    location: "臺灣",
    stars: 5,
  },
  {
    text: "對我學生的積極影響是顯而易見的。自從我們開始使用這個平台，他們更投入、更有創造力、更善待彼此。",
    author: "Sibylle Schneller",
    location: "瑞士",
    stars: 5,
  },
  {
    text: "我的女兒喜歡這些角色，學會了如何尊重和善良。我強烈推薦給所有尋找安全數位內容的家長。",
    author: "Ben Hedges",
    location: "家長",
    stars: 5,
  },
];

const ctaBenefits = [
  "8週精心策劃的教育內容",
  "100+ 適合4-16歲的影片與節目",
  "每週善良挑戰與創意活動",
  "安全、無廣告、非成癮平台",
  "每週線下創意項目",
  "對所有家庭和教師免費",
];

/* ─── Sub-components ─── */

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-sunshine text-sunshine" />
      ))}
    </div>
  );
}

function WeekCard({ week, index }: { week: (typeof weeks)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col md:flex-row gap-6 items-start"
    >
      <div
        className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${week.numBg} flex items-center justify-center shadow-lg shrink-0 ${isEven ? "md:order-first" : "md:order-last"}`}
      >
        <span className="font-display text-2xl md:text-3xl font-extrabold text-white">
          {week.num}
        </span>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <week.icon className={`w-6 h-6 ${week.color}`} />
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground font-['Noto_Sans_SC']">
            {week.title}
          </h3>
        </div>
        <p className="text-muted-foreground text-base leading-relaxed mb-3 font-['Noto_Sans_SC']">{week.desc}</p>
        <div className="flex flex-wrap gap-2">
          {week.tags.map((tag) => (
            <span
              key={tag}
              className={`inline-block ${week.bgColor} ${week.color} text-xs font-semibold px-3 py-1 rounded-full font-['Noto_Sans_SC']`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Component ─── */
export default function SummerCampZh() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Event",
      name: "乾淨校園夏令營 2026",
      description:
        "一個為期8週的線上夏令營，為4-16歲的兒童帶來善良、創意和探索的冒險。免費、無廣告，並由道德AI驅動。",
      startDate: "2026-06-15",
      endDate: "2026-08-07",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "VirtualLocation",
        url: CAMPUS_URL,
      },
      organizer: {
        "@type": "Organization",
        name: "乾淨校園",
        url: CAMPUS_URL,
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://ganjingsummercamp-fejrdh2z.manus.space/zh/summer-camp",
      },
      audience: {
        "@type": "EducationalAudience",
        educationalRole: "student",
        suggestedMinAge: 4,
        suggestedMaxAge: 16,
      },
      isAccessibleForFree: true,
    }),
    []
  );

  /* State for age groups & testimonials */
  const [activeAge, setActiveAge] = useState(0);
  const [showAllWeeks, setShowAllWeeks] = useState(false);
  const [testPage, setTestPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);
  const visibleCards = testimonials.slice(testPage * cardsPerPage, testPage * cardsPerPage + cardsPerPage);
  const group = ageGroups[activeAge];
  const displayedWeeks = showAllWeeks ? weeks : weeks.slice(0, 4);

  /* Refs for scroll-in animations */
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-80px" });
  const ageRef = useRef(null);
  const ageInView = useInView(ageRef, { once: true, margin: "-60px" });
  const weekRef = useRef(null);
  const weekInView = useInView(weekRef, { once: true, margin: "-60px" });
  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true, margin: "-60px" });
  const testRef = useRef(null);
  const testInView = useInView(testRef, { once: true, margin: "-60px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setTestPage((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <>
      <SEOHead
        title="乾淨校園夏令營 2026 — 為期8週的善良與創意冒險"
        description="參加乾淨校園2026夏令營：一個為4-16歲兒童設計的免費、為期8週的線上活動。在100%安全、無廣告的環境中探索善良、創意、中華文化、STEM等。"
        canonicalPath="/zh/summer-camp"
        keywords="乾淨校園夏令營 2026, 免費線上夏令營, 兒童暑期活動, 善良品格營, 創意學習, 4-16歲兒童, 無廣告夏令營, 道德AI教育"
        ogImage={HERO_IMG}
        jsonLd={jsonLd}
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-gradient-to-b from-sky via-sky to-[oklch(0.65_0.16_230)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[5%]"
          >
            <Sun className="w-16 h-16 text-sunshine opacity-60" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[15%] right-[8%]"
          >
            <Sparkles className="w-12 h-12 text-white/40" />
          </motion.div>
          <div className="absolute top-[8%] left-[30%] w-32 h-12 bg-white/20 rounded-full blur-sm" />
          <div className="absolute top-[20%] right-[20%] w-28 h-10 bg-white/15 rounded-full blur-sm" />
        </div>

        <div className="container relative z-10 pt-24 pb-12 md:pt-28 md:pb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <Sun className="w-4 h-4 text-sunshine" />
                <span className="text-white/90 text-sm font-medium font-['Noto_Sans_SC']">
                  2026年夏季 · 為期8週
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 font-['Noto_Sans_SC']">
                乾淨校園
                <br />
                <span className="text-sunshine">夏令營</span>
              </h1>

              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl mb-8 font-['Noto_Sans_SC']">
                為期8週的善良、創意和探索冒險，適合4-16歲兒童。
                超過100部精選教育影片與節目，在最安全的兒童平台上學習成長。
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#join"
                  className="inline-flex items-center justify-center rounded-full bg-sunshine px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-sunshine-dark transition-all hover:scale-105 hover:shadow-2xl no-underline font-['Noto_Sans_SC']"
                >
                  立即加入 — 完全免費
                </a>
                <a
                  href="#weekly-themes"
                  className="inline-flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 px-8 py-4 text-lg font-bold text-white hover:bg-white/30 transition-all no-underline font-['Noto_Sans_SC']"
                >
                  探索主題
                </a>
              </div>

              <div className="flex flex-wrap gap-6 mt-10">
                {[
                  { num: "100+", label: "影片與節目" },
                  { num: "8", label: "主題週" },
                  { num: "4-16", label: "歲兒童" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-2xl md:text-3xl font-extrabold text-sunshine">
                      {s.num}
                    </div>
                    <div className="text-white/70 text-sm font-['Noto_Sans_SC']">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={HERO_IMG} alt="孩子們享受夏令營活動" className="w-full h-auto" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-sky/30 to-transparent" />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-2xl shadow-xl p-3 md:p-4"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-meadow/20 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-meadow" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-foreground font-['Noto_Sans_SC']">100% 安全</div>
                    <div className="text-xs text-muted-foreground font-['Noto_Sans_SC']">無廣告平台</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="hidden md:flex justify-center mt-12"
          >
            <a href="#about" className="text-white/50 hover:text-white/80 transition-colors no-underline">
              <ArrowDown className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            ref={aboutRef}
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block bg-sky/10 text-sky font-semibold text-sm px-4 py-1.5 rounded-full mb-4 font-['Noto_Sans_SC']">
              關於活動
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 font-['Noto_Sans_SC']">
              一個充滿<span className="text-sky">學習</span>、
              <span className="text-sunshine-dark">歡樂</span>與
              <span className="text-meadow">善良</span>的夏天
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-['Noto_Sans_SC']">
              乾淨校園夏令營是為期8週的線上活動，孩子們可以探索精選的教育內容、培養良好品格、享受樂趣——全部在世界上最安全的數位平台上進行。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {features.map((f, i) => (
              <AnimatedCard key={f.title} delay={i * 0.15}>
                <div className="group relative bg-white rounded-2xl border border-border/50 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-sunshine flex items-center justify-center font-display font-extrabold text-white text-lg shadow-md">
                    {i + 1}
                  </div>
                  <div className={`w-14 h-14 rounded-2xl ${f.color} flex items-center justify-center mb-5`}>
                    <f.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 font-['Noto_Sans_SC']">{f.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed font-['Noto_Sans_SC']">{f.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedCard>
              <div className="relative rounded-3xl overflow-hidden shadow-lg">
                <img src={ACTIVITIES_IMG} alt="孩子們參與創意夏令營活動" className="w-full h-auto" loading="lazy" />
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.2}>
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-6 font-['Noto_Sans_SC']">
                  我們的夏令營有什麼特別？
                </h3>
                <div className="space-y-5">
                  {[
                    { icon: BookOpen, title: "教育家精選", desc: "內容由認證教育家和兒童發展專家精心挑選。" },
                    { icon: Users, title: "適合所有年齡", desc: "三個年齡段：幼兒探索（4歲以下）、快樂學習（5-7歲）和成長思維（8-16歲）。" },
                    { icon: Sparkles, title: "超越螢幕時間", desc: "每週包含線下活動、善良挑戰和創意項目。" },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-11 h-11 rounded-xl bg-sky/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-sky" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-lg text-foreground mb-1 font-['Noto_Sans_SC']">{item.title}</h4>
                        <p className="text-muted-foreground text-base leading-relaxed font-['Noto_Sans_SC']">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* ===== AGE GROUPS ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            ref={ageRef}
            initial={{ opacity: 0, y: 20 }}
            animate={ageInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block bg-sky/10 text-sky font-semibold text-sm px-4 py-1.5 rounded-full mb-4 font-['Noto_Sans_SC']">
              適齡內容
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 font-['Noto_Sans_SC']">
              探索我們的<span className="text-sky">節目</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-['Noto_Sans_SC']">
              內容按年齡組別精心編排，確保每個孩子都能獲得適合的體驗。
            </p>
          </motion.div>

          <div className="flex justify-center gap-3 mb-12">
            {ageGroups.map((g, i) => (
              <button
                key={g.id}
                onClick={() => setActiveAge(i)}
                className={`flex flex-col items-center gap-1 px-5 py-3 rounded-2xl transition-all font-display ${
                  activeAge === i
                    ? `${g.color} text-white shadow-lg scale-105`
                    : "bg-white border border-border hover:border-sky/30 text-foreground"
                }`}
              >
                <g.icon className="w-5 h-5" />
                <span className="font-bold text-sm font-['Noto_Sans_SC']">{g.label}</span>
                <span className={`text-xs font-['Noto_Sans_SC'] ${activeAge === i ? "text-white/80" : "text-muted-foreground"}`}>
                  {g.age}
                </span>
              </button>
            ))}
          </div>

          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className={`rounded-3xl ${group.lightColor} p-8 md:p-12`}>
              <div className="flex items-center gap-3 mb-4">
                <group.icon className={`w-7 h-7 ${group.textColor}`} />
                <h3 className="font-display text-2xl font-bold text-foreground font-['Noto_Sans_SC']">
                  {group.label}{" "}
                  <span className="text-muted-foreground font-normal text-lg">({group.age})</span>
                </h3>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 font-['Noto_Sans_SC']">{group.description}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {group.shows.map((show) => (
                  <div key={show.name} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg ${group.lightColor} flex items-center justify-center shrink-0`}>
                        <Play className={`w-4 h-4 ${group.textColor}`} />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-foreground mb-1">{show.name}</h4>
                        <p className="text-muted-foreground text-base font-['Noto_Sans_SC']">{show.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== WEEKLY THEMES ===== */}
      <section id="weekly-themes" className="py-20 md:py-28 bg-cream">
        <div className="container">
          <motion.div
            ref={weekRef}
            initial={{ opacity: 0, y: 20 }}
            animate={weekInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block bg-sunshine/15 text-sunshine-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-4 font-['Noto_Sans_SC']">
              為期8週
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 font-['Noto_Sans_SC']">
              每週<span className="text-sunshine-dark">主題</span>與
              <span className="text-sky">探索</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-['Noto_Sans_SC']">
              每週帶來全新主題，包含精選影片、創意活動和善良挑戰，啟發和教育孩子。
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-10">
            {displayedWeeks.map((week, i) => (
              <WeekCard key={week.num} week={week} index={i} />
            ))}
          </div>

          {!showAllWeeks && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAllWeeks(true)}
                className="inline-flex items-center justify-center rounded-full bg-sky px-8 py-3 text-base font-bold text-white shadow-lg hover:bg-[oklch(0.6_0.17_230)] transition-all hover:scale-105 font-['Noto_Sans_SC']"
              >
                查看全部8週
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===== FEATURED VIDEO ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <AnimatedCard>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block bg-coral/15 text-coral font-semibold text-sm px-4 py-1.5 rounded-full mb-4 font-['Noto_Sans_SC']">
                <Play className="w-3.5 h-3.5 inline-block mr-1 -mt-0.5" />
                精選影片
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 font-['Noto_Sans_SC']">
                觀看夏令營<span className="text-sky">精彩內容</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-['Noto_Sans_SC']">
                了解乾淨校園夏令營如何通過安全、精選和以善良為核心的內容，改變兒童的數位教育體驗。
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.15}>
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-foreground/5">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src={VIDEO_EMBED_URL}
                    title="乾淨校園夏令營 — 精選影片"
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
                  href={VIDEO_WATCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky hover:text-sky/80 font-medium"
                >
                  乾淨世界
                </a>{" "}
                上觀看
              </p>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* ===== WHY GAN JING ===== */}
      <section id="why-ganjing" className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            ref={whyRef}
            initial={{ opacity: 0, y: 20 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block bg-meadow/15 text-meadow font-semibold text-sm px-4 py-1.5 rounded-full mb-4 font-['Noto_Sans_SC']">
              安全可信
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 font-['Noto_Sans_SC']">
              為什麼家長<span className="text-sky">信賴</span>乾淨校園
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-['Noto_Sans_SC']">
              採用三層安全模型，專為家長的安心而設計。100%的家長表示從未或很少看到有害內容。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {safetyFeatures.map((f, i) => (
              <AnimatedCard key={f.title} delay={i * 0.15}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-sky/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-2xl font-extrabold text-sky">{f.num}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 font-['Noto_Sans_SC']">{f.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed font-['Noto_Sans_SC']">{f.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="relative rounded-3xl overflow-hidden mb-20">
            <img src={KINDNESS_IMG} alt="孩子們展現善良" className="w-full h-64 md:h-80 object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-sky/90 to-sky/70 flex items-center justify-center">
              <div className="text-center px-6">
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 font-['Noto_Sans_SC']">
                  100% 家長認可
                </h3>
                <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-['Noto_Sans_SC']">
                  家長表示在乾淨世界平台上從未或很少看到有害內容。
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((b, i) => (
              <AnimatedCard key={b.title} delay={i * 0.15}>
                <div className="bg-cream rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-sunshine/15 flex items-center justify-center mb-4">
                    <b.icon className="w-6 h-6 text-sunshine-dark" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 font-['Noto_Sans_SC']">{b.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed font-['Noto_Sans_SC']">{b.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials" className="py-20 md:py-28 bg-sky-light">
        <div className="container">
          <motion.div
            ref={testRef}
            initial={{ opacity: 0, y: 20 }}
            animate={testInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block bg-sky/15 text-sky font-semibold text-sm px-4 py-1.5 rounded-full mb-4 font-['Noto_Sans_SC']">
              用戶評價
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 font-['Noto_Sans_SC']">
              <span className="text-sky">教育家</span>與
              <span className="text-sunshine-dark">家長</span>怎麼說
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <Quote className="absolute top-6 left-6 w-10 h-10 text-sky/20" />
              <blockquote className="relative z-10">
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed italic mb-6 pl-8 font-['Noto_Sans_SC']">
                  「{expertQuote.text}」
                </p>
                <footer className="flex items-center gap-4 pl-8">
                  <div className="w-12 h-12 rounded-full bg-sky/15 flex items-center justify-center">
                    <span className="font-display font-bold text-sky text-lg">{expertQuote.author[0]}</span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground">{expertQuote.author}</div>
                    <div className="text-sm text-muted-foreground font-['Noto_Sans_SC']">{expertQuote.role}</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {visibleCards.map((t) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-md"
              >
                <StarRating count={t.stars} />
                <p className="text-foreground/80 leading-relaxed mt-4 mb-6 text-base md:text-lg font-['Noto_Sans_SC']">
                  「{t.text}」
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sunshine/15 flex items-center justify-center">
                    <span className="font-display font-bold text-sunshine-dark text-sm">{t.author[0]}</span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground text-base">{t.author}</div>
                    <div className="text-sm text-muted-foreground font-['Noto_Sans_SC']">{t.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-3 mt-8">
            <button
              onClick={() => setTestPage((p) => (p - 1 + totalPages) % totalPages)}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-foreground/60 hover:text-sky transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestPage(i)}
                  className={`h-2.5 rounded-full transition-all ${i === testPage ? "bg-sky w-6" : "bg-sky/30 w-2.5"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setTestPage((p) => (p + 1) % totalPages)}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-foreground/60 hover:text-sky transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section id="join" className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={CTA_BG} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-br from-sky/92 via-sky/88 to-[oklch(0.55_0.2_230)]/90" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-64 h-64 border-4 border-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-32 -left-32 w-80 h-80 border-4 border-white/10 rounded-full"
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6"
            >
              <Sun className="w-4 h-4 text-sunshine" />
              <span className="text-white/90 text-sm font-medium font-['Noto_Sans_SC']">2026年夏令營報名開放</span>
            </motion.div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 font-['Noto_Sans_SC']">
              準備好迎接
              <br />
              <span className="text-sunshine">最精彩的夏天</span>了嗎？
            </h2>

            <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-['Noto_Sans_SC']">
              加入數千個家庭和教育工作者，一起展開為期8週的善良、創意和探索之旅。對所有參與者完全免費。
            </p>

            <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-10 text-left">
              {ctaBenefits.map((b, i) => (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, x: -10 }}
                  animate={ctaInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-2.5"
                >
                  <CheckCircle className="w-5 h-5 text-sunshine shrink-0" />
                  <span className="text-white/90 text-base font-['Noto_Sans_SC']">{b}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={CAMPUS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sunshine px-10 py-4 text-lg font-bold text-white shadow-xl hover:bg-sunshine-dark transition-all hover:scale-105 hover:shadow-2xl no-underline font-['Noto_Sans_SC']"
              >
                加入夏令營
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={CAMPUS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border-2 border-white/30 px-10 py-4 text-lg font-bold text-white hover:bg-white/25 transition-all no-underline font-['Noto_Sans_SC']"
              >
                了解更多
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
