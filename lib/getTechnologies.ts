import { Project } from 'types';

export const getTechnologies = (projects: Array<Project>) => {
  const allTechnologies = projects.flatMap((project) => project.technologies);

  return allTechnologies.filter(
    (item, index, self) => self.indexOf(item) == index
  );
};
