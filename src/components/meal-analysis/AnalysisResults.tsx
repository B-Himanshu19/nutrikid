
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Camera, Zap } from "lucide-react";
import { NutritionScore } from "./NutritionScore";
import { DetectedFoods } from "./DetectedFoods";
import { NutritionBreakdown } from "./NutritionBreakdown";
import { Recommendations } from "./Recommendations";

interface AnalysisData {
  foodItems: Array<{
    name: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  }>;
  totalNutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
    vitamin_c: number;
    calcium: number;
  };
  nutritionScore: number;
  recommendations: string[];
  ageGroup: string;
  mealType: string;
}

interface AnalysisResultsProps {
  analyzing: boolean;
  analysis: AnalysisData | null;
  selectedImage: string | null;
}

export const AnalysisResults = ({ analyzing, analysis, selectedImage }: AnalysisResultsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analysis Results</CardTitle>
        <CardDescription>
          Nutritional breakdown and recommendations
        </CardDescription>
      </CardHeader>
      <CardContent>
        {analyzing && (
          <div className="space-y-4">
            <div className="text-center py-8">
              <div className="animate-pulse">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-blue-500" />
                </div>
                <p className="text-lg font-medium">Analyzing your meal...</p>
                <p className="text-sm text-gray-500">This may take a few seconds</p>
              </div>
            </div>
            <Progress value={33} className="w-full" />
          </div>
        )}

        {analysis && (
          <div className="space-y-6">
            <NutritionScore score={analysis.nutritionScore} />
            <DetectedFoods foodItems={analysis.foodItems} />
            <NutritionBreakdown nutrition={analysis.totalNutrition} />
            <Recommendations recommendations={analysis.recommendations} />
          </div>
        )}

        {!selectedImage && !analyzing && (
          <div className="text-center py-8 text-gray-500">
            <Camera className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Upload a meal photo to get started</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
