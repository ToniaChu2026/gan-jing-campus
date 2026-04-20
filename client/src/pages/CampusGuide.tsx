/**
 * Campus Guide — "The 30-Minute Family Screen Reset" Landing Page
 * Brand Colors: Azure Radiance Blue (#0087FD), Blue Zodiac (#133960), Golden Orange (#E79E24)
 * Typography: Playfair Display (display) + Source Sans 3 (body)
 * This is a standalone landing page NOT shown in the main navigation.
 * GTM is automatically included via index.html.
 */

import { useState, useEffect, useMemo } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, ArrowRight, Shield, BookOpen, Users, Clock, Sparkles, Heart } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { trpc } from "@/lib/trpc";

const LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/JpXHvw67Ajo9P9hYJJi7Nr/GJW-Campus_7c6022c9.png";
const HERO_FAMILY = "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/JpXHvw67Ajo9P9hYJJi7Nr/hero-family-ibVVtpyZu474fPsuBdUFZz.webp";
const BOTANICAL_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/JpXHvw67Ajo9P9hYJJi7Nr/hero-botanical-bg-7FCBiShvJCXUsCnMz4uUep.webp";
const SHIELD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/JpXHvw67Ajo9P9hYJJi7Nr/benefits-shield-hHpaUadnLnh8NdNdCo4H3A.webp";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const benefits = [
  {
    icon: Clock,
    title: "Replace Your Kids' High-Risk Defaults in 10 Minutes",
    desc: "Remove algorithm-driven chaos and make aligned content fun.",
  },
  {
    icon: BookOpen,
    title: 'Build a "Go-To List" That Eliminates Negotiation',
    desc: "No more endless scrolling online.",
  },
  {
    icon: Shield,
    title: "Install a Clear Family Digital Standard",
    desc: "Give your child a filter — not just a rule.",
  },
  {
    icon: Sparkles,
    title: "Reduce Screen Battles in 14 Days",
    desc: "Design beats willpower.",
  },
  {
    icon: Users,
    title: "Create Alignment That Extends Beyond Your Home",
    desc: "Learn how to bring your school into the conversation.",
  },
];

export default function CampusGuide() {
  const [, navigate] = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "The 30-Minute Family Screen Reset — Free Guide",
      description:
        "A simple, practical setup guide for values-driven parents who want to shape their kids' digital future without banning technology.",
      url: "https://ganjingcampus.manus.space/free-guide",
      publisher: {
        "@type": "Organization",
        name: "Gan Jing Campus",
      },
    }),
    []
  );

  const leadMutation = trpc.lead.submit.useMutation({
    onSuccess: () => {
      navigate("/free-guide/thank-you");
    },
    onError: (error) => {
      console.error("[Lead] Submission error:", error);
      setIsSubmitting(false);
      // Still navigate to thank-you on error — the guide URL is on that page
      navigate("/free-guide/thank-you");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    leadMutation.mutate({ email, firstName: name || undefined });
  };

  return (
    <>
      <SEOHead
        title="The 30-Minute Family Screen Reset — Free Guide"
        description="A simple, practical setup guide for values-driven parents who want to shape their kids' digital future without banning technology. Free from Gan Jing Campus."
        canonicalPath="/free-guide"
        keywords="family screen reset, digital parenting guide, screen time, children digital safety, values-driven parenting, Gan Jing Campus guide"
        ogImage={HERO_FAMILY}
        jsonLd={jsonLd}
      />

      <div className="min-h-screen" style={{ background: "#f5f8fc" }}>
        {/* ─── Minimal Nav ─── */}
        <nav
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
          style={{
            background: "rgba(245,248,252,0.85)",
            borderColor: "rgba(0,135,253,0.1)",
          }}
        >
          <div className="container flex items-center justify-between h-16">
            <a href="/">
              <img src={LOGO} alt="Gan Jing Campus" className="h-8 w-auto" />
            </a>
            <a
              href="#get-guide"
              className="text-sm font-semibold transition-colors"
              style={{ color: "#E79E24" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d08a1a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#E79E24")}
            >
              Get the Free Guide &rarr;
            </a>
          </div>
        </nav>

        {/* ─── Hero Section ─── */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url(${BOTANICAL_BG})`,
              backgroundSize: "800px",
              backgroundRepeat: "repeat",
            }}
          />

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left: Copy */}
              <div className="lg:col-span-7 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span
                    className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-4"
                    style={{ background: "rgba(0,135,253,0.08)", color: "#0087FD" }}
                  >
                    Free Guide for Parents
                  </span>
                </motion.div>

                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
                  style={{ color: "#133960", fontFamily: "'Playfair Display', serif" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  The 30-Minute
                  <br />
                  <span style={{ color: "#E79E24" }}>Family Screen Reset</span>
                </motion.h1>

                <motion.h2
                  className="text-xl sm:text-2xl font-medium leading-relaxed"
                  style={{ color: "#1a4a7a", fontFamily: "'Playfair Display', serif" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  How to Make Sure Screens Support Your Child's Character — Not Harm
                  It
                </motion.h2>

                <motion.p
                  className="text-lg leading-relaxed max-w-xl"
                  style={{ color: "#5a7a9a" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  A simple, practical setup guide for values-driven parents who want
                  to shape their kids' future without banning technology.
                </motion.p>

                {/* Hero image (mobile only) */}
                <motion.div
                  className="lg:hidden rounded-2xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <img
                    src={HERO_FAMILY}
                    alt="A family reading together in a warm, sunlit living room"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="pt-2"
                >
                  <a
                    href="#get-guide"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.03] no-underline"
                    style={{
                      background: "linear-gradient(135deg, #E79E24, #d08a1a)",
                    }}
                  >
                    Get the Free Guide
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>

                {/* Quick benefits preview */}
                <motion.div
                  className="flex flex-wrap gap-3 pt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {["10-Minute Setup", "No Tech Bans", "Proven Framework"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium"
                        style={{
                          background: "rgba(0,135,253,0.08)",
                          color: "#0087FD",
                        }}
                      >
                        <Check className="w-3.5 h-3.5" />
                        {tag}
                      </span>
                    )
                  )}
                </motion.div>
              </div>

              {/* Right: Hero image (desktop) */}
              <motion.div
                className="hidden lg:block lg:col-span-5"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <div
                    className="absolute -inset-3 rounded-3xl blur-sm"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0,135,253,0.15), rgba(231,158,36,0.12))",
                    }}
                  />
                  <img
                    src={HERO_FAMILY}
                    alt="A family reading together in a warm, sunlit living room"
                    className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Benefits Section ─── */}
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
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left: Shield illustration */}
              <motion.div
                className="hidden lg:flex lg:col-span-4 justify-center items-start pt-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                custom={0}
              >
                <img
                  src={SHIELD_IMG}
                  alt="Family protection shield with botanical elements"
                  className="w-64 h-auto opacity-90"
                />
              </motion.div>

              {/* Right: Benefits list */}
              <div className="lg:col-span-8 space-y-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  custom={0}
                >
                  <h2
                    className="text-3xl sm:text-4xl font-bold mb-2"
                    style={{ color: "#133960", fontFamily: "'Playfair Display', serif" }}
                  >
                    What You'll Get Inside
                  </h2>
                  <p className="text-lg mb-8" style={{ color: "#5a7a9a" }}>
                    Five actionable strategies you can implement today.
                  </p>
                </motion.div>

                <div className="space-y-5">
                  {benefits.map((b, i) => (
                    <motion.div
                      key={b.title}
                      className="flex gap-4 p-5 rounded-xl border hover:shadow-md transition-all duration-300"
                      style={{
                        background: "rgba(0,135,253,0.02)",
                        borderColor: "rgba(0,135,253,0.1)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(0,135,253,0.25)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(0,135,253,0.1)";
                      }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      variants={fadeInUp}
                      custom={i + 1}
                    >
                      <div
                        className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center"
                        style={{ background: "rgba(0,135,253,0.08)" }}
                      >
                        <b.icon
                          className="w-5 h-5"
                          style={{ color: "#0087FD" }}
                        />
                      </div>
                      <div>
                        <h3
                          className="text-lg font-semibold mb-1"
                          style={{ color: "#133960" }}
                        >
                          {b.title}
                        </h3>
                        <p
                          className="leading-relaxed"
                          style={{ color: "#5a7a9a" }}
                        >
                          {b.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Lead Capture Form Section ─── */}
        <section
          id="get-guide"
          className="py-16 lg:py-24 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url(${BOTANICAL_BG})`,
              backgroundSize: "600px",
              backgroundRepeat: "repeat",
            }}
          />

          <div className="container relative z-10">
            <div className="max-w-2xl mx-auto">
              <motion.div
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
                style={{ border: "1px solid rgba(0,135,253,0.12)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                {/* Form header */}
                <div
                  className="px-8 py-8 text-center"
                  style={{
                    background: "linear-gradient(135deg, #0087FD, #133960)",
                  }}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Get the 30-Minute Screen Reset Guide
                  </h2>
                  <p
                    className="text-base"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    Free. Immediate. Designed for families who care about
                    character.
                  </p>
                </div>

                {/* Form body */}
                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="font-medium"
                      style={{ color: "#133960" }}
                    >
                      Your First Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="e.g. Sarah"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-12 rounded-xl placeholder:text-gray-400"
                      style={{
                        background: "rgba(0,135,253,0.03)",
                        borderColor: "rgba(0,135,253,0.15)",
                        color: "#133960",
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="font-medium"
                      style={{ color: "#133960" }}
                    >
                      Your Email Address{" "}
                      <span style={{ color: "#E79E24" }}>*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12 rounded-xl placeholder:text-gray-400"
                      style={{
                        background: "rgba(0,135,253,0.03)",
                        borderColor: "rgba(0,135,253,0.15)",
                        color: "#133960",
                      }}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg font-semibold rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                    style={{
                      background: "#E79E24",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#d08a1a")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "#E79E24")
                    }
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Get the 30-Minute Screen Reset Guide
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>

                  <p
                    className="text-center text-sm pt-1"
                    style={{ color: "#5a7a9a" }}
                  >
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </motion.div>

              {/* Urgency line */}
              <motion.p
                className="text-center text-base font-medium mt-8 italic"
                style={{ color: "#133960" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Start today. Don't let the algorithm shape tomorrow.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ─── Social Proof / Trust ─── */}
        <section
          className="py-12 bg-white"
          style={{ borderTop: "1px solid rgba(0,135,253,0.08)" }}
        >
          <div className="container">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center">
              <div>
                <p
                  className="text-3xl font-bold"
                  style={{ color: "#133960" }}
                >
                  1,600+
                </p>
                <p className="text-sm mt-1" style={{ color: "#5a7a9a" }}>
                  Families Enrolled
                </p>
              </div>
              <div
                className="hidden sm:block w-px h-10"
                style={{ background: "rgba(0,135,253,0.15)" }}
              />
              <div>
                <p
                  className="text-3xl font-bold"
                  style={{ color: "#133960" }}
                >
                  78+
                </p>
                <p className="text-sm mt-1" style={{ color: "#5a7a9a" }}>
                  Educational Resources
                </p>
              </div>
              <div
                className="hidden sm:block w-px h-10"
                style={{ background: "rgba(0,135,253,0.15)" }}
              />
              <div>
                <p
                  className="text-3xl font-bold"
                  style={{ color: "#133960" }}
                >
                  100%
                </p>
                <p className="text-sm mt-1" style={{ color: "#5a7a9a" }}>
                  Values-Aligned Content
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Footer ─── */}
        <footer className="bg-[#133960] text-white/70">
          <div className="container py-16">
            <div className="grid md:grid-cols-4 gap-10">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <img
                    src={LOGO}
                    alt="Gan Jing Campus"
                    className="h-8 w-auto brightness-0 invert"
                  />
                </div>
                <p className="text-sm leading-relaxed mb-4">
                  An ad-free, educator-friendly platform powered by Ethical AI.
                  Promoting kindness, creativity, and safe digital learning for
                  children worldwide.
                </p>
                <p className="text-xs text-white/40">Powered by Gan Jing World</p>
              </div>

              {/* Explore */}
              <div>
                <h4 className="font-bold text-white text-sm mb-4">Explore</h4>
                <ul className="space-y-2.5">
                  {[
                    { label: "Home", href: "/" },
                    { label: "Summer Camp", href: "/summer-camp" },
                    { label: "For Teachers", href: "/teachers" },
                    { label: "Kindness Stories", href: "/kindness" },
                    { label: "About", href: "/about" },
                  ].map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/60 hover:text-white/90 transition-colors no-underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gan Jing World */}
              <div>
                <h4 className="font-bold text-white text-sm mb-4">Gan Jing World</h4>
                <ul className="space-y-2.5">
                  {[
                    { label: "Gan Jing Campus", href: "https://www.ganjingworld.com/ganjingcampus" },
                    { label: "Gan Jing Kids", href: "https://www.ganjingworld.com/gjwplus/kids/ganjingkids" },
                    { label: "Gan Jing World", href: "https://www.ganjingworld.com" },
                  ].map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/60 hover:text-white/90 transition-colors no-underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-bold text-white text-sm mb-4">Resources</h4>
                <ul className="space-y-2.5">
                  {[
                    { label: "Teacher Handbook", href: "https://www.ganjingworld.com/news/1i13tdngs6fsEZDUDBoyG2Fto16n1c" },
                    { label: "Apply for Premium", href: "https://www.ganjingworld.com/news/1i3csp1t9651d6ebrqpymLf3u1j11c" },
                    { label: "Kindness Awards", href: "https://www.ganjingworld.com/news/1htqniht6hp3u3PVR5BpnRHqB1ic1c" },
                    { label: "Success Stories", href: "https://www.ganjingworld.com/news/1htqng1kqt45DWMGkHwsYvRcf1gk1c" },
                  ].map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/60 hover:text-white/90 transition-colors no-underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs text-white/40">
                &copy; {new Date().getFullYear()} Gan Jing World. All rights reserved.
              </p>
              <p className="text-xs text-white/40 flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-coral fill-coral" /> for a kinder world
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
