
import React from 'react';
import { Link } from 'react-router-dom';

type UserHeaderProps = {
  name: string;
  email: string;
};

const UserHeader = ({ name, email }: UserHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div className="flex items-center">
        <div className="h-14 w-14 rounded-full bg-brand-purple flex items-center justify-center text-white text-xl font-medium">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
          <p className="text-gray-500">{email}</p>
        </div>
      </div>
      <div>
        <Link to="/create-event" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-purple hover:bg-opacity-90">
          Create Event
        </Link>
      </div>
    </div>
  );
};

export default UserHeader;
