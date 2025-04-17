
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Swastik Mishra",
    role: "Founder & President",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&auto=format",
    social: {
      twitter: "https://twitter.com/example",
      linkedin: "https://linkedin.com/in/example",
      github: "https://github.com/example"
    }
  },
  {
    name: "Jane Doe",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format",
    social: {
      twitter: "https://twitter.com/example",
      linkedin: "https://linkedin.com/in/example",
      github: "https://github.com/example"
    }
  },
  {
    name: "Alex Kumar",
    role: "Events Coordinator",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop&auto=format",
    social: {
      twitter: "https://twitter.com/example",
      linkedin: "https://linkedin.com/in/example",
      github: "https://github.com/example"
    }
  },
  {
    name: "Priya Singh",
    role: "Community Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&auto=format",
    social: {
      twitter: "https://twitter.com/example",
      linkedin: "https://linkedin.com/in/example",
      github: "https://github.com/example"
    }
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-techtribe-red">Team</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            The passionate individuals behind Tech Tribe who work tirelessly to create valuable experiences for our community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex space-x-3">
                    <a 
                      href={member.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-techtribe-red transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter size={18} />
                    </a>
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-techtribe-red transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href={member.social.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-techtribe-red transition-colors"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="text-center pt-4 pb-6">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
