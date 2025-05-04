
import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from 'lucide-react';

type Skill = {
  name: string;
  level: number;
};

type SkillsTabProps = {
  skills: Skill[];
};

const SkillsTab = ({ skills }: SkillsTabProps) => {
  return (
    <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
      <div className="p-4">
        <h2 className="text-lg font-medium">Your Skills</h2>
      </div>
      <div className="p-4">
        {skills.map(skill => (
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
  );
};

export default SkillsTab;
