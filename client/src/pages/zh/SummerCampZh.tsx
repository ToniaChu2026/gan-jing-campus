/*
 * Summer Camp Page (Chinese) — Gan Jing Campus
 * Design: Dedicated page for the 8-week Summer Camp program
 * SEO: Per-page meta, JSON-LD Event structured data
 */
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead"; // Assuming this path is correct

// Helper component for section titles
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 font-['Noto_Sans_SC']">
    {children}
  </h2>
);

// Main Component: SummerCampZh
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
        url: "https://www.ganjingworld.com/zh-TW/@乾淨校園",
      },
      organizer: {
        "@type": "Organization",
        name: "乾淨校園",
        url: "https://www.ganjingworld.com/zh-TW/@乾淨校園",
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

  const weeklyThemes = [
    "我的戶外時光",
    "漢語學堂",
    "宇宙與自然",
    "藝術音樂之旅",
    "傳統文化之旅",
    "DIY創意手工",
    "快樂學英文",
    "神祕探索歷險記",
  ];

  return (
    <>
      <SEOHead
        title="乾淨校園夏令營 2026 — 為期8週的善良與創意冒險"
        description="參加乾淨校園2026夏令營：一個為4-16歲兒童設計的免費、為期8週的線上活動。在100%安全、無廣告的環境中探索善良、創意、中華文化、STEM等。"
        canonicalPath="/zh/summer-camp"
        keywords="乾淨校園夏令營 2026, 免費線上夏令營, 兒童暑期活動, 善良品格營, 創意學習, 4-16歲兒童, 無廣告夏令營, 道德AI教育"
        ogImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/hero-banner-iqxoTcBJNU64e8KpLGpYJY.webp"
        jsonLd={jsonLd}
      />

      {/* 1. Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative text-white text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/hero-banner-iqxoTcBJNU64e8KpLGpYJY.webp')",
        }}
      >
        <div className="bg-black bg-opacity-50 py-40 px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl font-extrabold mb-4 font-['Noto_Sans_SC']"
          >
            乾淨校園夏令營
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl max-w-3xl mx-auto font-['Noto_Sans_SC']"
          >
            為期8週的暑期活動，超過100部寓教於樂的影片，每週一個新主題，每天一個新發現，激發您孩子的創意與成長。
          </motion.p>
        </div>
      </motion.div>

      {/* 2. About Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle>關於夏令營</SectionTitle>
          <p className="text-lg text-center text-gray-600 max-w-4xl mx-auto font-['Noto_Sans_SC']">
            「乾淨校園夏令營」為今年暑假帶來新選擇。我們精心策劃了為期8週的線上活動，包含超過100部寓教於樂的兒童影片與節目。讓孩子沉浸在豐富多元的主題活動中，激發創意、啟發成長。家長可參照每週觀影清單，與孩子一起學習，並透過影片、文章或照片分享心得與作品。
          </p>
        </div>
      </div>

      {/* 3. Age Groups */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <SectionTitle>適合年齡</SectionTitle>
          <div className="flex justify-center items-center space-x-8">
             <div className="bg-blue-100 text-blue-800 rounded-full px-8 py-4">
                <div className="text-4xl font-bold">4-10歲</div>
                <div className="text-lg font-['Noto_Sans_SC']">兒童組</div>
             </div>
             <div className="bg-green-100 text-green-800 rounded-full px-8 py-4">
                <div className="text-4xl font-bold">11-16歲</div>
                <div className="text-lg font-['Noto_Sans_SC']">青少年組</div>
             </div>
          </div>
        </div>
      </div>

      {/* 4. Weekly Themes */}
      <div className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle>八週主題探索</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {weeklyThemes.map((theme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">{`第 ${index + 1} 週`}</div>
                <div className="text-lg font-['Noto_Sans_SC'] text-gray-700">{theme}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Why Gan Jing */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle>為何選擇乾淨校園？</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 font-['Noto_Sans_SC']">純淨環境</h3>
              <p className="text-gray-600 font-['Noto_Sans_SC']">我們採用非成癮、有道德的AI，杜絕暴力、色情等有害內容，保護用戶隱私，讓全家安心。</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 font-['Noto_Sans_SC']">回歸傳統</h3>
              <p className="text-gray-600 font-['Noto_Sans_SC']">我們的使命是運用科技回歸傳統價值，恢復善良和誠信，促進孩子的全面發展。</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 font-['Noto_Sans_SC']">全球信賴</h3>
              <p className="text-gray-600 font-['Noto_Sans_SC']">已有來自6大洲、超過1000所學校的400多名教師加入我們，共同為孩子打造正向安全的學習環境。</p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Testimonials Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle>教育家怎麼說</SectionTitle>
          <div className="space-y-8">
            <motion.blockquote
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <p className="text-lg text-gray-700 mb-4 font-['Noto_Sans_SC']">"乾淨世界校園為全球教育工作者提供免費優質頻道與高品質學習資源，讓孩子在安全的環境中學習與成長。"</p>
              <footer className="font-bold text-gray-600">- Adel Mansilla 博士（波士頓）</footer>
            </motion.blockquote>
            <motion.blockquote
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <p className="text-lg text-gray-700 mb-4 font-['Noto_Sans_SC']">"乾淨校園優先考慮教育而非參與度指標，提供精心策劃的、具有文化豐富性的媒體，促進全面兒童發展。這是兒童數位媒體的範式轉變。"</p>
              <footer className="font-bold text-gray-600">- Boris Wittgen（認證教育家與學校發展培訓師）</footer>
            </motion.blockquote>
          </div>
        </div>
      </div>

      {/* 7. CTA Section */}
      <div className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-['Noto_Sans_SC']">準備好開始了嗎？</h2>
          <p className="text-xl text-gray-600 mb-8 font-['Noto_Sans_SC']">立即訪問乾淨校園，開啟您孩子的夏日冒險之旅！</p>
          <motion.a
            href="https://www.ganjingworld.com/zh-TW/@乾淨校園"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-colors hover:bg-blue-700"
          >
            訪問校園
          </motion.a>
        </div>
      </div>
    </>
  );
}
