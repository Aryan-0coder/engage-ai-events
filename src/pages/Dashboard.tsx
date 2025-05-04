import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Calendar, Award, User, Bell } from 'lucide-react';
import { Briefcase, FileText } from '../components/ui/Award';

const Dashboard = () => {
  // This would be fetched from your backend in a real application
  const userData = {
    name: 'Jane Cooper',
    email: 'jane@example.com',
    events: [
      { id: 1, title: 'React Developer Hackathon', date: '2025-05-15', role: 'Participant' },
      { id: 2, title: 'AI Innovation Challenge', date: '2025-06-20', role: 'Team Leader' },
    ],
    applications: [
      { id: 1, companyName: 'TechCorp', position: 'Frontend Developer', status: 'Applied', date: '2025-05-02' },
      { id: 2, companyName: 'InnovateSoft', position: 'React Engineer', status: 'Interview', date: '2025-04-28' },
    ],
    projects: [
      { id: 1, title: 'Smart Home Dashboard', description: 'React-based IoT control panel', stars: 12, reviews: 3 },
      { id: 2, title: 'ML Recommendation Engine', description: 'Python recommendation system for e-commerce', stars: 8, reviews: 2 },
    ],
    skills: [
      { name: 'React', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'Python', level: 70 },
      { name: 'Node.js', level: 75 },
    ],
    recommendations: [
      { type: 'event', title: 'Full Stack Bootcamp', date: '2025-05-30' },
      { type: 'job', title: 'Senior Frontend Developer', company: 'WebTech' },
      { type: 'learning', title: 'Advanced React Patterns', platform: 'Coursera' },
    ],
    notifications: [
      { id: 1, message: 'Your project received a new mentor review', time: '2 hours ago', read: false },
      { id: 2, message: 'Reminder: AI Hackathon starts tomorrow', time: '12 hours ago', read: false },
      { id: 3, message: 'TechCorp viewed your job application', time: '2 days ago', read: true },
    ]
  };

  const [notifications, setNotifications] = useState(userData.notifications);
  
  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };
  
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* User header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center">
          <div className="h-14 w-14 rounded-full bg-brand-purple flex items-center justify-center text-white text-xl font-medium">
            {userData.name.charAt(0)}
          </div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-gray-900">{userData.name}</h1>
            <p className="text-gray-500">{userData.email}</p>
          </div>
        </div>
        <div>
          <Link to="/create-event" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-purple hover:bg-opacity-90">
            Create Event
          </Link>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content */}
        <div className="w-full lg:w-2/3">
          <Tabs defaultValue="events" className="w-full">
            <TabsList>
              <TabsTrigger value="events" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Events
              </TabsTrigger>
              <TabsTrigger value="applications" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Applications
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="skills" className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                Skills
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="events" className="mt-6">
              <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
                <div className="p-4 flex justify-between items-center">
                  <h2 className="text-lg font-medium">Your Events</h2>
                  <Link to="/events" className="text-sm text-brand-blue hover:underline">Browse more events</Link>
                </div>
                {userData.events.length > 0 ? (
                  <div className="divide-y divide-gray-200">
                    {userData.events.map(event => (
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
            </TabsContent>
            
            <TabsContent value="applications" className="mt-6">
              <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
                <div className="p-4 flex justify-between items-center">
                  <h2 className="text-lg font-medium">Your Job Applications</h2>
                  <Link to="/jobs" className="text-sm text-brand-blue hover:underline">Browse more jobs</Link>
                </div>
                {userData.applications.length > 0 ? (
                  <div className="divide-y divide-gray-200">
                    {userData.applications.map(app => (
                      <div key={app.id} className="p-4">
                        <div className="flex justify-between">
                          <div>
                            <div className="text-lg font-medium">{app.position}</div>
                            <div className="text-gray-600">{app.companyName}</div>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            app.status === 'Interview' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {app.status}
                          </span>
                        </div>
                        <p className="text-gray-500 mt-1">Applied on: {new Date(app.date).toLocaleDateString()}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="p-4 text-center text-gray-500">You haven't applied to any jobs yet.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="projects" className="mt-6">
              <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
                <div className="p-4 flex justify-between items-center">
                  <h2 className="text-lg font-medium">Your Projects</h2>
                  <button className="text-sm text-brand-blue hover:underline">Upload new project</button>
                </div>
                {userData.projects.length > 0 ? (
                  <div className="divide-y divide-gray-200">
                    {userData.projects.map(project => (
                      <div key={project.id} className="p-4">
                        <div className="text-lg font-medium">{project.title}</div>
                        <p className="text-gray-600 mt-1">{project.description}</p>
                        <div className="mt-2 flex items-center space-x-4 text-sm">
                          <span className="flex items-center">
                            <Award className="h-4 w-4 text-yellow-500 mr-1" />
                            {project.stars} stars
                          </span>
                          <span className="flex items-center">
                            <User className="h-4 w-4 text-gray-500 mr-1" />
                            {project.reviews} reviews
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="p-4 text-center text-gray-500">You haven't uploaded any projects yet.</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="skills" className="mt-6">
              <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
                <div className="p-4">
                  <h2 className="text-lg font-medium">Your Skills</h2>
                </div>
                <div className="p-4">
                  {userData.skills.map(skill => (
                    <div key={skill.name} className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-brand-purple h-2 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                  <div className="mt-6">
                    <Link to="/learning" className="text-brand-blue hover:underline flex items-center">
                      <Book className="h-4 w-4 mr-2" />
                      View learning roadmaps for skill improvement
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Sidebar */}
        <div className="w-full lg:w-1/3 space-y-8">
          {/* Notifications */}
          <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
            <div className="p-4 flex justify-between items-center">
              <h2 className="text-lg font-medium flex items-center">
                <Bell className="h-5 w-5 mr-2 text-brand-purple" />
                Notifications
                {unreadCount > 0 && (
                  <span className="ml-2 bg-brand-purple text-white text-xs rounded-full px-2 py-0.5">
                    {unreadCount}
                  </span>
                )}
              </h2>
              {unreadCount > 0 && (
                <button 
                  onClick={markAllAsRead}
                  className="text-xs text-brand-blue hover:underline"
                >
                  Mark all as read
                </button>
              )}
            </div>
            <div className="divide-y divide-gray-200 max-h-96 overflow-auto">
              {notifications.length > 0 ? (
                notifications.map(notification => (
                  <div 
                    key={notification.id} 
                    className={`p-4 ${notification.read ? 'bg-white' : 'bg-blue-50'}`}
                  >
                    <div className="flex justify-between">
                      <p className={`${notification.read ? 'text-gray-600' : 'text-gray-900'}`}>
                        {notification.message}
                      </p>
                      {!notification.read && (
                        <button 
                          onClick={() => markAsRead(notification.id)}
                          className="text-xs text-brand-blue hover:underline"
                        >
                          Mark read
                        </button>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                ))
              ) : (
                <p className="p-4 text-center text-gray-500">No notifications</p>
              )}
            </div>
          </div>
          
          {/* Recommendations */}
          <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
            <div className="p-4">
              <h2 className="text-lg font-medium">Recommended For You</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {userData.recommendations.map((rec, index) => (
                <div key={index} className="p-4">
                  {rec.type === 'event' && (
                    <>
                      <div className="text-brand-purple font-medium">{rec.title}</div>
                      <p className="text-gray-600 text-sm">Event on {new Date(rec.date).toLocaleDateString()}</p>
                    </>
                  )}
                  {rec.type === 'job' && (
                    <>
                      <div className="text-brand-purple font-medium">{rec.title}</div>
                      <p className="text-gray-600 text-sm">Job at {rec.company}</p>
                    </>
                  )}
                  {rec.type === 'learning' && (
                    <>
                      <div className="text-brand-purple font-medium">{rec.title}</div>
                      <p className="text-gray-600 text-sm">Course on {rec.platform}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
