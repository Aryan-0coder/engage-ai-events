
import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-lg font-medium">Your Events</h2>
        <Link to="/events" className="text-sm text-brand-blue hover:underline">Browse more events</Link>
      </div>
      {events.length > 0 ? (
        <div className="divide-y divide-gray-200">
          {events.map(event => (
            <div key={event.id} className="p-4">
              <div className="flex justify-between">
                <Link to={`/events/${event.id}`} className="text-lg font-medium text-brand-purple hover:underline">{event.title}</Link>
                <span className="text-gray-500">{event.role}</span>
              </div>
              <p className="text-gray-600 mt-1">Date: {new Date(event.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="p-4 text-center text-gray-500">You haven't joined any events yet.</p>
      )}
    </div>
  );
};

export default EventsTab;
