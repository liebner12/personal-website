import Head from 'next/head';
import { createContext, useState } from 'react';
import Container from '../components/containers/container';
import Modal from '../components/containers/modal';
import ProjectsLayout from '../components/layouts/projects';
import Background from '../components/units/background';
import Header from '../components/containers/header';
import { ModalType } from '../utils/types/project';

interface ProjectContext {
  openModal: ModalType;
  setOpenModal: React.Dispatch<React.SetStateAction<ModalType>>;
}

export const ProjectsContext = createContext<ProjectContext>({
  openModal: null,
  setOpenModal: () => {
    // do nothing
  },
});

const Projects = () => {
  const [openModal, setOpenModal] = useState<ModalType>(null);
  return (
    <ProjectsContext.Provider value={{ setOpenModal, openModal }}>
      <Head>
        <title>Projects</title>
        <meta name="description" content="My projects :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background background="projectsBg" />
      <Container>
        <Header
          title="Projects"
          desc="Showcase of my works on frontend development."
        />
        <ProjectsLayout />
        <Modal />
      </Container>
    </ProjectsContext.Provider>
  );
};

export default Projects;
