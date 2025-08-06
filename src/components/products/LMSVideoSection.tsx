import { Button } from "@/components/ui/button";
import { Play, BookOpen, Users, Trophy, Clock } from "lucide-react";
import lmsHero from "@/assets/lms-hero.jpg";
import { useState } from "react";

const LMSVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="grid lg:grid-cols-5 gap-12 items-center">
      {/* Video/Image Side - Takes more space */}
      <div className="lg:col-span-3 order-2 lg:order-1">
        <div className="relative rounded-2xl overflow-hidden group">
          <img 
            src={lmsHero} 
            alt="LMS Learning Platform Interface"
            className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Video Overlay */}
          <div className="video-overlay absolute inset-0 flex items-center justify-center">
            <button 
              className="w-20 h-20 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <Play className="w-8 h-8 text-primary-foreground ml-1" />
            </button>
          </div>

          {/* Floating Course Progress */}
          <div className="absolute top-6 left-6 bg-card/90 backdrop-blur-sm rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">React Fundamentals</span>
            </div>
            <div className="h-2 bg-muted rounded-full w-32">
              <div className="h-full bg-primary rounded-full w-3/5" />
            </div>
            <span className="text-xs text-muted-foreground">60% Complete</span>
          </div>

          {/* Live Indicator */}
          <div className="absolute top-6 right-6 bg-red-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Live Session
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center bg-card rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Courses</div>
          </div>
          <div className="text-center bg-card rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">10K+</div>
            <div className="text-sm text-muted-foreground">Students</div>
          </div>
          <div className="text-center bg-card rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">95%</div>
            <div className="text-sm text-muted-foreground">Completion</div>
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="lg:col-span-2 order-1 lg:order-2">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="text-3xl font-bold">LMS Platform</h3>
        </div>
        
        <h4 className="text-xl text-primary mb-4">
          Accelerate Learning & Development
        </h4>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Transform your organization's learning with our comprehensive Learning 
          Management System. Create, deliver, and track training programs that 
          boost employee skills and drive business results.
        </p>

        {/* Feature List */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-primary" />
            </div>
            <span>Interactive Virtual Classrooms</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
              <Trophy className="w-4 h-4 text-primary" />
            </div>
            <span>Gamification & Certificates</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
              <Clock className="w-4 h-4 text-primary" />
            </div>
            <span>Self-Paced Learning Paths</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-primary" />
            </div>
            <span>Content Authoring Tools</span>
          </div>
        </div>

        <div className="space-y-3">
          <Button 
            size="lg" 
            className="btn-glow w-full"
            onClick={scrollToContact}
          >
            Launch Learning Platform
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Watch Platform Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LMSVideoSection;