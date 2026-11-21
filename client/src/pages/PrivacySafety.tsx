/*
 * Privacy & Safety — a plain-language page for parents, teachers and schools
 * (the audit's suggestion, modeled on ClassDojo's privacy center).
 *
 * Only state what is verifiable: the content-safety model the site already
 * describes, what THIS website collects (guide signups stored with Brevo;
 * Google Tag Manager analytics), and that watching happens on Gan Jing World
 * under its own policies. No compliance claims (COPPA, FERPA, seals) unless
 * the client confirms them.
 */
import { useEffect, useMemo } from "react";
import { Link } from "wouter";
import { ArrowUpRight, BarChart3, Bot, Flag, GraduationCap, Mail, MonitorPlay, ShieldCheck, Users } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { pageSeo } from "@/lib/seoRoutes";
import { CONTACT_EMAIL } from "@/lib/faq";

const GJW_PRIVACY = "https://www.ganjingworld.com/policy";
const GJW_TERMS = "https://www.ganjingworld.com/terms";
const LAST_UPDATED = "November 21, 2026";

const layers = [
  {
    icon: Bot,
    title: "1. Ethical AI screening",
    text: "Ethical AI filters harmful, violent and inappropriate material before it reaches children.",
  },
  {
    icon: GraduationCap,
    title: "2. Educator review",
    text: "Trained educators and content specialists check content for age-appropriateness and educational value.",
  },
  {
    icon: Flag,
    title: "3. Community reporting",
    text: "Parents, teachers and community members can flag anything that slips through, so it can be reviewed again.",
  },
];

const collected = [
  {
    icon: Mail,
    title: "Free guide signups",
    text: "If you request the 30-Minute Family Screen Reset guide, we collect your email address and, if you give it, your first name. We use them to send you the guide and occasional updates from Gan Jing Campus. Our email provider, Brevo, stores this list for us. Every email has an unsubscribe link.",
  },
  {
    icon: BarChart3,
    title: "Site analytics",
    text: "This website uses Google Tag Manager, which loads analytics tools that count page visits and guide signups so we can see which pages are useful. These tools may set cookies.",
  },
  {
    icon: Users,
    title: "No account on this website",
    text: "You don't need to sign up or log in to read ganjingcampus.org. The only form here is the free guide signup.",
  },
];

export default function PrivacySafety() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Privacy & Safety at Gan Jing Campus",
      description:
        "How Gan Jing Campus keeps content safe for children 4–16, what this website collects, and where to ask privacy questions.",
      url: "https://ganjingcampus.org/privacy-and-safety",
      dateModified: "2026-11-21",
      publisher: { "@type": "Organization", name: "Gan Jing Campus" },
    }),
    []
  );

  return (
    <>
      <SEOHead {...pageSeo("/privacy-and-safety")} jsonLd={jsonLd} />

      {/* ===== HERO ===== */}
      <section className="bg-cream pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container max-w-4xl text-center">
          <span className="inline-flex items-center gap-1.5 bg-meadow/15 text-meadow font-semibold text-sm px-4 py-1.5 rounded-full mb-5">
            <ShieldCheck className="w-4 h-4" />
            Privacy & Safety
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-5 text-balance">
            How We Keep Kids Safe, in <span className="text-sky">Plain Language</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-balance">
            How content is reviewed for children ages 4–16, what this website collects, and where
            parents, teachers and schools can take their questions.
          </p>
          <p className="text-sm text-muted-foreground mt-6">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* ===== CONTENT SAFETY ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-3 text-center">
            Three layers of content review
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10 text-balance">
            Gan Jing Campus is ad-free: no commercials and no ad-driven recommendations. Content is
            curated for ages 4–16 and passes three layers of review.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {layers.map((l) => (
              <div key={l.title} className="rounded-2xl bg-cream p-6 border border-border/60">
                <div className="w-12 h-12 rounded-xl bg-sky/10 flex items-center justify-center mb-4">
                  <l.icon className="w-6 h-6 text-sky" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{l.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{l.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT THIS WEBSITE COLLECTS ===== */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-3 text-center">
            What this website collects
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10 text-balance">
            This covers ganjingcampus.org only. Watching videos and running a teacher channel happen on
            Gan Jing World, covered in the next section.
          </p>
          <div className="space-y-4">
            {collected.map((c) => (
              <div key={c.title} className="flex gap-4 rounded-2xl bg-white p-6 border border-border/60">
                <div className="w-11 h-11 rounded-xl bg-meadow/10 flex items-center justify-center shrink-0">
                  <c.icon className="w-5 h-5 text-meadow" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">{c.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GAN JING WORLD ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border/60 p-6 md:p-8">
            <MonitorPlay className="w-7 h-7 text-sky mb-3" />
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Watching and teacher channels</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Gan Jing Campus videos, teacher channels and the Gan Jing Kids membership live on Gan Jing
              World (ganjingworld.com). Accounts and viewing there are covered by Gan Jing World's own
              Privacy Policy and Terms of Use.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-semibold">
              <a href={GJW_PRIVACY} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sky hover:underline">
                Gan Jing World Privacy Policy <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href={GJW_TERMS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sky hover:underline">
                Terms of Use <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-border/60 p-6 md:p-8">
            <GraduationCap className="w-7 h-7 text-sunshine-dark mb-3" />
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">For schools</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Teachers apply for a free Teacher Premium Channel on Gan Jing World. If your school is
              reviewing Gan Jing Campus and has questions about student data or classroom use, email us
              before you start and we'll go through them with you.
            </p>
            <Link href="/teachers" className="inline-flex items-center gap-1 text-sm font-semibold text-sky hover:underline">
              About the free teacher channel <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-sky to-[oklch(0.6_0.17_230)] text-white">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">Questions or requests</h2>
          <p className="text-white/90 text-lg leading-relaxed mb-8 text-balance">
            To ask a privacy or safety question, report content, or have your email removed from our
            list, write to us.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Privacy & Safety question")}`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-sky shadow-xl hover:scale-105 transition-transform no-underline"
          >
            <Mail className="w-5 h-5" />
            {CONTACT_EMAIL}
          </a>
        </div>
      </section>
    </>
  );
}
