
import { Shield, Smartphone, Heart } from "lucide-react";

export const CTASection = () => {
  return (
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
  );
};
