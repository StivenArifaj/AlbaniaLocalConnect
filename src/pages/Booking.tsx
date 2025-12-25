
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Star, CheckCircle2, ChevronLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";

const Booking = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { toast } = useToast();
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [isBooking, setIsBooking] = useState(false);

    // Mock service data (in a real app, this would be fetched based on ID)
    const service = {
        id: 1,
        name: "Deep House Cleaning",
        provider: "Klean Team Albania",
        price: "€25/hour",
        rating: 4.9,
        reviews: 156,
        location: "Tirana",
        image: "/placeholder.svg"
    };

    const timeSlots = [
        "09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
    ];

    const handleBooking = () => {
        if (!date || !selectedTime) {
            toast({
                title: "Selection Required",
                description: "Please select both a date and a time slot.",
                variant: "destructive"
            });
            return;
        }

        setIsBooking(true);
        setTimeout(() => {
            setIsBooking(false);
            toast({
                title: "Booking Confirmed!",
                description: `Your appointment for ${service.name} is scheduled for ${date.toLocaleDateString()} at ${selectedTime}.`,
            });
            navigate('/dashboard');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="container mx-auto px-4 py-12">
                <button
                    onClick={() => navigate('/services')}
                    className="flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors group"
                >
                    <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                    Back to Services
                </button>

                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Service Summary */}
                    <div className="lg:col-span-1">
                        <Card className="border-none shadow-xl overflow-hidden rounded-3xl sticky top-24">
                            <div className="aspect-video bg-gray-100 relative">
                                <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                                    <div className="flex items-center space-x-1">
                                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                        <span className="text-xs font-bold">{service.rating}</span>
                                    </div>
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">{service.name}</CardTitle>
                                <CardDescription className="text-teal-600 font-semibold">{service.provider}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center text-gray-600">
                                    <MapPin className="w-4 h-4 mr-2 text-teal-500" />
                                    <span>{service.location}, Albania</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <Clock className="w-4 h-4 mr-2 text-teal-500" />
                                    <span>Estimated 2-3 hours</span>
                                </div>
                                <div className="pt-4 border-t border-gray-100">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500">Service Fee</span>
                                        <span className="text-2xl font-extrabold text-blue-600">{service.price}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Booking Selection */}
                    <div className="lg:col-span-2 space-y-8">
                        <Card className="border-none shadow-xl rounded-3xl">
                            <CardHeader>
                                <CardTitle>Select Date & Time</CardTitle>
                                <CardDescription>When would you like the service to be performed?</CardDescription>
                            </CardHeader>
                            <CardContent className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <Label className="mb-4 block">Choose Date</Label>
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        className="rounded-xl border border-gray-100 shadow-sm"
                                    />
                                </div>
                                <div>
                                    <Label className="mb-4 block">Available Slots</Label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {timeSlots.map((time) => (
                                            <button
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${selectedTime === time
                                                    ? 'bg-blue-600 text-white shadow-md'
                                                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                                    }`}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                                        <div className="flex items-start space-x-3">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                                            <p className="text-sm text-blue-800">
                                                Instant confirmation available for these slots.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Button
                            onClick={handleBooking}
                            disabled={isBooking}
                            className="w-full h-16 text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 rounded-2xl shadow-2xl transition-all hover:scale-[1.02]"
                        >
                            {isBooking ? "Processing Booking..." : "Confirm Booking"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
