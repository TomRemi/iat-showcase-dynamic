import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
