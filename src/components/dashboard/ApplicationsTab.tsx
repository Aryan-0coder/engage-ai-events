
import React from 'react';
import { Link } from 'react-router-dom';

type Application = {
  id: number;
  companyName: string;
  position: string;
  status: string;
  date: string;
};

type ApplicationsTabProps = {
  applications: Application[];
};

const ApplicationsTab = ({ applications }: ApplicationsTabProps) => {
  return (
    <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-lg font-medium">Your Job Applications</h2>
        <Link to="/jobs" className="text-sm text-brand-blue hover:underline">Browse more jobs</Link>
      </div>
      {applications.length > 0 ? (
        <div className="divide-y divide-gray-200">
          {applications.map(app => (
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
  );
};

export default ApplicationsTab;
