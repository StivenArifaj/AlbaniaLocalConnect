
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    navigate(`/services?search=${searchTerm}&location=${location}`);
  };

  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Book Local Services
          <span className="block text-yellow-300">You Can Trust</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Connect with verified professionals for cleaning, lawn care, handyman services and more in Albania
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-lg p-2 shadow-lg max-w-2xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="What service do you need?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-0 text-gray-900 placeholder-gray-500"
              />
            </div>
            
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10 border-0 text-gray-900 placeholder-gray-500"
              />
            </div>
            
            <Button 
              onClick={handleSearch}
              className="bg-blue-600 hover:bg-blue-700 px-8"
            >
              Search
            </Button>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <span className="text-blue-200">Popular:</span>
          {["House Cleaning", "Lawn Mowing", "Plumbing", "Painting"].map((service) => (
            <button
              key={service}
              onClick={() => navigate(`/services?category=${service.toLowerCase().replace(' ', '-')}`)}
              className="bg-blue-500/30 hover:bg-blue-500/50 px-3 py-1 rounded-full text-sm transition-colors"
            >
              {service}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-yellow-300">500+</div>
            <div className="text-blue-200">Verified Providers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-300">10K+</div>
            <div className="text-blue-200">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-300">4.8★</div>
            <div className="text-blue-200">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
