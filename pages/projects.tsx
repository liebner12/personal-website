import Head from 'next/head';
import { createContext, useState } from 'react';
import Modal from '../components/containers/modal';
import ProjectsLayout from '../components/layouts/projects';

interface ProjectContext {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProjectsContext = createContext<ProjectContext>({
  openModal: false,
  setOpenModal: () => {
    // do nothing
  },
});

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <ProjectsContext.Provider value={{ setOpenModal, openModal }}>
      <Head>
        <title>Projects</title>
        <meta name="description" content="My projects :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProjectsLayout />
      <Modal />
    </ProjectsContext.Provider>
  );
};

export default Projects;
