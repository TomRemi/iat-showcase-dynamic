import { Card, CardContent } from "@/components/ui/card";
import { Code2, Lightbulb, Rocket, Target } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Code2,
      title: "Expert Development",
      description: "Our team of seasoned developers creates robust, scalable solutions using cutting-edge technologies."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver innovative solutions that drive business growth."
    },
    {
      icon: Target,
      title: "Client-Focused",
      description: "Every solution is tailored to meet specific business needs and deliver measurable results."
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Agile development methodologies ensure rapid deployment without compromising quality."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">IAT Technologies</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded with a vision to transform businesses through technology, 
                IAT Technologies has been at the forefront of custom software development, 
                delivering innovative solutions that drive growth and efficiency.
              </p>
              <p>
                Our expertise spans across Customer Relationship Management (CRM), 
                Quality Management Systems (QMS), and Learning Management Systems (LMS), 
                helping organizations streamline operations and achieve their digital transformation goals.
              </p>
              <p>
                With a commitment to excellence and a passion for innovation, we partner 
                with businesses of all sizes to create software solutions that not only 
                meet today's challenges but also prepare for tomorrow's opportunities.
              </p>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="product-card h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;