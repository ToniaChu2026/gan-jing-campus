/*
 * Summer Camp Page — Gan Jing Campus
 * Design: Dedicated page for the 8-week Summer Camp program
 * Reuses existing section components from the original single-page site
 */
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AgeGroups from "@/components/AgeGroups";
import WeeklyThemes from "@/components/WeeklyThemes";
import WhyGanJing from "@/components/WhyGanJing";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export default function SummerCamp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
