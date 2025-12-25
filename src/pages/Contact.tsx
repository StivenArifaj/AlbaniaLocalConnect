
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";

const Contact = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            toast({
                title: "Message Sent!",
                description: "We've received your message and will get back to you soon.",
            });
            (e.target as HTMLFormElement).reset();
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="container mx-auto px-4 py-20">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Get in Touch</h1>
                    <p className="text-xl text-gray-600">
                        Have questions about Albania Local Connect? We're here to help you succeed.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-100 p-3 rounded-2xl">
                                <Mail className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Email Us</h3>
                                <p className="text-gray-600">support@albanialocalconnect.al</p>
                                <p className="text-sm text-gray-400 mt-1">Response time: &lt; 24 hours</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-teal-100 p-3 rounded-2xl">
                                <Phone className="w-6 h-6 text-teal-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Call Us</h3>
                                <p className="text-gray-600">+355 69 123 4567</p>
                                <p className="text-sm text-gray-400 mt-1">Mon-Fri: 9:00 AM - 6:00 PM</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-purple-100 p-3 rounded-2xl">
                                <MapPin className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Visit Us</h3>
                                <p className="text-gray-600">Rruga e Durrësit, Tirana Business Center</p>
                                <p className="text-gray-600">Tirana, Albania</p>
                            </div>
                        </div>

                        <Card className="bg-gradient-to-br from-blue-600 to-teal-500 text-white border-none shadow-lg">
                            <CardContent className="p-6">
                                <MessageSquare className="w-10 h-10 mb-4 opacity-50" />
                                <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                                <p className="text-blue-50 text-sm mb-4">Need immediate help? Our support team is online and ready to assist you.</p>
                                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold">Start Chat</Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
                            <CardHeader className="bg-white border-b border-gray-100 p-8">
                                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                            </CardHeader>
                            <CardContent className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input id="firstName" placeholder="Arben" required className="rounded-xl h-12" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input id="lastName" placeholder="Hoxha" required className="rounded-xl h-12" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" placeholder="arben.hoxha@example.al" required className="rounded-xl h-12" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input id="subject" placeholder="How can we help you?" required className="rounded-xl h-12" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea id="message" placeholder="Tell us more about your inquiry..." required className="min-h-[150px] rounded-xl" />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 h-14 text-lg font-bold shadow-xl transition-all"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center"><Send className="w-5 h-5 mr-2 animate-pulse" /> Sending...</span>
                                        ) : (
                                            <span className="flex items-center"><Send className="w-5 h-5 mr-2" /> Send Message</span>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
