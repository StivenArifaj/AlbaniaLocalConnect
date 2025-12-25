
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Sparkles, Download, User, Star, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: FileText,
      title: "Professional Resume Builder",
      description: "Create ATS-friendly resumes with modern templates designed for Albanian job market",
      category: "career"
    },
    {
      icon: User,
      title: "Portfolio Showcase",
      description: "Build stunning portfolios to display your work and attract opportunities",
      category: "career"
    },
    {
      icon: CheckCircle,
      title: "Trusted Service Providers",
      description: "Find verified local professionals for cleaning, repairs, and home services",
      category: "services"
    },
    {
      icon: Star,
      title: "Ratings & Reviews",
      description: "Make informed decisions with community feedback and service ratings",
      category: "services"
    },
    {
      icon: Sparkles,
      title: "AI-Powered Suggestions",
      description: "Get intelligent content recommendations for your resume and profile",
      category: "career"
    },
    {
      icon: Download,
      title: "Easy Booking System",
      description: "Schedule and manage service appointments with just a few clicks",
      category: "services"
    }
  ];

  const testimonials = [
    {
      name: "Arben Hoxha",
      role: "Software Engineer",
      content: "Albania Local Connect helped me build a professional portfolio that stood out to international recruiters. The templates are top-notch!",
      rating: 5
    },
    {
      name: "Fatime Rama",
      role: "Homeowner",
      content: "I found a reliable plumber within minutes. The booking process was seamless, and the service was excellent. Highly recommended!",
      rating: 5
    },
    {
      name: "Dritan Shkurti",
      role: "Electrician",
      content: "As a service provider, this platform has given me a professional way to showcase my work and manage my clients. My business has grown 40%!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              🇦🇱 Albania's Professional Hub
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Build Your Career.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Find Local Services.
            </span>
            <br />
            All in One Place.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Albania's premier platform connecting professionals with career opportunities and trusted local services.
            Create stunning resumes, showcase your portfolio, and discover reliable service providers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/builder')}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 text-lg h-auto shadow-lg hover:shadow-xl transition-all"
            >
              <FileText className="w-5 h-5 mr-2" />
              Start Building Resume
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/dashboard')}
              className="border-2 border-teal-600 text-teal-700 hover:bg-teal-50 px-8 py-3 text-lg h-auto"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              One Platform
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're advancing your career or finding trusted local services,
            Albania Local Connect provides all the tools you need to succeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none shadow-md bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors ${feature.category === 'career'
                  ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                  : 'bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white'
                  }`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${feature.category === 'career' ? 'bg-blue-50 text-blue-700' : 'bg-teal-50 text-teal-700'
                    }`}>
                    {feature.category}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-700 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-extrabold mb-2">10K+</div>
              <div className="text-blue-100 font-medium">Verified Professionals</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-2">25K+</div>
              <div className="text-blue-100 font-medium">Resumes Built</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-2">15K+</div>
              <div className="text-blue-100 font-medium">Services Booked</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-2">4.9/5</div>
              <div className="text-blue-100 font-medium">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-gray-600">Join thousands of professionals who've advanced their careers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Albania's Professional Community?</h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
            Whether you're looking to advance your career or find reliable local services,
            we're here to help you connect and grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/builder')}
              className="bg-white text-blue-700 hover:bg-gray-100 px-10 py-4 text-lg h-auto font-bold shadow-lg"
            >
              Build Your Resume
            </Button>
            <Button
              onClick={() => navigate('/dashboard')}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-4 text-lg h-auto font-bold"
            >
              Book a Service
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Albania Local Connect</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Connecting Albania's talent with opportunity and providing trusted local services for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Career Tools</h4>
              <div className="space-y-3 text-gray-400">
                <div className="hover:text-teal-400 cursor-pointer transition-colors">Resume Builder</div>
                <div className="hover:text-teal-400 cursor-pointer transition-colors">Portfolio Creator</div>
                <div className="hover:text-teal-400 cursor-pointer transition-colors">Templates</div>
                <div className="hover:text-teal-400 cursor-pointer transition-colors">Career Advice</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Local Services</h4>
              <div className="space-y-3 text-gray-400">
                <div className="hover:text-teal-400 cursor-pointer transition-colors">Find a Professional</div>
                <div className="hover:text-teal-400 cursor-pointer transition-colors">Become a Provider</div>
                <div className="hover:text-teal-400 cursor-pointer transition-colors">Service Categories</div>
                <div className="hover:text-teal-400 cursor-pointer transition-colors">Safety & Trust</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <div className="space-y-3 text-gray-400">
                <div className="hover:text-teal-400 cursor-pointer transition-colors">About Us</div>
                <div className="hover:text-teal-400 cursor-pointer transition-colors">Contact</div>
                <div className="hover:text-teal-400 cursor-pointer transition-colors">Privacy Policy</div>
                <div className="hover:text-teal-400 cursor-pointer transition-colors">Terms of Service</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; 2024 Albania Local Connect. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="hover:text-white cursor-pointer transition-colors">Facebook</span>
              <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
              <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
