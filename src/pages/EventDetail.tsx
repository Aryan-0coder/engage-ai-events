
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { Calendar, MapPin, User, Clock, Users, Github, FileText, Video } from 'lucide-react';
import { fetchEventById } from '../services/api';

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [showTeamDialog, setShowTeamDialog] = useState(false);
  const [showSubmissionDialog, setShowSubmissionDialog] = useState(false);
  
  const isLoggedIn = false; // Would come from auth context in a real app
  
  // This would fetch from your API in a real app
  const { data: event, isLoading, error } = useQuery({
    queryKey: ['event', id],
    queryFn: () => fetchEventById(id as string),
    // Mock data for now
    initialData: {
      id: 1,
      title: 'React Developer Hackathon',
      description: 'Build innovative solutions using React in this 48-hour hackathon. Teams of 2-5 developers will collaborate to create web applications addressing one of our challenge tracks. Prizes include cash awards, mentorship opportunities, and more!',
      date: '2025-05-15',
      startTime: '09:00',
      endTime: '18:00',
      location: 'San Francisco, CA',
      category: 'hackathon',
      image_url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      organizer: 'Tech Innovators Group',
      isHackathon: true,
      teamSize: { min: 2, max: 5 },
      challengeTracks: [
        'Healthcare Innovation',
        'Sustainability Solutions',
        'Fintech Applications',
      ],
      prizes: [
        '1st Place: $5,000',
        '2nd Place: $2,500',
        '3rd Place: $1,000',
      ],
      timeline: [
        { date: '2025-05-15', time: '09:00', event: 'Opening Ceremony' },
        { date: '2025-05-15', time: '10:00', event: 'Hacking Begins' },
        { date: '2025-05-16', time: '10:00', event: 'Mid-point Check-in' },
        { date: '2025-05-17', time: '10:00', event: 'Submission Deadline' },
        { date: '2025-05-17', time: '13:00', event: 'Presentations' },
        { date: '2025-05-17', time: '18:00', event: 'Award Ceremony' },
      ],
      judges: [
        { name: 'Alex Chen', role: 'CTO at TechStart' },
        { name: 'Maria Rodriguez', role: 'Senior Engineer at ReactPro' },
        { name: 'David Kim', role: 'Product Manager at InnovateCo' },
      ],
      teams: [
        { id: 1, name: 'React Rockstars', members: 3, spaces: 2 },
        { id: 2, name: 'Code Crafters', members: 4, spaces: 1 },
        { id: 3, name: 'Innovation Hub', members: 2, spaces: 3 },
      ]
    }
  });

  const handleRegister = () => {
    if (!isLoggedIn) {
      toast('Please log in to register for this event', {
        action: {
          label: 'Log in',
          onClick: () => {
            // Navigate to login page
          }
        }
      });
      return;
    }
    
    toast.success('You have successfully registered for this event!');
  };
  
  const handleCreateTeam = () => {
    setShowTeamDialog(true);
    // In a real app, this would open a modal dialog to create a team
  };
  
  const handleJoinTeam = (teamId: number) => {
    if (!isLoggedIn) {
      toast('Please log in to join a team', {
        action: {
          label: 'Log in',
          onClick: () => {
            // Navigate to login page
          }
        }
      });
      return;
    }
    
    toast.success('Team join request sent!');
  };
  
  const handleSubmitProject = () => {
    setShowSubmissionDialog(true);
    // In a real app, this would open a modal dialog to submit a project
  };

  if (isLoading) {
    return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">Loading event details...</div>;
  }

  if (error || !event) {
    return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-red-600">Error loading event details. Please try again later.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      {/* Header */}
      <div className="relative">
        <div className="h-64 sm:h-80 w-full rounded-lg overflow-hidden">
          <img
            src={event.image_url}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-5xl mx-auto -mt-16 relative z-10">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <span className="inline-block px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-800 rounded-full mb-4">
              {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
            </span>
            <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
            
            <div className="mt-4 flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-gray-500" />
                {new Date(event.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-gray-500" />
                {event.startTime} - {event.endTime}
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                {event.location}
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2 text-gray-500" />
                {event.organizer}
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={handleRegister}
                className="px-4 py-2 bg-brand-purple text-white rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple"
              >
                Register Now
              </button>
              
              {event.isHackathon && (
                <button
                  onClick={handleCreateTeam}
                  className="px-4 py-2 bg-white text-brand-purple border border-brand-purple rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple"
                >
                  Create Team
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Description */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">About This Event</h2>
            <p className="text-gray-700 whitespace-pre-line">{event.description}</p>
          </div>
          
          {/* Challenge Tracks */}
          {event.isHackathon && event.challengeTracks && (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Challenge Tracks</h2>
              <ul className="space-y-2">
                {event.challengeTracks.map((track, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-brand-purple flex items-center justify-center text-white text-xs font-bold mr-3 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{track}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Prizes */}
          {event.isHackathon && event.prizes && (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Prizes</h2>
              <ul className="space-y-3">
                {event.prizes.map((prize, index) => (
                  <li key={index} className="flex items-center">
                    <Award className="h-5 w-5 mr-3 text-yellow-500" />
                    <span className="text-gray-700">{prize}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Timeline */}
          {event.timeline && (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Event Timeline</h2>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <ul className="space-y-6 relative">
                  {event.timeline.map((item, index) => (
                    <li key={index} className="ml-10">
                      <div className="absolute left-0 mt-1.5 w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                      <div className="font-semibold">{item.event}</div>
                      <div className="text-sm text-gray-500">
                        {new Date(item.date).toLocaleDateString()} at {item.time}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          {/* Project Submission */}
          {event.isHackathon && (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Project Submission</h2>
              <p className="text-gray-700 mb-4">
                Submit your project by providing GitHub repository link, demo video, and documentation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <Github className="h-5 w-5 mr-3" />
                  GitHub Repository
                </div>
                <div className="flex items-center text-gray-700">
                  <Video className="h-5 w-5 mr-3" />
                  Demo Video (YouTube or Vimeo)
                </div>
                <div className="flex items-center text-gray-700">
                  <FileText className="h-5 w-5 mr-3" />
                  Project Documentation
                </div>
              </div>
              <button
                onClick={handleSubmitProject}
                className="mt-6 px-4 py-2 bg-brand-purple text-white rounded-md hover:bg-opacity-90 focus:outline-none"
              >
                Submit Project
              </button>
            </div>
          )}
          
          {/* Judges */}
          {event.isHackathon && event.judges && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Judges</h2>
              <ul className="space-y-4">
                {event.judges.map((judge, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                      {judge.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="font-medium">{judge.name}</div>
                      <div className="text-sm text-gray-500">{judge.role}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div>
          {/* Team Formation */}
          {event.isHackathon && (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Teams</h2>
                <button
                  onClick={handleCreateTeam}
                  className="text-sm text-brand-purple hover:underline"
                >
                  Create Team
                </button>
              </div>
              
              <div className="text-sm text-gray-600 mb-4">
                <div className="flex items-center mb-1">
                  <Users className="h-4 w-4 mr-1" />
                  Team size: {event.teamSize.min}-{event.teamSize.max} members
                </div>
              </div>
              
              {event.teams && event.teams.length > 0 ? (
                <div className="space-y-4">
                  {event.teams.map(team => (
                    <div key={team.id} className="border rounded p-3">
                      <div className="font-medium">{team.name}</div>
                      <div className="text-sm text-gray-600 mt-1">
                        {team.members} member{team.members !== 1 ? 's' : ''} • {team.spaces} space{team.spaces !== 1 ? 's' : ''} available
                      </div>
                      <button
                        onClick={() => handleJoinTeam(team.id)}
                        className="mt-2 w-full px-3 py-1 text-sm bg-brand-light text-brand-purple rounded hover:bg-opacity-80"
                      >
                        Request to Join
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">No teams have been formed yet.</p>
              )}
            </div>
          )}
          
          {/* Organizer */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Organizer</h2>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                {event.organizer.charAt(0)}
              </div>
              <div className="ml-4">
                <div className="font-medium">{event.organizer}</div>
                <Link to="/" className="text-sm text-brand-purple hover:underline">
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
