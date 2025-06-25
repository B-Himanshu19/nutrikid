
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Mother of 2",
    content: "NutriKid has transformed how I approach my children's nutrition. The AI analysis is incredibly accurate!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Pediatric Nurse",
    content: "As a healthcare professional, I'm impressed by the scientific approach and user-friendly interface.",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Working Mom",
    content: "The community features help me discover new healthy meal ideas. It's like having a nutritionist in my pocket!",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Parents Say</h2>
        <p className="text-gray-600">Real feedback from families using NutriKid</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-gray-100">
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
