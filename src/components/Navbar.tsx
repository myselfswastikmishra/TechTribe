
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-techtribe-black/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/21ef0c51-1eeb-42ba-8098-a0318aa2c3b7.png"
                alt="Tech Tribe Logo"
                className="h-10 w-10"
              />
              <span className="ml-2 text-lg font-bold text-techtribe-black dark:text-techtribe-white">
                TECH TRIBE
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-sm font-medium text-techtribe-black dark:text-techtribe-white hover:text-techtribe-red transition-colors"
            >
              Home
            </Link>
            <a
              href="#about"
              className="text-sm font-medium text-techtribe-black dark:text-techtribe-white hover:text-techtribe-red transition-colors"
            >
              About
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-techtribe-black dark:text-techtribe-white hover:text-techtribe-red transition-colors"
            >
              What We Do
            </a>
            <a
              href="#team"
              className="text-sm font-medium text-techtribe-black dark:text-techtribe-white hover:text-techtribe-red transition-colors"
            >
              Team
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-techtribe-black dark:text-techtribe-white hover:text-techtribe-red transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-techtribe-black dark:text-techtribe-white hover:text-techtribe-red transition-colors"
            >
              Contact
            </a>
            <ThemeToggle />
            <Button 
              className="bg-techtribe-red hover:bg-red-700 text-white"
              onClick={() => window.open("https://chat.whatsapp.com/example", "_blank")}
            >
              Join Community
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t dark:border-gray-800 animate-fade-in">
            <nav className="flex flex-col space-y-4 px-2">
              <Link
                to="/"
                className="text-sm font-medium text-techtribe-black dark:text-techtribe-white hover:text-techtribe-red transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <a
                href="#about"
                className="text-sm font-medium text-techtribe-black dark:text-techtribe-white hover:text-techtribe-red transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#features"
                className="text-sm font-medium text-techtribe-black dark:text-techtribe-white hover:text-techtribe-red transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                What We Do
              </a>
              <a
                href="#team"
                className="text-sm font-medium text-techtribe-black dark:text-techtribe-white hover:text-techtribe-red transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium text-techtribe-black dark:text-techtribe-white hover:text-techtribe-red transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-techtribe-black dark:text-techtribe-white hover:text-techtribe-red transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                className="bg-techtribe-red hover:bg-red-700 text-white w-full"
                onClick={() => {
                  window.open("https://chat.whatsapp.com/example", "_blank");
                  setMobileMenuOpen(false);
                }}
              >
                Join WhatsApp Community
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
