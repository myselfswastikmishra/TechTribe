
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef } from "react";

const founder = {
  name: "Swastik Mishra",
  role: "Founder & Vision Lead",
  image: "/lovable-uploads/b217c549-11e1-461c-a3c8-e221e832ff5f.png",
  bio: "Leading Tech Tribe's mission to empower the next generation of tech innovators at K.R. MANGALAM University.",
  social: {
    twitter: "https://twitter.com/example",
    linkedin: "https://linkedin.com/in/example",
    github: "https://github.com/example",
    whatsapp: "https://chat.whatsapp.com/I6YpsX5z3GP6oKlGGw26ka"
  }
};

const coreTeam = [
  {
    name: "Aarav Kumar",
    role: "Technical Lead",
    image: "",
  },
  {
    name: "Priya Singh",
    role: "Community Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&auto=format",
  },
  {
    name: "Arjun Patel",
    role: "Events Coordinator",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop&auto=format",
  },
  {
    name: "Zara Khan",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format",
  },
  {
    name: "Rohan Mehta",
    role: "Development Head",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&auto=format",
  },
  {
    name: "Ananya Sharma",
    role: "Marketing Lead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&auto=format",
  },
  {
    name: "Vikram Singh",
    role: "Content Strategist",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop&auto=format",
  },
  {
    name: "Neha Gupta",
    role: "Operations Head",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format",
  },
  {
    name: "Aditya Shah",
    role: "Innovation Lead",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&auto=format",
  },
  {
    name: "Maya Reddy",
    role: "Outreach Coordinator",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&auto=format",
  },
  {
    name: "Kabir Malhotra",
    role: "Research Head",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop&auto=format",
  },
  {
    name: "Riya Kapoor",
    role: "Student Relations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format",
  }
];

export function TeamSection() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  useEffect(() => {
    // Clean up autoplay on unmount
    return () => {
      if (plugin.current) {
        plugin.current.stop();
      }
    };
  }, []);

  return (
    <section id="team" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder Section */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="text-techtribe-red">Leadership</span>
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-techtribe-red/10 rounded-lg transform rotate-3"></div>
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="relative rounded-lg w-full max-w-md mx-auto aspect-square object-cover shadow-xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{founder.name}</h3>
              <p className="text-xl text-techtribe-red mb-4">{founder.role}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                {founder.bio}
              </p>
              <div className="flex justify-center lg:justify-start space-x-4">
                <a
                  href={founder.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-techtribe-red transition-colors"
                  aria-label="Twitter Profile"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href={founder.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-techtribe-red transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={founder.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-techtribe-red transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Core Team Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="text-techtribe-red">Core Team</span>
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {coreTeam.map((member, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="border-none shadow-lg overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="text-center pt-4 pb-6">
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
