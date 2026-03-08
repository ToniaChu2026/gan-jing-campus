/*
 * GlobalSection — Gan Jing Summer Camp
 * Design: Golden/sunshine background with global recognition stats
 * Matches Gan Jing Kids "Fun and Positive Content" section style
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Award, School, MapPin, type LucideIcon } from "lucide-react";

const stats = [
  {
    icon: School,
    value: "1,000+",
    label: "Schools Participating",
    desc: "In the Global Kindness Video Awards",
  },
  {
    icon: Globe,
    value: "30+",
    label: "Countries Reached",
    desc: "Educators and families worldwide",
  },
  {
    icon: Award,
    value: "400+",
    label: "Teachers Joined",
    desc: "Using Gan Jing Campus daily",
  },
  {
    icon: MapPin,
    value: "5",
    label: "Continents",
    desc: "Global recognition and partnerships",
  },
];

const recognitions = [
  {
    country: "Indonesia",
    detail: '"Gan Jing World Day" declared in Batam City',
  },
  {
    country: "Argentina",
    detail: "Province recognized GJW as platform of educational significance",
  },
  {
    country: "USA",
    detail: "Kindness Smile Award ceremony at Times Square, New York",
  },
  {
    country: "Taiwan",
    detail: "Top education honor awarded to teacher using Gan Jing Campus",
  },
];

function StatCard({
  stat,
  index,
}: {
  stat: { icon: LucideIcon; value: string; label: string; desc: string };
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = stat.icon;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="w-12 h-12 rounded-xl bg-sunshine/15 flex items-center justify-center mx-auto mb-3">
        <Icon className="w-6 h-6 text-sunshine-dark" />
      </div>
      <div className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-1">
        {stat.value}
      </div>
      <div className="font-display font-bold text-sm text-foreground mb-1">{stat.label}</div>
      <div className="text-xs text-muted-foreground">{stat.desc}</div>
    </motion.div>
  );
}

export default function GlobalSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-sunshine/10 via-sunshine/5 to-cream">
      <div className="container">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-sunshine/20 text-sunshine-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Global Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
            A <span className="text-sunshine-dark">Worldwide</span> Movement for{" "}
            <span className="text-sky">Kindness</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Gan Jing Campus is recognized globally for its commitment to safe, values-based education.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>

        {/* Global recognitions */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">
            Global Recognition
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {recognitions.map((r, i) => (
              <motion.div
                key={r.country}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-sky/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-sky" />
                </div>
                <div>
                  <div className="font-display font-bold text-foreground mb-1">{r.country}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{r.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
