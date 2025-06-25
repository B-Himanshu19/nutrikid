
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, TrendingDown, Target, Calendar, Award } from "lucide-react";

const weeklyData = [
  { day: "Mon", calories: 1200, protein: 45, score: 85 },
  { day: "Tue", calories: 1350, protein: 52, score: 92 },
  { day: "Wed", calories: 1180, protein: 48, score: 88 },
  { day: "Thu", calories: 1420, protein: 55, score: 94 },
  { day: "Fri", calories: 1250, protein: 50, score: 90 },
  { day: "Sat", calories: 1380, protein: 48, score: 87 },
  { day: "Sun", calories: 1320, protein: 53, score: 91 }
];

const macroData = [
  { name: "Protein", value: 25, color: "#3B82F6" },
  { name: "Carbs", value: 50, color: "#10B981" },
  { name: "Fat", value: 25, color: "#F59E0B" }
];

const nutrients = [
  { name: "Vitamin C", current: 95, target: 100, unit: "mg" },
  { name: "Calcium", current: 1150, target: 1200, unit: "mg" },
  { name: "Iron", current: 8.5, target: 10, unit: "mg" },
  { name: "Fiber", current: 22, target: 25, unit: "g" }
];

export const NutritionDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Nutrition Dashboard</h1>
          <p className="text-gray-600">
            Track your child's nutritional progress and growth over time
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Today's Score</p>
                  <p className="text-2xl font-bold text-green-600">91</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="flex items-center mt-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-600">+5 from yesterday</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Weekly Average</p>
                  <p className="text-2xl font-bold text-blue-600">89</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center mt-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-600">Improving</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Calories Today</p>
                  <p className="text-2xl font-bold text-orange-600">1,320</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <div className="flex items-center mt-2 text-sm">
                <span className="text-gray-600">Target: 1,400</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Growth Percentile</p>
                  <p className="text-2xl font-bold text-purple-600">75th</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div className="flex items-center mt-2 text-sm">
                <span className="text-green-600">Healthy range</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Weekly Nutrition Score Trend */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Weekly Nutrition Trends</CardTitle>
              <CardDescription>
                Track daily nutrition scores and calorie intake
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    name="Nutrition Score"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="calories" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    name="Calories"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Macro Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Macro Distribution</CardTitle>
              <CardDescription>
                Today's macronutrient breakdown
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={macroData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                  >
                    {macroData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-4">
                {macroData.map((macro, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: macro.color }}
                      ></div>
                      <span className="text-sm">{macro.name}</span>
                    </div>
                    <span className="text-sm font-medium">{macro.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Essential Nutrients */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Essential Nutrients Progress</CardTitle>
              <CardDescription>
                Daily vitamin and mineral intake vs recommended values
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {nutrients.map((nutrient, index) => {
                  const percentage = (nutrient.current / nutrient.target) * 100;
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{nutrient.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">
                            {nutrient.current}{nutrient.unit} / {nutrient.target}{nutrient.unit}
                          </span>
                          <Badge 
                            variant={percentage >= 90 ? "default" : percentage >= 70 ? "secondary" : "destructive"}
                            className="text-xs"
                          >
                            {Math.round(percentage)}%
                          </Badge>
                        </div>
                      </div>
                      <Progress 
                        value={Math.min(percentage, 100)} 
                        className={`h-2 ${
                          percentage >= 90 ? "bg-green-100" : 
                          percentage >= 70 ? "bg-yellow-100" : "bg-red-100"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Growth Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Growth Tracking</CardTitle>
              <CardDescription>
                Height and weight progression
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">115 cm</div>
                  <div className="text-sm text-gray-600">Current Height</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">22 kg</div>
                  <div className="text-sm text-gray-600">Current Weight</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">16.8</div>
                  <div className="text-sm text-gray-600">BMI</div>
                  <Badge className="mt-1 bg-green-100 text-green-700">Healthy</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Meals */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Recent Meal Analysis</CardTitle>
            <CardDescription>
              Your child's latest meals and their nutritional scores
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { meal: "Grilled Chicken with Vegetables", time: "Lunch Today", score: 94, calories: 345 },
                { meal: "Oatmeal with Berries", time: "Breakfast Today", score: 88, calories: 280 },
                { meal: "Pasta with Tomato Sauce", time: "Dinner Yesterday", score: 82, calories: 420 },
                { meal: "Turkey Sandwich", time: "Lunch Yesterday", score: 86, calories: 380 }
              ].map((meal, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div>
                    <div className="font-medium">{meal.meal}</div>
                    <div className="text-sm text-gray-600">{meal.time}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-600">{meal.calories} cal</div>
                    <Badge 
                      variant={meal.score >= 90 ? "default" : meal.score >= 80 ? "secondary" : "destructive"}
                    >
                      {meal.score}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
