
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const partners = [
  {
    name: "ISKCON Youth Forum",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop&auto=format",
    description: "Spiritual guidance and leadership development",
  },
  {
    name: "TechCorp Solutions",
    logo: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=200&h=200&fit=crop&auto=format",
    description: "Technical resources and mentorship",
  },
  {
    name: "Innovate Hub",
    logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=200&fit=crop&auto=format",
    description: "Innovation workshops and venture funding",
  },
  {
    name: "EduTech Alliance",
    logo: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=200&h=200&fit=crop&auto=format",
    description: "Educational resources and certifications",
  },
  {
    name: "Digital Futures Foundation",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop&auto=format",
    description: "Digital inclusion and technology access",
  },
];

export function PartnersSection() {
  return (
    <section id="partners" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-techtribe-red">Partners</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Collaborating with industry leaders to provide the best opportunities for our community.
          </p>
          
          <div className="flex justify-center mb-10">
            <a 
              href="https://www.linkedin.com/company/tech-tribe-community" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button className="bg-[#0A66C2] hover:bg-[#004182] text-white">
                <Linkedin className="mr-2 h-5 w-5" />
                Join us on LinkedIn
              </Button>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 border-2 border-techtribe-red p-1">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-bold text-lg mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
