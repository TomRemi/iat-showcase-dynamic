import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, FileText, Award } from "lucide-react";
import qmsHero from "@/assets/qms-hero.jpg";

const QMSSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="relative rounded-2xl overflow-hidden min-h-[600px] flex items-center"
      style={{
        backgroundImage: `url(${qmsHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      
      {/* Content */}
      <div className="relative z-10 w-full px-8 lg:px-16 py-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-4xl font-bold">QMS Platform</h3>
              <p className="text-primary text-lg font-semibold">
                Ensure Quality & Compliance Excellence
              </p>
            </div>
          </div>

          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            Our Quality Management System streamlines compliance processes, 
            automates audit trails, and ensures your organization meets industry 
            standards. Built for manufacturing, healthcare, and regulated industries.
          </p>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h5 className="font-semibold mb-1">Automated Compliance</h5>
                <p className="text-sm text-muted-foreground">
                  Stay compliant with automated workflows
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h5 className="font-semibold mb-1">Document Control</h5>
                <p className="text-sm text-muted-foreground">
                  Centralized document management
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h5 className="font-semibold mb-1">Audit Ready</h5>
                <p className="text-sm text-muted-foreground">
                  Always audit-ready with real-time tracking
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h5 className="font-semibold mb-1">Risk Management</h5>
                <p className="text-sm text-muted-foreground">
                  Proactive risk identification & mitigation
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="btn-glow"
              onClick={scrollToContact}
            >
              Start QMS Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View Compliance Features
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute top-8 right-8 bg-card/90 backdrop-blur-sm rounded-xl p-4 hidden lg:block">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">99.9%</div>
          <div className="text-sm text-muted-foreground">Compliance Rate</div>
        </div>
      </div>
    </div>
  );
};

export default QMSSection;