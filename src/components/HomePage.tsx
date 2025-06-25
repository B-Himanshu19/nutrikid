
import { HeroSection } from "./home/HeroSection";
import { FeaturesSection } from "./home/FeaturesSection";
import { StatsSection } from "./home/StatsSection";
import { TestimonialsSection } from "./home/TestimonialsSection";
import { CTASection } from "./home/CTASection";

interface HomePageProps {
  setActiveSection: (section: string) => void;
}

export const HomePage = ({ setActiveSection }: HomePageProps) => {
  return (
    <>
      <HeroSection setActiveSection={setActiveSection} />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};
