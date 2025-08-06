import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, Zap } from "lucide-react";

const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Custom Software Solutions
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Empowering businesses with cutting-edge CRM, QMS, and LMS solutions. 
            Streamline operations, enhance productivity, and drive growth with IAT Technologies.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in">
            <div className="flex items-center gap-2 bg-card/50 rounded-full px-4 py-2 border border-border">
              <Code className="w-5 h-5 text-primary" />
              <span className="text-sm">Custom Development</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 rounded-full px-4 py-2 border border-border">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm">Expert Team</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 rounded-full px-4 py-2 border border-border">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm">Fast Delivery</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="btn-glow text-lg px-8 py-6"
              onClick={scrollToContact}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={scrollToProducts}
            >
              View Our Products
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;