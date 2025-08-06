import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">IAT</span>
              </div>
              <span className="text-2xl font-bold">IAT Technologies</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Empowering businesses with custom software solutions. We specialize in 
              CRM, QMS, and LMS platforms that drive growth and efficiency.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@iattechnologies.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Technology Drive, Innovation City, TC 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Solutions</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  CRM Systems
                </span>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Quality Management
                </span>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Learning Platforms
                </span>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Custom Development
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © 2024 IAT Technologies. All rights reserved. Built with passion for innovation.
          </div>
          
          {/* Back to Top Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;