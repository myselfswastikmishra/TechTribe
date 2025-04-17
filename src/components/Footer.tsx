
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img
                src="/lovable-uploads/21ef0c51-1eeb-42ba-8098-a0318aa2c3b7.png"
                alt="Tech Tribe Logo"
                className="h-10 w-10"
              />
              <span className="ml-2 text-xl font-bold text-techtribe-black dark:text-techtribe-white">
                TECH TRIBE
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              A thriving community of 800+ tech enthusiasts at K.R. MANGALAM University, Gurugram. Founded by Swastik Mishra in 2024.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/example"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-techtribe-red transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com/example"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-techtribe-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/example"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-techtribe-red transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/example"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-techtribe-red transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/#about" className="text-gray-600 dark:text-gray-400 hover:text-techtribe-red transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#features" className="text-gray-600 dark:text-gray-400 hover:text-techtribe-red transition-colors">
                  What We Do
                </a>
              </li>
              <li>
                <a href="/#team" className="text-gray-600 dark:text-gray-400 hover:text-techtribe-red transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="text-gray-600 dark:text-gray-400 hover:text-techtribe-red transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-600 dark:text-gray-400 hover:text-techtribe-red transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
              Join Us
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Become a part of our thriving tech community.
            </p>
            <Button 
              className="bg-techtribe-red hover:bg-red-700 text-white w-full"
              onClick={() => window.open("https://chat.whatsapp.com/example", "_blank")}
            >
              Join WhatsApp Community
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Tech Tribe. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-techtribe-red text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-techtribe-red text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-techtribe-red text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
