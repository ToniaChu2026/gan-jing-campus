/*
 * #BeKindBeCool 善良很酷全球大獎 2026–27 (Chinese kindness page).
 * Content from https://www.ganjingworld.com/zh-TW/bekindbecool
 */
import { ArrowUpRight, Award, CalendarDays, HeartHandshake, Landmark, Quote, Smile, Trophy, Users } from "lucide-react";

const GJW = "https://www.ganjingworld.com";
const BKBC = `${GJW}/zh-TW/bekindbecool`;
const HASHTAG = `${GJW}/hashtag/BeKindBeCool`;

const keyFacts = [
  { icon: Trophy, value: "US$10,000", label: "總獎金" },
  { icon: Landmark, value: "時代廣場", label: "巨型螢幕展示" },
  { icon: CalendarDays, value: "2027年3月31日", label: "投稿截止" },
  { icon: Award, value: "2027年4月30日", label: "公布得獎者" },
];

const entryLinks = [
  { label: "如何參加", href: `${BKBC}/join.html`, primary: true },
  { label: "校園專區", href: `${BKBC}/schools.html` },
  { label: "創作者專區", href: `${BKBC}/kindness-star.html` },
];

const winners = [
  {
    img: "/images/bkbc-winner-grades-1-3.webp",
    w: 672,
    h: 497,
    alt: "學生畫作：考試時安慰緊張的同學",
    name: "EM",
    grade: "1–3 年級",
    school: "McKinley Elementary",
  },
  {
    img: "/images/bkbc-winner-grades-4-6.webp",
    w: 672,
    h: 926,
    alt: "學生畫作：女孩在廚房幫媽媽準備晚餐",
    name: "S.P.",
    grade: "4–6 年級",
    school: "Vera's Art School",
  },
  {
    img: "/images/bkbc-winner-grades-7-9.webp",
    w: 672,
    h: 556,
    alt: "學生畫作：路人陪伴視障者過馬路",
    name: "A.C.",
    grade: "7–9 年級",
    school: "Vera's Art Studio",
  },
  {
    img: "/images/bkbc-winner-grades-10-12.webp",
    w: 672,
    h: 882,
    alt: "學生畫作：兩隻手捧著愛心，寫著「友善待人 乾淨世界」",
    name: "JW",
    grade: "10–12 年級",
    school: "Burnt Hills–Ballston Lake HS",
  },
];

const whyKindness = [
  { icon: Users, value: "約 20%", title: "霸凌減少", text: "在建立善良文化的學校中，霸凌減少約 20%。" },
  { icon: HeartHandshake, value: "會擴散", title: "善良具感染力", text: "一個善舉會擴散至朋友的朋友。" },
  { icon: Smile, value: "更快樂", title: "善良提升幸福感", text: "經證實能讓孩子更快樂、更健康。" },
];

const schools = [
  {
    img: "/images/bkbc-school-lumen.webp",
    place: "美國麻州沃爾瑟姆",
    name: "Lumen Academy",
    text: "從學前到八年級的學生，以「善良傘」為主題創作文章與影片，建立以同理心為核心的校園文化。",
  },
  {
    img: "/images/bkbc-school-bhbl.webp",
    place: "美國紐約州北部",
    name: "Burnt Hills–Ballston Lake",
    text: "九年級學生以影片分享善良對他們的意義，打造更溫暖、更緊密的校園。",
  },
  {
    img: "/images/bkbc-school-clearview.webp",
    place: "加拿大",
    name: "Clearview Kidsland",
    text: "青少年在以善良與社群為本的夏令營中，成長為領袖與創業家。",
  },
  {
    img: "/images/bkbc-school-em-normandie.webp",
    place: "法國巴黎",
    name: "EM Normandie 商學院",
    text: "教授與學生以多種語言，在同一個校園裡分享善良的意義。",
  },
  {
    img: "/images/bkbc-school-batam.webp",
    place: "印尼巴淡島",
    name: "SMPN 29 Batam",
    text: "951 名學生與 32 位老師結合創意與善良，培育富有同情心的未來領袖。",
  },
  {
    img: "/images/bkbc-school-chaosheng.webp",
    place: "台灣屏東",
    name: "潮昇國小",
    text: "得獎學生以充滿活力與喜悅的善良舞蹈，點亮台灣。",
  },
];

const states = [
  { state: "新澤西州", by: "州長 Mikie Sherrill", href: `${GJW}/article/1il1l8v3ppn4ieumia4NDtxG611k1c`, cta: "閱讀信函" },
  { state: "麻薩諸塞州", by: "州長 Maura Healey、副州長 Kim Driscoll", href: `${GJW}/news/1ild6923e5i52kdHN9jloSvXT1291c`, cta: "閱讀信函" },
  { state: "田納西州", by: "州長 Bill Lee", href: `${GJW}/news/1imnbt3ndng4dqdsBhCVZwYPP1qt1c`, cta: "閱讀信函" },
  { state: "佛蒙特州", by: "州長 Phil Scott", href: `${GJW}/news/1imndua88d92FmAubyE6arwev1j61c`, cta: "閱讀公告" },
  { state: "科羅拉多州", by: "州長 Jared Polis", href: `${GJW}/article/1ippj4n7nm216DF7NLHbTzzu31821c`, cta: "閱讀信函" },
];

const impact = [
  { value: "34K+", label: "善良影片" },
  { value: "6,200+", label: "創作者頻道" },
  { value: "50+", label: "個國家" },
  { value: "11", label: "種語言" },
  { value: "1B+", label: "曝光次數" },
  { value: "3 年", label: "登上時代廣場" },
];

const quotes = [
  { text: "我們必須互相幫助——你永遠不知道何時自己也會需要別人的幫助。", by: "John Quiñones", role: "ABC 新聞記者兼主持人" },
  { text: "在這個分歧如此之多的時代，我們需要更多善良、愛與體貼。", by: "James Skoufis", role: "紐約州參議員" },
  { text: "善良與同情心相輔相成。今天就出去做一件好事吧。", by: "Dr. Kristine Young", role: "SUNY Orange 校長" },
];

function SubHeading({ title, text }: { title: string; text?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-8">
      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 text-balance">{title}</h3>
      {text && <p className="text-muted-foreground leading-relaxed text-balance">{text}</p>}
    </div>
  );
}

export default function BeKindBeCoolSectionZh() {
  return (
    <section id="bekindbecool" className="py-20 md:py-28 bg-white font-['Noto_Sans_SC']">
      <div className="container max-w-6xl">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <img
            src="/images/bkbc-wordmark.webp"
            alt="#BeKindBeCool"
            width={2573}
            height={516}
            className="h-12 md:h-14 w-auto mx-auto mb-5"
            loading="lazy"
          />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
            善良很酷全球大獎 <span className="text-sky whitespace-nowrap">2026–27</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            乾淨世界善良很酷全球大獎正式邁入第四屆。每天選擇善良——無論大小——用 #BeKindBeCool
            分享出去，讓善的力量匯聚成一場席捲全球的運動。
          </p>
        </div>

        {/* Key facts */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {keyFacts.map((f) => (
            <div key={f.label} className="rounded-2xl bg-cream px-3 py-5 md:p-5 text-center border border-border/60">
              <f.icon className="w-6 h-6 text-sunshine-dark mx-auto mb-2" />
              <div className="font-display text-lg md:text-2xl font-extrabold text-foreground whitespace-nowrap">{f.value}</div>
              <div className="text-sm text-muted-foreground">{f.label}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mb-6">投稿期間：2026年7月至2027年3月31日</p>
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {entryLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={
                l.primary
                  ? "inline-flex items-center gap-2 rounded-full bg-sunshine px-7 py-3 font-bold text-white shadow-lg hover:bg-sunshine-dark transition-colors no-underline"
                  : "inline-flex items-center gap-2 rounded-full border-2 border-sky px-7 py-3 font-bold text-sky hover:bg-sky/10 transition-colors no-underline"
              }
            >
              {l.label}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* 2025–26 winners */}
        <SubHeading title="2025–26 善良很酷美術獎得獎作品" text="四個年級組的得獎作品，用畫筆描繪身邊的善良。" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-start mb-20">
          {winners.map((w) => (
            <figure key={w.img} className="rounded-2xl overflow-hidden bg-cream border border-border/60">
              <img src={w.img} alt={w.alt} width={w.w} height={w.h} className="w-full h-auto" loading="lazy" />
              <figcaption className="p-3 text-sm">
                <span className="font-bold text-foreground">{w.name}</span>
                <span className="text-muted-foreground"> · {w.grade}</span>
                <div className="text-xs text-muted-foreground mt-0.5">{w.school}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Why kindness matters online */}
        <SubHeading title="網路時代，為何更需要善良" text="更友善的網路，讓年輕人更安全、更樂觀，人與人之間更緊密相連。" />
        <div className="grid md:grid-cols-3 gap-4 mb-3">
          {whyKindness.map((k) => (
            <div key={k.title} className="rounded-2xl bg-cream p-6 border border-border/60 text-center">
              <k.icon className="w-7 h-7 text-coral mx-auto mb-3" />
              <div className="font-display text-2xl font-extrabold text-coral mb-1">{k.value}</div>
              <div className="font-bold text-foreground mb-1">{k.title}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{k.text}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mb-20">
          資料來源：Gaffney et al. 2021 · Fowler &amp; Christakis 2010 · Curry et al. 2018
        </p>

        {/* Schools around the world */}
        <SubHeading
          title="善良正在改變全球校園"
          text="從美國、加拿大到法國、印尼、台灣——從班級到全校，師生都在參與「善良很酷」運動。"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {schools.map((s) => (
            <div key={s.name} className="rounded-2xl overflow-hidden bg-cream border border-border/60">
              <img
                src={s.img}
                alt={`${s.name} 師生參與善良很酷活動`}
                width={672}
                height={378}
                className="w-full aspect-video object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <div className="text-xs font-semibold text-sky mb-1">{s.place}</div>
                <h4 className="font-display text-lg font-bold text-foreground mb-2">{s.name}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition */}
        <div className="rounded-3xl bg-cream p-6 md:p-10 border border-border/60 mb-12">
          <SubHeading title="美國多州政府肯定" text="#BeKindBeCool 已獲各州官方宣告表彰，更多州正陸續加入。" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
            {states.map((s) => (
              <a
                key={s.state}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl bg-white p-4 text-center border border-border/60 hover:shadow-md transition-shadow no-underline"
              >
                <div className="font-display font-bold text-foreground">{s.state}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.by}</div>
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-sky mt-2 group-hover:underline">
                  {s.cta} <ArrowUpRight className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {impact.map((m) => (
              <div key={m.label}>
                <div className="font-display text-2xl md:text-3xl font-extrabold text-sky">{m.value}</div>
                <div className="text-sm text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quotes */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {quotes.map((q) => (
            <blockquote key={q.by} className="rounded-2xl bg-cream p-6 border-l-4 border-sunshine">
              <Quote className="w-5 h-5 text-sunshine-dark mb-2" />
              <p className="text-foreground/80 leading-relaxed mb-3">「{q.text}」</p>
              <footer className="text-sm">
                <div className="font-bold text-foreground">{q.by}</div>
                <div className="text-muted-foreground">{q.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
          <a href={BKBC} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sky hover:underline">
            完整活動頁面 <ArrowUpRight className="w-4 h-4" />
          </a>
          <a href={HASHTAG} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sky hover:underline">
            觀看 #BeKindBeCool 善良影片 <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
