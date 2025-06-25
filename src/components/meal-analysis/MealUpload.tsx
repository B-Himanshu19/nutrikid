
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Upload, Zap, Clock } from "lucide-react";

interface MealUploadProps {
  selectedImage: string | null;
  analyzing: boolean;
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAnalyzeMeal: () => void;
}

export const MealUpload = ({ 
  selectedImage, 
  analyzing, 
  onImageUpload, 
  onAnalyzeMeal 
}: MealUploadProps) => {
  return (
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
            onChange={onImageUpload}
            className="w-full"
            id="meal-upload"
          />
          
          <Button
            onClick={onAnalyzeMeal}
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
  );
};
