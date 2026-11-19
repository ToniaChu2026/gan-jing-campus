/*
 * 第四屆《善念點亮台灣》 campaign call-out (Chinese pages).
 * Details from the @乾淨校園 channel creator message.
 * `compact` renders a short banner; the default renders the full section.
 */
import { ArrowUpRight, CalendarDays, Camera, Paintbrush, Trophy } from "lucide-react";

const CAMPAIGN_CHANNEL = "https://www.ganjingworld.com/channel/1ft104rf3035U7Xp2If1fddH917o0c";
const CAMPAIGN_HASHTAG = "https://www.ganjingworld.com/hashtag/%E5%96%84%E5%BF%B5%E9%BB%9E%E4%BA%AE%E5%8F%B0%E7%81%A3";

const timeline = [
  { label: "徵件日期", value: "即日起至 2027 年 3 月 31 日止" },
  { label: "公布獲獎名單", value: "2027 年 4 月 30 日" },
  { label: "紐約時代廣場慶祝活動", value: "2027 年 7 月" },
];

export default function KindnessTaiwanCampaign({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section className="py-10 bg-gradient-to-r from-coral/15 via-sunshine/15 to-coral/15">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl font-['Noto_Sans_SC']">
          <div className="text-center md:text-left">
            <p className="text-coral font-bold mb-1">🫶 第四屆《善念點亮台灣》徵件中</p>
            <p className="text-foreground text-lg">
              拍下一個善行・畫出心中的善良，優秀作品有機會登上紐約時代廣場大螢幕！徵件至 2027 年 3 月 31 日。
            </p>
          </div>
          <a
            href={CAMPAIGN_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-bold text-white shadow hover:scale-105 transition-transform"
          >
            活動詳情
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
          <p className="text-muted-foreground text-lg leading-relaxed">
            一個人的善念，可以溫暖一個人；一群人的善行，可以改變一座城市。
            邀請您用影片記錄善行，用畫筆描繪善良。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl p-7 border border-border/60 shadow-sm">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">如何參加</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <Camera className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span>拍下一個善行，或</span>
              </li>
              <li className="flex gap-3">
                <Paintbrush className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span>畫出心中的善良</span>
              </li>
              <li className="flex gap-3">
                <span className="w-5 text-center text-coral font-bold shrink-0">#</span>
                <span>
                  在乾淨世界發布影片或繪畫作品，並帶上{" "}
                  <a
                    href={CAMPAIGN_HASHTAG}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-coral hover:underline"
                  >
                    #善念點亮台灣
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Trophy className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span>優秀影片及繪畫作品將有機會登上紐約時代廣場大螢幕，向世界傳遞善良的力量</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-border/60 shadow-sm">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">活動時程</h3>
            <ul className="space-y-4">
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
          </div>
        </div>

        <div className="text-center">
          <a
            href={CAMPAIGN_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-coral px-8 py-3.5 text-lg font-bold text-white shadow-lg hover:scale-105 transition-transform"
          >
            查看活動詳情與宣傳影片
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
