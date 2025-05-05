
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-card/70 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center animate-fade-in">
          <div className="px-5 py-2">
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Terms
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Privacy
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Contact
            </Link>
          </div>
        </nav>
        <div className="mt-8">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} EngageAI Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
