
import { ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <h1 className="text-4xl font-bold gradient-text glow-text mb-8">About EngageAI Events</h1>
      
      <div className="space-y-8">
        <div className="glass-card p-6 rounded-lg tech-border hover:glow transition-all duration-300">
          <h2 className="text-2xl font-semibold gradient-text mb-4">Our Mission</h2>
          <p className="text-foreground leading-relaxed">
            EngageAI Events is dedicated to fostering innovation and collaboration within the tech community. 
            We provide a platform where developers, designers, entrepreneurs, and tech enthusiasts can connect, 
            learn, and build amazing projects together through hackathons, competitions, and educational events.
          </p>
        </div>
        
        <div className="glass-card p-6 rounded-lg tech-border hover:glow transition-all duration-300">
          <h2 className="text-2xl font-semibold gradient-text mb-4">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-medium text-primary">Host Events</h3>
              <p className="text-muted-foreground">We organize hackathons, coding competitions, workshops, and networking events both online and in-person.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium text-primary">Connect Talent</h3>
              <p className="text-muted-foreground">We connect skilled developers with companies looking for top tech talent.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium text-primary">Showcase Projects</h3>
              <p className="text-muted-foreground">We provide a platform for developers to showcase their innovative projects and get feedback.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium text-primary">Educate & Inspire</h3>
              <p className="text-muted-foreground">We offer resources and learning opportunities to help developers grow their skills.</p>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-6 rounded-lg tech-border hover:glow transition-all duration-300">
          <h2 className="text-2xl font-semibold gradient-text mb-4">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Alexandra Chen', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop' },
              { name: 'Marcus Johnson', role: 'CTO', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&auto=format&fit=crop' },
              { name: 'Sophia Rodriguez', role: 'Events Director', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop' }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto h-32 w-32 rounded-full overflow-hidden mb-4 tech-border">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0D8ABC&color=fff`;
                    }}
                  />
                </div>
                <h3 className="text-xl font-medium text-foreground">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="glass-card p-6 rounded-lg tech-border hover:glow transition-all duration-300">
          <h2 className="text-2xl font-semibold gradient-text mb-4">Get Involved</h2>
          <p className="text-foreground mb-6">
            There are many ways to get involved with EngageAI Events:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="#" className="flex items-center p-4 rounded-md bg-gradient-tech text-foreground hover:glow transition-all duration-300">
              <span className="mr-2">Host an Event</span>
              <ExternalLink className="h-4 w-4 text-primary" />
            </a>
            <a href="#" className="flex items-center p-4 rounded-md bg-gradient-tech text-foreground hover:glow transition-all duration-300">
              <span className="mr-2">Become a Sponsor</span>
              <ExternalLink className="h-4 w-4 text-primary" />
            </a>
            <a href="#" className="flex items-center p-4 rounded-md bg-gradient-tech text-foreground hover:glow transition-all duration-300">
              <span className="mr-2">Volunteer</span>
              <ExternalLink className="h-4 w-4 text-primary" />
            </a>
            <a href="#" className="flex items-center p-4 rounded-md bg-gradient-tech text-foreground hover:glow transition-all duration-300">
              <span className="mr-2">Join Our Team</span>
              <ExternalLink className="h-4 w-4 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
