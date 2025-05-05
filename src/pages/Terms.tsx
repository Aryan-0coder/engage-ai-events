
import { Check } from 'lucide-react';

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <h1 className="text-4xl font-bold gradient-text glow-text mb-8">Terms of Service</h1>
      
      <div className="glass-card p-8 rounded-lg tech-border hover:shadow-[0_0_15px_rgba(0,255,217,0.2)] transition-all duration-300">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold gradient-text mb-4">1. Introduction</h2>
            <p className="text-foreground leading-relaxed">
              Welcome to EngageAI Events. These Terms of Service govern your use of our website, services, and applications. 
              By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold gradient-text mb-4">2. User Accounts</h2>
            <div className="space-y-4">
              <p className="text-foreground leading-relaxed">
                When you create an account with us, you must provide accurate and complete information. You are responsible 
                for safeguarding your password and for all activities that occur under your account.
              </p>
              <div className="pl-6 space-y-2">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-muted-foreground">You must be at least 18 years old to create an account.</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-muted-foreground">You are responsible for keeping your account credentials secure.</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-muted-foreground">We reserve the right to disable any user account at our discretion.</p>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold gradient-text mb-4">3. Events and Participation</h2>
            <p className="text-foreground leading-relaxed">
              EngageAI Events provides a platform for users to create, host, and participate in events. By participating 
              in any event, you agree to abide by the specific rules and guidelines for that event.
            </p>
            <div className="mt-4 p-4 bg-gradient-tech rounded-md">
              <h3 className="text-xl font-medium text-foreground mb-2">Event Code of Conduct</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Treat all participants with respect and courtesy</li>
                <li>Adhere to the specific rules outlined for each event</li>
                <li>Submit only original work that does not infringe on others' intellectual property</li>
                <li>Communicate professionally and constructively</li>
                <li>Report any violations or concerns to event organizers</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold gradient-text mb-4">4. Content and Intellectual Property</h2>
            <p className="text-foreground leading-relaxed">
              Users retain ownership of content they create and submit through our platform. By posting content, you grant 
              EngageAI Events a worldwide, non-exclusive license to use, reproduce, modify, and display that content in 
              connection with our services.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold gradient-text mb-4">5. Limitation of Liability</h2>
            <p className="text-foreground leading-relaxed">
              EngageAI Events shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including loss of profits, data, or business opportunities arising out of or in connection with these Terms or 
              your use of our services.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold gradient-text mb-4">6. Changes to Terms</h2>
            <p className="text-foreground leading-relaxed">
              We may modify these Terms at any time. Your continued use of our services after any changes indicates your 
              acceptance of the modified Terms.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold gradient-text mb-4">7. Contact Information</h2>
            <p className="text-foreground leading-relaxed">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="mt-2 p-4 glass-card rounded-md inline-block">
              <p className="text-primary">support@engageaievents.com</p>
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

export default Terms;
