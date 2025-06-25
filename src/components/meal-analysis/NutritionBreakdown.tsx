
interface NutritionData {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  vitamin_c: number;
  calcium: number;
}

interface NutritionBreakdownProps {
  nutrition: NutritionData;
}

export const NutritionBreakdown = ({ nutrition }: NutritionBreakdownProps) => {
  return (
    <div>
      <h4 className="font-semibold mb-3">Nutrition Breakdown</h4>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-3 bg-blue-50 rounded">
          <div className="text-lg font-bold text-blue-600">{nutrition.calories}</div>
          <div className="text-sm text-gray-600">Calories</div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded">
          <div className="text-lg font-bold text-green-600">{nutrition.protein}g</div>
          <div className="text-sm text-gray-600">Protein</div>
        </div>
        <div className="text-center p-3 bg-yellow-50 rounded">
          <div className="text-lg font-bold text-yellow-600">{nutrition.carbs}g</div>
          <div className="text-sm text-gray-600">Carbs</div>
        </div>
        <div className="text-center p-3 bg-purple-50 rounded">
          <div className="text-lg font-bold text-purple-600">{nutrition.fat}g</div>
          <div className="text-sm text-gray-600">Fat</div>
        </div>
      </div>
    </div>
  );
};
