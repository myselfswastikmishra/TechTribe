
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden tribal-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              <span className="text-techtribe-red glow-text">Tech</span>{" "}
              <span className="dark:text-techtribe-white">Tribe</span>
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-xl leading-relaxed">
              Join a thriving community of{" "}
              <span className="font-semibold">800+ tech enthusiasts</span> at K.R. MANGALAM University, Gurugram.
            </p>
            <p className="text-md md:text-lg text-gray-600 dark:text-gray-400 max-w-xl">
              Learning together. Building together. Growing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button 
                className="bg-techtribe-red hover:bg-red-700 text-white"
                onClick={() => window.open("https://chat.whatsapp.com/example", "_blank")}
              >
                Join Our Community
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}>
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-techtribe-red/10 animate-pulse-slow"></div>
              <img
                src="/lovable-uploads/21ef0c51-1eeb-42ba-8098-a0318aa2c3b7.png"
                alt="Tech Tribe Logo"
                className="relative z-10 w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 overflow-hidden py-4">
          <div className="flex space-x-8 animate-marquee">
            {['Python', 'JavaScript', 'React', 'AI', 'Machine Learning', 'Cloud Computing', 'Web3', 'Blockchain', 'Data Science', 'IoT', 'Cybersecurity'].map((tech) => (
              <span key={tech} className="text-lg text-gray-500 dark:text-gray-400 whitespace-nowrap">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
