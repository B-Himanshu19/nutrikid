
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MealUpload } from "./meal-analysis/MealUpload";
import { AnalysisResults } from "./meal-analysis/AnalysisResults";

export const MealAnalysis = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setAnalysis(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeMeal = async () => {
    if (!selectedImage) return;
    
    setAnalyzing(true);
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const mockAnalysis = {
      foodItems: [
        { name: "Grilled Chicken Breast", calories: 185, protein: 35, carbs: 0, fat: 4 },
        { name: "Steamed Broccoli", calories: 25, protein: 3, carbs: 5, fat: 0 },
        { name: "Brown Rice", calories: 110, protein: 3, carbs: 23, fat: 1 },
        { name: "Carrots", calories: 25, protein: 1, carbs: 6, fat: 0 }
      ],
      totalNutrition: {
        calories: 345,
        protein: 42,
        carbs: 34,
        fat: 5,
        fiber: 8,
        vitamin_c: 95,
        calcium: 12
      },
      nutritionScore: 92,
      recommendations: [
        "Excellent protein content for growing children",
        "Good balance of vegetables and whole grains",
        "Consider adding a healthy fat source like avocado",
        "Perfect portion size for a 6-8 year old child"
      ],
      ageGroup: "6-8 years",
      mealType: "Lunch"
    };
    
    setAnalysis(mockAnalysis);
    setAnalyzing(false);
    
    toast({
      title: "Analysis Complete!",
      description: "Your meal has been successfully analyzed.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">AI Meal Analysis</h1>
          <p className="text-gray-600">
            Upload a photo of your child's meal for instant nutritional analysis and personalized recommendations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <MealUpload
            selectedImage={selectedImage}
            analyzing={analyzing}
            onImageUpload={handleImageUpload}
            onAnalyzeMeal={analyzeMeal}
          />
          <AnalysisResults
            analyzing={analyzing}
            analysis={analysis}
            selectedImage={selectedImage}
          />
        </div>
      </div>
    </div>
  );
};
