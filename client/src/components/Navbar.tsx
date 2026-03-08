/*
 * Navbar Component — Gan Jing Summer Camp
 * Design: Sunshine Playground — bold sky blue brand bar with yellow CTA
 * Sticky top nav, transparent on hero then solid on scroll
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Weekly Themes", href: "#weekly-themes" },
  { label: "Why Gan Jing", href: "#why-ganjing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "For Teachers", href: "#teachers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-sky flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
              <circle cx="16" cy="16" r="14" fill="#FFD166" />
              <path d="M10 20 Q16 12 22 20" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <circle cx="12" cy="14" r="2" fill="#fff" />
              <circle cx="20" cy="14" r="2" fill="#fff" />
            </svg>
          </div>
          <span
            className={`font-display text-lg md:text-xl font-bold transition-colors ${
              scrolled ? "text-sky" : "text-white"
            }`}
          >
            Gan Jing Campus
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-sunshine-dark no-underline ${
                scrolled ? "text-foreground/80" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#join"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-sunshine px-5 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-sunshine-dark transition-all hover:scale-105 no-underline"
          >
            Join Summer Camp
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-foreground" : "text-white"
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
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-lg text-foreground/80 font-medium hover:bg-sky-light transition-colors no-underline"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#join"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-sunshine px-5 py-3 text-sm font-bold text-white shadow-lg no-underline"
              >
                Join Summer Camp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
