
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

export const HeroSection = ({ setActiveSection }: HeroSectionProps) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center max-w-4xl mx-auto">
        <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
          AI-Powered Nutrition Tracking
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
          Empower Your Child's Nutrition Journey
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          NutriKid uses AI-powered image recognition to analyze meal photos, providing personalized feedback and recommendations for your child's balanced diet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => setActiveSection("analysis")}
            className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
          >
            Start Meal Analysis <Camera className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => setActiveSection("dashboard")}
            className="border-blue-200 text-blue-600 hover:bg-blue-50"
          >
            View Dashboard <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
