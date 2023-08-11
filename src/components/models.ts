export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  url?: string;
  urlGithub: string;
  image: string[];
  demoVideo?: string;
  DetailExplain?: DetailExplain[];
}

export interface DetailExplain {
  name: string;
  path: string;
  right?: boolean;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  link: string;
  icon: string;
  type: string;
  description: string;
}
