/*
 * Teachers Page — Gan Jing Campus
 * Design: Warm, professional page for educators
 * Covers Teacher Premium Channel, Handbook, CDE certification, and testimonials
 */
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  Video,
  BookOpen,
  Music,
  Hash,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  Sparkles,
} from "lucide-react";

const TEACHERS_HERO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/teachers-hero-NfGYecHrTG2AyDfm2uGxh3.webp";

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

const features = [
  { icon: Video, title: "Multi-Format Content", desc: "Create and share videos, articles, and educational resources in multiple formats." },
  { icon: BookOpen, title: "Curation Tools", desc: "Organize and curate educational content into playlists and collections for your students." },
  { icon: Music, title: "Free Music Library", desc: "Access a royalty-free music library to enhance your educational content." },
  { icon: Hash, title: "Custom Hashtags", desc: "Create custom hashtags to organize content and build community around topics." },
  { icon: Users, title: "Live Teaching Tools", desc: "Engage students with interactive live teaching features and real-time collaboration." },
  { icon: Shield, title: "Safe Environment", desc: "100% ad-free platform with Ethical AI that ensures all content is safe and positive." },
];

const testimonials = [
  {
    name: "Laurence Jossomme Lefebvre",
    location: "France",
    quote: "It's a great gift for teachers. The platform gives us the tools we need to create meaningful educational content in a safe environment.",
    initials: "LJ",
    color: "bg-sky/15 text-sky",
  },
  {
    name: "Leejun Taylor",
    location: "New York, USA",
    quote: "We use Gan Jing World for our Kindness Is Cool video contest. The students love creating content that promotes positive values.",
    initials: "LT",
    color: "bg-sunshine/15 text-sunshine-dark",
  },
  {
    name: "Adel Mansilla",
    location: "Boston, USA",
    quote: "This platform empowers students socially and academically. It transformed how we approach character education in our school.",
    initials: "AM",
    color: "bg-coral/15 text-coral",
  },
  {
    name: "Yali Zheng",
    location: "Taiwan",
    quote: "I host classroom events and curate resources on the platform. It's become an essential part of my teaching toolkit.",
    initials: "YZ",
    color: "bg-meadow/15 text-meadow",
  },
  {
    name: "Sibylle Schneller",
    location: "Switzerland",
    quote: "The undeniably positive impact on students is remarkable. They engage with content that builds character while learning.",
    initials: "SS",
    color: "bg-sky/15 text-sky",
  },
];

const cdeSteps = [
  { step: "1", title: "Apply for Free Premium Channel", desc: "Sign up and get your free Teacher Premium Channel on Gan Jing Campus." },
  { step: "2", title: "Complete the Handbook Course", desc: "Follow the free course to learn how to set up your channel, create content, and curate resources." },
  { step: "3", title: "Build Your Content Library", desc: "Create and organize educational content for your students using the platform's tools." },
  { step: "4", title: "Earn CDE Certification", desc: "Qualify to become a Certified Digital Educator (CDE) recognized by Gan Jing Campus." },
];

export default function Teachers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[oklch(0.45_0.12_30)] via-[oklch(0.55_0.14_40)] to-[oklch(0.65_0.12_50)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-40 h-40 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute bottom-[20%] right-[10%] w-60 h-60 bg-sunshine/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 pt-24 pb-16 md:pt-28 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <GraduationCap className="w-4 h-4 text-sunshine" />
                <span className="text-white/90 text-sm font-medium">
                  Free for All Educators
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                Teach, Connect,
                <br />
                <span className="text-sunshine">Inspire</span>
              </h1>

              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl mb-8">
                Get your free Teacher Premium Channel with tools to create content,
                curate resources, and build a community of learners — all on the
                safest platform for education.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.ganjingworld.com/news/1i3csp1t9651d6ebrqpymLf3u1j11c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 justify-center rounded-full bg-sunshine px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-sunshine-dark transition-all hover:scale-105 no-underline"
                >
                  Apply Now — Free
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://www.ganjingworld.com/news/1i13tdngs6fsEZDUDBoyG2Fto16n1c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white/15 backdrop-blur-sm border-2 border-white/30 px-8 py-4 text-lg font-bold text-white hover:bg-white/25 transition-all no-underline"
                >
                  View Handbook
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={TEACHERS_HERO}
                  alt="Teachers using Gan Jing Campus"
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

      {/* ===== FEATURES ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-sky/15 text-sky font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                Premium Channel Features
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
                Everything You Need to <span className="text-sky">Teach</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Your free Teacher Premium Channel comes packed with tools designed
                specifically for educators.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-border/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 rounded-xl bg-sky/10 text-sky flex items-center justify-center mb-4">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CDE PATH ===== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-sunshine/15 text-sunshine-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                Certification Path
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
                Become a <span className="text-sunshine-dark">Certified Digital Educator</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Follow our free course and earn your CDE certification — recognized
                by Gan Jing Campus worldwide.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-6">
            {cdeSteps.map((s, i) => (
              <AnimatedSection key={s.step} delay={i * 0.1}>
                <div className="flex gap-5 bg-white rounded-2xl p-6 border border-border/60 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-sunshine/15 flex items-center justify-center">
                    <span className="font-display text-2xl font-extrabold text-sunshine-dark">
                      {s.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-16 bg-gradient-to-r from-sky via-sky to-[oklch(0.65_0.16_230)]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "400+", label: "Teachers Worldwide" },
              { num: "1,000", label: "Goal by End of 2026" },
              { num: "6", label: "Continents" },
              { num: "100%", label: "Free Access" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl font-extrabold text-sunshine">
                  {s.num}
                </div>
                <div className="text-white/80 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-coral/15 text-coral font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                Teacher Voices
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
                What Teachers <span className="text-coral">Say</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-border/60 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center`}>
                      <span className="font-display font-bold text-sm">{t.initials}</span>
                    </div>
                    <div>
                      <div className="font-display font-bold text-foreground text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Globe className="w-3 h-3" /> {t.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-sunshine fill-sunshine" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed italic flex-1">
                    "{t.quote}"
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-sunshine via-sunshine to-sunshine-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-[10%] left-[5%] w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Join 400+ Educators Worldwide
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Get your free Teacher Premium Channel today. Create content, curate
              resources, and become a Certified Digital Educator.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.ganjingworld.com/news/1i3csp1t9651d6ebrqpymLf3u1j11c"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-sunshine-dark shadow-xl hover:shadow-2xl transition-all hover:scale-105 no-underline"
              >
                <CheckCircle className="w-5 h-5" />
                Apply for Free Channel
              </a>
              <a
                href="https://www.ganjingworld.com/news/1i13tdngs6fsEZDUDBoyG2Fto16n1c"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center rounded-full bg-white/20 border-2 border-white/50 px-8 py-4 text-lg font-bold text-white hover:bg-white/30 transition-all no-underline"
              >
                <BookOpen className="w-5 h-5" />
                Read the Handbook
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
