/*
 * Layout — Shared layout for all Gan Jing Campus pages
 * Design: Warm orange-gold brand identity with the official logo
 * Sticky top nav with page links, consistent footer across all pages
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/GJW-Campus-logo_479f2b4f.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Summer Camp", href: "/summer-camp" },
  { label: "For Teachers", href: "/teachers" },
  { label: "Kindness Stories", href: "/kindness" },
  { label: "About", href: "/about" },
];

function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location === "/";

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
            alt="Gan Jing Campus"
            className="h-8 md:h-10 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => {
            const isActive = location === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all no-underline ${
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
          <a
            href="https://www.ganjingworld.com/ganjingcampus"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-sunshine px-5 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-sunshine-dark transition-all hover:scale-105 no-underline"
          >
            Visit Campus
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled || !isHome ? "text-foreground" : "text-white"
          }`}
          aria-label="Toggle menu"
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
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((l) => {
                const isActive = location === l.href;
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
              <a
                href="https://www.ganjingworld.com/ganjingcampus"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-sunshine px-5 py-3 text-sm font-bold text-white shadow-lg no-underline"
              >
                Visit Campus
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
    title: "Explore",
    links: [
      { label: "Home", href: "/", external: false },
      { label: "Summer Camp", href: "/summer-camp", external: false },
      { label: "For Teachers", href: "/teachers", external: false },
      { label: "Kindness Stories", href: "/kindness", external: false },
      { label: "About", href: "/about", external: false },
    ],
  },
  {
    title: "Gan Jing World",
    links: [
      { label: "Gan Jing Campus", href: "https://www.ganjingworld.com/ganjingcampus", external: true },
      { label: "Gan Jing Kids", href: "https://www.ganjingworld.com/gjwplus/kids/ganjingkids", external: true },
      { label: "Gan Jing World", href: "https://www.ganjingworld.com", external: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Teacher Handbook", href: "https://www.ganjingworld.com/news/1i13tdngs6fsEZDUDBoyG2Fto16n1c", external: true },
      { label: "Apply for Premium", href: "https://www.ganjingworld.com/news/1i3csp1t9651d6ebrqpymLf3u1j11c", external: true },
      { label: "Kindness Awards", href: "https://www.ganjingworld.com/news/1htqniht6hp3u3PVR5BpnRHqB1ic1c", external: true },
      { label: "Success Stories", href: "https://www.ganjingworld.com/news/1htqng1kqt45DWMGkHwsYvRcf1gk1c", external: true },
    ],
  },
];

function SiteFooter() {
  return (
    <footer className="bg-[oklch(0.2_0.02_250)] text-white/70">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={LOGO_URL}
                alt="Gan Jing Campus"
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              An ad-free, educator-friendly platform powered by Ethical AI.
              Promoting kindness, creativity, and safe digital learning for
              children worldwide.
            </p>
            <p className="text-xs text-white/40">Powered by Gan Jing World</p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-bold text-white text-sm mb-4">
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
            &copy; {new Date().getFullYear()} Gan Jing World. All rights
            reserved.
          </p>
          <p className="text-xs text-white/40 flex items-center gap-1">
            Made with{" "}
            <Heart className="w-3 h-3 text-coral fill-coral" /> for a kinder
            world
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNavbar />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
