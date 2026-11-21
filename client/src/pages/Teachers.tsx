/*
 * Teachers Page — Gan Jing Campus
 * Design: Warm, professional page for educators
 * Covers Teacher Premium Channel, Handbook, CDE certification, and testimonials
 */
import { useEffect, useRef, useMemo } from "react";
import SEOHead from "@/components/SEOHead";
import { pageSeo } from "@/lib/seoRoutes";
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
  Play,
  Heart,
  Landmark,
  Languages,
  Calculator,
  FlaskConical,
  Music2,
  Earth,
} from "lucide-react";
import TeacherResources, { type ResourceSubject } from "@/components/TeacherResources";

const GJW = "https://www.ganjingworld.com";

// Mirrors the "Resources" list on https://www.ganjingworld.com/@GanJingCampus
const resourceSubjects: ResourceSubject[] = [
  {
    title: "Kindness Is Cool",
    icon: Heart,
    links: [
      { label: "#KindnessIsCool videos", href: `${GJW}/hashtag/Kindnessiscool?tab=Featured&l=KindnessIsCool` },
      { label: "KindnessIsCool at Times Square", href: `${GJW}/hashtag/KindnessIsCoolatTimesSquare?tab=Featured&l=KindnessIsCool` },
    ],
  },
  {
    title: "Chinese Culture & Language",
    icon: Landmark,
    links: [
      { label: "Sara's History of China", href: `${GJW}/channel/1f78717q5684GBlhr4Wlnao4f12u0c` },
      { label: "Jing Di Academy", href: `${GJW}/channel/1gcgl5ir9kf3C7Ou3UM1cE41a16v0c` },
      { label: "Five Thousand Years", href: `${GJW}/channel/1eiqjdnq7go7FAcIBydSikOc31e40c` },
      { label: "Learn Chinese Now", href: `${GJW}/channel/1eiqjdnq7go5IsaQHbXT7jcAb1tp0c` },
      { label: "Mr. He's Chinese Class", href: `${GJW}/channel/1fl2sdgaidg74HKbZRjlGR4af1oi0c` },
    ],
  },
  {
    title: "English Language Arts",
    icon: BookOpen,
    links: [
      { label: "Ancient Stories", href: `${GJW}/channel/1eiqjdnq7go26SteQuEmEypNM18n0c` },
      { label: "Famous Authors", href: `${GJW}/channel/1eiqjdnq7go4kJFrW6P53mTYJ1e70c` },
      { label: "English with Jennifer", href: `${GJW}/channel/1g2dmdtdgq03YRaYhFdYj6Bwh1ef0c` },
      { label: "Pre-K – 2nd grade", href: `${GJW}/tag/English%20Language%20Arts/1709135708456?stag=tag_1709235281332` },
      { label: "3rd – 5th grade", href: `${GJW}/tag/English%20Language%20Arts/1709135708456?stag=tag_1709235286482` },
    ],
  },
  {
    title: "World Languages",
    icon: Languages,
    links: [
      { label: "Spanish: A&D School of Kindness, Language, and Culture", href: `${GJW}/channel/1fv8v0gu1mm47o7pwsfgze4Cd1750c` },
      { label: "Conversational Korean", href: `${GJW}/channel/1f940amek6owvp7v60sOBATaK1mq0c` },
      { label: "Speak Chinese Now", href: `${GJW}/channel/1g1tucvpg6h39Clev9kqEtDQA1l50c` },
    ],
  },
  {
    title: "Math",
    icon: Calculator,
    links: [
      { label: "Math Solved", href: `${GJW}/channel/1f7l47rr9sgAiXJzVp9P4271T11s0c` },
      { label: "Keith's Toy Box", href: `${GJW}/channel/1g0lrch7utfvuye3SwTi4cBGs1660c` },
      { label: "Pre-K – 2nd grade", href: `${GJW}/tag/Math/1700605660372?stag=tag_1709234786648` },
      { label: "6th – 8th grade", href: `${GJW}/tag/Math/1700605660372?stag=tag_1709234800595` },
      { label: "9th – 12th grade", href: `${GJW}/tag/Math/1700605660372?stag=tag_1709234806517` },
    ],
  },
  {
    title: "Science",
    icon: FlaskConical,
    links: [
      { label: "The ScienceVerse", href: `${GJW}/channel/1f95993n0bo1tel8RvdGnvM0t1q10c` },
      { label: "Kids Fun Science", href: `${GJW}/channel/1f96deduhvg7fAeJo5s71ZiUz1v00c` },
      { label: "Pre-K – 2nd grade", href: `${GJW}/tag/Science/1709134792579?stag=tag_1709234971229` },
    ],
  },
  {
    title: "Music",
    icon: Music2,
    links: [
      { label: "Music Theory", href: `${GJW}/tag/Music/1709134814585?stag=tag_1709319655507` },
      { label: "WOA Wolfoo", href: `${GJW}/channel/1gq6nmvfnup1AkcTNdZs1InV214j0c` },
      { label: "Healing Music", href: `${GJW}/channel/1fq4eaqeios5phjwPhNGHZI9o1gq0c` },
    ],
  },
  {
    title: "History & Social Studies",
    icon: Earth,
    links: [
      { label: "World History", href: `${GJW}/tag/Social%20Studies/1709234307907?stag=tag_1709237425930` },
      { label: "Geography", href: `${GJW}/tag/Social%20Studies/1709234307907?stag=tag_1709243251970` },
      { label: "OER Project", href: `${GJW}/channel/1f92q2m9ui84YRCEPbaYdJoy91le0c` },
      { label: "World History Encyclopedia", href: `${GJW}/channel/1f6c59uq7cg43JFrtpwq0TiFc18g0c` },
    ],
  },
];

const TEACHERS_VIDEO_EMBED_URL =
  "https://www.ganjingworld.com/embed/1iel47htmij21Oq3GTTzi6VqO1hv1c";

const TEACHERS_HERO =
  "/images/teachers-hero.jpg";

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

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "For Teachers — Gan Jing Campus",
      description: "Get your free Teacher Premium Channel with tools to create content, curate resources, and earn CDE certification.",
      url: "https://ganjingcampus.org/teachers",
      mainEntity: {
        "@type": "Course",
        name: "Certified Digital Educator (CDE) Program",
        description: "Free certification program for educators on Gan Jing Campus.",
        provider: { "@type": "Organization", name: "Gan Jing Campus" },
        isAccessibleForFree: true,
      },
    }),
    []
  );

  return (
    <>
      <SEOHead {...pageSeo("/teachers")} jsonLd={jsonLd} />
      {/* ===== HERO ===== */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[oklch(0.45_0.12_30)] via-[oklch(0.55_0.14_40)] to-[oklch(0.65_0.12_50)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-40 h-40 bg-white/5 rounded-full blur-2xl" />
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
                <GraduationCap className="w-4 h-4 text-sunshine" />
                <h1 className="text-white/90 text-sm font-medium">
                  Free Classroom Channel for Teachers
                </h1>
              </div>

              <p className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                Teach, Connect,
                <br />
                <span className="text-sunshine">Inspire</span>
              </p>

              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl mb-8">
                Get your free Teacher Premium Channel with tools to create content,
                curate resources, and build a community of learners — all on the
                safest platform for education.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.ganjingworld.com/creators/ganjingcampus/form?utm_source=ganjingcampus.org&utm_medium=referral&utm_campaign=teacher_apply&utm_content=teachers_hero"
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
                  src={TEACHERS_HERO} width={1400} height={787}
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

      {/* ===== FEATURED VIDEO ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-cream">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block bg-coral/15 text-coral font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                <Play className="w-3.5 h-3.5 inline-block mr-1 -mt-0.5" />
                Featured Video
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
                Real Teachers. Real <span className="text-coral">Classrooms.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Discover why teachers around the world are choosing Gan Jing Campus
                for safe, meaningful digital education.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-foreground/5">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src={TEACHERS_VIDEO_EMBED_URL}
                    title="Real Teachers. Real Classrooms. Why Teachers Choose Gan Jing Campus"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-center text-muted-foreground text-sm mt-4">
                Watch on{" "}
                <a
                  href="https://www.ganjingworld.com/video/1iel47htmij21Oq3GTTzi6VqO1hv1c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky hover:underline font-medium"
                >
                  Gan Jing World
                </a>
              </p>
            </div>
          </AnimatedSection>
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

      {/* ===== RESOURCES + APPLY / SUPPORT ===== */}
      <TeacherResources
        badge="Teaching Resources"
        heading="Free Resources for Every Subject"
        intro="Curated, ad-free channels and playlists on Gan Jing World, from Pre-K to 12th grade, ready to share with your class."
        subjects={resourceSubjects}
        channelLink={{ label: "See all resources on the Gan Jing Campus channel", href: `${GJW}/@GanJingCampus` }}
        apply={{
          title: "Apply for Your Free Premium Channel",
          desc: "Gan Jing Campus gives teachers Premium Channel features, professional development courses and kindness event toolkits to build a positive, interactive classroom community.",
          cta: "Apply Now — It's Free",
          href: `${GJW}/creators/ganjingcampus/form`,
        }}
        support={{
          title: "Support Gan Jing Campus",
          desc: "Help gift more teachers a FREE Premium Channel, so their students can learn in a clean, safe and positive online environment.",
          cta: "Support Teachers",
          href: `${GJW}/support-us`,
        }}
      />

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
                href="https://www.ganjingworld.com/creators/ganjingcampus/form?utm_source=ganjingcampus.org&utm_medium=referral&utm_campaign=teacher_apply&utm_content=teachers_cta"
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
