export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface ProjectsCard {
  name: string;
  type: string;
  description: string;
  url: string;
  urlGithub: string;
  urlImage: string;
}

export interface DetailExplain {
  name: string;
  path: string;
  right?: boolean;
  description: string;
}

// interface MyProjects {
//   title:string,
//   url: string;
// }
export interface Skill {
  id: string;
  name: string;
  link: string;
  icon: string;
  type: string;
  // MyProjects: MyProjects[];
}
