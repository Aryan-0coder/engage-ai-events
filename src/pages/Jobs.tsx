
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { Search, Briefcase, MapPin, Clock, Building, ChevronRight } from 'lucide-react';

// Mock API call - would be fetched from your Flask backend in a real app
const fetchJobs = async (filters = {}) => {
  // Mock data for now
  return [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$90,000 - $120,000',
      tags: ['React', 'TypeScript', 'CSS'],
      postedDate: '2025-04-25',
      description: 'We are looking for a skilled Frontend Developer to join our team. You will be responsible for building user interfaces for our web applications.',
      logo: 'https://via.placeholder.com/100?text=TC',
      remote: true,
    },
    {
      id: 2,
      title: 'Machine Learning Engineer',
      company: 'AI Innovations',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      tags: ['Python', 'TensorFlow', 'PyTorch'],
      postedDate: '2025-04-28',
      description: 'Join our ML team to develop cutting-edge solutions for natural language processing and computer vision problems.',
      logo: 'https://via.placeholder.com/100?text=AI',
      remote: false,
    },
    {
      id: 3,
      title: 'React Native Developer',
      company: 'MobileFirst',
      location: 'Remote',
      type: 'Contract',
      salary: '$70 - $90/hour',
      tags: ['React Native', 'JavaScript', 'Mobile'],
      postedDate: '2025-05-01',
      description: 'We need a talented React Native developer to help build our cross-platform mobile application.',
      logo: 'https://via.placeholder.com/100?text=MF',
      remote: true,
    },
    {
      id: 4,
      title: 'Backend Engineer',
      company: 'DataFlow',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$100,000 - $130,000',
      tags: ['Node.js', 'Python', 'PostgreSQL'],
      postedDate: '2025-04-30',
      description: 'Looking for a backend engineer to develop scalable APIs and services for our data processing platform.',
      logo: 'https://via.placeholder.com/100?text=DF',
      remote: true,
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'CloudTech',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$110,000 - $140,000',
      tags: ['AWS', 'Kubernetes', 'CI/CD'],
      postedDate: '2025-04-26',
      description: 'Join our DevOps team to build and maintain our cloud infrastructure and deployment pipelines.',
      logo: 'https://via.placeholder.com/100?text=CT',
      remote: false,
    },
  ];
};

const Jobs = () => {
  const [filters, setFilters] = useState({
    search: '',
    jobType: '',
    location: '',
    remote: false,
  });
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const isLoggedIn = false; // This would come from auth context in a real app

  const { data: jobs, isLoading, error } = useQuery({
    queryKey: ['jobs', filters],
    queryFn: () => fetchJobs(filters),
  });

  const jobTypes = ['All Types', 'Full-time', 'Part-time', 'Contract', 'Internship'];
  const locations = ['All Locations', 'San Francisco, CA', 'New York, NY', 'Austin, TX', 'Seattle, WA', 'Remote'];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      search: e.target.value,
    });
  };

  const handleJobTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({
      ...filters,
      jobType: e.target.value === 'All Types' ? '' : e.target.value,
    });
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({
      ...filters,
      location: e.target.value === 'All Locations' ? '' : e.target.value,
    });
  };

  const handleRemoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      remote: e.target.checked,
    });
  };

  const handleApply = (jobId: number) => {
    if (!isLoggedIn) {
      toast('Please log in to apply for this job', {
        action: {
          label: 'Log in',
          onClick: () => {
            // Navigate to login page in a real app
          }
        }
      });
      return;
    }
    
    toast.success('Application submitted!');
  };

  const renderJobDetails = (job: any) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded bg-gray-100 flex items-center justify-center">
            <img src={job.logo} alt={job.company} className="h-full w-full object-cover" />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-bold text-gray-900">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-gray-400 mr-2" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center">
            <Briefcase className="h-5 w-5 text-gray-400 mr-2" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-gray-400 mr-2" />
            <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{job.salary}</span>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Job Description</h3>
          <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {job.tags.map((tag: string, index: number) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <button
          onClick={() => handleApply(job.id)}
          className="w-full py-2 px-4 bg-brand-purple text-white rounded-md shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple"
        >
          Apply Now
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Tech Jobs</h1>
      <p className="text-gray-600 mb-8">Find your next opportunity in tech</p>
      
      <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for jobs, skills, or companies"
                value={filters.search}
                onChange={handleSearchChange}
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>
          </div>
          <div>
            <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-1">
              Job Type
            </label>
            <select
              id="jobType"
              value={filters.jobType ? filters.jobType : 'All Types'}
              onChange={handleJobTypeChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            >
              {jobTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <select
              id="location"
              value={filters.location ? filters.location : 'All Locations'}
              onChange={handleLocationChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <div className="flex items-center h-10">
              <input
                id="remote"
                name="remote"
                type="checkbox"
                checked={filters.remote}
                onChange={handleRemoteChange}
                className="h-4 w-4 text-brand-purple focus:ring-brand-purple border-gray-300 rounded"
              />
              <label htmlFor="remote" className="ml-2 block text-sm text-gray-700">
                Remote only
              </label>
            </div>
          </div>
          <div className="flex items-end">
            <button
              className="px-4 py-2 bg-brand-purple text-white rounded-md shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple"
            >
              Filter Results
            </button>
          </div>
        </div>
      </div>
      
      {isLoading && (
        <div className="text-center py-12">
          <p>Loading jobs...</p>
        </div>
      )}
      
      {error && (
        <div className="text-center py-12">
          <p className="text-red-600">Error loading jobs. Please try again later.</p>
        </div>
      )}
      
      {!isLoading && jobs && jobs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No jobs found matching your criteria.</p>
          <p className="mt-2 text-brand-purple">Try adjusting your filters</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {jobs?.map(job => (
              <div 
                key={job.id} 
                className={`bg-white rounded-lg shadow-sm p-4 cursor-pointer transition hover:shadow ${selectedJob === job.id ? 'border-2 border-brand-purple' : ''}`}
                onClick={() => setSelectedJob(job.id)}
              >
                <div className="flex items-center">
                  <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded bg-gray-100 flex items-center justify-center">
                    <img src={job.logo} alt={job.company} className="h-full w-full object-cover" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                    <div className="text-sm text-gray-500">{job.company}</div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
                <div className="mt-2 text-sm text-gray-700">{job.location} {job.remote && '(Remote)'}</div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {job.type}
                  </span>
                  <span className="text-sm text-gray-500">
                    Posted {new Date(job.postedDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {job.tags.map((tag: string, index: number) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="hidden lg:block">
          <div className="sticky top-8">
            {selectedJob !== null && jobs ? (
              renderJobDetails(jobs.find(job => job.id === selectedJob))
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center h-80">
                <Briefcase className="h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Job Details</h3>
                <p className="text-gray-600">Select a job to view details</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile view for job details */}
        {selectedJob !== null && jobs && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 lg:hidden z-50 flex items-end">
            <div className="bg-white rounded-t-lg w-full p-6 max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Job Details</h3>
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {renderJobDetails(jobs.find(job => job.id === selectedJob))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
