import CRMCard from "./products/CRMCard";
import QMSSection from "./products/QMSSection";
import LMSVideoSection from "./products/LMSVideoSection";

const ProductShowcase = () => {
  return (
    <section id="products" className="py-20 section-dark">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Software Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive suite of business software designed to 
            streamline operations and accelerate growth across all industries.
          </p>
        </div>

        {/* Product Layouts - Each with Different Style */}
        <div className="space-y-20">
          {/* CRM - Vertical Card Layout */}
          <CRMCard />
          
          {/* QMS - Full-width Section with Background */}
          <QMSSection />
          
          {/* LMS - Video Background Section */}
          <LMSVideoSection />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;