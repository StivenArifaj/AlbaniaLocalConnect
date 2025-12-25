import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Star, MapPin, User, Settings, Home, LogOut, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data
  const user = {
    name: "Arben Hoxha",
    email: "arben.hoxha@example.al",
    role: "customer", // customer, provider, admin
    avatar: "/placeholder.svg"
  };

  const recentBookings = [
    {
      id: 1,
      service: "House Cleaning",
      provider: "Klean Team Albania",
      date: "2024-01-20",
      time: "10:00 AM",
      status: "confirmed",
      price: "€50"
    },
    {
      id: 2,
      service: "Lawn Mowing",
      provider: "Garden Pro Services",
      date: "2024-01-25",
      time: "2:00 PM",
      status: "pending",
      price: "€30"
    },
    {
      id: 3,
      service: "Handyman Services",
      provider: "Fix-It Masters",
      date: "2024-01-15",
      time: "9:00 AM",
      status: "completed",
      price: "€75"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleLogout = () => {
    // TODO: Implement actual logout logic
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button onClick={() => navigate('/')} className="flex items-center space-x-2 group">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Albania Local Connect</span>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                className="border-teal-600 text-teal-700 hover:bg-teal-50"
              >
                Explore Platform
              </Button>

              <div className="flex items-center space-x-2">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full bg-gray-200"
                />
                <span className="text-sm font-medium">{user.name}</span>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-gray-600 hover:text-red-600"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-12 h-12 rounded-full bg-gray-200"
                  />
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm text-gray-600 capitalize">{user.role}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <nav className="space-y-1">
                  {[
                    { id: 'overview', label: 'Overview', icon: Home },
                    { id: 'career', label: 'Career Tools', icon: FileText },
                    { id: 'bookings', label: 'My Bookings', icon: Calendar },
                    { id: 'favorites', label: 'Favorites', icon: Star },
                    { id: 'profile', label: 'Profile', icon: User },
                    { id: 'settings', label: 'Settings', icon: Settings },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full text-left px-4 py-3 flex items-center space-x-3 hover:bg-gray-50 transition-colors ${activeTab === item.id ? 'bg-teal-50 text-teal-700 border-r-2 border-teal-600' : ''
                        }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
                  <p className="text-gray-600">Manage your career documents and service bookings in one place.</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border-none shadow-md bg-white">
                    <CardHeader className="pb-2">
                      <CardDescription className="font-medium">Career Documents</CardDescription>
                      <CardTitle className="text-3xl font-bold text-blue-600">3</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-gray-500">2 Resumes, 1 Portfolio</p>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md bg-white">
                    <CardHeader className="pb-2">
                      <CardDescription className="font-medium">Active Bookings</CardDescription>
                      <CardTitle className="text-3xl font-bold text-teal-600">2</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-gray-500">Next: Jan 20, 10:00 AM</p>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md bg-white">
                    <CardHeader className="pb-2">
                      <CardDescription className="font-medium">Profile Views</CardDescription>
                      <CardTitle className="text-3xl font-bold text-amber-600">142</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-green-600">+15% this week</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Actions */}
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button
                        onClick={() => navigate('/builder')}
                        className="bg-blue-600 hover:bg-blue-700 shadow-sm"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        New Resume
                      </Button>
                      <Button
                        onClick={() => navigate('/portfolio')}
                        className="bg-teal-600 hover:bg-teal-700 shadow-sm"
                      >
                        <User className="w-4 h-4 mr-2" />
                        Update Portfolio
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => navigate('/')}
                        className="border-amber-600 text-amber-700 hover:bg-amber-50"
                      >
                        <Star className="w-4 h-4 mr-2" />
                        Find Services
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest updates across the platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Software Engineer Resume</h4>
                            <p className="text-sm text-gray-500">Last edited 2 hours ago</p>
                          </div>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none">Draft</Badge>
                      </div>

                      {recentBookings.slice(0, 2).map((booking) => (
                        <div key={booking.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">
                              <Calendar className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{booking.service}</h4>
                              <p className="text-sm text-gray-500">{booking.provider} • {booking.date}</p>
                            </div>
                          </div>
                          <Badge className={getStatusColor(booking.status) + " border-none"}>
                            {booking.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'career' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">Career Tools</h1>
                    <p className="text-gray-600">Manage your resumes and portfolios</p>
                  </div>
                  <Button onClick={() => navigate('/builder')} className="bg-blue-600 hover:bg-blue-700">
                    Create New
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">My Resumes</CardTitle>
                        <Badge variant="outline">2 Total</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 border rounded-xl flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="font-medium">Software Engineer</p>
                            <p className="text-xs text-gray-500">Updated 2h ago</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </div>
                      <div className="p-4 border rounded-xl flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="font-medium">Project Manager</p>
                            <p className="text-xs text-gray-500">Updated 3 days ago</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">My Portfolio</CardTitle>
                        <Badge className="bg-green-100 text-green-700 border-none">Live</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                        <div className="text-center">
                          <User className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                          <p className="text-sm text-gray-500">Main Portfolio</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button className="flex-1" variant="outline" onClick={() => navigate('/portfolio')}>Edit Portfolio</Button>
                        <Button className="flex-1 bg-teal-600 hover:bg-teal-700">View Live</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">My Bookings</h1>
                    <p className="text-gray-600">Manage all your service appointments</p>
                  </div>
                  <Button onClick={() => navigate('/')} className="bg-teal-600 hover:bg-teal-700">
                    Book New Service
                  </Button>
                </div>

                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>All Bookings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentBookings.map((booking) => (
                        <div key={booking.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:shadow-md transition-all">
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900">{booking.service}</h4>
                            <p className="text-sm text-gray-600">{booking.provider}</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{booking.date}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{booking.time}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right space-y-2">
                            <Badge className={getStatusColor(booking.status) + " border-none"}>
                              {booking.status}
                            </Badge>
                            <p className="text-sm font-bold text-gray-900">{booking.price}</p>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline" className="text-xs h-8">
                                Details
                              </Button>
                              {booking.status === 'pending' && (
                                <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50 text-xs h-8">
                                  Cancel
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Other tabs */}
            {activeTab !== 'overview' && activeTab !== 'bookings' && activeTab !== 'career' && (
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="capitalize">{activeTab}</CardTitle>
                </CardHeader>
                <CardContent className="py-20 text-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-gray-300 animate-spin-slow" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Section Coming Soon</h3>
                  <p className="text-gray-500 max-w-xs mx-auto mt-2">We're working hard to bring you more features to help you connect and grow.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
