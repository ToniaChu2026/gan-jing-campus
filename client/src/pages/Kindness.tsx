/*
 * Kindness Stories Page — Gan Jing Campus
 * Design: Warm, heartfelt page showcasing real kindness stories
 * Features stories from Boston, Taiwan, and the global kindness movement
 */
import { useEffect, useRef, useMemo } from "react";
import SEOHead from "@/components/SEOHead";
import { motion, useInView } from "framer-motion";
import {
  Heart,
  Star,
  Globe,
  ArrowRight,
  Award,
  Sparkles,
  Users,
  BookOpen,
  MapPin,
} from "lucide-react";
import { Link } from "wouter";

const KINDNESS_HERO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/kindness-hero-NNsaYWbcqqnPPW3ascmMvs.webp";

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

const stories = [
  {
    title: "From 'Problem Student' to Kindness Champion",
    location: "Boston, USA",
    teacher: "Adel Mansilla",
    school: "Star Academy",
    summary:
      "Teacher Adel Mansilla transformed a struggling student through kindness and the Gan Jing Campus resources. What started as a classroom experiment with the #KindnessIsCool contest grew into a school-wide movement. The school won the 'Kindness Smile Award' at a Times Square ceremony, proving that kindness can change everything.",
    quote:
      "This platform empowers students socially and academically. One act of kindness sparked a transformation that spread across our entire school.",
    impact: ["School-wide kindness movement", "Times Square award ceremony", "Student behavioral transformation"],
    color: "border-l-coral",
    iconColor: "bg-coral/15 text-coral",
    href: "https://www.ganjingworld.com/news/1htqniht6hp3u3PVR5BpnRHqB1ic1c",
  },
  {
    title: "There's No Such Thing as a Bad Child",
    location: "Taiwan",
    teacher: "Chen Jing-Rong",
    school: "Award-Winning Educator",
    summary:
      "Ms. Chen Jing-Rong, winner of Taiwan's top honor in education, used Gan Jing Campus to help a troubled student find their way. Her philosophy — 'There's no such thing as a bad child, only children who need love' — guided her approach. Students now avoid internet addiction by using the safe Gan Jing platform instead.",
    quote:
      "There's no such thing as a bad child, only children who need love. Gan Jing Campus gives us the tools to show that love through safe, meaningful content.",
    impact: ["Taiwan's top education honor", "Student internet safety", "Character transformation"],
    color: "border-l-sky",
    iconColor: "bg-sky/15 text-sky",
    href: "https://www.ganjingworld.com/news/1htqng1kqt45DWMGkHwsYvRcf1gk1c",
  },
  {
    title: "Kindness Is Cool Video Contest",
    location: "New York, USA",
    teacher: "Leejun Taylor",
    school: "NYC Educator",
    summary:
      "Teacher Leejun Taylor launched the 'Kindness Is Cool' video contest using Gan Jing World, encouraging students to create content that promotes positive values. The initiative showed students that being kind is not just good — it's cool. The contest became a model for other schools looking to integrate character education with digital literacy.",
    quote:
      "We use Gan Jing World for our Kindness Is Cool video contest. The students love creating content that promotes positive values.",
    impact: ["Student-created kindness content", "Digital literacy + character education", "Model for other schools"],
    color: "border-l-sunshine-dark",
    iconColor: "bg-sunshine/15 text-sunshine-dark",
    href: "https://www.ganjingworld.com/news/1htqniht6hp3u3PVR5BpnRHqB1ic1c",
  },
];

const globalRecognition = [
  {
    country: "Indonesia",
    detail: "'Gan Jing World Day' declared in Batam City",
    icon: "🇮🇩",
  },
  {
    country: "Argentina",
    detail: "Province recognized GJW as platform of educational significance",
    icon: "🇦🇷",
  },
  {
    country: "Global",
    detail: "Thousands of schools joined Global Kindness Video Awards",
    icon: "🌍",
  },
];

export default function Kindness() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Kindness Stories — Gan Jing Campus",
      description: "Real stories of how kindness transformed classrooms from Boston to Taiwan and beyond.",
      url: "https://ganjingsummercamp-fejrdh2z.manus.space/kindness",
    }),
    []
  );

  return (
    <>
      <SEOHead
        title="Kindness Stories — Real Stories from Classrooms Worldwide"
        description="Discover inspiring stories of how the #KindnessIsCool movement is transforming classrooms from Boston to Taiwan. See how Gan Jing Campus promotes compassion and character education globally."
        canonicalPath="/kindness"
        keywords="kindness stories, KindnessIsCool, character education, classroom kindness, Gan Jing Campus stories, global education, kindness awards, positive values"
        ogImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/kindness-hero-NNsaYWbcqqnPPW3ascmMvs.webp"
        jsonLd={jsonLd}
      />
      {/* ===== HERO ===== */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[oklch(0.65_0.12_15)] via-[oklch(0.72_0.14_20)] to-[oklch(0.78_0.12_30)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[12%] left-[8%]"
          >
            <Heart className="w-14 h-14 text-white/20" fill="currentColor" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[18%] right-[12%]"
          >
            <Sparkles className="w-10 h-10 text-sunshine/40" />
          </motion.div>
        </div>

        <div className="container relative z-10 pt-24 pb-16 md:pt-28 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <Heart className="w-4 h-4 text-white" fill="currentColor" />
                <span className="text-white/90 text-sm font-medium">
                  Real Stories, Real Impact
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                Kindness
                <br />
                <span className="text-sunshine">Changes Everything</span>
              </h1>

              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl mb-8">
                Discover how teachers and students around the world are using Gan
                Jing Campus to spread kindness, transform classrooms, and build a
                better future.
              </p>

              <a
                href="https://www.ganjingworld.com/news/1htqniht6hp3u3PVR5BpnRHqB1ic1c"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center rounded-full bg-sunshine px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-sunshine-dark transition-all hover:scale-105 no-underline"
              >
                Read Full Stories
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={KINDNESS_HERO}
                  alt="Children practicing kindness"
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

      {/* ===== FEATURED STORIES ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-coral/15 text-coral font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                Featured Stories
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
                Stories That <span className="text-coral">Inspire</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Real accounts from educators who used kindness and Gan Jing Campus
                to transform their classrooms and communities.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-10">
            {stories.map((story, i) => (
              <AnimatedSection key={story.title} delay={i * 0.1}>
                <div
                  className={`bg-white rounded-2xl border border-border/60 border-l-4 ${story.color} overflow-hidden hover:shadow-xl transition-all duration-300`}
                >
                  <div className="p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${story.iconColor}`}>
                        <MapPin className="w-3 h-3" />
                        {story.location}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {story.teacher} &middot; {story.school}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {story.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-4xl">
                      {story.summary}
                    </p>

                    <blockquote className="bg-cream rounded-xl p-5 mb-6 border-l-4 border-sunshine">
                      <p className="text-foreground/80 italic leading-relaxed">
                        "{story.quote}"
                      </p>
                      <cite className="text-sm text-muted-foreground mt-2 block not-italic">
                        — {story.teacher}
                      </cite>
                    </blockquote>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {story.impact.map((imp) => (
                        <span
                          key={imp}
                          className="inline-flex items-center gap-1.5 bg-meadow/10 text-meadow text-xs font-semibold px-3 py-1.5 rounded-full"
                        >
                          <Star className="w-3 h-3" fill="currentColor" />
                          {imp}
                        </span>
                      ))}
                    </div>

                    <a
                      href={story.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sky font-semibold text-sm hover:text-sky/80 transition-colors no-underline"
                    >
                      Read Full Story
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GLOBAL RECOGNITION ===== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-sky/15 text-sky font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                Global Impact
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
                Recognized <span className="text-sky">Worldwide</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Governments and institutions around the world recognize the
                educational value of Gan Jing Campus.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {globalRecognition.map((g, i) => (
              <AnimatedSection key={g.country} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-border/60 text-center hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">{g.icon}</div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {g.country}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {g.detail}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARENT TESTIMONIAL ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block bg-sunshine/15 text-sunshine-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
                Parent Voice
              </span>
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-foreground leading-snug mb-8">
                "My daughter loves the characters and learned the language and how
                to be{" "}
                <span className="text-coral">respectful and kind</span>. I highly
                recommend it to all parents."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-sunshine/15 flex items-center justify-center">
                  <span className="font-display font-bold text-sunshine-dark text-xl">
                    B
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-display font-bold text-foreground">
                    Ben Hedges
                  </div>
                  <div className="text-sm text-muted-foreground">Parent</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-coral via-coral to-[oklch(0.62_0.18_15)] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-[10%] left-[5%] w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Start Your Kindness Story
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Join the global movement of educators and parents who are using
              kindness to transform education. Every story starts with one act.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/summer-camp"
                className="inline-flex items-center gap-2 justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-coral shadow-xl hover:shadow-2xl transition-all hover:scale-105 no-underline"
              >
                <Heart className="w-5 h-5" fill="currentColor" />
                Join Summer Camp
              </Link>
              <Link
                href="/teachers"
                className="inline-flex items-center gap-2 justify-center rounded-full bg-white/20 border-2 border-white/50 px-8 py-4 text-lg font-bold text-white hover:bg-white/30 transition-all no-underline"
              >
                <BookOpen className="w-5 h-5" />
                For Teachers
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
