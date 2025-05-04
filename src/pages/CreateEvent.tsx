
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Calendar } from 'lucide-react';
import { Award, Trophy } from '../components/ui/Award';

const CreateEvent = () => {
  const navigate = useNavigate();
  const [isHackathon, setIsHackathon] = useState(false);
  const [eventType, setEventType] = useState('event');
  const [loading, setLoading] = useState(false);
  
  // Form state would be more complex in a real app
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    category: 'hackathon',
    imageUrl: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEventTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEventType(value);
    setIsHackathon(value === 'hackathon');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // In a real app, this would actually call your API
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      toast.success('Event created successfully!');
      navigate('/events');
    } catch (error) {
      toast.error('Failed to create event. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Create Event</h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Event Type Selection */}
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Event Type</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <label className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer ${eventType === 'event' ? 'border-brand-purple bg-brand-light' : 'border-gray-200'}`}>
              <input
                type="radio"
                name="eventType"
                value="event"
                checked={eventType === 'event'}
                onChange={handleEventTypeChange}
                className="sr-only"
              />
              <Calendar className="h-8 w-8 mb-2 text-gray-700" />
              <span className="font-medium">Regular Event</span>
              <span className="text-sm text-gray-500 text-center mt-1">Workshops, meetups, etc.</span>
            </label>
            
            <label className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer ${eventType === 'hackathon' ? 'border-brand-purple bg-brand-light' : 'border-gray-200'}`}>
              <input
                type="radio"
                name="eventType"
                value="hackathon"
                checked={eventType === 'hackathon'}
                onChange={handleEventTypeChange}
                className="sr-only"
              />
              <Award className="h-8 w-8 mb-2 text-gray-700" />
              <span className="font-medium">Hackathon</span>
              <span className="text-sm text-gray-500 text-center mt-1">Team-based competition</span>
            </label>
            
            <label className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer ${eventType === 'competition' ? 'border-brand-purple bg-brand-light' : 'border-gray-200'}`}>
              <input
                type="radio"
                name="eventType"
                value="competition"
                checked={eventType === 'competition'}
                onChange={handleEventTypeChange}
                className="sr-only"
              />
              <Trophy className="h-8 w-8 mb-2 text-gray-700" />
              <span className="font-medium">Competition</span>
              <span className="text-sm text-gray-500 text-center mt-1">Individual challenges</span>
            </label>
          </div>
        </div>
        
        {/* Basic Information */}
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Event Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                required
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Start Time
                  </label>
                  <input
                    type="time"
                    id="startTime"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-1">
                    End Time
                  </label>
                  <input
                    type="time"
                    id="endTime"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, Country or Online"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                >
                  <option value="hackathon">Hackathon</option>
                  <option value="workshop">Workshop</option>
                  <option value="meetup">Meetup</option>
                  <option value="conference">Conference</option>
                  <option value="competition">Competition</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                Event Image URL
              </label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
              <p className="text-sm text-gray-500 mt-1">
                Leave blank to use a default image
              </p>
            </div>
          </div>
        </div>
        
        {/* Hackathon-specific fields */}
        {isHackathon && (
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Hackathon Details</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Team Size
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-24 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    min="1"
                    max="10"
                  />
                  <span>to</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-24 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    min="1"
                    max="10"
                  />
                  <span>members</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Challenge Tracks
                </label>
                <textarea
                  placeholder="Enter challenge tracks, one per line"
                  rows={3}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Enter each track on a new line
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prizes
                </label>
                <textarea
                  placeholder="Enter prizes, one per line (e.g. '1st Place: $1000')"
                  rows={3}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Enter each prize on a new line
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Judging Criteria
                </label>
                <textarea
                  placeholder="Enter judging criteria"
                  rows={3}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Submission Requirements
                </label>
                <div className="flex items-center">
                  <input type="checkbox" id="github" className="rounded text-brand-purple focus:ring-brand-purple mr-2" />
                  <label htmlFor="github">GitHub Repository</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="video" className="rounded text-brand-purple focus:ring-brand-purple mr-2" />
                  <label htmlFor="video">Demo Video</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="presentation" className="rounded text-brand-purple focus:ring-brand-purple mr-2" />
                  <label htmlFor="presentation">Presentation</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="documentation" className="rounded text-brand-purple focus:ring-brand-purple mr-2" />
                  <label htmlFor="documentation">Documentation</label>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/events')}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-brand-purple text-white rounded-md shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple disabled:opacity-70"
          >
            {loading ? 'Creating...' : 'Create Event'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
