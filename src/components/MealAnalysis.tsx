
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Camera, Upload, Zap, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Upload Meal Photo
              </CardTitle>
              <CardDescription>
                Take a clear photo of the meal from above for best results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Selected meal"
                      className="max-w-full h-48 object-cover mx-auto rounded-lg"
                    />
                  ) : (
                    <div className="space-y-4">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                      <p className="text-gray-500">Click to upload or drag and drop</p>
                    </div>
                  )}
                </div>
                
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full"
                  id="meal-upload"
                />
                
                <Button
                  onClick={analyzeMeal}
                  disabled={!selectedImage || analyzing}
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                >
                  {analyzing ? (
                    <>
                      <Clock className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      Analyze Meal
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Analysis Results */}
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
                  {/* Nutrition Score */}
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {analysis.nutritionScore}
                      </div>
                      <Badge className="absolute -top-2 -right-2 bg-green-100 text-green-700">
                        Excellent
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">Nutrition Score</p>
                  </div>

                  {/* Detected Foods */}
                  <div>
                    <h4 className="font-semibold mb-3">Detected Foods</h4>
                    <div className="space-y-2">
                      {analysis.foodItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <span className="text-sm font-medium">{item.name}</span>
                          <span className="text-sm text-gray-600">{item.calories} cal</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Nutrition Breakdown */}
                  <div>
                    <h4 className="font-semibold mb-3">Nutrition Breakdown</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded">
                        <div className="text-lg font-bold text-blue-600">{analysis.totalNutrition.calories}</div>
                        <div className="text-sm text-gray-600">Calories</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded">
                        <div className="text-lg font-bold text-green-600">{analysis.totalNutrition.protein}g</div>
                        <div className="text-sm text-gray-600">Protein</div>
                      </div>
                      <div className="text-center p-3 bg-yellow-50 rounded">
                        <div className="text-lg font-bold text-yellow-600">{analysis.totalNutrition.carbs}g</div>
                        <div className="text-sm text-gray-600">Carbs</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded">
                        <div className="text-lg font-bold text-purple-600">{analysis.totalNutrition.fat}g</div>
                        <div className="text-sm text-gray-600">Fat</div>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div>
                    <h4 className="font-semibold mb-3">Recommendations</h4>
                    <div className="space-y-2">
                      {analysis.recommendations.map((rec, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
        </div>
      </div>
    </div>
  );
};
