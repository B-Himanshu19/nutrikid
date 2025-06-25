
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Users, TrendingUp } from "lucide-react";

export const FeaturesSection = () => {
  return (
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
  );
};
