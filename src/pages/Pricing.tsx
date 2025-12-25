
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";

const Pricing = () => {
    const plans = [
        {
            name: "Free",
            price: "€0",
            description: "Perfect for getting started",
            features: [
                "1 Professional Resume",
                "Basic Portfolio Page",
                "Access to Service Marketplace",
                "Standard Templates",
                "Community Support"
            ],
            buttonText: "Get Started",
            popular: false
        },
        {
            name: "Pro",
            price: "€9.99",
            period: "/month",
            description: "Best for active job seekers",
            features: [
                "Unlimited Resumes",
                "Custom Portfolio Domain",
                "AI Content Generation",
                "Premium Templates",
                "Priority Service Booking",
                "Direct Messaging with Providers"
            ],
            buttonText: "Go Pro",
            popular: true
        },
        {
            name: "Enterprise",
            price: "€29.99",
            period: "/month",
            description: "For service providers & teams",
            features: [
                "Business Profile Page",
                "Unlimited Service Listings",
                "Advanced Analytics",
                "Team Collaboration",
                "Verified Provider Badge",
                "24/7 Dedicated Support"
            ],
            buttonText: "Contact Sales",
            popular: false
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="container mx-auto px-4 py-20">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Simple, Transparent Pricing</h1>
                    <p className="text-xl text-gray-600">
                        Choose the plan that's right for your career or business. No hidden fees, cancel anytime.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <Card key={index} className={`relative flex flex-col border-none shadow-xl transition-all duration-300 hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-blue-600 scale-105 z-10' : ''}`}>
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}
                            <CardHeader className="text-center pb-8">
                                <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                                <CardDescription className="text-gray-500 mb-6">{plan.description}</CardDescription>
                                <div className="flex items-baseline justify-center">
                                    <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                                    {plan.period && <span className="text-gray-500 ml-1">{plan.period}</span>}
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col">
                                <ul className="space-y-4 mb-10 flex-1">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start">
                                            <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                                                <Check className="w-4 h-4 text-green-600" />
                                            </div>
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className={`w-full h-12 text-lg font-bold rounded-xl ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 shadow-lg' : 'bg-gray-900 hover:bg-black'}`}>
                                    {plan.buttonText}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-gray-500">
                        All prices are in Euro (€). Need a custom plan? <span className="text-blue-600 font-bold cursor-pointer hover:underline">Contact us</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
