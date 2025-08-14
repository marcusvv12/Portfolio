export interface Link {
  id: number;
  name: string;
  url: string;
}

export interface Experience {
  id: number;
  title: string;
  img_url?: string;
  img_url_2?: string;
  description: string;
  date: string;
  badges: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  github: string;
  deploy: string;
  summary: string;
  img_url: string;
  motivation: string;
  role: string;
  techs: string[];
  ui: string;
  challenges: string;
  lessons: string;
  img_url_lp: string;
  figma? : string;
}

export interface KnowledgeSidebarLinks {
  id: number;
  title: string;
  link: string;
}

export interface Knowledge {
  id: number;
  title: string;
  subtitle: string;
  resume: string;
  link: string;
  content: string;
  subcontent: string;
  references: string;
  topics: Link[];
}
