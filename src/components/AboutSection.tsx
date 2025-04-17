
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, Users, Calendar, Trophy } from "lucide-react";

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-techtribe-red/10 rounded-lg transform -rotate-3"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg glow-box">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  About <span className="text-techtribe-red">Tech Tribe</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Founded in 2024 by <span className="font-semibold">Swastik Mishra</span>, Tech Tribe has grown into a thriving community of over 800 tech enthusiasts based at K.R. MANGALAM University, Gurugram.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We're passionate about fostering innovation, collaboration, and technical excellence through workshops, hackathons, and networking events.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <Tabs defaultValue="mission" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="mission" className="flex flex-col items-center py-3">
                  <Target className={`h-5 w-5 mb-1 ${activeTab === "mission" ? "text-techtribe-red" : ""}`} />
                  <span className="text-xs sm:text-sm">Mission</span>
                </TabsTrigger>
                <TabsTrigger value="community" className="flex flex-col items-center py-3">
                  <Users className={`h-5 w-5 mb-1 ${activeTab === "community" ? "text-techtribe-red" : ""}`} />
                  <span className="text-xs sm:text-sm">Community</span>
                </TabsTrigger>
                <TabsTrigger value="events" className="flex flex-col items-center py-3">
                  <Calendar className={`h-5 w-5 mb-1 ${activeTab === "events" ? "text-techtribe-red" : ""}`} />
                  <span className="text-xs sm:text-sm">Events</span>
                </TabsTrigger>
                <TabsTrigger value="achievements" className="flex flex-col items-center py-3">
                  <Trophy className={`h-5 w-5 mb-1 ${activeTab === "achievements" ? "text-techtribe-red" : ""}`} />
                  <span className="text-xs sm:text-sm">Achievements</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="mission" className="space-y-4">
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To empower students and professionals with the knowledge, skills, and network they need to thrive in the rapidly evolving technology landscape.
                </p>
                <ul className="space-y-2 ml-5 list-disc text-gray-600 dark:text-gray-300">
                  <li>Fostering innovation and creative problem-solving</li>
                  <li>Building technical excellence through hands-on learning</li>
                  <li>Creating inclusive spaces for diverse tech enthusiasts</li>
                  <li>Connecting students with industry opportunities</li>
                </ul>
              </TabsContent>
              
              <TabsContent value="community" className="space-y-4">
                <h3 className="text-xl font-semibold">Our Community</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Tech Tribe is home to over 800 members from diverse backgrounds and expertise levels:
                </p>
                <ul className="space-y-2 ml-5 list-disc text-gray-600 dark:text-gray-300">
                  <li>Students from various academic disciplines</li>
                  <li>Budding developers and designers</li>
                  <li>Tech enthusiasts from all skill levels</li>
                  <li>Industry professionals and mentors</li>
                </ul>
              </TabsContent>
              
              <TabsContent value="events" className="space-y-4">
                <h3 className="text-xl font-semibold">Our Events</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We organize a variety of events throughout the year:
                </p>
                <ul className="space-y-2 ml-5 list-disc text-gray-600 dark:text-gray-300">
                  <li>Hands-on technical workshops</li>
                  <li>Hackathons and coding competitions</li>
                  <li>Industry expert speaker sessions</li>
                  <li>Networking and collaboration meetups</li>
                </ul>
              </TabsContent>
              
              <TabsContent value="achievements" className="space-y-4">
                <h3 className="text-xl font-semibold">Our Achievements</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Since our founding, we've achieved:
                </p>
                <ul className="space-y-2 ml-5 list-disc text-gray-600 dark:text-gray-300">
                  <li>Growth to over 800 active members</li>
                  <li>Organized 20+ successful workshops</li>
                  <li>Facilitated 50+ industry connections</li>
                  <li>Helped members land internships and jobs at top tech companies</li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
