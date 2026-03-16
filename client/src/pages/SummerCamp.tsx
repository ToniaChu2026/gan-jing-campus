/*
 * Summer Camp Page — Gan Jing Campus
 * Design: Dedicated page for the 8-week Summer Camp program
 * SEO: Per-page meta, JSON-LD Event structured data
 */
import { useEffect, useMemo } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AgeGroups from "@/components/AgeGroups";
import WeeklyThemes from "@/components/WeeklyThemes";
import WhyGanJing from "@/components/WhyGanJing";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";

export default function SummerCamp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Gan Jing Summer Camp 2026",
      description:
        "An 8-week online summer camp adventure of kindness, creativity, and discovery for children ages 4-16. Free, ad-free, and powered by Ethical AI.",
      startDate: "2026-06-15",
      endDate: "2026-08-07",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "VirtualLocation",
        url: "https://www.ganjingworld.com/ganjingcampus",
      },
      organizer: {
        "@type": "Organization",
        name: "Gan Jing Campus",
        url: "https://www.ganjingworld.com/ganjingcampus",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://ganjingsummercamp-fejrdh2z.manus.space/summer-camp",
      },
      audience: {
        "@type": "EducationalAudience",
        educationalRole: "student",
        suggestedMinAge: 4,
        suggestedMaxAge: 16,
      },
      isAccessibleForFree: true,
    }),
    []
  );

  return (
    <>
      <SEOHead
        title="Summer Camp 2026 — 8-Week Adventure of Kindness & Creativity"
        description="Join Gan Jing Summer Camp 2026: a free, 8-week online program for children ages 4-16. Explore kindness, creativity, Chinese culture, STEM, and more in a 100% safe, ad-free environment."
        canonicalPath="/summer-camp"
        keywords="Gan Jing Summer Camp 2026, free summer camp online, kids summer program, kindness camp, creative learning, children ages 4-16, ad-free summer camp, ethical AI education"
        ogImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663394654478/FejRdH2ZxLJ7ALCougUU5q/hero-banner-iqxoTcBJNU64e8KpLGpYJY.webp"
        jsonLd={jsonLd}
      />
      <HeroSection />
      <AboutSection />
      <AgeGroups />
      <WeeklyThemes />
      <WhyGanJing />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
