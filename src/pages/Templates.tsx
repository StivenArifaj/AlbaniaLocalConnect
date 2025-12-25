
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Templates = () => {
  const navigate = useNavigate();

  const templates = [
    {
      id: 1,
      name: "Modern Professional",
      description: "Clean and modern design perfect for tech professionals",
      category: "Professional",
      rating: 4.9,
      downloads: "12.5k",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800",
      popular: true
    },
    {
      id: 2,
      name: "Creative Designer",
      description: "Bold and creative template for designers and artists",
      category: "Creative",
      rating: 4.8,
      downloads: "8.2k",
      image: "https://images.unsplash.com/photo-1626197031507-c17099753214?auto=format&fit=crop&q=80&w=800",
      popular: false
    },
    {
      id: 3,
      name: "Executive Elite",
      description: "Sophisticated template for senior executives",
      category: "Executive",
      rating: 4.9,
      downloads: "6.1k",
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=800",
      popular: true
    },
    {
      id: 4,
      name: "Minimalist Clean",
      description: "Simple and elegant design with focus on content",
      category: "Minimalist",
      rating: 4.7,
      downloads: "15.3k",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
      popular: false
    },
    {
      id: 5,
      name: "Academic Scholar",
      description: "Perfect for academic positions and research roles",
      category: "Academic",
      rating: 4.6,
      downloads: "4.8k",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
      popular: false
    },
    {
      id: 6,
      name: "Sales Pro",
      description: "Dynamic template for sales and business development",
      category: "Sales",
      rating: 4.8,
      downloads: "9.7k",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
      popular: true
    }
  ];

  const categories = ["All", "Professional", "Creative", "Executive", "Minimalist", "Academic", "Sales"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Professional Resume Templates</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our collection of ATS-friendly templates designed to help you stand out in the Albanian and international job market
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All"
                ? "bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 shadow-md"
                : "border-teal-200 text-teal-700 hover:bg-teal-50"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[3/4] bg-gray-100 rounded-t-lg overflow-hidden relative">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {template.popular && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md">
                    Popular
                  </div>
                )}
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{template.rating}</span>
                  </div>
                </div>
                <CardDescription className="text-sm">
                  {template.description}
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">{template.category}</span>
                  <span>{template.downloads} downloads</span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-teal-600 text-teal-700 hover:bg-teal-50"
                  >
                    Preview
                  </Button>
                  <Button
                    onClick={() => navigate('/builder')}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
                    size="sm"
                  >
                    <FileText className="w-4 h-4 mr-1" />
                    Use This
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-blue-700 to-teal-600 text-white border-none shadow-2xl overflow-hidden">
            <CardContent className="p-10 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-400/20 rounded-full -ml-12 -mb-12 blur-xl"></div>

              <h2 className="text-3xl font-bold mb-4">Can't Find the Perfect Template?</h2>
              <p className="mb-8 text-blue-50 text-lg max-w-xl mx-auto">
                Our AI-powered builder can help you create a custom resume tailored to your specific industry and career goals.
              </p>
              <Button
                onClick={() => navigate('/builder')}
                className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-6 text-lg font-bold shadow-lg"
              >
                Start Custom Build
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Templates;
