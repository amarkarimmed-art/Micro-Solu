import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { ValuePropSection } from "@/components/landing/ValuePropSection";
import { SolutionsSection } from "@/components/landing/SolutionsSection";
import { SubsidiesSection } from "@/components/landing/SubsidiesSection";
import { WhyUsSection } from "@/components/landing/WhyUsSection";
import { ResultsSection } from "@/components/landing/ResultsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTA } from "@/components/landing/FinalCTA";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ProblemSection />
      <ProcessSection />
      <ValuePropSection />
      <SolutionsSection />
      <SubsidiesSection />
      <WhyUsSection />
      <ResultsSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
