
import { Link } from 'react-router-dom';
import { Heart, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-secondary backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center animate-fade-in">
          <div className="px-5 py-2">
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:glow-text relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-primary after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100 after:transition-transform">
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:glow-text relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-primary after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100 after:transition-transform">
              Terms
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:glow-text relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-primary after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100 after:transition-transform">
              Privacy
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:glow-text relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-primary after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100 after:transition-transform">
              Contact
            </Link>
          </div>
        </nav>
        
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:glow">
            <span className="sr-only">GitHub</span>
            <GitHub className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:glow">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:glow">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        
        <div className="mt-8">
          <p className="text-center text-muted-foreground text-sm flex items-center justify-center">
            &copy; {new Date().getFullYear()} EngageAI Events. Made with 
            <Heart className="h-4 w-4 mx-1 text-primary animate-pulse-slow" />
            <span className="gradient-text hover:glow-text transition-all duration-300">All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
