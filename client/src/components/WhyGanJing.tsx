/*
 * WhyGanJing — Gan Jing Summer Camp
 * Design: Blue gradient background with white content cards
 * Matches Gan Jing Kids "Built for Safety" section style
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Eye, Ban, Brain, Lock, Smile, type LucideIcon } from "lucide-react";

const KINDNESS_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/kindness-section-3qy49Wh4Qnft6Lwe2fRkwM.webp";

const safetyFeatures = [
  {
    icon: Brain,
    title: "Ethical AI Detection",
    desc: "Advanced AI blocks harmful or inappropriate content before it ever reaches your child.",
    num: 1,
  },
  {
    icon: Eye,
    title: "Human Reviewers",
    desc: "Every piece of content is reviewed by real people to ensure it's safe and age-appropriate.",
    num: 2,
  },
  {
    icon: ShieldCheck,
    title: "Expert Curation",
    desc: "Child development experts structure content around key areas for healthy growth.",
    num: 3,
  },
];

const benefits = [
  {
    icon: Ban,
    title: "Non-Addictive Algorithm",
    desc: "No tracking-based suggestions. All recommendations are based on meaningful, age-appropriate content.",
  },
  {
    icon: Lock,
    title: "Maximum Privacy",
    desc: "No comments, no chats, no unwanted contact. Anonymized data only. Kids' privacy is fully protected.",
  },
  {
    icon: Smile,
    title: "100% Ad-Free",
    desc: "Your child enjoys safe, uninterrupted content — giving you total peace of mind.",
  },
];

function SafetyCard({ feature, index }: { feature: typeof safetyFeatures[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="text-center"
    >
      <div className="w-16 h-16 rounded-full bg-sky/10 flex items-center justify-center mx-auto mb-4 relative">
        <span className="font-display text-2xl font-extrabold text-sky">{feature.num}</span>
      </div>
      <h3 className="font-display text-xl font-bold text-foreground mb-2">{feature.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
    </motion.div>
  );
}

function BenefitCard({ benefit, index }: { benefit: { icon: LucideIcon; title: string; desc: string }; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = benefit.icon;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-cream rounded-2xl p-8 hover:shadow-lg transition-shadow"
    >
      <div className="w-12 h-12 rounded-xl bg-sunshine/15 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-sunshine-dark" />
      </div>
      <h3 className="font-display text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
    </motion.div>
  );
}

export default function WhyGanJing() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="why-ganjing" className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-meadow/15 text-meadow font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Safe & Trusted
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
            Why Parents <span className="text-sky">Trust</span> Gan Jing Campus
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Built with a triple-layered safety model and designed for parents' peace of mind.
            100% of parents reported never or rarely seeing harmful content.
          </p>
        </motion.div>

        {/* Triple-layered Safety Model */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {safetyFeatures.map((f, i) => (
            <SafetyCard key={f.title} feature={f} index={i} />
          ))}
        </div>

        {/* Stat banner */}
        <div className="relative rounded-3xl overflow-hidden mb-20">
          <img
            src={KINDNESS_IMG}
            alt="Children showing kindness"
            className="w-full h-64 md:h-80 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky/90 to-sky/70 flex items-center justify-center">
            <div className="text-center px-6">
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                100% Parents Approve
              </h3>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
                Parents reported never or rarely seeing harmful content on the Gan Jing platform.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((b, i) => (
            <BenefitCard key={b.title} benefit={b} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
