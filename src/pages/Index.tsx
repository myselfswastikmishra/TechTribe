
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TeamSection } from "@/components/TeamSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Chatbot } from "@/components/Chatbot";
import { Footer } from "@/components/Footer";
import { EventsSection } from "@/components/EventsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { StatsSection } from "@/components/StatsSection";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <EventsSection />
        <FeaturesSection />
        <TeamSection />
        <PartnersSection />
        <TestimonialsSection />
        <ContactSection />
        <Chatbot />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default Index;
