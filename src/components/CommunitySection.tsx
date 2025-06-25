
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageCircle, Share2, Plus, Star, Users, BookOpen, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const communityPosts = [
  {
    id: 1,
    author: "Sarah M.",
    avatar: "SM",
    time: "2 hours ago",
    content: "Just discovered this amazing recipe for hidden veggie mac and cheese! My 6-year-old had no idea there were cauliflower and carrots in it. He asked for seconds! 🥕🧀",
    image: "/api/placeholder/400/200",
    likes: 24,
    comments: 8,
    tags: ["recipe", "vegetables", "picky-eater"],
    score: 92
  },
  {
    id: 2,
    author: "Dr. Jennifer Liu",
    avatar: "JL",
    time: "5 hours ago",
    content: "Reminder for parents: Iron absorption is enhanced when paired with vitamin C! Try adding bell peppers or strawberries to iron-rich meals. Small changes, big impact! 💪",
    likes: 45,
    comments: 12,
    tags: ["nutrition-tip", "iron", "vitamins"],
    verified: true
  },
  {
    id: 3,
    author: "Mike Chen",
    avatar: "MC",
    time: "1 day ago",
    content: "Week 3 of using NutriKid and I'm amazed at the progress! My daughter's nutrition score went from 72 to 89. The AI suggestions really work. Thank you to this amazing community! 🎉",
    likes: 67,
    comments: 15,
    tags: ["success-story", "progress", "grateful"],
    score: 89
  }
];

const nutritionTips = [
  {
    title: "Making Vegetables Fun",
    author: "Nutritionist Emma",
    readTime: "3 min",
    category: "Tips & Tricks"
  },
  {
    title: "Protein Sources for Kids",
    author: "Dr. Sarah Johnson",
    readTime: "5 min",
    category: "Expert Advice"
  },
  {
    title: "Meal Prep for Busy Parents",
    author: "Chef Maria",
    readTime: "7 min",
    category: "Recipes"
  }
];

export const CommunitySection = () => {
  const [newPost, setNewPost] = useState("");
  const { toast } = useToast();

  const handleShare = () => {
    if (newPost.trim()) {
      toast({
        title: "Post shared!",
        description: "Your post has been shared with the community.",
      });
      setNewPost("");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">NutriKid Community</h1>
          <p className="text-gray-600">
            Connect with other parents, share experiences, and get expert advice
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Post Creation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Share Your Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Textarea
                    placeholder="Share a tip, recipe, or success story with the community..."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">
                        #recipe
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        #nutrition-tip
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        #success-story
                      </Badge>
                    </div>
                    <Button 
                      onClick={handleShare}
                      disabled={!newPost.trim()}
                      className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                    >
                      Share Post
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community Posts */}
            {communityPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
                        {post.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">{post.author}</span>
                        {post.verified && (
                          <Badge className="bg-blue-100 text-blue-700 text-xs">
                            Expert
                          </Badge>
                        )}
                        <span className="text-sm text-gray-500">{post.time}</span>
                        {post.score && (
                          <Badge className="bg-green-100 text-green-700 text-xs">
                            Score: {post.score}
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-gray-700 mb-4">{post.content}</p>
                      
                      {post.image && (
                        <div className="mb-4">
                          <img 
                            src={post.image} 
                            alt="Post content" 
                            className="rounded-lg w-full h-48 object-cover"
                          />
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                          <Heart className="w-4 h-4" />
                          {post.likes}
                        </button>
                        <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          {post.comments}
                        </button>
                        <button className="flex items-center gap-1 hover:text-green-500 transition-colors">
                          <Share2 className="w-4 h-4" />
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Community Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Active Members</span>
                    <span className="font-semibold">12,450</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Posts This Week</span>
                    <span className="font-semibold">284</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expert Contributors</span>
                    <span className="font-semibold">28</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Success Stories</span>
                    <span className="font-semibold">1,247</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Featured Articles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Featured Articles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nutritionTips.map((tip, index) => (
                    <div key={index} className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="font-medium text-sm mb-1">{tip.title}</div>
                      <div className="text-xs text-gray-600 mb-2">
                        By {tip.author} • {tip.readTime} read
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {tip.category}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Top Contributors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Dr. Sarah Johnson", points: 2450, badge: "Expert" },
                    { name: "Chef Maria Santos", points: 1890, badge: "Recipe Master" },
                    { name: "Emma Rodriguez", points: 1650, badge: "Helper" }
                  ].map((contributor, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{contributor.name}</div>
                        <div className="text-xs text-gray-600">{contributor.points} points</div>
                      </div>
                      <Badge className="text-xs">
                        {contributor.badge}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Browse Recipes
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Users className="w-4 h-4 mr-2" />
                    Find Local Groups
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Star className="w-4 h-4 mr-2" />
                    Expert Q&A
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
