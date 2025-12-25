
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, User, Star, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const ResumeBuilder = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState("personal");

  const [resumeData, setResumeData] = useState({
    personal: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      summary: ""
    },
    experience: [],
    education: [],
    skills: [],
    projects: []
  });

  const generateAIContent = async (jobDescription: string, section: string) => {
    // Simulate AI content generation
    const aiSuggestions = {
      summary: "Experienced professional with a strong background in technology and innovation. Proven track record of delivering high-quality results and driving organizational success.",
      skills: ["Project Management", "Leadership", "Problem Solving", "Communication", "Strategic Planning"]
    };

    if (section === "summary") {
      setResumeData(prev => ({
        ...prev,
        personal: { ...prev.personal, summary: aiSuggestions.summary }
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Professional Resume Builder</h1>
            <p className="text-gray-600 text-lg">Create a standout resume for the Albanian and international job market</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="border-teal-600 text-teal-700 hover:bg-teal-50">
              <FileText className="w-4 h-4 mr-2" />
              Save Draft
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 shadow-md">
              <Download className="w-4 h-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Resume Builder Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Build Your Resume</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={currentSection} onValueChange={setCurrentSection} className="w-full">
                  <TabsList className="grid w-full grid-cols-5 bg-gray-100/50 p-1">
                    <TabsTrigger value="personal" className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">Personal</TabsTrigger>
                    <TabsTrigger value="experience" className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">Experience</TabsTrigger>
                    <TabsTrigger value="education" className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">Education</TabsTrigger>
                    <TabsTrigger value="skills" className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">Skills</TabsTrigger>
                    <TabsTrigger value="projects" className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">Projects</TabsTrigger>
                  </TabsList>

                  <TabsContent value="personal" className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          placeholder="e.g. Arben Hoxha"
                          value={resumeData.personal.fullName}
                          onChange={(e) => setResumeData(prev => ({
                            ...prev,
                            personal: { ...prev.personal, fullName: e.target.value }
                          }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="arben.hoxha@example.al"
                          value={resumeData.personal.email}
                          onChange={(e) => setResumeData(prev => ({
                            ...prev,
                            personal: { ...prev.personal, email: e.target.value }
                          }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          placeholder="+355 6X XXX XXXX"
                          value={resumeData.personal.phone}
                          onChange={(e) => setResumeData(prev => ({
                            ...prev,
                            personal: { ...prev.personal, phone: e.target.value }
                          }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          placeholder="Tirana, Albania"
                          value={resumeData.personal.location}
                          onChange={(e) => setResumeData(prev => ({
                            ...prev,
                            personal: { ...prev.personal, location: e.target.value }
                          }))}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label htmlFor="summary">Professional Summary</Label>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-teal-600 border-teal-200 hover:bg-teal-50"
                          onClick={() => generateAIContent("", "summary")}
                        >
                          <Sparkles className="w-4 h-4 mr-1" />
                          AI Generate
                        </Button>
                      </div>
                      <Textarea
                        id="summary"
                        placeholder="Brief overview of your professional background and key achievements..."
                        className="min-h-[120px]"
                        value={resumeData.personal.summary}
                        onChange={(e) => setResumeData(prev => ({
                          ...prev,
                          personal: { ...prev.personal, summary: e.target.value }
                        }))}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="experience" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Work Experience</h3>
                      <Button className="bg-blue-600 hover:bg-blue-700">Add Experience</Button>
                    </div>
                    <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50">
                      <div className="w-16 h-16 bg-blue-50 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <User className="w-8 h-8" />
                      </div>
                      <p className="text-gray-900 font-medium">No work experience added yet</p>
                      <p className="text-sm text-gray-500 mt-1">Showcase your professional journey and achievements</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="education" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Education</h3>
                      <Button className="bg-blue-600 hover:bg-blue-700">Add Education</Button>
                    </div>
                    <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50">
                      <div className="w-16 h-16 bg-blue-50 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText className="w-8 h-8" />
                      </div>
                      <p className="text-gray-900 font-medium">No education added yet</p>
                      <p className="text-sm text-gray-500 mt-1">Add your academic background and certifications</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="skills" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Skills</h3>
                      <Button
                        variant="outline"
                        className="text-teal-600 border-teal-200 hover:bg-teal-50"
                        onClick={() => generateAIContent("", "skills")}
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                        AI Suggest Skills
                      </Button>
                    </div>
                    <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50">
                      <div className="w-16 h-16 bg-blue-50 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="w-8 h-8" />
                      </div>
                      <p className="text-gray-900 font-medium">No skills added yet</p>
                      <p className="text-sm text-gray-500 mt-1">Add your technical and soft skills to stand out</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="projects" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Projects</h3>
                      <Button className="bg-blue-600 hover:bg-blue-700">Add Project</Button>
                    </div>
                    <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50">
                      <div className="w-16 h-16 bg-blue-50 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText className="w-8 h-8" />
                      </div>
                      <p className="text-gray-900 font-medium">No projects added yet</p>
                      <p className="text-sm text-gray-500 mt-1">Showcase your best work and personal projects</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Resume Preview */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-none shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 py-3 px-4">
                <CardTitle className="text-center text-white text-lg">Live Preview</CardTitle>
              </div>
              <CardContent className="p-4 bg-gray-100">
                <div className="bg-white border rounded shadow-sm min-h-[600px] p-8">
                  {/* Resume Preview Content */}
                  {resumeData.personal.fullName ? (
                    <div className="space-y-6">
                      <div className="text-center border-b border-gray-200 pb-6">
                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                          {resumeData.personal.fullName}
                        </h2>
                        <div className="text-sm text-gray-600 flex flex-wrap justify-center gap-x-4 gap-y-1 mt-3">
                          {resumeData.personal.email && <div className="flex items-center"><span>{resumeData.personal.email}</span></div>}
                          {resumeData.personal.phone && <div className="flex items-center"><span>{resumeData.personal.phone}</span></div>}
                          {resumeData.personal.location && <div className="flex items-center"><span>{resumeData.personal.location}</span></div>}
                        </div>
                      </div>

                      {resumeData.personal.summary && (
                        <div>
                          <h3 className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-2 border-b border-blue-100 pb-1">Professional Summary</h3>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {resumeData.personal.summary}
                          </p>
                        </div>
                      )}

                      <div className="text-center pt-12 text-gray-300 italic text-xs">
                        More sections will appear as you add them
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-24 text-gray-400">
                      <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FileText className="w-10 h-10 text-gray-300" />
                      </div>
                      <p className="font-medium text-gray-500">Your Resume Preview</p>
                      <p className="text-sm mt-2">Start filling your information to see the magic happen</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
