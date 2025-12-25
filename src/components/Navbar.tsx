
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FileText, User, Settings } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => navigate('/')} className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 leading-tight">Albania Local Connect</span>
                <span className="text-[10px] text-gray-500 leading-tight hidden sm:block">Your Professional Hub</span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => navigate('/builder')}
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
            >
              Career Tools
            </button>
            <button
              onClick={() => navigate('/templates')}
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
            >
              Templates
            </button>
            <button
              onClick={() => navigate('/portfolio')}
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate('/services')}
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
            >
              Services
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={() => navigate('/login')}
              className="border-teal-600 text-teal-700 hover:bg-teal-50"
            >
              Sign In
            </Button>
            <Button
              onClick={() => navigate('/signup')}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => navigate('/builder')}
                className="text-gray-700 hover:text-teal-600 text-left font-medium"
              >
                Career Tools
              </button>
              <button
                onClick={() => navigate('/templates')}
                className="text-gray-700 hover:text-teal-600 text-left font-medium"
              >
                Templates
              </button>
              <button
                onClick={() => navigate('/portfolio')}
                className="text-gray-700 hover:text-teal-600 text-left font-medium"
              >
                Portfolio
              </button>
              <button
                onClick={() => navigate('/dashboard')}
                className="text-gray-700 hover:text-teal-600 text-left font-medium"
              >
                Dashboard
              </button>
              <button
                onClick={() => navigate('/services')}
                className="text-gray-700 hover:text-teal-600 text-left font-medium"
              >
                Services
              </button>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={() => navigate('/login')}
                  className="border-teal-600 text-teal-700"
                >
                  Sign In
                </Button>
                <Button
                  onClick={() => navigate('/signup')}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
