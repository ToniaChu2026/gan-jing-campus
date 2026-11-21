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
  Landmark,
  Puzzle,
  Library,
  Clapperboard,
  ArrowUpRight,
  Hash,
  type LucideIcon,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { pageSeo } from "@/lib/seoRoutes";

const HERO_IMG =
  "/images/summer-camp-hero.jpg";
const ACTIVITIES_IMG =
  "/images/activities.jpg";
const KINDNESS_IMG =
  "/images/kindness-section.jpg";
const CTA_BG =
  "/images/summer-cta.jpg";
const VIDEO_EMBED_URL =
  "https://www.ganjingworld.com/embed/1hkfg1b8ls819ca1gaHm04ldx1kf1c";
const VIDEO_WATCH_URL =
  "https://www.ganjingworld.com/zh-TW/video/1hkfg1b8ls819ca1gaHm04ldx1kf1c";
const CAMPUS_URL = "https://www.ganjingworld.com/zh-TW/@乾淨校園";
// 「乾淨校園夏令營」頻道與相關內容
const GJW = "https://www.ganjingworld.com";
const SUMMER_CAMP_CHANNEL = `${GJW}/zh-TW/channel/1gq2kab5rpd52FQlEiPNT6vPE14b0c`;
const CAMP_GUIDE_URL = `${GJW}/zh-TW/article/1gqcq7fpetr3M76F2NDPkLLjT1sk1c`;
const CAMP_HASHTAG_URL = `${GJW}/hashtag/%E4%B9%BE%E6%B7%A8%E6%A0%A1%E5%9C%92%E5%A4%8F%E4%BB%A4%E7%87%9F`;
const ARTICLE = `${GJW}/zh-TW/article/`;

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

// 每週主題與封面圖片取自「乾淨校園夏令營」頻道的觀影任務文章
// （2025 年第1–8週觀影任務）
const weeks: {
  num: number;
  title: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  numBg: string;
  tags: string[];
  desc: string;
  image: string;
  link: string;
}[] = [
  {
    num: 1,
    title: "我的戶外時光",
    icon: Leaf,
    color: "text-meadow",
    bgColor: "bg-meadow/10",
    numBg: "bg-meadow",
    tags: ["戶外探險", "露營", "自然觀察", "運動"],
    desc: "20多部戶外、運動和旅行主題的影視劇與卡通，像《小馬保母俱樂部》、《大自然最了解》和《足球故事》，讓孩子在自然探索與運動挑戰中，培養合作、毅力與勇氣。",
    image: "/images/zh-week-1.webp",
    link: `${ARTICLE}1hinmtnl7jr7aj1oAkgucZzp71ci1c`,
  },
  {
    num: 2,
    title: "漢語學堂",
    icon: BookOpen,
    color: "text-sky",
    bgColor: "bg-sky/10",
    numBg: "bg-sky",
    tags: ["漢字", "古詩詞", "千字文", "成語"],
    desc: "透過《聲律啟蒙》、《千字文》、《中華古詩詞》和《悠遊字在》等系列，走進漢字的祕密花園，在詩詞吟唱與趣味動畫中啟發語感，體驗中文之美。",
    image: "/images/zh-week-2.webp",
    link: `${ARTICLE}1hinrfbqp525ZmblgLRiW1LPJ17f1c`,
  },
  {
    num: 3,
    title: "傳統文化之旅",
    icon: Star,
    color: "text-coral",
    bgColor: "bg-coral/10",
    numBg: "bg-coral",
    tags: ["神話故事", "古詩詞", "傳統文化", "品德"],
    desc: "從奇幻又富歷史感的「天庭小子小乾坤」到「中華古詩詞」系列，讓孩子在神話世界裡學會勇敢與正義，在吟唱中感受文字之美。",
    image: "/images/zh-week-3.webp",
    link: `${ARTICLE}1hiqlnncgpt5XpcEbPP2SfTQt1bg1c`,
  },
  {
    num: 4,
    title: "一起來DIY",
    icon: Palette,
    color: "text-sky",
    bgColor: "bg-sky/10",
    numBg: "bg-sky",
    tags: ["手工", "創意", "動手實作", "合作"],
    desc: "「我們一起做」系列與 Logos 劇院團隊的作品，鼓勵孩子親手實踐、合作完成任務，讓學習在動手和動腦中展開。",
    image: "/images/zh-week-4.webp",
    link: `${ARTICLE}1hivc9fnoct4aoZSG07TudBLJ17h1c`,
  },
  {
    num: 5,
    title: "宇宙與自然",
    icon: Globe,
    color: "text-[oklch(0.55_0.2_280)]",
    bgColor: "bg-[oklch(0.55_0.2_280)]/10",
    numBg: "bg-[oklch(0.55_0.2_280)]",
    tags: ["大自然", "海洋", "動物", "科學"],
    desc: "跟著「阿奇與祖伊的酷知識：帝王企鵝」等寓教於樂的動畫和節目，帶孩子深入極地與海洋，認識大自然的奇妙世界。",
    image: "/images/zh-week-5.webp",
    link: `${ARTICLE}1hivkkukbtv7KDCZZJgY2Kpka1ip1c`,
  },
  {
    num: 6,
    title: "快樂學英語",
    icon: Brain,
    color: "text-meadow",
    bgColor: "bg-meadow/10",
    numBg: "bg-meadow",
    tags: ["英語", "聽力", "表達", "電影"],
    desc: "透過「神奇毛小孩」等充滿創意與幽默的電影和動畫，讓孩子在輕鬆觀賞中提升英文聽力與表達力。",
    image: "/images/zh-week-6.webp",
    link: `${ARTICLE}1hivn6g4bcj7gVDKRmqMMMd4n1am1c`,
  },
  {
    num: 7,
    title: "藝術音樂之旅",
    icon: Music,
    color: "text-coral",
    bgColor: "bg-coral/10",
    numBg: "bg-coral",
    tags: ["音樂", "藝術", "美感", "創造力"],
    desc: "從「寶寶的海蒂」的親子歡唱到「莫札特樂隊」，陪伴孩子展開一段美感與創造力並進的觀影旅程。",
    image: "/images/zh-week-7.webp",
    link: `${ARTICLE}1hivsumd4bu6Vt45Hys98SMPS17h1c`,
  },
  {
    num: 8,
    title: "歷史名人傳",
    icon: Landmark,
    color: "text-sunshine-dark",
    bgColor: "bg-sunshine/10",
    numBg: "bg-sunshine-dark",
    tags: ["歷史人物", "中華文化", "勇氣智慧", "角色扮演"],
    desc: "踏上時光之旅，與歷史名人同行！透過《魏武曹操》、《兵仙韓信》、《漢武帝》和《笑談風雲》等節目，讓孩子在傳奇故事中學習勇氣、智慧與責任。",
    image: "/images/zh-week-8.webp",
    link: `${ARTICLE}1hivunm22ed1V4il7kmDmnPVY17o1c`,
  },
];

// 「乾淨校園夏令營」頻道精選內容
const campChallenges = [
  { label: "【字謎遊戲】", href: `${GJW}/post/1hj9ef4he1l3TccJz0JnhIzGN17o1c` },
  { label: "【善良詩集】", href: `${GJW}/post/1hj2c958nogMhRdlmCzDZCynW1uo1c` },
  { label: "【夏日迷宮】", href: `${GJW}/post/1gqk8j5k7cm18ZLxJ0qRdmPyD1f21c` },
  { label: "畫出屬於你的暑假！", href: `${GJW}/post/1gqk8hkk81f4NUde0m2lD6rEN1p31c` },
  { label: "快樂暑期計劃！", href: `${GJW}/post/1gqk7ufegf4epFArTbvFni2k41ni1c` },
  { label: "畫出星空下的篝火", href: `${GJW}/post/1gqjs2ijoa63QFBSPSGG9J2GV1gu1c` },
  { label: "創作樹葉畫作", href: `${GJW}/post/1gqjrs6jkj75gPpiyMicbpreT1an1c` },
  { label: "【動物世界】", href: `${GJW}/post/1gqjrmlp36g6HqOz6yramz7xD1d51c` },
  { label: "【星際迷航】", href: `${GJW}/post/1gqjrlgmk5b2vbWPdOphjq6tB1v21c` },
  { label: "一起來學天文學", href: `${GJW}/post/1gqjriaec8j5LK0JquXqCQGPx1ca1c` },
];

const campSeries = [
  { label: "【成語故事】系列", href: `${ARTICLE}1hjc9ebdb9v1MHhhlgKMTZWDg1pg1c` },
  { label: "【成語掌門人】系列", href: `${ARTICLE}1hjc9b7u25h4Druw5M5rR31kW15d1c` },
  { label: "【千字文】二十五集系列", href: `${ARTICLE}1hie04pvjul36YSWOyApC47m318a1c` },
  { label: "【傳統書法課堂】系列", href: `${ARTICLE}1hie0h31kub46Xzilegq4rlU014o1c` },
  { label: "【二十四節氣】系列", href: `${ARTICLE}1hj1trra4c53x3fkV7iwWuaji12k1c` },
  { label: "【中華傳統文化】系列", href: `${ARTICLE}1hiqipjjdssxYNwnk39PQEy7D1v11c` },
  { label: "【水彩畫】系列", href: `${ARTICLE}1hjcde707a221IgMnJEusfAee1rv1c` },
  { label: "【手工摺紙】系列", href: `${ARTICLE}1hit7cj21um3KSBjuYrAQWREC1or1c` },
  { label: "【創意點子】系列", href: `${ARTICLE}1hit6b2tqvu6q7canNzrqnxRN1201c` },
  { label: "【快樂小天使故事王國】系列", href: `${ARTICLE}1hiqcm4dj1m20Qexm09ERmkna1he1c` },
  { label: "童子軍戶外探險", href: `${ARTICLE}1hjbsigdic36U1Iy6ZpXyetar1tt1c` },
];

const camperClips = [
  { label: "放暑假啦，一起去戶外野營", href: `${GJW}/zh-TW/video/1hjbto92qij2MvjLO0IyZlOF219n1c` },
  { label: "跟爸爸一起釣小蝌蚪", href: `${GJW}/zh-TW/video/1hjbti51mln58q0S6BWEOxRyB1oh1c` },
  { label: "在大自然徒步騎車", href: `${GJW}/zh-TW/video/1hjbtbi23pj5KHQiLhH2GXLu01sr1c` },
  { label: "戶外繩索攀爬", href: `${GJW}/zh-TW/video/1hjbt2ehqs05oulcesE64URzF1uv1c` },
  { label: "溯溪玩水好開心", href: `${GJW}/zh-TW/video/1hjbu4r3cln5CiuuitDndZEX91ir1c` },
  { label: "夏日游泳", href: `${GJW}/zh-TW/video/1hjbv25s8536Yki15ZQUGNnJb1sd1c` },
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
  "免費參加・$1 解鎖全部影視",
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
        <a
          href={week.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block max-w-sm mt-4 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <img
            src={week.image}
            alt={`第${week.num}週：${week.title}`}
            className="w-full aspect-video object-cover group-hover:scale-[1.02] transition-transform"
            loading="lazy"
          />
        </a>
        <a
          href={week.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 mt-3 text-sm font-semibold ${week.color} hover:underline font-['Noto_Sans_SC']`}
        >
          查看本週觀影任務
          <ArrowUpRight className="w-4 h-4" />
        </a>
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
      <SEOHead {...pageSeo("/zh/summer-camp")} jsonLd={jsonLd} />

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
                  夏令營回顧 · 8週主題
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 font-['Noto_Sans_SC']">
                乾淨校園
                <br />
                <span className="text-sunshine">夏令營</span>
              </h1>

              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl mb-8 font-['Noto_Sans_SC']">
                回顧為期8週的善良、創意和探索冒險，適合4-16歲兒童。
                每週主題與超過100部精選教育影片與節目，仍可在最安全的兒童平台上隨時重溫。
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={SUMMER_CAMP_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-sunshine px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-sunshine-dark transition-all hover:scale-105 hover:shadow-2xl no-underline font-['Noto_Sans_SC']"
                >
                  前往夏令營頻道
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
                <img src={HERO_IMG} width={1400} height={787} alt="孩子們享受夏令營活動" className="w-full h-auto" loading="eager" />
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
      <section id="weekly-themes" className="py-20 md:py-28 bg-cream overflow-hidden">
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
              每週都有全新主題，包含精選影片、創意活動和善良挑戰，啟發和教育孩子。點選任一週即可重溫。
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

      {/* ===== 夏令營頻道精選（乾淨校園夏令營） ===== */}
      <section id="camp-channel" className="py-20 md:py-28 bg-cream">
        <div className="container">
          <AnimatedCard>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block bg-sunshine/15 text-sunshine-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-4 font-['Noto_Sans_SC']">
                乾淨校園夏令營頻道
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 font-['Noto_Sans_SC']">
                更多<span className="text-sky">夏令營活動</span>與學習資源
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-['Noto_Sans_SC']">
                除了每週觀影任務，頻道上還有互動挑戰、延伸學習系列和小營員的精彩分享。
                線上線下一起學習，跟世界各地的小朋友和家長共同成長！
              </p>
            </div>
          </AnimatedCard>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "互動挑戰", icon: Puzzle, color: "text-coral", bg: "bg-coral/10", items: campChallenges },
              { title: "延伸學習系列", icon: Library, color: "text-sky", bg: "bg-sky/10", items: campSeries },
              { title: "小營員的夏日時光", icon: Clapperboard, color: "text-meadow", bg: "bg-meadow/10", items: camperClips },
            ].map((col, i) => (
              <AnimatedCard key={col.title} delay={i * 0.1}>
                <div className="h-full bg-white rounded-2xl p-6 border border-border/60 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${col.bg} flex items-center justify-center`}>
                      <col.icon className={`w-5 h-5 ${col.color}`} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground font-['Noto_Sans_SC']">{col.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-sky hover:underline font-['Noto_Sans_SC']"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedCard delay={0.2}>
            <div className="max-w-4xl mx-auto mt-10 rounded-2xl bg-white border border-sunshine/40 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
              <Hash className="w-10 h-10 text-sunshine-dark shrink-0" />
              <p className="flex-1 text-foreground leading-relaxed font-['Noto_Sans_SC']">
                小營員們用{" "}
                <a href={CAMP_HASHTAG_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-sky hover:underline">
                  #乾淨校園夏令營
                </a>{" "}
                標籤發布照片、影片、短影片或貼文，分享他們的夏日成果。想了解活動怎麼進行？可以看看家長/教師參加指南。
              </p>
              <div className="flex flex-wrap gap-3 shrink-0">
                <a
                  href={CAMP_GUIDE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border-2 border-sky px-5 py-2.5 font-bold text-sky hover:bg-sky/10 transition-colors no-underline font-['Noto_Sans_SC']"
                >
                  參加指南
                </a>
                <a
                  href={SUMMER_CAMP_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-sky px-5 py-2.5 font-bold text-white hover:bg-[oklch(0.6_0.17_230)] transition-colors no-underline font-['Noto_Sans_SC']"
                >
                  前往夏令營頻道
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
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
              <span className="text-white/90 text-sm font-medium font-['Noto_Sans_SC']">夏令營回顧</span>
            </motion.div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 font-['Noto_Sans_SC']">
              一起重溫
              <br />
              <span className="text-sunshine">充滿善良的夏天</span>
            </h2>

            <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-['Noto_Sans_SC']">
              為期8週的善良、創意和探索之旅已圓滿結束，所有主題影片與活動仍保留在夏令營頻道，歡迎家庭和教育工作者隨時重溫。
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
                href={SUMMER_CAMP_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sunshine px-10 py-4 text-lg font-bold text-white shadow-xl hover:bg-sunshine-dark transition-all hover:scale-105 hover:shadow-2xl no-underline font-['Noto_Sans_SC']"
              >
                前往夏令營頻道
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={CAMP_GUIDE_URL}
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
