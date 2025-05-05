
import { Link } from 'react-router-dom';
import { Calendar, Briefcase, FileText } from 'lucide-react';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero section with gradient background */}
      <div className="relative bg-gradient-tech py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl font-extrabold text-white glow-text sm:text-5xl sm:tracking-tight lg:text-6xl">
            Engage, Connect, Innovate
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
            Join hackathons, showcase projects, find jobs, and grow your skills - all in one place.
          </p>
          <div className="mt-10 flex justify-center">
            <Link to="/events" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gradient-cta hover:opacity-90 transition-opacity glow">
              Browse Events
            </Link>
            <Link to="/register" className="ml-4 inline-flex items-center justify-center px-5 py-3 border border-white/20 tech-border text-base font-medium rounded-md text-white bg-secondary/80 hover:bg-secondary transition-colors">
              Sign Up Free
            </Link>
          </div>
        </div>
      </div>

      {/* Features section with updated styling */}
      <div className="py-24 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-extrabold text-white glow-text sm:text-4xl">
              The platform for tech enthusiasts
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
              Everything you need to learn, collaborate, and advance your career
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="pt-6">
                <div className="flow-root glass-card rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-brand-cyan rounded-md shadow-lg glow">
                        <Calendar className="h-6 w-6 text-black" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-serif font-medium text-white tracking-tight">Events & Hackathons</h3>
                    <p className="mt-5 text-base text-muted-foreground">
                      Join or host hackathons, competitions, and tech events with customizable landing pages and team formation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="pt-6">
                <div className="flow-root glass-card rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-brand-cyan rounded-md shadow-lg glow">
                        <Briefcase className="h-6 w-6 text-black" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-serif font-medium text-white tracking-tight">Jobs & Recruitment</h3>
                    <p className="mt-5 text-base text-muted-foreground">
                      Upload your resume, browse tech jobs, and connect with companies looking for talent like you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="pt-6">
                <div className="flow-root glass-card rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-brand-cyan rounded-md shadow-lg glow">
                        <FileText className="h-6 w-6 text-black" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-serif font-medium text-white tracking-tight">Project Showcase</h3>
                    <p className="mt-5 text-base text-muted-foreground">
                      Share your projects, get feedback from the community, and earn recognition from industry mentors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section with gradient background */}
      <div className="bg-gradient-tech">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-extrabold text-white glow-text sm:text-4xl">
            <span className="block">Ready to advance your tech career?</span>
            <span className="block text-brand-cyan">Join our community today.</span>
          </h2>
          <div className="mt-8 flex">
            <div className="inline-flex rounded-md shadow">
              <Link to="/register" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-brand-cyan hover:bg-opacity-90 glow">
                Sign up
              </Link>
            </div>
            <div className="ml-3 inline-flex">
              <Link to="/events" className="inline-flex items-center justify-center px-5 py-3 border border-white/20 tech-border text-base font-medium rounded-md text-white bg-secondary/80 hover:bg-secondary transition-colors">
                Browse events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
