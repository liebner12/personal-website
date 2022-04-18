import Contact from '../components/layouts/contact';
import Background from '../components/units/background';
import Header from '../components/containers/header';

const Projects = () => {
  return (
    <>
      <Header title="Contact" desc="Let's talk" />
      <Background background="contactBg" />
      <Contact />
    </>
  );
};

export default Projects;
