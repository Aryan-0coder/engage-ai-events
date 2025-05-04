
export type UserData = {
  name: string;
  email: string;
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
  recommendations: Array<{
    type: string;
    title: string;
    date?: string;
    company?: string;
    platform?: string;
  }>;
  notifications: Array<{
    id: number;
    message: string;
    time: string;
    read: boolean;
  }>;
};
