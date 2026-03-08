/*
 * Home Page — Gan Jing Summer Camp
 * Design Philosophy: "Sunshine Playground" — Bold, vibrant, child-friendly
 * Assembles all sections into a cohesive single-page experience
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AgeGroups from "@/components/AgeGroups";
import WeeklyThemes from "@/components/WeeklyThemes";
import WhyGanJing from "@/components/WhyGanJing";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeachersSection from "@/components/TeachersSection";
import GlobalSection from "@/components/GlobalSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AgeGroups />
        <WeeklyThemes />
        <WhyGanJing />
        <TestimonialsSection />
        <TeachersSection />
        <GlobalSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
