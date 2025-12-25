
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Star, Clock, MapPin } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Services = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [location, setLocation] = useState(searchParams.get('location') || '');

  const categories = [
    { id: 'all', name: 'All Services', count: 45 },
    { id: 'cleaning', name: 'House Cleaning', count: 12 },
    { id: 'lawn-care', name: 'Lawn Care', count: 8 },
    { id: 'handyman', name: 'Handyman', count: 15 },
    { id: 'plumbing', name: 'Plumbing', count: 6 },
    { id: 'electrical', name: 'Electrical', count: 4 }
  ];

  const services = [
    {
      id: 1,
      name: "Deep House Cleaning",
      provider: "Klean Team Albania",
      price: "€25/hour",
      rating: 4.9,
      reviews: 156,
      duration: "2-3 hours",
      location: "Tirana",
      category: "cleaning",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=800",
      description: "Professional deep cleaning service for your entire home"
    },
    {
      id: 2,
      name: "Lawn Mowing & Maintenance",
      provider: "Garden Pro Services",
      price: "€30/hour",
      rating: 4.8,
      reviews: 89,
      duration: "1-2 hours",
      location: "Durrës",
      category: "lawn-care",
      image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800",
      description: "Complete lawn care including mowing, edging, and cleanup"
    },
    {
      id: 3,
      name: "General Handyman Services",
      provider: "Fix-It Masters",
      price: "€35/hour",
      rating: 4.7,
      reviews: 234,
      duration: "1-4 hours",
      location: "Vlorë",
      category: "handyman",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
      description: "Furniture assembly, minor repairs, and home maintenance"
    },
    {
      id: 4,
      name: "Emergency Plumbing",
      provider: "Rapid Plumbers",
      price: "€40/hour",
      rating: 4.9,
      reviews: 67,
      duration: "1-2 hours",
      location: "Tirana",
      category: "plumbing",
      image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&q=80&w=800",
      description: "24/7 emergency plumbing repairs and installations"
    },
    {
      id: 5,
      name: "Electrical Repairs",
      provider: "ElectroFix Albania",
      price: "€45/hour",
      rating: 4.6,
      reviews: 43,
      duration: "1-3 hours",
      location: "Shkodër",
      category: "electrical",
      image: "https://images.unsplash.com/photo-1621905252507-b352224ad33e?auto=format&fit=crop&q=80&w=800",
      description: "Safe and reliable electrical repairs and installations"
    },
    {
      id: 6,
      name: "Office Cleaning",
      provider: "Pro Clean Services",
      price: "€20/hour",
      rating: 4.8,
      reviews: 98,
      duration: "2-4 hours",
      location: "Tirana",
      category: "cleaning",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800",
      description: "Professional office and commercial space cleaning"
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesLocation = !location || service.location.toLowerCase().includes(location.toLowerCase());

    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-teal-600 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-400/20 rounded-full -ml-24 -mb-24 blur-2xl"></div>

        <div className="container mx-auto max-w-6xl relative">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Explore Local Services</h1>
          <p className="text-xl text-blue-50 max-w-2xl">Find verified professionals and book top-rated services across Albania</p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl border-none p-8 mb-10 -mt-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500 w-5 h-5" />
              <Input
                placeholder="What service are you looking for?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-200 focus:border-teal-500 focus:ring-teal-500 rounded-xl h-12"
              />
            </div>

            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500 w-5 h-5" />
              <Input
                placeholder="City or Region..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10 border-gray-200 focus:border-teal-500 focus:ring-teal-500 rounded-xl h-12"
              />
            </div>

            <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 h-12 rounded-xl font-bold shadow-lg">
              <Filter className="w-4 h-4 mr-2" />
              Search Services
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-none shadow-md overflow-hidden rounded-2xl">
              <CardHeader className="bg-gray-50/50 border-b border-gray-100">
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-50">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-6 py-4 hover:bg-teal-50/30 transition-all ${selectedCategory === category.id ? 'bg-teal-50 text-teal-700 font-semibold border-r-4 border-teal-600' : 'text-gray-600'
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{category.name}</span>
                        <Badge variant="secondary" className="bg-gray-100 text-gray-500 border-none">{category.count}</Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">
                {filteredServices.length} services found
              </h2>
              <select className="border rounded-lg px-3 py-2 text-sm">
                <option>Sort by: Rating</option>
                <option>Sort by: Price (Low to High)</option>
                <option>Sort by: Price (High to Low)</option>
                <option>Sort by: Reviews</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredServices.map((service) => (
                <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border-none shadow-md overflow-hidden rounded-2xl">
                  <div className="aspect-video bg-gray-100 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-bold text-gray-900">{service.rating}</span>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{service.name}</CardTitle>
                        <CardDescription className="text-teal-600 font-medium">{service.provider}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-extrabold text-blue-600">{service.price}</div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{service.description}</p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-6 bg-gray-50 p-3 rounded-xl">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <span className="font-semibold text-gray-700">{service.reviews} reviews</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-teal-500" />
                        <span className="font-medium text-gray-700">{service.location}</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => navigate(`/book/${service.id}`)}
                      className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 h-11 rounded-xl font-bold shadow-md"
                    >
                      Book Service
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
