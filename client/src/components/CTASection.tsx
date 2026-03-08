/*
 * CTASection — Gan Jing Summer Camp
 * Design: Sky blue gradient with decorative background and bold CTA
 * Matches Gan Jing Kids pricing/subscribe section style
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sun, CheckCircle, ArrowRight } from "lucide-react";

const CTA_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/cta-background-5H7ZhWpykPiuKW8LACeKTC.webp";

const benefits = [
  "8 weeks of curated educational content",
  "100+ films and shows for ages 4-16",
  "Weekly kindness challenges & activities",
  "Safe, ad-free, non-addictive platform",
  "Offline creative projects each week",
  "Free for all families and teachers",
];

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="join" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={CTA_BG}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sky/92 via-sky/88 to-[oklch(0.55_0.2_230)]/90" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-64 h-64 border-4 border-white/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-80 h-80 border-4 border-white/10 rounded-full"
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6"
          >
            <Sun className="w-4 h-4 text-sunshine" />
            <span className="text-white/90 text-sm font-medium">Summer 2025 Registration Open</span>
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Ready for the Best
            <br />
            <span className="text-sunshine">Summer Ever?</span>
          </h2>

          <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Join thousands of families and educators in an 8-week adventure of kindness, creativity,
            and discovery. Completely free for all participants.
          </p>

          {/* Benefits checklist */}
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-10 text-left">
            {benefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-2.5"
              >
                <CheckCircle className="w-5 h-5 text-sunshine shrink-0" />
                <span className="text-white/90 text-sm">{b}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.ganjingworld.com/ganjingcampus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sunshine px-10 py-4 text-lg font-bold text-white shadow-xl hover:bg-sunshine-dark transition-all hover:scale-105 hover:shadow-2xl no-underline"
            >
              Join Summer Camp
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://www.ganjingworld.com/ganjingcampus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border-2 border-white/30 px-10 py-4 text-lg font-bold text-white hover:bg-white/25 transition-all no-underline"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
