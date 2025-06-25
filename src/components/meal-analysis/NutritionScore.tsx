
import { Badge } from "@/components/ui/badge";

interface NutritionScoreProps {
  score: number;
}

export const NutritionScore = ({ score }: NutritionScoreProps) => {
  const getScoreLabel = (score: number) => {
    if (score >= 90) return "Excellent";
    if (score >= 80) return "Very Good";
    if (score >= 70) return "Good";
    if (score >= 60) return "Fair";
    return "Needs Improvement";
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "bg-green-100 text-green-700";
    if (score >= 80) return "bg-blue-100 text-blue-700";
    if (score >= 70) return "bg-yellow-100 text-yellow-700";
    if (score >= 60) return "bg-orange-100 text-orange-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <div className="text-center">
      <div className="relative inline-block">
        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
          {score}
        </div>
        <Badge className={`absolute -top-2 -right-2 ${getScoreColor(score)}`}>
          {getScoreLabel(score)}
        </Badge>
      </div>
      <p className="mt-2 text-sm text-gray-600">Nutrition Score</p>
    </div>
  );
};
