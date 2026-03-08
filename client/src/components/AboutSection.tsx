/*
 * AboutSection — Gan Jing Summer Camp
 * Design: White background, 3-column feature cards with numbered circles
 * Matches Gan Jing Kids "Triple-layered Safety Model" style
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Heart, Sparkles, BookOpen, Film, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    color: "bg-sky/15 text-sky",
    title: "100% Safe & Ad-Free",
    desc: "Powered by Ethical AI that filters harmful content. No ads, no tracking, no inappropriate material — just pure learning and fun.",
  },
  {
    icon: Heart,
    color: "bg-coral/15 text-coral",
    title: "Values-Based Learning",
    desc: "Every film and activity is curated to nurture kindness, resilience, creativity, and good character in children.",
  },
  {
    icon: Film,
    color: "bg-meadow/15 text-meadow",
    title: "100+ Curated Shows",
    desc: "A rich library of educational films, animated series, and creative content organized by age group and weekly themes.",
  },
];

const ACTIVITIES_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/activities-section-nHHGtKZpC6E9bfJK8TpfT4.webp";

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Section header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-sky/10 text-sky font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            About the Program
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
            A Summer of <span className="text-sky">Learning</span>,{" "}
            <span className="text-sunshine-dark">Fun</span> &{" "}
            <span className="text-meadow">Kindness</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Gan Jing Summer Camp is an 8-week online program where children explore curated educational
            content, develop good character, and have fun — all on the world's safest digital platform.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {features.map((f, i) => (
            <AnimatedCard key={f.title} delay={i * 0.15}>
              <div className="group relative bg-white rounded-2xl border border-border/50 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {/* Number */}
                <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-sunshine flex items-center justify-center font-display font-extrabold text-white text-lg shadow-md">
                  {i + 1}
                </div>
                <div className={`w-14 h-14 rounded-2xl ${f.color} flex items-center justify-center mb-5`}>
                  <f.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Two-column: image + text */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedCard>
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <img
                src={ACTIVITIES_IMG}
                alt="Children engaged in creative summer activities"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-6">
                What Makes Our Camp Special?
              </h3>
              <div className="space-y-5">
                {[
                  {
                    icon: BookOpen,
                    title: "Curated by Educators",
                    desc: "Content hand-picked by certified educators and child development experts.",
                  },
                  {
                    icon: Users,
                    title: "For All Ages",
                    desc: "Three age tracks: Early Explorers (4 & under), Young Learners (5-7), and Growing Minds (8-16).",
                  },
                  {
                    icon: Sparkles,
                    title: "Beyond Screen Time",
                    desc: "Each week includes offline activities, kindness challenges, and creative projects.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-sky/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-sky" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
