
import {
  Code,
  Users,
  Lightbulb,
  GraduationCap,
  Network,
  Globe
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Code,
    title: "Technical Workshops",
    description: "Hands-on sessions covering cutting-edge technologies, programming languages, and development tools."
  },
  {
    icon: Lightbulb,
    title: "Hackathons",
    description: "Competitive coding events where teams collaborate to solve real-world problems through innovative solutions."
  },
  {
    icon: Users,
    title: "Networking Events",
    description: "Connect with fellow tech enthusiasts, industry professionals, and potential collaborators or mentors."
  },
  {
    icon: GraduationCap,
    title: "Learning Resources",
    description: "Access to curated learning materials, tutorials, and practice problems for continuous skill development."
  },
  {
    icon: Network,
    title: "Project Collaborations",
    description: "Find teammates for side projects, hackathons, or research initiatives within our community."
  },
  {
    icon: Globe,
    title: "Industry Connect",
    description: "Opportunities to interact with industry experts, explore internships, and stay updated on career prospects."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We <span className="text-techtribe-red">Do</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Empowering tech enthusiasts through a variety of activities and initiatives designed to foster learning, collaboration, and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border border-gray-200 dark:border-gray-800 hover:border-techtribe-red/50 dark:hover:border-techtribe-red/50 transition-all hover:shadow-lg group"
            >
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-techtribe-red/10 flex items-center justify-center mb-4 group-hover:bg-techtribe-red/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-techtribe-red" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
