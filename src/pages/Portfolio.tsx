
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Image, FileText, Star, Download, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Portfolio = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const projects = [
    {
      id: 1,
      title: "Tirana Smart City Portal",
      description: "A comprehensive digital services portal for the capital city",
      category: "Web Development",
      image: "/placeholder.svg",
      technologies: ["React", "Next.js", "PostgreSQL"],
      rating: 4.9
    },
    {
      id: 2,
      title: "Albanian Tourism App",
      description: "Mobile application for discovering hidden gems in Albania",
      category: "Mobile Development",
      image: "/placeholder.svg",
      technologies: ["React Native", "Firebase"],
      rating: 4.8
    },
    {
      id: 3,
      title: "Local Connect Branding",
      description: "Visual identity and UI design for a local services marketplace",
      category: "Design",
      image: "/placeholder.svg",
      technologies: ["Figma", "Adobe Suite"],
      rating: 4.7
    }
  ];

  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "UI/UX Design", level: 88 },
    { name: "Project Management", level: 92 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Professional Portfolio Builder</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Showcase your best work and achievements to the world with a stunning digital presence</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Portfolio Builder */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Build Your Portfolio</CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="border-teal-600 text-teal-700 hover:bg-teal-50">
                      <FileText className="w-4 h-4 mr-1" />
                      Save Draft
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                      <Download className="w-4 h-4 mr-1" />
                      Publish
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-4 bg-gray-100/50 p-1">
                    <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">Overview</TabsTrigger>
                    <TabsTrigger value="projects" className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">Projects</TabsTrigger>
                    <TabsTrigger value="skills" className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">Skills</TabsTrigger>
                    <TabsTrigger value="media" className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">Media</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="portfolioTitle">Portfolio Title</Label>
                        <Input id="portfolioTitle" placeholder="Your Professional Portfolio" />
                      </div>
                      <div>
                        <Label htmlFor="profession">Profession</Label>
                        <Input id="profession" placeholder="Software Developer" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="bio">Professional Bio</Label>
                      <Textarea
                        id="bio"
                        placeholder="Tell your story and highlight your expertise..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="profileImage">Profile Image</Label>
                      <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                        <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600">
                          Drop your profile image here or <span className="text-blue-600 hover:underline cursor-pointer">browse</span>
                        </p>
                        <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="projects" className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Your Projects</h3>
                      <Button>Add New Project</Button>
                    </div>

                    <div className="grid gap-4">
                      {projects.map((project) => (
                        <Card key={project.id} className="p-4">
                          <div className="flex items-start space-x-4">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold">{project.title}</h4>
                                <div className="flex items-center space-x-1">
                                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                  <span className="text-sm">{project.rating}</span>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                              <div className="flex items-center justify-between">
                                <div className="flex flex-wrap gap-1">
                                  {project.technologies.map((tech, index) => (
                                    <span
                                      key={index}
                                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                                <span className="text-xs text-gray-500">{project.category}</span>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="skills" className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Technical Skills</h3>
                      <Button>Add Skill</Button>
                    </div>

                    <div className="grid gap-6">
                      {skills.map((skill, index) => (
                        <div key={index} className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-700">{skill.name}</span>
                            <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-blue-600 to-teal-500 h-3 rounded-full transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="media" className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Media Gallery</h3>
                      <Button>Upload Media</Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div
                          key={item}
                          className="aspect-video border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center hover:border-teal-400 hover:bg-teal-50/30 transition-all cursor-pointer group"
                        >
                          <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-2 group-hover:bg-teal-100 transition-colors">
                            <Upload className="w-6 h-6 text-gray-400 group-hover:text-teal-600" />
                          </div>
                          <p className="text-sm font-medium text-gray-500 group-hover:text-teal-700">Upload Project Image</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Portfolio Preview */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">
              <Card className="border-none shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 py-3 px-4">
                  <CardTitle className="text-center text-white text-lg">Live Preview</CardTitle>
                </div>
                <CardContent className="p-4 bg-gray-100">
                  <div className="bg-white rounded shadow-sm min-h-[500px] p-6">
                    <div className="text-center mb-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto mb-4 border-4 border-white shadow-md flex items-center justify-center">
                        <User className="w-12 h-12 text-gray-300" />
                      </div>
                      <h3 className="font-bold text-2xl text-gray-900">Your Name</h3>
                      <p className="text-blue-600 font-medium">Your Profession</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">About Me</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">Your professional bio will appear here. Tell the world about your passion and expertise.</p>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Featured Projects</h4>
                        <div className="space-y-3">
                          {projects.slice(0, 2).map((project, index) => (
                            <div key={index} className="group cursor-pointer">
                              <div className="aspect-video bg-gray-50 rounded-lg mb-2 overflow-hidden border border-gray-100">
                                <div className="w-full h-full flex items-center justify-center text-gray-300">
                                  <Image className="w-8 h-8" />
                                </div>
                              </div>
                              <div className="font-bold text-sm text-gray-800 group-hover:text-blue-600 transition-colors">{project.title}</div>
                              <div className="text-xs text-gray-500">{project.category}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-bold text-blue-800 flex items-center">
                    <Star className="w-4 h-4 mr-2 text-blue-600" />
                    Portfolio Tip
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-blue-700 leading-relaxed">
                    High-quality images and clear descriptions of your role in each project can increase your profile views by up to 40%.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
