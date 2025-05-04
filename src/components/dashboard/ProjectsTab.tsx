
import React from 'react';
import { Award, User } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  stars: number;
  reviews: number;
};

type ProjectsTabProps = {
  projects: Project[];
};

const ProjectsTab = ({ projects }: ProjectsTabProps) => {
  return (
    <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-lg font-medium">Your Projects</h2>
        <button className="text-sm text-brand-blue hover:underline">Upload new project</button>
      </div>
      {projects.length > 0 ? (
        <div className="divide-y divide-gray-200">
          {projects.map(project => (
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
  );
};

export default ProjectsTab;
