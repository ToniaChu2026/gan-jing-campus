/*
 * HeroSection — Gan Jing Summer Camp
 * Design: Full-width sky blue background with hero illustration
 * Large bold heading, sub-text, and yellow CTA
 */
import { motion } from "framer-motion";
import { Sun, Sparkles, ArrowDown } from "lucide-react";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/hero-banner-iqxoTcBJNU64e8KpLGpYJY.webp";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-gradient-to-b from-sky via-sky to-[oklch(0.65_0.16_230)]">
      {/* Decorative floating elements */}
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
        {/* Cloud shapes */}
        <div className="absolute top-[8%] left-[30%] w-32 h-12 bg-white/20 rounded-full blur-sm" />
        <div className="absolute top-[12%] left-[33%] w-20 h-8 bg-white/15 rounded-full blur-sm" />
        <div className="absolute top-[20%] right-[20%] w-28 h-10 bg-white/15 rounded-full blur-sm" />
      </div>

      <div className="container relative z-10 pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <Sun className="w-4 h-4 text-sunshine" />
              <span className="text-white/90 text-sm font-medium">Summer 2026 &middot; 8-Week Program</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Gan Jing
              <br />
              <span className="text-sunshine">Summer Camp</span>
            </h1>

            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl mb-8 font-body">
              An 8-week adventure of kindness, creativity, and discovery for children ages 4-16. 
              Powered by 100+ curated educational films and shows on the safest platform for kids.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#join"
                className="inline-flex items-center justify-center rounded-full bg-sunshine px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-sunshine-dark transition-all hover:scale-105 hover:shadow-2xl no-underline"
              >
                Join Now — It's Free
              </a>
              <a
                href="#weekly-themes"
                className="inline-flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 px-8 py-4 text-lg font-bold text-white hover:bg-white/30 transition-all no-underline"
              >
                Explore Themes
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { num: "100+", label: "Films & Shows" },
                { num: "8", label: "Themed Weeks" },
                { num: "4-16", label: "Ages Welcome" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-2xl md:text-3xl font-extrabold text-sunshine">
                    {s.num}
                  </div>
                  <div className="text-white/70 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Hero illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={HERO_IMG}
                alt="Children enjoying summer camp activities"
                className="w-full h-auto"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky/30 to-transparent" />
            </div>
            {/* Floating badge */}
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
                  <div className="font-display font-bold text-sm text-foreground">100% Safe</div>
                  <div className="text-xs text-muted-foreground">Ad-free platform</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
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

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
