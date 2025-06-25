
import { useState } from "react";
import { Heart } from "lucide-react";
import { MealAnalysis } from "@/components/MealAnalysis";
import { NutritionDashboard } from "@/components/NutritionDashboard";
import { CommunitySection } from "@/components/CommunitySection";
import { HomePage } from "@/components/HomePage";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderContent = () => {
    switch (activeSection) {
      case "analysis":
        return <MealAnalysis />;
      case "dashboard":
        return <NutritionDashboard />;
      case "community":
        return <CommunitySection />;
      default:
        return <HomePage setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                NutriKid
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => setActiveSection("home")}
                className={`text-sm font-medium transition-colors ${
                  activeSection === "home" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveSection("analysis")}
                className={`text-sm font-medium transition-colors ${
                  activeSection === "analysis" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Meal Analysis
              </button>
              <button
                onClick={() => setActiveSection("dashboard")}
                className={`text-sm font-medium transition-colors ${
                  activeSection === "dashboard" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveSection("community")}
                className={`text-sm font-medium transition-colors ${
                  activeSection === "community" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Community
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {renderContent()}
    </div>
  );
};

export default Index;
