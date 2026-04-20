/**
 * Thank You Page — Shown after Campus Guide form submission
 * Brand Colors: Azure Radiance Blue (#0087FD), Blue Zodiac (#133960), Golden Orange (#E79E24)
 * Bridges to Gan Jing Campus paid product
 */

import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles, Shield, Users, Heart } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/JpXHvw67Ajo9P9hYJJi7Nr/GJW-Campus_7c6022c9.png";
const THANKYOU_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/JpXHvw67Ajo9P9hYJJi7Nr/thankyou-illustration-DC8TBVR3VWyN3JfLsZnowd.webp";
const BOTANICAL_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/JpXHvw67Ajo9P9hYJJi7Nr/hero-botanical-bg-7FCBiShvJCXUsCnMz4uUep.webp";

const bundleBenefits = [
  {
    icon: Shield,
    text: "Replace toxic platforms across environments",
  },
  {
    icon: Users,
    text: "Align digital standards with schools",
  },
  {
    icon: Sparkles,
    text: "Reduce screen battles permanently",
  },
  {
    icon: Heart,
    text: "Build a culture where kindness and creativity win",
  },
];

export default function CampusGuideThankYou() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Thank You — Your Screen Reset Guide is on the Way",
      description: "Your 30-Minute Family Screen Reset Guide is being sent to your inbox.",
      url: "https://ganjingcampus.manus.space/campus-guide/thank-you",
      publisher: {
        "@type": "Organization",
        name: "Gan Jing Campus",
      },
    }),
    []
  );

  return (
    <>
      <SEOHead
        title="Thank You — Your Screen Reset Guide is on the Way"
        description="Your 30-Minute Family Screen Reset Guide is being sent to your inbox. Explore the complete Gan Jing Campus solution."
        canonicalPath="/campus-guide/thank-you"
        keywords="thank you, screen reset guide, Gan Jing Campus"
        jsonLd={jsonLd}
      />

      <div className="min-h-screen" style={{ background: "#f5f8fc" }}>
        {/* ─── Nav ─── */}
        <nav
          className="backdrop-blur-md border-b"
          style={{
            background: "rgba(245,248,252,0.85)",
            borderColor: "rgba(0,135,253,0.1)",
          }}
        >
          <div className="container flex items-center justify-between h-16">
            <a href="/">
              <img src={LOGO} alt="Gan Jing Campus" className="h-8 w-auto" />
            </a>
          </div>
        </nav>

        {/* ─── Confirmation Hero ─── */}
        <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url(${BOTANICAL_BG})`,
              backgroundSize: "700px",
              backgroundRepeat: "repeat",
            }}
          />

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              {/* Success check */}
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
                style={{ background: "rgba(0,135,253,0.1)" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.1,
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.3,
                  }}
                >
                  <Check
                    className="w-10 h-10"
                    style={{ color: "#0087FD" }}
                    strokeWidth={2.5}
                  />
                </motion.div>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
                style={{ color: "#133960", fontFamily: "'Playfair Display', serif" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                You Just Took Back{" "}
                <span style={{ color: "#E79E24" }}>Influence.</span>
              </motion.h1>

              <motion.div
                className="space-y-4 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <p
                  className="text-xl leading-relaxed"
                  style={{ color: "#1a4a7a" }}
                >
                  Your Screen Reset Guide is on its way to your inbox.
                </p>
                <p
                  className="text-lg leading-relaxed max-w-xl mx-auto"
                  style={{ color: "#5a7a9a" }}
                >
                  But here's something most parents realize quickly...
                </p>
                <p
                  className="text-lg font-semibold"
                  style={{ color: "#133960" }}
                >
                  Home is only part of the equation.
                </p>
              </motion.div>

              {/* Illustration */}
              <motion.div
                className="pt-6 pb-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <img
                  src={THANKYOU_IMG}
                  alt="Parent and child planting a seedling together"
                  className="w-72 sm:w-80 h-auto mx-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Bridge to Bundle ─── */}
        <section className="py-16 lg:py-24 bg-white relative">
          <div className="absolute top-0 left-0 right-0 overflow-hidden leading-[0]">
            <svg
              viewBox="0 0 1200 60"
              preserveAspectRatio="none"
              className="w-full h-8 sm:h-12"
            >
              <path
                d="M0,60 C200,20 400,50 600,30 C800,10 1000,45 1200,25 L1200,0 L0,0 Z"
                fill="#f5f8fc"
              />
            </svg>
          </div>

          <div className="container pt-8">
            <div className="max-w-3xl mx-auto">
              <motion.div
                className="text-center space-y-5 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                <h2
                  className="text-3xl sm:text-4xl font-bold leading-tight"
                  style={{ color: "#133960", fontFamily: "'Playfair Display', serif" }}
                >
                  What If School and Home Could Align?
                </h2>
                <p
                  className="text-lg leading-relaxed max-w-2xl mx-auto"
                  style={{ color: "#5a7a9a" }}
                >
                  If your child spends 6–8 hours a day in a digital environment
                  outside your control... wouldn't it make sense for school and
                  home to align?
                </p>
              </motion.div>

              {/* Bundle card */}
              <motion.div
                className="rounded-3xl overflow-hidden shadow-lg"
                style={{
                  background: "#f5f8fc",
                  border: "1px solid rgba(0,135,253,0.15)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="p-8 sm:p-10 space-y-8">
                  <div className="text-center">
                    <span
                      className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-4"
                      style={{
                        background: "rgba(231,158,36,0.1)",
                        color: "#E79E24",
                      }}
                    >
                      School + Home Clean Culture System
                    </span>
                    <h3
                      className="text-2xl sm:text-3xl font-bold"
                      style={{ color: "#133960" }}
                    >
                      The Complete Solution for Your Family
                    </h3>
                  </div>

                  {/* Benefits grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {bundleBenefits.map((b, i) => (
                      <motion.div
                        key={b.text}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white"
                        style={{
                          border: "1px solid rgba(0,135,253,0.1)",
                        }}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.2 + i * 0.1,
                        }}
                      >
                        <div
                          className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
                          style={{ background: "rgba(0,135,253,0.08)" }}
                        >
                          <b.icon
                            className="w-4 h-4"
                            style={{ color: "#0087FD" }}
                          />
                        </div>
                        <p
                          className="font-medium leading-snug"
                          style={{ color: "#133960" }}
                        >
                          {b.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="space-y-4 pt-2">
                    <a
                      href="https://www.ganjingworld.com/channel/1gajd44mjnu6W032LeIPHJDon1p30c"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        className="w-full h-14 text-lg font-semibold rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                        style={{ background: "#E79E24" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background = "#d08a1a")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "#E79E24")
                        }
                      >
                        <span className="flex items-center gap-2">
                          Explore Gan Jing Campus
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </a>

                    <div className="text-center">
                      <p
                        className="text-base font-medium"
                        style={{ color: "#133960" }}
                      >
                        Start with{" "}
                        <span
                          className="font-bold"
                          style={{ color: "#E79E24" }}
                        >
                          $6.99/month
                        </span>{" "}
                        for a 2-month Trial
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Footer ─── */}
        <footer className="py-10 text-center" style={{ background: "#00AAFF" }}>
          <div className="container space-y-4">
            <h3
              className="text-2xl sm:text-3xl font-extrabold tracking-wider text-white uppercase"
              style={{ letterSpacing: "0.08em" }}
            >
              GAN JING WORLD
            </h3>
            <p
              className="text-base font-light italic text-white"
              style={{ opacity: 0.9 }}
            >
              Technology for Humanity
            </p>
            <p
              className="text-sm text-white pt-2"
              style={{ opacity: 0.75 }}
            >
              &copy; {new Date().getFullYear()} Ganjingworld Corporation. All
              rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
