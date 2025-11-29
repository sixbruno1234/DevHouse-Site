export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'bot' | 'website' | 'api' | 'plugin' | 'server';
  image: string;
  technologies: string[];
  features: string[];
  status: 'completed' | 'in-progress' | 'maintenance';
  year: number;
  link?: string;
  github?: string;
  highlighted?: boolean;
}
