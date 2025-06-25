
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Users, TrendingUp, Heart, ArrowRight, Star, Shield, Smartphone } from "lucide-react";
import { MealAnalysis } from "@/components/MealAnalysis";
import { NutritionDashboard } from "@/components/NutritionDashboard";
import { CommunitySection } from "@/components/CommunitySection";

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

const HomePage = ({ setActiveSection }) => {
  return (
    <>
      {/* Hero Section */}
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

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose NutriKid?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive approach helps parents make informed decisions about their children's nutrition
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-blue-100 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-blue-900">AI Meal Analysis</CardTitle>
              <CardDescription>
                Simply take a photo of your child's meal and get instant nutritional analysis powered by advanced AI
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-green-100 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-green-900">Growth Tracking</CardTitle>
              <CardDescription>
                Monitor your child's growth parameters and correlate them with dietary intake for optimal development
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-purple-100 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-purple-900">Community Support</CardTitle>
              <CardDescription>
                Connect with other parents to share meal ideas, tips, and get support from our nutrition community
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10k+</div>
              <div className="text-blue-100">Happy Families</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50k+</div>
              <div className="text-blue-100">Meals Analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Parents Say</h2>
          <p className="text-gray-600">Real feedback from families using NutriKid</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Mother of 2",
              content: "NutriKid has transformed how I approach my children's nutrition. The AI analysis is incredibly accurate!",
              rating: 5
            },
            {
              name: "Michael Chen",
              role: "Pediatric Nurse",
              content: "As a healthcare professional, I'm impressed by the scientific approach and user-friendly interface.",
              rating: 5
            },
            {
              name: "Emma Rodriguez",
              role: "Working Mom",
              content: "The community features help me discover new healthy meal ideas. It's like having a nutritionist in my pocket!",
              rating: 5
            }
          ].map((testimonial, index) => (
            <Card key={index} className="border-gray-100">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Child's Nutrition?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of parents who trust NutriKid to help their children develop healthy eating habits
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="w-4 h-4" />
              <span>Privacy Protected</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Smartphone className="w-4 h-4" />
              <span>Mobile Optimized</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Heart className="w-4 h-4" />
              <span>Science-Based</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
