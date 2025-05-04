
import React from 'react';
import { Bell } from 'lucide-react';

type Notification = {
  id: number;
  message: string;
  time: string;
  read: boolean;
};

type NotificationsPanelProps = {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (id: number) => void;
  markAllAsRead: () => void;
};

const NotificationsPanel = ({ notifications, unreadCount, markAsRead, markAllAsRead }: NotificationsPanelProps) => {
  return (
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
  );
};

export default NotificationsPanel;
