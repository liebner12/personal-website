export type Project = {
  title: string;
  subtitle: string;
  image: string;
  desc: string;
  technologies: Array<string>;
  slug: string;
};

export type ProjectsType = { projects: Array<Project> };
