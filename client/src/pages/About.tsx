/*
 * About Page — Gan Jing Campus
 * Design: Clean, informative page about the platform
 * Covers mission, safety model, Ethical AI, and global recognition
 */
import { useEffect, useRef, useMemo } from "react";
import SEOHead from "@/components/SEOHead";
import { pageSeo } from "@/lib/seoRoutes";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import {
  Shield,
  Heart,
  Brain,
  Eye,
  Users,
  Globe,
  Star,
  ArrowRight,
  CheckCircle,
  Lock,
  Sparkles,
  BookOpen,
  GraduationCap,
  Award,
} from "lucide-react";

const ABOUT_HERO =
  "/images/about-hero.jpg";

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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

const safetyLayers = [
  {
    icon: Brain,
    title: "Ethical AI Layer",
    desc: "Our proprietary AI technology automatically filters harmful, violent, and inappropriate content before it ever reaches children. Unlike other platforms, our AI promotes kindness rather than engagement.",
    color: "bg-sky/15 text-sky",
    borderColor: "border-sky/30",
  },
  {
    icon: Eye,
    title: "Human Curation Layer",
    desc: "Every piece of content is reviewed by trained educators and content specialists. Our team ensures age-appropriateness, educational value, and alignment with positive values.",
    color: "bg-sunshine/15 text-sunshine-dark",
    borderColor: "border-sunshine/30",
  },
  {
    icon: Users,
    title: "Community Layer",
    desc: "Parents, teachers, and community members contribute to content quality through feedback and reporting. Our community-driven approach ensures continuous improvement.",
    color: "bg-meadow/15 text-meadow",
    borderColor: "border-meadow/30",
  },
];

const values = [
  { icon: Heart, title: "Kindness", desc: "Every feature and content piece promotes compassion and respect." },
  { icon: Shield, title: "Safety", desc: "100% ad-free with triple-layered content protection." },
  { icon: BookOpen, title: "Education", desc: "Learning outcomes prioritized over engagement metrics." },
  { icon: Globe, title: "Inclusivity", desc: "Content for diverse cultures, languages, and age groups." },
  { icon: Star, title: "Excellence", desc: "Curated by educators to the highest quality standards." },
  { icon: Lock, title: "Privacy", desc: "No data harvesting. Children's privacy is sacred." },
];

// Dates per the Nov 2026 site audit (launch: Send2Press release, Dec 7 2023).
const timeline: { label: string; date?: string; year?: string; event: string }[] = [
  { label: "Launch", date: "Dec 2023", year: "2023", event: "Gan Jing Campus launches as an ad-free educational platform" },
  { label: "Growth", date: "2025", year: "2025", event: "400+ teachers on 6 continents join the platform" },
  { label: "Recognition", date: "Mar 2025", year: "2025", event: "Batam City, Indonesia declares 'Gan Jing World Day'" },
  { label: "Impact", event: "Argentina recognizes Gan Jing World for its educational significance" },
  { label: "2026 Goal", year: "2026", event: "Reaching 1,000 teachers and expanding Summer Camp globally" },
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Gan Jing Campus",
      description: "Learn about Gan Jing Campus's mission, triple-layered safety model, Ethical AI technology, and global recognition.",
      url: "https://ganjingcampus.org/about",
      mainEntity: {
        "@type": "EducationalOrganization",
        name: "Gan Jing Campus",
        foundingDate: "2023",
        areaServed: "Worldwide",
      },
    }),
    []
  );

  return (
    <>
      <SEOHead {...pageSeo("/about")} jsonLd={jsonLd} />
      {/* ===== HERO ===== */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[oklch(0.35_0.08_250)] via-[oklch(0.42_0.12_240)] to-[oklch(0.52_0.14_230)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-40 h-40 bg-sky/10 rounded-full blur-2xl" />
          <div className="absolute bottom-[20%] right-[10%] w-60 h-60 bg-sunshine/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 pt-24 pb-16 md:pt-28 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <Sparkles className="w-4 h-4 text-sunshine" />
                <h1 className="text-white/90 text-sm font-medium">
                  About Gan Jing Campus: Mission and Safety Model
                </h1>
              </div>

              <p className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                Education Over
                <br />
                <span className="text-sunshine">Engagement</span>
              </p>

              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl mb-8">
                Gan Jing Campus is an ad-free, educator-friendly platform powered
                by Ethical AI. We believe technology should serve children's
                growth, not exploit their attention.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.ganjingworld.com/@GanJingCampus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 justify-center rounded-full bg-sunshine px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-sunshine-dark transition-all hover:scale-105 no-underline"
                >
                  Visit Campus
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  href="/summer-camp"
                  className="inline-flex items-center justify-center rounded-full bg-white/15 backdrop-blur-sm border-2 border-white/30 px-8 py-4 text-lg font-bold text-white hover:bg-white/25 transition-all no-underline"
                >
                  Summer Camp
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={ABOUT_HERO} width={1400} height={787}
                  alt="Children learning safely together under a big tree, guided by teachers and watched over by parents"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ===== MISSION & VALUES ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-sunshine/15 text-sunshine-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                Our Values
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
                What We <span className="text-sunshine-dark">Stand For</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every decision we make is guided by these core values. They shape
                our platform, our content, and our community.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-border/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 rounded-xl bg-sky/10 text-sky flex items-center justify-center mb-4">
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRIPLE SAFETY MODEL ===== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-sky/15 text-sky font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                Safety Model
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
                Triple-Layered <span className="text-sky">Protection</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our unique three-layer safety model ensures that every piece of
                content is safe, educational, and aligned with positive values.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            {safetyLayers.map((layer, i) => (
              <AnimatedSection key={layer.title} delay={i * 0.12}>
                <div
                  className={`bg-white rounded-2xl p-8 border ${layer.borderColor} hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex gap-6 items-start">
                    <div
                      className={`w-16 h-16 shrink-0 rounded-2xl ${layer.color} flex items-center justify-center`}
                    >
                      <layer.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-display text-xs font-bold text-muted-foreground uppercase tracking-wider">
                          Layer {i + 1}
                        </span>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                        {layer.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {layer.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-10 text-center">
              <div className="inline-flex items-center gap-2 bg-meadow/10 text-meadow font-semibold text-sm px-5 py-2.5 rounded-full">
                <CheckCircle className="w-4 h-4" />
                100% of parents reported never seeing harmful content
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHAT MAKES US DIFFERENT ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-coral/15 text-coral font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                Our Approach
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
                What Makes Us <span className="text-coral">Different</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.1}>
                <div className="bg-red-50/50 rounded-2xl p-6 border border-red-100">
                  <h3 className="font-display text-lg font-bold text-red-800 mb-4">
                    Other Platforms
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Engagement-driven algorithms",
                      "Ad-supported with data harvesting",
                      "Autoplay leads to harmful content",
                      "No educator-specific tools",
                      "Addictive design patterns",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-red-700/80">
                        <span className="text-red-400 mt-0.5">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-meadow/5 rounded-2xl p-6 border border-meadow/20">
                  <h3 className="font-display text-lg font-bold text-meadow mb-4">
                    Gan Jing Campus
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Education-first content curation",
                      "100% ad-free, no data harvesting",
                      "Ethical AI filters harmful content",
                      "Free Teacher Premium Channel",
                      "Designed for whole-child development",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-meadow/90">
                        <CheckCircle className="w-4 h-4 text-meadow shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section id="who-we-are" className="py-20 md:py-28 bg-white">
        <div className="container max-w-5xl">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block bg-sky/10 text-sky font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                Who We Are
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
                The Team Behind <span className="text-sky">Gan Jing Campus</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Gan Jing Campus is a project of Gan Jing World, the family-friendly video platform. It launched in December 2023 to give teachers an ad-free place to teach, curate and share, and to give children ages 4–16 safe things to watch and learn from.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl p-5 border border-border/60">
                  <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">Operated by</div>
                  <a href="https://www.ganjingworld.com" target="_blank" rel="noopener noreferrer" className="font-display font-bold text-sky hover:underline">Gan Jing World</a>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-border/60">
                  <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">Launched</div>
                  <div className="font-display font-bold text-foreground">December 2023</div>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-border/60">
                  <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">Who it's for</div>
                  <div className="font-display font-bold text-foreground">Kids 4–16, teachers and parents</div>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-border/60">
                  <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">Contact</div>
                  <a href="mailto:creators@ganjingworld.com" className="font-display font-bold text-sky hover:underline">creators@<wbr />ganjingworld.com</a>
                </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== JOURNEY TIMELINE ===== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-meadow/15 text-meadow font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                Our Journey
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
                Growing <span className="text-meadow">Together</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto">
            {timeline.map((t, i) => (
              <AnimatedSection key={t.label} delay={i * 0.1}>
                <div className="flex gap-5 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-sky/15 flex items-center justify-center shrink-0">
                      {t.year ? (
                        <span className="font-display text-sm font-bold text-sky">{t.year}</span>
                      ) : (
                        <Award className="w-6 h-6 text-sky" aria-hidden="true" />
                      )}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-sky/20 mt-2" />
                    )}
                  </div>
                  <div className="pt-2 pb-4">
                    <p className="text-sm font-bold uppercase tracking-wide text-sky">
                      {t.label}
                      {t.date && <span className="ml-2 font-semibold normal-case tracking-normal text-muted-foreground">{t.date}</span>}
                    </p>
                    <p className="text-foreground font-medium leading-relaxed">
                      {t.event}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-sky via-sky to-[oklch(0.58_0.18_230)] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-[10%] left-[5%] w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Be Part of the Future of Education
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Join the growing community of educators, parents, and children who
              believe in a kinder, safer digital world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/summer-camp"
                className="inline-flex items-center gap-2 justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-sky shadow-xl hover:shadow-2xl transition-all hover:scale-105 no-underline"
              >
                <Star className="w-5 h-5" fill="currentColor" />
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
                href="https://www.ganjingworld.com/@GanJingCampus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center rounded-full bg-white/20 border-2 border-white/50 px-8 py-4 text-lg font-bold text-white hover:bg-white/30 transition-all no-underline"
              >
                <Globe className="w-5 h-5" />
                Visit Campus
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
