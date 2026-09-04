"use client";

import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { ValuePropSection } from "@/components/landing/ValuePropSection";
import { SolutionsSection } from "@/components/landing/SolutionsSection";
import { SubsidiesSection } from "@/components/landing/SubsidiesSection";
import { WhyUsSection } from "@/components/landing/WhyUsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { HorizontalCarousel } from "@/components/layout/HorizontalCarousel";
import { useNavigation } from "@/context/NavigationContext";

export default function Home() {
  const { activeSection, setActiveSection } = useNavigation();

  const sections = [
    { name: "Accueil", component: <Hero /> },
    { name: "Constat", component: <ProblemSection /> },
    { name: "Parcours", component: <ProcessSection /> },
    { name: "Avantage", component: <ValuePropSection /> },
    { name: "Solutions", component: <SolutionsSection /> },
    { name: "Subventions", component: <SubsidiesSection /> },
    { name: "Pourquoi nous", component: <WhyUsSection /> },
    { name: "FAQ", component: <FAQSection /> },
    { name: "Contact", component: <FinalCTA /> },
  ];

  return (
    <>
      {/* Mobile: Carousel */}
      <div className="md:hidden">
        <HorizontalCarousel 
          activeSection={activeSection} 
          onActiveSectionChange={setActiveSection}
        >
          {sections.map((s, i) => <div key={i} className="h-full">{s.component}</div>)}
        </HorizontalCarousel>
      </div>

      {/* Desktop: Normal scroll */}
      <div className="hidden md:flex flex-col">
        {sections.map((s, i) => <div key={i}>{s.component}</div>)}
      </div>
    </>
  );
}
