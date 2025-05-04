
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Calendar, Award } from 'lucide-react';
import { Briefcase, FileText } from '../../components/ui/Award';
import EventsTab from './EventsTab';
import ApplicationsTab from './ApplicationsTab';
import ProjectsTab from './ProjectsTab';
import SkillsTab from './SkillsTab';

type DashboardTabsProps = {
  userData: {
    events: Array<{
      id: number;
      title: string;
      date: string;
      role: string;
    }>;
    applications: Array<{
      id: number;
      companyName: string;
      position: string;
      status: string;
      date: string;
    }>;
    projects: Array<{
      id: number;
      title: string;
      description: string;
      stars: number;
      reviews: number;
    }>;
    skills: Array<{
      name: string;
      level: number;
    }>;
  };
};

const DashboardTabs = ({ userData }: DashboardTabsProps) => {
  return (
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
        <EventsTab events={userData.events} />
      </TabsContent>
      
      <TabsContent value="applications" className="mt-6">
        <ApplicationsTab applications={userData.applications} />
      </TabsContent>
      
      <TabsContent value="projects" className="mt-6">
        <ProjectsTab projects={userData.projects} />
      </TabsContent>
      
      <TabsContent value="skills" className="mt-6">
        <SkillsTab skills={userData.skills} />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
