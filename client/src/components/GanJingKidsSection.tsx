/*
 * Gan Jing Kids (乾淨樂學) — the family membership on Gan Jing World.
 * Content from https://www.ganjingworld.com/gjkids and /gjkids/shows.
 */
import { ArrowUpRight, BookOpen, FlaskConical, Languages, Printer, ShieldCheck, Tv } from "lucide-react";

type Lang = "en" | "zh";

const GJW = "https://www.ganjingworld.com";

const copy = {
  en: {
    badge: "For Families",
    heading: ["Gan Jing Kids: ", "safe shows & learning for the whole family"],
    intro:
      "Safe entertainment and meaningful learning for kids: content reviewed by educators, age-appropriate, with kids' privacy protected.",
    features: [
      { icon: Languages, title: "International Chinese", text: "HSK- and AP-aligned lessons, characters, idioms and classical readings." },
      { icon: BookOpen, title: "English Language Arts", text: "Fables, myths and phonics, plus ESL vocabulary practice: 6,345 words, five ways to drill." },
      { icon: FlaskConical, title: "STEM and more", text: "“Why” videos like Wonder Together: why planes stay up, where rain comes from." },
      { icon: Tv, title: "6,000+ titles", text: "Kids' shows and originals, with GJW+ premium streaming included." },
      { icon: Printer, title: "Printable resources", text: "Worksheets and activities to keep learning off-screen." },
      { icon: ShieldCheck, title: "Safety first", text: "Reviewed by educators, age-appropriate, with kids' privacy protected." },
    ],
    showsTitle: "Original shows",
    shows: [
      { img: "/images/gjk-monkey-king.webp", title: "Monkey King Adventures", note: "All-new for 2026" },
      { img: "/images/gjk-mina.webp", title: "Mina", note: "2024 animated film · 94 min" },
      { img: "/images/gjk-wonder-together.webp", title: "Wonder Together – STEM", note: "Why planes stay up, where rain comes from" },
      { img: "/images/gjk-kiki-storybirds.webp", title: "Kiki Storybirds", note: "Songs and classic fairy tales" },
      { img: "/images/gjk-leo-friends.webp", title: "Leo & Friends Sing Along", note: "Learn as you sing" },
    ],
    price: "7-day free trial, then $6.99/month. Cancel anytime.",
    trial: "Start 7-day free trial",
    browse: "Browse all shows",
    home: `${GJW}/gjkids`,
    showsUrl: `${GJW}/gjkids/shows`,
    font: "",
  },
  zh: {
    badge: "給家庭",
    heading: ["乾淨樂學：", "全家安心的節目與學習"],
    intro: "為孩子打造安全的娛樂與有意義的學習：內容經教育工作者審核、適齡，並保護孩子的隱私。",
    features: [
      { icon: Languages, title: "國際中文", text: "對應 HSK 與 AP 的課程，學生字、成語和經典誦讀。" },
      { icon: BookOpen, title: "英語文", text: "寓言、神話與自然發音，還有 6,345 個英文單字、五種練習方式。" },
      { icon: FlaskConical, title: "STEM 與更多", text: "《Wonder Together》等「為什麼」影片：飛機為什麼能飛、雨從哪裡來。" },
      { icon: Tv, title: "6,000+ 部作品", text: "兒童節目與原創作品，並包含 GJW+ 高級影視。" },
      { icon: Printer, title: "可列印學習資源", text: "學習單與活動，讓學習延伸到螢幕之外。" },
      { icon: ShieldCheck, title: "安全第一", text: "教育工作者審核、適齡，並保護孩子的隱私。" },
    ],
    showsTitle: "原創節目",
    shows: [
      { img: "/images/gjk-monkey-king.webp", title: "Monkey King Adventures", note: "2026 全新推出" },
      { img: "/images/gjk-mina.webp", title: "Mina", note: "2024 動畫電影 · 94 分鐘" },
      { img: "/images/gjk-wonder-together.webp", title: "Wonder Together – STEM", note: "飛機為什麼能飛、雨從哪裡來" },
      { img: "/images/gjk-kiki-storybirds.webp", title: "Kiki Storybirds", note: "歌曲與經典童話故事" },
      { img: "/images/gjk-leo-friends.webp", title: "Leo & Friends Sing Along", note: "邊唱邊學" },
    ],
    price: "7 天免費試用，之後每月 US$6.99，可隨時取消。",
    trial: "開始 7 天免費試用",
    browse: "瀏覽全部節目",
    home: `${GJW}/zh-TW/gjkids`,
    showsUrl: `${GJW}/zh-TW/gjkids/shows`,
    font: " font-['Noto_Sans_SC']",
  },
} as const;

export default function GanJingKidsSection({ lang = "en" }: { lang?: Lang }) {
  const c = copy[lang];
  return (
    <section id="gan-jing-kids" className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="container max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className={`inline-block bg-coral/15 text-coral font-semibold text-sm px-4 py-1.5 rounded-full mb-4${c.font}`}>
            {c.badge}
          </span>
          <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5${c.font}`}>
            {c.heading[0]}
            <span className="text-sky">{c.heading[1]}</span>
          </h2>
          <p className={`text-muted-foreground text-lg leading-relaxed${c.font}`}>{c.intro}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {c.features.map((f) => (
            <div key={f.title} className="flex gap-4 rounded-2xl bg-white p-5 border border-border/60">
              <div className="w-11 h-11 rounded-xl bg-sky/10 flex items-center justify-center shrink-0">
                <f.icon className="w-5 h-5 text-sky" />
              </div>
              <div>
                <h3 className={`font-display font-bold text-foreground mb-1${c.font}`}>{f.title}</h3>
                <p className={`text-sm text-muted-foreground leading-relaxed${c.font}`}>{f.text}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className={`font-display text-2xl font-bold text-foreground mb-5${c.font}`}>{c.showsTitle}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {c.shows.map((s) => (
            <a
              key={s.title}
              href={c.showsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden bg-white border border-border/60 shadow-sm hover:shadow-lg transition-shadow no-underline"
            >
              <img
                src={s.img}
                alt={s.title}
                width={960}
                height={540}
                className="w-full aspect-video object-cover group-hover:scale-[1.03] transition-transform"
                loading="lazy"
              />
              <div className="p-3">
                <div className="font-display font-bold text-foreground text-sm leading-snug">{s.title}</div>
                <div className={`text-xs text-muted-foreground mt-0.5${c.font}`}>{s.note}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="rounded-3xl bg-white border border-sunshine/40 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className={`text-lg font-semibold text-foreground text-center md:text-left${c.font}`}>{c.price}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={c.home}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full bg-sunshine px-6 py-3 font-bold text-white shadow-lg hover:bg-sunshine-dark transition-colors no-underline${c.font}`}
            >
              {c.trial}
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={c.showsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border-2 border-sky px-6 py-3 font-bold text-sky hover:bg-sky/10 transition-colors no-underline${c.font}`}
            >
              {c.browse}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
