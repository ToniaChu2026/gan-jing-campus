/*
 * TeachersSection — Gan Jing Summer Camp
 * Design: White background with teacher illustration and feature list
 * Highlights Teacher Premium Channel and educator resources
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Video, BookOpen, Hash, Music2, Users, ArrowRight } from "lucide-react";

const TEACHERS_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/teachers-section-n7GwQ9X6dPhGD6AqwwtqWH.webp";

const features = [
  {
    icon: Video,
    title: "Multi-Format Content",
    desc: "Create and share videos, articles, and live teaching sessions.",
  },
  {
    icon: BookOpen,
    title: "Curation Tools",
    desc: "Organize and curate educational resources for your classroom.",
  },
  {
    icon: Hash,
    title: "Custom Hashtags",
    desc: "Create custom hashtags for classroom events and contests.",
  },
  {
    icon: Music2,
    title: "Free Music Library",
    desc: "Access a library of royalty-free music for educational content.",
  },
  {
    icon: Award,
    title: "Certified Digital Educator",
    desc: "Qualify to become a Certified Digital Educator (CDE).",
  },
  {
    icon: Users,
    title: "Growing Community",
    desc: "Join 400+ teachers worldwide using Gan Jing Campus.",
  },
];

export default function TeachersSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="teachers" className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={TEACHERS_IMG}
                alt="Teachers working with students"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-2xl shadow-xl p-4"
            >
              <div className="text-center">
                <div className="font-display text-3xl font-extrabold text-sky">400+</div>
                <div className="text-xs text-muted-foreground font-medium">Teachers Worldwide</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, x: 30 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-coral/10 text-coral font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
              For Educators
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Free <span className="text-sky">Teacher Premium</span> Channel
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Empower your teaching with a free Premium Channel on Gan Jing Campus. 
              Create content, curate resources, host live sessions, and inspire students — all on a safe, ad-free platform.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-sky/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-4.5 h-4.5 text-sky" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground text-sm mb-0.5">{f.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="https://www.ganjingworld.com/ganjingcampus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sky px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[oklch(0.6_0.17_230)] transition-all hover:scale-105 no-underline"
            >
              Apply for Teacher Channel
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
