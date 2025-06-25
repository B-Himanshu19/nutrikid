
import { CheckCircle } from "lucide-react";

interface RecommendationsProps {
  recommendations: string[];
}

export const Recommendations = ({ recommendations }: RecommendationsProps) => {
  return (
    <div>
      <h4 className="font-semibold mb-3">Recommendations</h4>
      <div className="space-y-2">
        {recommendations.map((rec, index) => (
          <div key={index} className="flex items-start gap-2 text-sm">
            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span>{rec}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
