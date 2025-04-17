
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

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
        <Chatbot />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default Index;
