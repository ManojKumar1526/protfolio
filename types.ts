
export interface Project {
  title: string;
  description: string[];
  tags: string[];
  period: string;
  category: 'Full-Stack' | 'Embedded' | 'Frontend';
  githubUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  result: string;
}

export interface Achievement {
  title: string;
  event: string;
  period: string;
  description: string[];
}
