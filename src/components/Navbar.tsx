
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Bell } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = false; // This would come from auth context in a real app

  return (
    <nav className="bg-card/70 backdrop-blur-sm shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold gradient-text transition-all duration-300 hover:glow-text text-shadow-md">EngageAI</Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/events" className="border-transparent text-foreground hover:text-primary hover:border-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200 interactive">
                Events
              </Link>
              <Link to="/projects" className="border-transparent text-foreground hover:text-primary hover:border-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200 interactive">
                Projects
              </Link>
              <Link to="/jobs" className="border-transparent text-foreground hover:text-primary hover:border-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200 interactive">
                Jobs
              </Link>
              <Link to="/social" className="border-transparent text-foreground hover:text-primary hover:border-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200 interactive">
                Social
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {isLoggedIn ? (
              <>
                <button className="p-1 rounded-full text-muted-foreground hover:text-primary focus:outline-none transition-colors duration-200 interactive">
                  <Bell className="h-6 w-6" />
                </button>
                <Link to="/dashboard" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 hover:glow interactive">
                  Dashboard
                </Link>
              </>
            ) : (
              <div className="space-x-4">
                <Link to="/login" className="inline-flex items-center px-4 py-2 border border-primary text-sm font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 transition-all duration-200 interactive">
                  Log in
                </Link>
                <Link to="/register" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 hover:glow interactive">
                  Sign up
                </Link>
              </div>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-card focus:outline-none transition-colors duration-200 interactive"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-card/80 backdrop-blur-sm animate-fade-in">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/events" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-foreground hover:bg-card hover:border-primary hover:text-primary transition-all duration-200 interactive">
              Events
            </Link>
            <Link to="/projects" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-foreground hover:bg-card hover:border-primary hover:text-primary transition-all duration-200 interactive">
              Projects
            </Link>
            <Link to="/jobs" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-foreground hover:bg-card hover:border-primary hover:text-primary transition-all duration-200 interactive">
              Jobs
            </Link>
            <Link to="/social" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-foreground hover:bg-card hover:border-primary hover:text-primary transition-all duration-200 interactive">
              Social
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-border">
            {isLoggedIn ? (
              <div className="space-y-1">
                <Link to="/dashboard" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-foreground hover:bg-card hover:border-primary hover:text-primary transition-all duration-200 interactive">
                  Dashboard
                </Link>
              </div>
            ) : (
              <div className="space-y-3 px-4 pb-3">
                <Link to="/login" className="block text-center px-4 py-2 text-base font-medium text-primary hover:bg-card/60 transition-colors duration-200 border border-primary rounded-md interactive">
                  Log in
                </Link>
                <Link to="/register" className="block text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 hover:glow interactive">
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
