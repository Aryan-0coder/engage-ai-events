
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
  const socialPlatforms = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "bg-blue-600",
      url: "https://linkedin.com",
      description: "Connect with tech professionals and find job opportunities.",
      members: "5.2k+"
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "bg-sky-500",
      url: "https://twitter.com",
      description: "Get the latest tech news and join coding discussions.",
      members: "8.7k+"
    },
    {
      name: "Facebook",
      icon: Facebook,
      color: "bg-blue-700",
      url: "https://facebook.com",
      description: "Join our developer community groups and local meetups.",
      members: "12k+"
    },
    {
      name: "Instagram",
      icon: Instagram,
      color: "bg-pink-600",
      url: "https://instagram.com",
      description: "See behind-the-scenes from hackathons and tech events.",
      members: "7.3k+"
    },
    {
      name: "YouTube",
      icon: Youtube,
      color: "bg-red-600",
      url: "https://youtube.com",
      description: "Watch tutorials, event recordings and coding sessions.",
      members: "3.5k+"
    }
  ];

  return (
    <div className="animate-fade-in container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Connect with our Community</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join our growing tech community across different social media platforms. 
          Share your projects, participate in discussions, and stay updated with the latest events.
        </p>
      </div>

      {/* Social Media Platforms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {socialPlatforms.map((platform) => (
          <div 
            key={platform.name}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className={`${platform.color} p-6 text-white flex items-center`}>
              <platform.icon size={36} />
              <h2 className="text-xl font-bold ml-4">{platform.name}</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">{platform.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">{platform.members} followers</span>
                <a 
                  href={platform.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-brand-purple text-white rounded-md hover:bg-brand-purple/90 transition-colors"
                >
                  Follow Us
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Community Features */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Join Our Social Community?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Networking Opportunities</h3>
            <p className="text-gray-600">Connect with like-minded developers, designers, and tech enthusiasts.</p>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Exclusive Content</h3>
            <p className="text-gray-600">Get early access to events, hackathons, and job opportunities.</p>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Knowledge Sharing</h3>
            <p className="text-gray-600">Learn from industry experts through tutorials, live sessions, and Q&As.</p>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Project Showcase</h3>
            <p className="text-gray-600">Share your projects and get constructive feedback from the community.</p>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Event Updates</h3>
            <p className="text-gray-600">Stay updated with upcoming hackathons, workshops, and meetups.</p>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Career Growth</h3>
            <p className="text-gray-600">Discover new job opportunities and career advancement paths.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to expand your network?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Join our vibrant community today and connect with thousands of tech professionals worldwide.</p>
        <div className="flex justify-center space-x-4">
          <Link to="/register" className="px-6 py-3 bg-brand-purple text-white rounded-md hover:bg-brand-purple/90 transition-colors">
            Create an Account
          </Link>
          <Link to="/events" className="px-6 py-3 border border-brand-purple text-brand-purple rounded-md hover:bg-gray-50 transition-colors">
            Explore Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
