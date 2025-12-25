
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProviderCardProps {
  provider: {
    id: number;
    name: string;
    services: string[];
    rating: number;
    reviews: number;
    location: string;
    verified: boolean;
  };
}

const ProviderCard = ({ provider }: ProviderCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <CardTitle className="text-lg">{provider.name}</CardTitle>
              {provider.verified && (
                <CheckCircle className="w-5 h-5 text-green-500" />
              )}
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{provider.rating}</span>
                <span>({provider.reviews} reviews)</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{provider.location}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="mb-4">
          <h4 className="font-medium text-sm text-gray-700 mb-2">Services:</h4>
          <div className="flex flex-wrap gap-1">
            {provider.services.map((service, index) => (
              <span 
                key={index}
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate(`/provider/${provider.id}`)}
            className="flex-1"
          >
            View Profile
          </Button>
          <Button 
            size="sm"
            onClick={() => navigate(`/book?provider=${provider.id}`)}
            className="flex-1 bg-blue-600 hover:bg-blue-700"
          >
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProviderCard;
