
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, FileText, Download, Star, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Total Users", value: "2,847", icon: User, change: "+12%" },
    { label: "Resumes Built", value: "15,432", icon: FileText, change: "+8%" },
    { label: "Services Booked", value: "1,245", icon: Star, change: "+15%" },
    { label: "Platform Revenue", value: "€42,891", icon: Download, change: "+22%" }
  ];

  const recentUsers = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", plan: "Pro", joinDate: "2024-01-15", resumes: 3 },
    { id: 2, name: "Bob Smith", email: "bob@example.com", plan: "Free", joinDate: "2024-01-14", resumes: 1 },
    { id: 3, name: "Carol Davis", email: "carol@example.com", plan: "Premium", joinDate: "2024-01-13", resumes: 7 },
    { id: 4, name: "David Wilson", email: "david@example.com", plan: "Pro", joinDate: "2024-01-12", resumes: 2 },
    { id: 5, name: "Eve Brown", email: "eve@example.com", plan: "Free", joinDate: "2024-01-11", resumes: 1 }
  ];

  const templates = [
    { id: 1, name: "Modern Professional", downloads: 12547, rating: 4.9, category: "Professional" },
    { id: 2, name: "Creative Designer", downloads: 8234, rating: 4.8, category: "Creative" },
    { id: 3, name: "Executive Elite", downloads: 6123, rating: 4.9, category: "Executive" },
    { id: 4, name: "Minimalist Clean", downloads: 15301, rating: 4.7, category: "Minimalist" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Admin Control Center</h1>
            <p className="text-lg text-gray-600">Manage users, services, career tools, and platform growth</p>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 shadow-lg h-11 px-6">
            <Settings className="w-4 h-4 mr-2" />
            Platform Settings
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <CardContent className="p-6 relative">
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</p>
                    <div className="flex items-center mt-2">
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      <span className="ml-2 text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{stat.change}</span>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl">
                    <stat.icon className="w-7 h-7 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="bg-gray-100/50 p-1 rounded-xl">
            <TabsTrigger value="users" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm px-6">Users</TabsTrigger>
            <TabsTrigger value="services" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm px-6">Services</TabsTrigger>
            <TabsTrigger value="templates" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm px-6">Templates</TabsTrigger>
            <TabsTrigger value="analytics" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm px-6">Analytics</TabsTrigger>
            <TabsTrigger value="settings" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm px-6">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage registered users and their subscriptions</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Input placeholder="Search users..." className="w-64" />
                    <Button>Export Users</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4">User</th>
                        <th className="text-left p-4">Plan</th>
                        <th className="text-left p-4">Resumes</th>
                        <th className="text-left p-4">Join Date</th>
                        <th className="text-left p-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.map((user) => (
                        <tr key={user.id} className="border-b hover:bg-gray-50">
                          <td className="p-4">
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="text-sm text-gray-600">{user.email}</div>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.plan === 'Premium' ? 'bg-purple-100 text-purple-800' :
                              user.plan === 'Pro' ? 'bg-blue-100 text-blue-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                              {user.plan}
                            </span>
                          </td>
                          <td className="p-4">{user.resumes}</td>
                          <td className="p-4 text-sm text-gray-600">{user.joinDate}</td>
                          <td className="p-4">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">Edit</Button>
                              <Button size="sm" variant="outline">Delete</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Service Management</CardTitle>
                    <CardDescription>Manage service providers and platform listings</CardDescription>
                  </div>
                  <Button className="bg-teal-600 hover:bg-teal-700">Add New Service</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: 1, name: "Deep House Cleaning", provider: "Klean Team Albania", status: "Active", bookings: 156 },
                    { id: 2, name: "Lawn Mowing", provider: "Garden Pro", status: "Active", bookings: 89 },
                    { id: 3, name: "Emergency Plumbing", provider: "Rapid Plumbers", status: "Pending", bookings: 0 }
                  ].map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center font-bold">
                          {service.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{service.name}</h3>
                          <p className="text-sm text-gray-500">{service.provider} • {service.bookings} bookings</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className={service.status === 'Active' ? 'bg-green-100 text-green-700 border-none' : 'bg-amber-100 text-amber-700 border-none'}>
                          {service.status}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="ghost">Edit</Button>
                          <Button size="sm" variant="ghost" className="text-red-600">Disable</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Template Management</CardTitle>
                    <CardDescription>Manage resume templates and their performance</CardDescription>
                  </div>
                  <Button>Add New Template</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {templates.map((template) => (
                    <div key={template.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-20 bg-gray-200 rounded"></div>
                        <div>
                          <h3 className="font-medium">{template.name}</h3>
                          <p className="text-sm text-gray-600">{template.category}</p>
                          <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                            <span>{template.downloads.toLocaleString()} downloads</span>
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span>{template.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">Edit</Button>
                        <Button size="sm" variant="outline">Delete</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Usage Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Chart placeholder - Daily active users</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Chart placeholder - Monthly revenue</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Platform Settings</CardTitle>
                <CardDescription>Configure global platform settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">General Settings</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Platform Name</label>
                      <Input defaultValue="Albania Local Connect" className="rounded-xl border-gray-200" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Support Email</label>
                      <Input defaultValue="support@albanialocalconnect.al" className="rounded-xl border-gray-200" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Feature Toggles</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="font-medium">AI Content Generation</label>
                        <p className="text-sm text-gray-600">Enable AI-powered resume content suggestions</p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="font-medium">PDF Export</label>
                        <p className="text-sm text-gray-600">Allow users to export resumes as PDF</p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="font-bold text-gray-900">Portfolio Builder</label>
                        <p className="text-sm text-gray-500">Enable portfolio creation feature</p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded text-blue-600 focus:ring-blue-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="font-bold text-gray-900">Service Marketplace</label>
                        <p className="text-sm text-gray-500">Enable local services booking and listings</p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded text-teal-600 focus:ring-teal-500" />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">Save Settings</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
