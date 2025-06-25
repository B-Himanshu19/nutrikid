
interface FoodItem {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface DetectedFoodsProps {
  foodItems: FoodItem[];
}

export const DetectedFoods = ({ foodItems }: DetectedFoodsProps) => {
  return (
    <div>
      <h4 className="font-semibold mb-3">Detected Foods</h4>
      <div className="space-y-2">
        {foodItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
            <span className="text-sm font-medium">{item.name}</span>
            <span className="text-sm text-gray-600">{item.calories} cal</span>
          </div>
        ))}
      </div>
    </div>
  );
};
