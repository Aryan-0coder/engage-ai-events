
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

type Event = {
  id: number;
  title: string;
  date: string;
  role: string;
};

type EventsTabProps = {
  events: Event[];
};

const EventsTab = ({ events }: EventsTabProps) => {
  return (
    <div className="glass-card divide-y divide-border rounded-lg animate-fade-in">
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-lg font-medium gradient-text text-shadow-sm">Your Events</h2>
        <Link to="/events" className="text-sm text-primary hover:underline transition-all duration-300 hover:glow-text link-underline interactive">
          Browse more events
        </Link>
      </div>
      {events.length > 0 ? (
        <div className="divide-y divide-border">
          {events.map(event => (
            <div key={event.id} className="p-4 transition-all duration-300 hover:bg-card/60">
              <div className="flex justify-between">
                <Link 
                  to={`/events/${event.id}`} 
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-300 link-underline"
                >
                  {event.title}
                </Link>
                <span className="text-muted-foreground">{event.role}</span>
              </div>
              <p className="text-muted-foreground mt-1 flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-primary" />
                {new Date(event.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="p-4 text-center text-muted-foreground animate-fade-in text-shadow-sm">You haven't joined any events yet.</p>
      )}
    </div>
  );
};

export default EventsTab;
