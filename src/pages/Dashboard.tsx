
import React, { useState } from 'react';
import UserHeader from '../components/dashboard/UserHeader';
import DashboardTabs from '../components/dashboard/DashboardTabs';
import NotificationsPanel from '../components/dashboard/NotificationsPanel';
import RecommendationsPanel from '../components/dashboard/RecommendationsPanel';
import { UserData } from '../types/dashboard';

const Dashboard = () => {
  // This would be fetched from your backend in a real application
  const userData: UserData = {
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
      <UserHeader name={userData.name} email={userData.email} />
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content */}
        <div className="w-full lg:w-2/3">
          <DashboardTabs userData={userData} />
        </div>
        
        {/* Sidebar */}
        <div className="w-full lg:w-1/3 space-y-8">
          {/* Notifications */}
          <NotificationsPanel 
            notifications={notifications} 
            unreadCount={unreadCount}
            markAsRead={markAsRead}
            markAllAsRead={markAllAsRead}
          />
          
          {/* Recommendations */}
          <RecommendationsPanel recommendations={userData.recommendations} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
