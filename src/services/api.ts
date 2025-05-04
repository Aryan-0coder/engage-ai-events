
// Base URL for API requests
const API_URL = 'http://localhost:5000/api';

// Auth API functions
export const registerUser = async (userData: any) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.msg || 'Registration failed');
  }
  
  return response.json();
};

export const loginUser = async (credentials: any) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.msg || 'Login failed');
  }
  
  return response.json();
};

// Events API functions
export const fetchEvents = async (filters = {}) => {
  const queryParams = new URLSearchParams(filters as Record<string, string>).toString();
  const response = await fetch(`${API_URL}/events?${queryParams}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }
  
  return response.json();
};

export const fetchEventById = async (id: string) => {
  const response = await fetch(`${API_URL}/events/${id}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch event details');
  }
  
  return response.json();
};

export const createEvent = async (eventData: any, token: string) => {
  const response = await fetch(`${API_URL}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(eventData),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.msg || 'Failed to create event');
  }
  
  return response.json();
};

// Projects API functions
export const fetchProjects = async (filters = {}) => {
  const queryParams = new URLSearchParams(filters as Record<string, string>).toString();
  const response = await fetch(`${API_URL}/projects?${queryParams}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  
  return response.json();
};

export const createProject = async (projectData: any, token: string) => {
  const response = await fetch(`${API_URL}/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(projectData),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.msg || 'Failed to create project');
  }
  
  return response.json();
};

// Jobs API functions
export const fetchJobs = async (filters = {}) => {
  const queryParams = new URLSearchParams(filters as Record<string, string>).toString();
  const response = await fetch(`${API_URL}/jobs?${queryParams}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch jobs');
  }
  
  return response.json();
};

export const applyForJob = async (jobId: string, applicationData: any, token: string) => {
  const response = await fetch(`${API_URL}/jobs/${jobId}/apply`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(applicationData),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.msg || 'Failed to apply for job');
  }
  
  return response.json();
};
