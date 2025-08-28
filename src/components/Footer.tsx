import { Button } from '@/components/ui/button';
import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-card-border bg-card/20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <Button 
            variant="outline" 
            size="sm"
            onClick={scrollToTop}
            className="group"
          >
            <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
          
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold text-gradient">Ali Adil</h3>
            <p className="text-muted-foreground text-sm">
              Applied Computer Science Student • Dalhousie University
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </div>

          <div className="text-center text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Ali Adil. All rights reserved.</p>
            <p className="mt-1">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;