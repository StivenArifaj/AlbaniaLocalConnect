import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 p-4">
      <div className="text-center bg-white p-12 rounded-3xl shadow-xl max-w-md w-full">
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 mb-4">404</h1>
        <p className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</p>
        <p className="text-gray-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <a
          href="/"
          className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:from-blue-700 hover:to-teal-700 transition-all transform hover:scale-105"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
