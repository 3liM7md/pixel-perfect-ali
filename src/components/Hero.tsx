import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ExternalLink, Download } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative mb-8">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden ring-4 ring-primary/30 glow-effect">
            <img 
              src={profilePhoto} 
              alt="Ali Adil - Applied Computer Science Student"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              Available for Co-op
            </Badge>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-gradient">Ali Adil</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Applied Computer Science Student at Dalhousie University
        </p>
        
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Passionate about web development, software engineering, and creating 
          innovative solutions. Currently seeking Co-op opportunities to apply my 
          technical expertise and leadership experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="group"
          >
            View My Work
            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => {
              // This would trigger a resume download
              window.open('/resume.pdf', '_blank');
            }}
            className="group"
          >
            <Download className="mr-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            Download Resume
          </Button>
        </div>

        <button
          onClick={() => scrollToSection('education')}
          className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-8 h-8 mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;