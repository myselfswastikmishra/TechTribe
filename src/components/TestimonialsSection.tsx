
import { useState, useCallback } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Computer Science Student",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&auto=format",
    quote: "Joining Tech Tribe was the best decision I made during my university years. The workshops and hackathons helped me build a strong portfolio that landed me my dream internship."
  },
  {
    name: "Neha Patel",
    role: "Data Science Enthusiast",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&auto=format",
    quote: "The supportive community at Tech Tribe helped me overcome my fear of coding. Now I'm confidently building data science projects and mentoring other members."
  },
  {
    name: "Arjun Mehta",
    role: "Web Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format",
    quote: "Tech Tribe's collaborative environment helped me find teammates for my startup idea. We've now launched our product and are growing our user base every month."
  },
  {
    name: "Aisha Khan",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&auto=format",
    quote: "I was the only designer in a sea of developers, but Tech Tribe made me feel valued by highlighting how crucial design is to successful tech products."
  },
  {
    name: "Vikram Singh",
    role: "AI Researcher",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&auto=format",
    quote: "The mentorship I received through Tech Tribe has been invaluable. I've published my first research paper and presented at a major AI conference thanks to their guidance."
  }
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCarouselSelect = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-techtribe-red">Members Say</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Hear from the amazing people who have been part of our community and their experiences.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            onSelect={(api) => {
              if (api && api.selectedScrollSnap) {
                const selectedIndex = api.selectedScrollSnap();
                handleCarouselSelect(selectedIndex);
              }
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 h-full">
                  <div className="p-1 h-full">
                    <Card className="border border-gray-200 dark:border-gray-800 h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <QuoteIcon className="h-8 w-8 text-techtribe-red/30 mb-4" />
                        <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="h-12 w-12 rounded-full mr-4 object-cover"
                          />
                          <div>
                            <h4 className="font-medium">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleCarouselSelect(index)}
                className={`w-2.5 h-2.5 rounded-full mx-1 transition-colors ${
                  activeIndex === index 
                    ? "bg-techtribe-red" 
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
