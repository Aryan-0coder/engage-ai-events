
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <h1 className="text-4xl font-bold gradient-text glow-text mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-lg tech-border hover:shadow-[0_0_15px_rgba(0,255,217,0.2)] transition-all duration-300">
          <h2 className="text-2xl font-semibold gradient-text mb-6">Get in Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-primary mt-1 mr-4" />
              <div>
                <h3 className="font-medium text-foreground">Email</h3>
                <p className="text-primary hover:glow-text transition-all duration-300">info@engageaievents.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-primary mt-1 mr-4" />
              <div>
                <h3 className="font-medium text-foreground">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-primary mt-1 mr-4" />
              <div>
                <h3 className="font-medium text-foreground">Office</h3>
                <p className="text-muted-foreground">
                  123 Tech Hub Street<br />
                  San Francisco, CA 94107<br />
                  United States
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold gradient-text mb-4">Connect With Us</h2>
            <p className="text-muted-foreground mb-4">
              Follow us on social media for the latest updates on events, hackathons, and tech news.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin', 'github'].map((platform) => (
                <a 
                  key={platform} 
                  href={`https://${platform}.com`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gradient-tech hover:glow transition-all duration-300"
                >
                  <span className="sr-only">{platform}</span>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <img 
                      src={`https://simpleicons.org/icons/${platform}.svg`} 
                      alt={platform} 
                      className="w-4 h-4 invert" 
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="glass-card p-8 rounded-lg tech-border hover:shadow-[0_0_15px_rgba(0,255,217,0.2)] transition-all duration-300">
          <h2 className="text-2xl font-semibold gradient-text mb-6">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                Your Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-md bg-card border-border text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-all duration-200"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                Email Address <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-md bg-card border-border text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-all duration-200"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-md bg-card border-border text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-all duration-200"
              >
                <option value="">Select a subject</option>
                <option value="event-inquiry">Event Inquiry</option>
                <option value="sponsorship">Sponsorship Opportunities</option>
                <option value="partnership">Partnership Proposal</option>
                <option value="support">Technical Support</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-md bg-card border-border text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-all duration-200"
              />
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="privacy"
                  type="checkbox"
                  required
                  className="rounded bg-card border-border text-primary focus:ring-primary"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="privacy" className="text-muted-foreground">
                  I agree to the <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                </label>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-sm flex items-center text-muted-foreground">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>All fields marked with * are required</span>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2 bg-gradient-cta text-primary-foreground rounded-md hover:opacity-90 transition-all duration-300 hover:glow disabled:opacity-70 flex items-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="mt-12 glass-card p-6 rounded-lg tech-border hover:shadow-[0_0_15px_rgba(0,255,217,0.2)] transition-all duration-300">
        <h2 className="text-2xl font-semibold gradient-text mb-4">Find Us</h2>
        <div className="w-full h-80 rounded-lg overflow-hidden tech-border">
          {/* This would be a real map in a production app */}
          <div className="w-full h-full bg-gradient-tech flex items-center justify-center">
            <MapPin className="h-12 w-12 text-primary animate-pulse-slow" />
            <span className="ml-2 text-lg text-foreground">Interactive Map Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
