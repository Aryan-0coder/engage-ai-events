
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchEvents } from '../services/api';
import { Calendar, MapPin, Search, Plus } from 'lucide-react';

const EventsPage = () => {
  const [filters, setFilters] = useState({
    category: '',
    search: '',
  });

  // This would fetch from your API in a real app
  const { data: events, isLoading, error } = useQuery({
    queryKey: ['events', filters],
    queryFn: () => fetchEvents(filters),
    // For now, let's use mock data
    initialData: [
      {
        id: 1,
        title: 'React Developer Hackathon',
        description: 'Build innovative solutions using React in this 48-hour hackathon.',
        date: '2025-05-15',
        location: 'San Francisco, CA',
        category: 'hackathon',
        image_url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      },
      {
        id: 2,
        title: 'AI Innovation Challenge',
        description: 'Develop AI-powered applications to solve real-world problems.',
        date: '2025-06-20',
        location: 'Online',
        category: 'competition',
        image_url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      },
      {
        id: 3,
        title: 'Full Stack Bootcamp',
        description: 'Learn modern web development in this intensive workshop.',
        date: '2025-05-30',
        location: 'New York, NY',
        category: 'workshop',
        image_url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      },
    ]
  });

  const categories = [
    { id: '', label: 'All Categories' },
    { id: 'hackathon', label: 'Hackathons' },
    { id: 'competition', label: 'Competitions' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'meetup', label: 'Meetups' },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      search: e.target.value,
    });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({
      ...filters,
      category: e.target.value,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in bg-background text-foreground">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Events</h1>
          <p className="mt-2 text-muted-foreground">Discover hackathons, competitions, and workshops</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link
            to="/create-event"
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-primary-foreground bg-primary hover:bg-opacity-90 transition-all duration-300 hover:glow"
          >
            <Plus className="mr-2 h-5 w-5 animate-pulse-slow" />
            Create Event
          </Link>
        </div>
      </div>

      <div className="glass-card mb-8 transition-all duration-300 hover:shadow-md">
        <div className="md:flex md:gap-4 p-4">
          <div className="relative flex-grow mb-4 md:mb-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search events..."
              value={filters.search}
              onChange={handleSearchChange}
              className="pl-10 w-full rounded-md bg-input border-border text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-all duration-200"
            />
          </div>
          <div className="w-full md:w-1/3">
            <select
              value={filters.category}
              onChange={handleCategoryChange}
              className="w-full rounded-md bg-input border-border text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-all duration-200"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="text-center py-12">
          <p className="text-muted-foreground animate-pulse-slow">Loading events...</p>
        </div>
      )}

      {error && (
        <div className="text-center py-12">
          <p className="text-destructive animate-fade-in">Error loading events. Please try again later.</p>
        </div>
      )}

      {!isLoading && events && events.length === 0 && (
        <div className="text-center py-12 animate-fade-in">
          <p className="text-muted-foreground">No events found matching your criteria.</p>
          <Link to="/create-event" className="mt-4 inline-block text-primary hover:underline hover:glow-text transition-all duration-300">
            Create a new event
          </Link>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events && events.map(event => (
          <Link to={`/events/${event.id}`} key={event.id} className="group">
            <div className="tech-border h-full transition-all duration-300 hover:glow animate-fade-in bg-card">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={event.image_url}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-2 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-full mb-2">
                  {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                </span>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{event.title}</h3>
                <p className="mt-2 text-muted-foreground line-clamp-2">{event.description}</p>
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1 text-primary" />
                  {new Date(event.date).toLocaleDateString()}
                  <span className="mx-2">•</span>
                  <MapPin className="h-4 w-4 mr-1 text-primary" />
                  {event.location}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
