
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Calendar, Upload, MapPin, Clock } from 'lucide-react';
import { Award, Trophy } from '../components/ui/Award';

const CreateEvent = () => {
  const navigate = useNavigate();
  const [isHackathon, setIsHackathon] = useState(false);
  const [eventType, setEventType] = useState('event');
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState('');
  
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
    
    // Set image preview if imageUrl changes
    if (name === 'imageUrl' && value) {
      setImagePreview(value);
    }
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
      <h1 className="text-3xl font-bold gradient-text glow-text mb-8">Create Event</h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Event Type Selection */}
        <div className="glass-card rounded-lg p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,217,0.2)]">
          <h2 className="text-xl font-semibold mb-4 gradient-text">Event Type</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <label className={`tech-border rounded-lg p-4 flex flex-col items-center cursor-pointer transition-all duration-300 hover:glow ${eventType === 'event' ? 'border-primary bg-gradient-tech' : 'border-border'}`}>
              <input
                type="radio"
                name="eventType"
                value="event"
                checked={eventType === 'event'}
                onChange={handleEventTypeChange}
                className="sr-only"
              />
              <Calendar className="h-8 w-8 mb-2 text-primary animate-pulse-slow" />
              <span className="font-medium text-foreground">Regular Event</span>
              <span className="text-sm text-muted-foreground text-center mt-1">Workshops, meetups, etc.</span>
            </label>
            
            <label className={`tech-border rounded-lg p-4 flex flex-col items-center cursor-pointer transition-all duration-300 hover:glow ${eventType === 'hackathon' ? 'border-primary bg-gradient-tech' : 'border-border'}`}>
              <input
                type="radio"
                name="eventType"
                value="hackathon"
                checked={eventType === 'hackathon'}
                onChange={handleEventTypeChange}
                className="sr-only"
              />
              <Award className="h-8 w-8 mb-2 text-primary animate-pulse-slow" />
              <span className="font-medium text-foreground">Hackathon</span>
              <span className="text-sm text-muted-foreground text-center mt-1">Team-based competition</span>
            </label>
            
            <label className={`tech-border rounded-lg p-4 flex flex-col items-center cursor-pointer transition-all duration-300 hover:glow ${eventType === 'competition' ? 'border-primary bg-gradient-tech' : 'border-border'}`}>
              <input
                type="radio"
                name="eventType"
                value="competition"
                checked={eventType === 'competition'}
                onChange={handleEventTypeChange}
                className="sr-only"
              />
              <Trophy className="h-8 w-8 mb-2 text-primary animate-pulse-slow" />
              <span className="font-medium text-foreground">Competition</span>
              <span className="text-sm text-muted-foreground text-center mt-1">Individual challenges</span>
            </label>
          </div>
        </div>
        
        {/* Basic Information */}
        <div className="glass-card rounded-lg p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,217,0.2)]">
          <h2 className="text-xl font-semibold mb-4 gradient-text">Basic Information</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-foreground mb-1">
                Event Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full rounded-md bg-card border-border text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-all duration-200"
                required
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-foreground mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="w-full rounded-md bg-card border-border text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-all duration-200"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-foreground mb-1 flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full rounded-md bg-card border-border text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-all duration-200"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="startTime" className="block text-sm font-medium text-foreground mb-1 flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    Start Time
                  </label>
                  <input
                    type="time"
                    id="startTime"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    className="w-full rounded-md bg-card border-border text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-all duration-200"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="endTime" className="block text-sm font-medium text-foreground mb-1 flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    End Time
                  </label>
                  <input
                    type="time"
                    id="endTime"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    className="w-full rounded-md bg-card border-border text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-all duration-200"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-foreground mb-1 flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, Country or Online"
                  className="w-full rounded-md bg-card border-border text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-all duration-200"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-foreground mb-1">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-md bg-card border-border text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-all duration-200"
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
              <label htmlFor="imageUrl" className="block text-sm font-medium text-foreground mb-1 flex items-center">
                <Upload className="h-4 w-4 mr-2 text-primary" />
                Event Image URL
              </label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full rounded-md bg-card border-border text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-all duration-200"
              />
              <p className="text-sm text-muted-foreground mt-1">
                Leave blank to use a default image
              </p>
              
              {imagePreview && (
                <div className="mt-2 rounded-md overflow-hidden h-40 tech-border">
                  <img 
                    src={imagePreview} 
                    alt="Event preview" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={() => setImagePreview('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')}
                  />
                </div>
              )}
              
              {!imagePreview && (
                <div className="mt-2 rounded-md overflow-hidden h-40 bg-gradient-tech flex items-center justify-center tech-border animate-pulse-slow">
                  <Upload className="h-12 w-12 text-muted-foreground" />
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Hackathon-specific fields */}
        {isHackathon && (
          <div className="glass-card rounded-lg p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,217,0.2)] animate-fade-in">
            <h2 className="text-xl font-semibold mb-4 gradient-text">Hackathon Details</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Team Size
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-24 rounded-md bg-card border-border text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-all duration-200"
                    min="1"
                    max="10"
                  />
                  <span className="text-foreground">to</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-24 rounded-md bg-card border-border text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-all duration-200"
                    min="1"
                    max="10"
                  />
                  <span className="text-foreground">members</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Challenge Tracks
                </label>
                <textarea
                  placeholder="Enter challenge tracks, one per line"
                  rows={3}
                  className="w-full rounded-md bg-card border-border text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-all duration-200"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Enter each track on a new line
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Prizes
                </label>
                <textarea
                  placeholder="Enter prizes, one per line (e.g. '1st Place: $1000')"
                  rows={3}
                  className="w-full rounded-md bg-card border-border text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-all duration-200"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Enter each prize on a new line
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Judging Criteria
                </label>
                <textarea
                  placeholder="Enter judging criteria"
                  rows={3}
                  className="w-full rounded-md bg-card border-border text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-all duration-200"
                />
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm font-medium text-foreground">
                  Submission Requirements
                </label>
                <div className="flex items-center">
                  <input type="checkbox" id="github" className="rounded bg-card border-border text-primary focus:ring-primary mr-2 transition-all duration-200 hover:glow" />
                  <label htmlFor="github" className="text-foreground">GitHub Repository</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="video" className="rounded bg-card border-border text-primary focus:ring-primary mr-2 transition-all duration-200 hover:glow" />
                  <label htmlFor="video" className="text-foreground">Demo Video</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="presentation" className="rounded bg-card border-border text-primary focus:ring-primary mr-2 transition-all duration-200 hover:glow" />
                  <label htmlFor="presentation" className="text-foreground">Presentation</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="documentation" className="rounded bg-card border-border text-primary focus:ring-primary mr-2 transition-all duration-200 hover:glow" />
                  <label htmlFor="documentation" className="text-foreground">Documentation</label>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/events')}
            className="px-4 py-2 border border-border text-foreground rounded-md shadow-sm hover:bg-card hover:border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-gradient-cta text-primary-foreground rounded-md shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 hover:glow disabled:opacity-70"
          >
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating...
              </span>
            ) : 'Create Event'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
