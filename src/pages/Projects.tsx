
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchProjects } from '../services/api';
import { Search, Plus, Star, MessageSquare, User } from 'lucide-react';

const Projects = () => {
  const [filters, setFilters] = useState({
    search: '',
    tag: '',
  });

  // This would fetch from your API in a real app
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects', filters],
    queryFn: () => fetchProjects(filters),
    // Mock data for now
    initialData: [
      {
        id: 1,
        title: 'AI Content Generator',
        description: 'A machine learning application that generates original content for blogs, social media, and more.',
        tags: ['AI/ML', 'Python', 'React'],
        author: {
          name: 'Alex Chen',
          isMentor: true,
        },
        thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
        stars: 42,
        reviews: 12,
        githubUrl: 'https://github.com/username/ai-content-generator',
      },
      {
        id: 2,
        title: 'Smart Home Dashboard',
        description: 'A React-based IoT dashboard for controlling smart home devices with real-time monitoring.',
        tags: ['IoT', 'React', 'Node.js'],
        author: {
          name: 'Maria Rodriguez',
          isMentor: false,
        },
        thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
        stars: 28,
        reviews: 8,
        githubUrl: 'https://github.com/username/smart-home-dashboard',
      },
      {
        id: 3,
        title: 'Blockchain Voting System',
        description: 'A secure voting platform built on blockchain technology for transparent elections.',
        tags: ['Blockchain', 'Ethereum', 'Solidity'],
        author: {
          name: 'David Kim',
          isMentor: true,
        },
        thumbnail: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
        stars: 56,
        reviews: 17,
        githubUrl: 'https://github.com/username/blockchain-voting',
      },
    ]
  });

  const tags = ['All', 'AI/ML', 'React', 'Node.js', 'Python', 'Blockchain', 'IoT', 'Mobile', 'Web'];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      search: e.target.value,
    });
  };

  const handleTagClick = (tag: string) => {
    setFilters({
      ...filters,
      tag: tag === 'All' ? '' : tag,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Project Showcase</h1>
          <p className="mt-2 text-gray-600">Discover projects or share your own with the community</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-purple hover:bg-opacity-90"
          >
            <Plus className="mr-2 h-5 w-5" />
            Upload Project
          </button>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg p-4 mb-8">
        <div className="relative flex-grow mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search projects..."
            value={filters.search}
            onChange={handleSearchChange}
            className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                (tag === 'All' && filters.tag === '') || tag === filters.tag
                  ? 'bg-brand-purple text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {isLoading && (
        <div className="text-center py-12">
          <p>Loading projects...</p>
        </div>
      )}

      {error && (
        <div className="text-center py-12">
          <p className="text-red-600">Error loading projects. Please try again later.</p>
        </div>
      )}

      {!isLoading && projects && projects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No projects found matching your criteria.</p>
          <button className="mt-4 text-brand-purple hover:underline">
            Upload a new project
          </button>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects && projects.map(project => (
          <div key={project.id} className="bg-white overflow-hidden shadow-sm rounded-lg h-full hover:shadow-md transition-shadow">
            <div className="h-48 w-full overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              <p className="mt-2 text-gray-600 line-clamp-3">{project.description}</p>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                      {project.author.name.charAt(0)}
                    </div>
                  </div>
                  <div className="ml-2">
                    <p className="text-sm font-medium text-gray-900 flex items-center">
                      {project.author.name}
                      {project.author.isMentor && (
                        <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                          Mentor
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm">
                  <span className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 mr-1" />
                    {project.stars}
                  </span>
                  <span className="flex items-center text-gray-500">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    {project.reviews}
                  </span>
                </div>
                
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-purple hover:underline flex items-center"
                >
                  <Github className="h-4 w-4 mr-1" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
