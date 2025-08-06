import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, BarChart3, Calendar } from "lucide-react";
import crmHero from "@/assets/crm-hero.jpg";

const CRMCard = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Content Side */}
      <div className="order-2 lg:order-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
            <Users className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="text-3xl font-bold">CRM System</h3>
        </div>
        
        <h4 className="text-xl text-primary mb-4">
          Revolutionize Your Customer Relationships
        </h4>
        
        <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
          Our comprehensive Customer Relationship Management system helps businesses 
          manage leads, track sales pipelines, and build lasting customer relationships. 
          Perfect for sales teams, account managers, and growing businesses.
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-sm">Sales Pipeline</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            <span className="text-sm">Analytics</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm">Task Management</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm">Contact Database</span>
          </div>
        </div>

        <Button 
          size="lg" 
          className="btn-glow"
          onClick={scrollToContact}
        >
          Get CRM Demo
        </Button>
      </div>

      {/* Visual Side - Animated Card */}
      <div className="order-1 lg:order-2">
        <Card className="product-card overflow-hidden animate-float">
          <CardContent className="p-0">
            <div className="relative">
              <img 
                src={crmHero} 
                alt="CRM Dashboard Interface"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Monthly Sales</span>
                    <span className="text-primary font-semibold">+24%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full w-3/4 animate-pulse-glow" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CRMCard;