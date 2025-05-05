
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <h1 className="text-4xl font-bold gradient-text glow-text mb-8">Privacy Policy</h1>
      
      <div className="glass-card p-8 rounded-lg tech-border hover:shadow-[0_0_15px_rgba(0,255,217,0.2)] transition-all duration-300">
        <div className="space-y-8">
          <section className="flex items-start">
            <Shield className="h-8 w-8 text-primary mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-semibold gradient-text mb-4">Data Protection Overview</h2>
              <p className="text-foreground leading-relaxed">
                At EngageAI Events, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you use our website, services, and applications.
              </p>
            </div>
          </section>
          
          <section className="flex items-start">
            <Lock className="h-8 w-8 text-primary mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-semibold gradient-text mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-primary mb-2">Personal Information</h3>
                  <p className="text-muted-foreground">
                    We may collect personal information that you voluntarily provide when using our services, including:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
                    <li>Name, email address, and contact information</li>
                    <li>Profile information and preferences</li>
                    <li>Payment information when registering for events</li>
                    <li>Content you submit for events or projects</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-primary mb-2">Automatically Collected Information</h3>
                  <p className="text-muted-foreground">
                    When you access our platform, we may automatically collect certain information, including:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
                    <li>Device information and identifiers</li>
                    <li>IP address and browser type</li>
                    <li>Usage data and interaction with our services</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          <section className="flex items-start">
            <Eye className="h-8 w-8 text-primary mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-semibold gradient-text mb-4">How We Use Your Information</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-md hover:glow transition-all duration-300">
                  <h3 className="font-medium text-primary mb-2">Provide and Maintain Our Services</h3>
                  <p className="text-sm text-muted-foreground">Managing your account, processing transactions, and delivering features.</p>
                </div>
                <div className="glass-card p-4 rounded-md hover:glow transition-all duration-300">
                  <h3 className="font-medium text-primary mb-2">Improve and Personalize</h3>
                  <p className="text-sm text-muted-foreground">Analyzing usage patterns and tailoring content to your interests.</p>
                </div>
                <div className="glass-card p-4 rounded-md hover:glow transition-all duration-300">
                  <h3 className="font-medium text-primary mb-2">Communication</h3>
                  <p className="text-sm text-muted-foreground">Sending updates, notifications, and responding to inquiries.</p>
                </div>
                <div className="glass-card p-4 rounded-md hover:glow transition-all duration-300">
                  <h3 className="font-medium text-primary mb-2">Security and Compliance</h3>
                  <p className="text-sm text-muted-foreground">Protecting our services and users, and complying with legal obligations.</p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="flex items-start">
            <AlertTriangle className="h-8 w-8 text-primary mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-semibold gradient-text mb-4">Your Rights and Choices</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <div className="space-y-2">
                <div className="flex items-center p-2 rounded bg-gradient-tech/30">
                  <div className="w-3 h-3 rounded-full bg-primary mr-3"></div>
                  <p className="text-foreground">Access and update your personal information</p>
                </div>
                <div className="flex items-center p-2 rounded bg-gradient-tech/30">
                  <div className="w-3 h-3 rounded-full bg-primary mr-3"></div>
                  <p className="text-foreground">Request deletion of your data</p>
                </div>
                <div className="flex items-center p-2 rounded bg-gradient-tech/30">
                  <div className="w-3 h-3 rounded-full bg-primary mr-3"></div>
                  <p className="text-foreground">Opt-out of marketing communications</p>
                </div>
                <div className="flex items-center p-2 rounded bg-gradient-tech/30">
                  <div className="w-3 h-3 rounded-full bg-primary mr-3"></div>
                  <p className="text-foreground">Disable cookies through your browser settings</p>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold gradient-text mb-4">Contact Us</h2>
            <p className="text-foreground leading-relaxed">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-2 p-4 glass-card rounded-md inline-block animate-pulse-slow">
              <p className="text-primary">privacy@engageaievents.com</p>
            </div>
          </section>
          
          <div className="pt-6 border-t border-border">
            <p className="text-muted-foreground text-sm text-center">
              Last updated: May 5, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
