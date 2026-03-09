/*
 * Home Page — Gan Jing Campus
 * Design: Warm, inviting campus overview with hero, mission pillars,
 * featured programs, safety highlights, and global recognition
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import {
  Shield,
  Heart,
  BookOpen,
  Globe,
  Users,
  Sparkles,
  Sun,
  ArrowRight,
  Star,
  GraduationCap,
  Palette,
  Music,
} from "lucide-react";

const CAMPUS_HERO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/campus-hero-gdhxb86x5iLK854PVxdpfu.webp";
const SUMMER_CAMP_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/hero-banner-iqxoTcBJNU64e8KpLGpYJY.webp";
const TEACHERS_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/teachers-hero-NfGYecHrTG2AyDfm2uGxh3.webp";
const KINDNESS_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/kindness-hero-NNsaYWbcqqnPPW3ascmMvs.webp";

const pillars = [
  {
    icon: Shield,
    title: "100% Safe",
    desc: "Triple-layered safety model with Ethical AI that filters harmful content. 100% of parents reported never seeing harmful content.",
    color: "bg-sky/15 text-sky",
  },
  {
    icon: Heart,
    title: "Kindness First",
    desc: "Every piece of content promotes compassion, respect, and positive values. Our #KindnessIsCool movement inspires classrooms worldwide.",
    color: "bg-coral/15 text-coral",
  },
  {
    icon: BookOpen,
    title: "Curated Learning",
    desc: "100+ educational films and shows carefully selected by educators. Age-appropriate content organized for children ages 4-16.",
    color: "bg-sunshine/15 text-sunshine-dark",
  },
  {
    icon: Globe,
    title: "Global Community",
    desc: "400+ teachers across 6 continents. Recognized by governments in Indonesia and Argentina for educational significance.",
    color: "bg-meadow/15 text-meadow",
  },
];

const programs = [
  {
    title: "Summer Camp",
    desc: "An 8-week adventure of kindness, creativity, and discovery for children ages 4-16.",
    img: SUMMER_CAMP_IMG,
    href: "/summer-camp",
    badge: "Summer 2026",
    badgeColor: "bg-sunshine text-white",
  },
  {
    title: "For Teachers",
    desc: "Free Premium Channel with tools to teach, connect, and inspire. Become a Certified Digital Educator.",
    img: TEACHERS_IMG,
    href: "/teachers",
    badge: "Free Access",
    badgeColor: "bg-sky text-white",
  },
  {
    title: "Kindness Stories",
    desc: "Real stories of how kindness transformed classrooms from Boston to Taiwan and beyond.",
    img: KINDNESS_IMG,
    href: "/kindness",
    badge: "Inspiring",
    badgeColor: "bg-coral text-white",
  },
];

const categories = [
  { icon: Sun, label: "Summer Camp", color: "text-sunshine-dark" },
  { icon: GraduationCap, label: "Teaching Materials", color: "text-sky" },
  { icon: Users, label: "School Life", color: "text-meadow" },
  { icon: BookOpen, label: "Language Learning", color: "text-coral" },
  { icon: Palette, label: "Chinese Traditional Culture", color: "text-sunshine-dark" },
  { icon: Music, label: "Arts & Music", color: "text-sky" },
];

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        ref={heroRef}
        className="relative min-h-[100vh] flex items-center overflow-hidden bg-gradient-to-br from-sky via-sky to-[oklch(0.58_0.18_230)]"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[5%]"
          >
            <Sun className="w-16 h-16 text-sunshine opacity-60" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[15%] right-[8%]"
          >
            <Sparkles className="w-12 h-12 text-white/30" />
          </motion.div>
          <div className="absolute top-[8%] left-[30%] w-32 h-12 bg-white/15 rounded-full blur-sm" />
          <div className="absolute top-[20%] right-[20%] w-28 h-10 bg-white/10 rounded-full blur-sm" />
        </div>

        <div className="container relative z-10 pt-24 pb-16 md:pt-28 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <Shield className="w-4 h-4 text-white" />
                <span className="text-white/90 text-sm font-medium">
                  Ad-Free &middot; Safe &middot; Ethical AI Powered
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                Where Learning
                <br />
                Meets <span className="text-sunshine">Kindness</span>
              </h1>

              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl mb-8">
                Gan Jing Campus is an ad-free, educator-friendly platform
                promoting kindness, creativity, and safe digital learning for
                children worldwide. Powered by Ethical AI.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/summer-camp"
                  className="inline-flex items-center gap-2 justify-center rounded-full bg-sunshine px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-sunshine-dark transition-all hover:scale-105 hover:shadow-2xl no-underline"
                >
                  Explore Summer Camp
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 px-8 py-4 text-lg font-bold text-white hover:bg-white/30 transition-all no-underline"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Right illustration */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={CAMPUS_HERO}
                  alt="Children learning and playing at Gan Jing Campus"
                  className="w-full h-auto"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky/20 to-transparent" />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-2xl shadow-xl p-3 md:p-4"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-meadow/20 flex items-center justify-center">
                    <Star className="w-5 h-5 text-meadow" fill="currentColor" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-foreground">
                      100% Safe
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Ad-free platform
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-16 md:h-24"
          >
            <path
              d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ===== MISSION PILLARS ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <AnimatedCard>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-sunshine/15 text-sunshine-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                Our Mission
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
                Education Over <span className="text-sky">Engagement</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe technology should serve children's growth, not exploit
                their attention. Every feature is designed with education and
                safety first.
              </p>
            </div>
          </AnimatedCard>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <AnimatedCard key={p.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-border/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div
                    className={`w-14 h-14 rounded-2xl ${p.color} flex items-center justify-center mb-5`}
                  >
                    <p.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROGRAMS ===== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container">
          <AnimatedCard>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-sky/15 text-sky font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                Programs
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
                Explore <span className="text-sunshine-dark">Our Programs</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From summer adventures to teacher empowerment, discover how Gan
                Jing Campus is making a difference.
              </p>
            </div>
          </AnimatedCard>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((prog, i) => (
              <AnimatedCard key={prog.title} delay={i * 0.12}>
                <Link href={prog.href} className="no-underline group block h-full">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <img
                        src={prog.img}
                        alt={prog.title}
                        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span
                        className={`absolute top-4 left-4 ${prog.badgeColor} text-xs font-bold px-3 py-1 rounded-full`}
                      >
                        {prog.badge}
                      </span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-sky transition-colors">
                        {prog.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                        {prog.desc}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-sky font-semibold text-sm">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CAMPUS CATEGORIES ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <AnimatedCard>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-meadow/15 text-meadow font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                Content Library
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
                What You'll <span className="text-meadow">Find</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Explore our curated categories of educational content designed
                for the whole child.
              </p>
            </div>
          </AnimatedCard>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <AnimatedCard key={cat.label} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-5 border border-border/60 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div
                    className={`w-12 h-12 mx-auto rounded-xl bg-cream flex items-center justify-center mb-3 ${cat.color}`}
                  >
                    <cat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {cat.label}
                  </span>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="py-16 bg-gradient-to-r from-sky via-sky to-[oklch(0.65_0.16_230)]">
        <div className="container">
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { num: "100+", label: "Films & Shows" },
              { num: "400+", label: "Teachers Worldwide" },
              { num: "1000+", label: "Schools Reached" },
              { num: "6", label: "Continents" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl font-extrabold text-sunshine">
                  {s.num}
                </div>
                <div className="text-white/80 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIAL HIGHLIGHT ===== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container">
          <AnimatedCard>
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block bg-coral/15 text-coral font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
                Expert Endorsement
              </span>
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-foreground leading-snug mb-8">
                "Gan Jing Campus is prioritizing{" "}
                <span className="text-sky">education over engagement metrics</span>{" "}
                with curated, culturally rich media for whole-child development.
                A paradigm shift in children's digital media."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-sky/15 flex items-center justify-center">
                  <span className="font-display font-bold text-sky text-xl">
                    B
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-display font-bold text-foreground">
                    Boris Wittgen
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Certified Educator & School Development Trainer
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-sunshine via-sunshine to-sunshine-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-[10%] left-[5%] w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <AnimatedCard>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Ready to Join the Movement?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you're a parent looking for safe content, a teacher
              seeking free tools, or an educator passionate about kindness —
              there's a place for you at Gan Jing Campus.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/summer-camp"
                className="inline-flex items-center gap-2 justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-sunshine-dark shadow-xl hover:shadow-2xl transition-all hover:scale-105 no-underline"
              >
                <Sun className="w-5 h-5" />
                Summer Camp
              </Link>
              <Link
                href="/teachers"
                className="inline-flex items-center gap-2 justify-center rounded-full bg-white/20 border-2 border-white/50 px-8 py-4 text-lg font-bold text-white hover:bg-white/30 transition-all no-underline"
              >
                <GraduationCap className="w-5 h-5" />
                For Teachers
              </Link>
              <a
                href="https://www.ganjingworld.com/ganjingcampus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center rounded-full bg-white/20 border-2 border-white/50 px-8 py-4 text-lg font-bold text-white hover:bg-white/30 transition-all no-underline"
              >
                <Globe className="w-5 h-5" />
                Visit Campus
              </a>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </>
  );
}
