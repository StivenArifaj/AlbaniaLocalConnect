
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  service: {
    id: number;
    name: string;
    price: string;
    rating: number;
    image: string;
    category: string;
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
        <img 
          src={service.image} 
          alt={service.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{service.name}</CardTitle>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{service.rating}</span>
          </div>
        </div>
        <CardDescription className="text-blue-600 font-semibold text-lg">
          {service.price}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <Button 
          onClick={() => navigate(`/book/${service.id}`)}
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
