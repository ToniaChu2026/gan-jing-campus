/*
 * TeacherResources — subject resource library plus "apply" and "support" calls to action.
 * Content mirrors the resource lists on the Gan Jing Campus channels
 * (@GanJingCampus for English, @乾淨校園 for Chinese).
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, GraduationCap, HeartHandshake, type LucideIcon } from "lucide-react";

export interface ResourceLink {
  label: string;
  href: string;
}

export interface ResourceSubject {
  title: string;
  icon: LucideIcon;
  links: ResourceLink[];
}

export interface TeacherResourcesProps {
  badge: string;
  heading: string;
  intro: string;
  subjects: ResourceSubject[];
  channelLink: ResourceLink;
  apply: { title: string; desc: string; cta: string; href: string };
  support: { title: string; desc: string; cta: string; href: string };
}

export default function TeacherResources({
  badge,
  heading,
  intro,
  subjects,
  channelLink,
  apply,
  support,
}: TeacherResourcesProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block bg-sky/10 text-sky font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            {badge}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5">
            {heading}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{intro}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {subjects.map((s) => (
            <div
              key={s.title}
              className="bg-cream rounded-2xl p-6 border border-border/60 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky/10 flex items-center justify-center shrink-0">
                  <s.icon className="w-5 h-5 text-sky" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
              </div>
              <ul className="space-y-1.5">
                {s.links.map((l) => (
                  <li key={l.label + l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-sky hover:underline"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center mt-8">
          <a
            href={channelLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-sky hover:underline"
          >
            {channelLink.label}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-16">
          <div className="rounded-2xl p-8 bg-gradient-to-br from-sky to-[oklch(0.6_0.17_230)] text-white shadow-lg">
            <GraduationCap className="w-10 h-10 mb-4 text-sunshine" />
            <h3 className="font-display text-2xl font-extrabold mb-3">{apply.title}</h3>
            <p className="text-white/90 leading-relaxed mb-6">{apply.desc}</p>
            <a
              href={apply.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sunshine px-6 py-3 font-bold text-foreground shadow hover:scale-105 transition-transform"
            >
              {apply.cta}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="rounded-2xl p-8 bg-gradient-to-br from-sunshine/20 to-coral/15 border border-sunshine/40 shadow-lg">
            <HeartHandshake className="w-10 h-10 mb-4 text-coral" />
            <h3 className="font-display text-2xl font-extrabold text-foreground mb-3">{support.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{support.desc}</p>
            <a
              href={support.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-bold text-white shadow hover:scale-105 transition-transform"
            >
              {support.cta}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
