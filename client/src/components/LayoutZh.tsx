/*
 * LayoutZh — Shared layout for Chinese (中文) Gan Jing Campus pages
 * Mirrors the English Layout with translated nav/footer
 * Uses Noto Sans SC for Chinese typography
 *
 * NOTE: This layout is rendered inside a wouter <Route path="/zh" nest> context.
 * useLocation() returns RELATIVE paths (e.g. "/" for /zh, "/summer-camp" for /zh/summer-camp).
 * Link hrefs are also relative. Use "~/" prefix for absolute (top-level) navigation.
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Heart, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/GJW-Campus-logo_479f2b4f.png";

const navLinks = [
  { label: "首頁", href: "/" },
  { label: "夏令營", href: "/summer-camp" },
  { label: "教師專區", href: "/teachers" },
  { label: "善良故事", href: "/kindness" },
  { label: "關於我們", href: "/about" },
];

/* Map relative zh paths → absolute English equivalents */
function zhToEnPath(relPath: string): string {
  if (relPath === "/" || relPath === "") return "~/";
  return `~${relPath}`; // e.g. "/summer-camp" → "~/summer-camp"
}

function SiteNavbarZh() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation(); // relative: "/" | "/summer-camp" | …

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location === "/" || location === "";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline shrink-0">
          <img
            src={LOGO_URL}
            alt="乾淨校園"
            className="h-8 md:h-10 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => {
            const isActive =
              location === l.href ||
              (l.href !== "/" && location.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all no-underline font-['Noto_Sans_SC'] ${
                  isActive
                    ? "bg-sunshine/15 text-sunshine-dark font-bold"
                    : scrolled || !isHome
                    ? "text-foreground/70 hover:text-sunshine-dark hover:bg-sunshine/10"
                    : "text-white/90 hover:text-white hover:bg-white/15"
                }`}
              >
                {l.label}
              </Link>
            );
          })}

          {/* Language switcher → English */}
          <Link
            href={zhToEnPath(location)}
            className={`ml-1 inline-flex items-center gap-1 px-3 py-2 rounded-full text-xs font-medium transition-all no-underline ${
              scrolled || !isHome
                ? "text-foreground/60 hover:text-foreground hover:bg-gray-100"
                : "text-white/70 hover:text-white hover:bg-white/15"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            EN
          </Link>

          <a
            href="https://www.ganjingworld.com/zh-TW/@乾淨校園"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-sunshine px-5 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-sunshine-dark transition-all hover:scale-105 no-underline font-['Noto_Sans_SC']"
          >
            訪問校園
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled || !isHome ? "text-foreground" : "text-white"
          }`}
          aria-label="切換選單"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1 font-['Noto_Sans_SC']">
              {navLinks.map((l) => {
                const isActive =
                  location === l.href ||
                  (l.href !== "/" && location.startsWith(l.href));
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`px-4 py-3 rounded-lg font-medium transition-colors no-underline ${
                      isActive
                        ? "bg-sunshine/15 text-sunshine-dark font-bold"
                        : "text-foreground/80 hover:bg-sky-light"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <Link
                href={zhToEnPath(location)}
                className="px-4 py-3 rounded-lg font-medium transition-colors no-underline text-foreground/60 hover:bg-gray-100 flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                Switch to English
              </Link>
              <a
                href="https://www.ganjingworld.com/zh-TW/@乾淨校園"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-sunshine px-5 py-3 text-sm font-bold text-white shadow-lg no-underline"
              >
                訪問校園
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const footerLinks = [
  {
    title: "探索",
    links: [
      { label: "首頁", href: "/", external: false },
      { label: "夏令營", href: "/summer-camp", external: false },
      { label: "教師專區", href: "/teachers", external: false },
      { label: "善良故事", href: "/kindness", external: false },
      { label: "關於我們", href: "/about", external: false },
    ],
  },
  {
    title: "乾淨世界",
    links: [
      { label: "乾淨校園", href: "https://www.ganjingworld.com/zh-TW/@乾淨校園", external: true },
      { label: "乾淨樂學", href: "https://www.ganjingworld.com/zh-TW/gjwplus/kids/ganjingkids", external: true },
      { label: "乾淨世界", href: "https://www.ganjingworld.com/zh-TW", external: true },
    ],
  },
  {
    title: "資源",
    links: [
      { label: "教師手冊", href: "https://www.ganjingworld.com/zh-TW/article/1i3fdp55sv85HOqeJT2LgXl4y1uh1c", external: true },
      { label: "申請高級頻道", href: "https://www.ganjingworld.com/zh-TW/article/1i314rcntbn2YrFKWDHav9ujW1in1c", external: true },
      { label: "善良很酷獎項", href: "https://www.ganjingworld.com/zh-TW/article/1htqmv7hg1f1t5M4U36HHcFRz1nu1c", external: true },
      { label: "成功案例", href: "https://www.ganjingworld.com/zh-TW/article/1htqmsvbhbp1k8sFHxDWXZRZ61jv1c", external: true },
    ],
  },
];

function SiteFooterZh() {
  return (
    <footer className="bg-[#133960] text-white/70 font-['Noto_Sans_SC']">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={LOGO_URL}
                alt="乾淨校園"
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              無廣告、教師友善的教育平台，由道德AI驅動。
              為全球兒童推廣善良、創意和安全的數位學習。
            </p>
            <p className="text-xs text-white/40">由乾淨世界提供技術支持</p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-white text-sm mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-white transition-colors no-underline text-white/60 hover:text-white/90"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm hover:text-white transition-colors no-underline text-white/60 hover:text-white/90"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} 乾淨世界。保留所有權利。
          </p>
          <p className="text-xs text-white/40 flex items-center gap-1">
            用 <Heart className="w-3 h-3 text-coral fill-coral" /> 打造更善良的世界
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function LayoutZh({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-['Noto_Sans_SC']">
      <SiteNavbarZh />
      <main className="flex-1">{children}</main>
      <SiteFooterZh />
    </div>
  );
}
