/*
 * 第四屆《善念點亮台灣》 campaign call-out (Chinese pages).
 * Details from the official rules article on the @乾淨校園 channel:
 * https://www.ganjingworld.com/article/1ipm7ju60ok2brmeBhARSbVNC1lo1c
 * `compact` renders a short banner; the default renders the full section.
 */
import {
  ArrowUpRight,
  CalendarDays,
  Camera,
  Paintbrush,
  Trophy,
  Users,
  School,
  Mail,
} from "lucide-react";

const RULES_ARTICLE = "https://www.ganjingworld.com/article/1ipm7ju60ok2brmeBhARSbVNC1lo1c";
const CAMPAIGN_CHANNEL = "https://www.ganjingworld.com/channel/1ft104rf3035U7Xp2If1fddH917o0c";
const CAMPAIGN_HASHTAG = "https://www.ganjingworld.com/hashtag/%E5%96%84%E5%BF%B5%E9%BB%9E%E4%BA%AE%E5%8F%B0%E7%81%A3";
const CONTACT_EMAIL = "creators@ganjingworld.com";

const timeline = [
  { label: "投稿期間", value: "即日起至 2027 年 3 月 31 日止" },
  { label: "公布得獎名單", value: "預定 2027 年 4 月 30 日" },
  { label: "紐約時代廣場活動", value: "預定 2027 年夏季（實際日期另行公告）" },
];

const categories = [
  {
    icon: Camera,
    name: "A. 影片創作組",
    tag: "#影片創作組",
    desc: "真實故事紀錄、人物採訪、微電影、動畫、直式短影音等皆可。影片至少 30 秒，橫式或直式均可；非中文作品請加中文字幕。",
    prizes: ["金賞 1 名：US$2,000 及獎狀", "銀賞 1 名：US$1,000 及獎狀", "銅賞 10 名：每名 US$500 及獎狀", "優秀獎若干名：獎品及獎狀"],
  },
  {
    icon: Paintbrush,
    name: "B. 繪畫創作組",
    tag: "#繪畫創作組",
    desc: "分 6–8 歲、9–11 歲、12–14 歲、15–18 歲四個年齡段。水彩、蠟筆、水墨、拼貼、數位手繪等平面創作皆可；完全由 AI 生成的圖片不得參賽。",
    prizes: ["頭獎共 4 名（每個年齡段 1 名）：US$500 及獎狀", "優秀獎若干名：乾淨樂學 US$88 及獎狀"],
  },
];

const steps = [
  "在乾淨世界註冊個人、學校、團體或企業頻道",
  "創作符合「善念接力・讓世界改變」主題的原創影片或繪畫作品",
  "將作品發布在乾淨世界頻道，標題或說明中加上活動標籤（見下方）",
  "依主辦單位公布的報名方式填寫參賽資料，並保持作品公開",
  "作品按讚數達 100 即符合參賽門檻，可進入評選",
];

export default function KindnessTaiwanCampaign({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section className="py-10 bg-gradient-to-r from-coral/15 via-sunshine/15 to-coral/15">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl font-['Noto_Sans_SC']">
          <div className="text-center md:text-left">
            <p className="text-coral font-bold mb-1">🫶 第四屆《善念點亮台灣》徵件中・總獎金 US$10,000 以上</p>
            <p className="text-foreground text-lg">
              拍下一個善行・畫出心中的善良！影片組與繪畫組同步徵件至 2027 年 3 月 31 日，優秀作品有機會登上紐約時代廣場。
            </p>
          </div>
          <a
            href={RULES_ARTICLE}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-bold text-white shadow hover:scale-105 transition-transform"
          >
            活動章程
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-coral/10 via-cream to-sunshine/15 font-['Noto_Sans_SC']">
      <div className="container max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-coral/15 text-coral font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            🫶 善念接力・讓世界改變
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
            第四屆《善念點亮台灣》
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-5">
            善念不分大小，一句關心、一個陪伴、一份體諒，都可能成為改變世界的開始。
            邀請影音創作者、學校師生、家庭與社會大眾，用影片記錄善行，用畫筆描繪善良。
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-sunshine/25 px-5 py-2 font-bold text-foreground">
            <Trophy className="w-5 h-5 text-sunshine-dark" />
            總獎金 US$10,000 以上
          </div>
        </div>

        {/* Categories & prizes */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {categories.map((c) => (
            <div key={c.name} className="bg-white rounded-2xl p-7 border border-border/60 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <c.icon className="w-6 h-6 text-coral" />
                <h3 className="font-display text-xl font-bold text-foreground">{c.name}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">{c.desc}</p>
              <ul className="space-y-1.5">
                {c.prizes.map((p) => (
                  <li key={p} className="flex gap-2 text-foreground">
                    <Trophy className="w-4 h-4 text-sunshine-dark shrink-0 mt-1" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* How to enter & timeline */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-2xl p-7 border border-border/60 shadow-sm">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">參加辦法</h3>
            <ol className="space-y-3 text-muted-foreground list-decimal pl-5 mb-5">
              {steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <div className="rounded-xl bg-coral/10 p-4 text-sm leading-relaxed">
              <p className="font-semibold text-foreground mb-1">必加活動標籤</p>
              <p className="text-muted-foreground">
                一般參賽：
                <a href={CAMPAIGN_HASHTAG} target="_blank" rel="noopener noreferrer" className="font-semibold text-coral hover:underline">
                  #善念點亮台灣
                </a>{" "}
                ＋ #影片創作組 或 #繪畫創作組
              </p>
              <p className="text-muted-foreground">校園參賽：再加上 #友善校園</p>
              <p className="text-muted-foreground mt-1">「#」請用半形，且與文字之間不可有空格。</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-border/60 shadow-sm">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">活動時程</h3>
            <ul className="space-y-4 mb-6">
              {timeline.map((t) => (
                <li key={t.label} className="flex gap-3">
                  <CalendarDays className="w-5 h-5 text-sky shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm text-muted-foreground">{t.label}</div>
                    <div className="font-semibold text-foreground">{t.value}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 text-muted-foreground">
              <Users className="w-5 h-5 text-sky shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">
                歡迎全球個人或團體參加：學生、教師、親子家庭、社區志工、公益組織及企業。未滿 18 歲須取得家長或法定代理人同意。
              </p>
            </div>
          </div>
        </div>

        {/* Friendly campus recognition */}
        <div className="bg-white rounded-2xl p-7 border border-border/60 shadow-sm mb-10 flex gap-4">
          <School className="w-7 h-7 text-meadow shrink-0" />
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">友善校園表揚</h3>
            <p className="text-muted-foreground leading-relaxed">
              鼓勵學校師生共同參與，主辦單位得視投稿情況增設「友善校園優選」、「最佳指導教師」、「校園團體參與獎」及「善念班級獎」，
              以獎狀、獎品或合作廠商禮品表揚。
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={RULES_ARTICLE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-coral px-8 py-3.5 text-lg font-bold text-white shadow-lg hover:scale-105 transition-transform"
          >
            閱讀完整活動章程
            <ArrowUpRight className="w-5 h-5" />
          </a>
          <a
            href={CAMPAIGN_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-coral px-8 py-3 text-lg font-bold text-coral hover:bg-coral/10 transition-colors"
          >
            善念點亮台灣頻道
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
          <Mail className="w-4 h-4" />
          活動聯絡信箱：
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-coral hover:underline">
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}
