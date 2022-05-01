import SmallGuide from '../../../assets/images/smallGuide.webp';
import PollWorld from '../../../assets/images/poll.webp';
import Centrum from '../../../assets/images/centrum.webp';
import CreateNextStarter from '../../../assets/images/createNextStarter.png';
import Tile from '../../containers/project/tile';
import { useContext } from 'react';
import { ProjectsContext } from '../../../pages/projects';
import { motion } from 'framer-motion';

const Projects = () => {
  const { setOpenModal } = useContext(ProjectsContext);
  return (
    <main className="w-full flex-1 h-full ">
      <motion.div
        className="w-full h-full flex flex-col items-end"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <div className="grid h-full md:grid-cols-3 xl:grid-cols-3 gap-10 py-10 w-full xl:h-full lg:grid-cols-3">
          <Tile
            title="Small Guide"
            subtitle="Travel app"
            image={SmallGuide}
            onClick={() => setOpenModal('small')}
          />
          <Tile
            title="Development Center"
            subtitle="First Gatsby Site"
            image={Centrum}
            onClick={() => setOpenModal('development')}
          />
          <Tile
            title="Poll world"
            subtitle="React Native app"
            image={PollWorld}
            onClick={() => setOpenModal('poll')}
          />
          <Tile
            title="Create Next Starter"
            subtitle="NPM helper package"
            image={CreateNextStarter}
            onClick={() => setOpenModal('create')}
          />
          <Tile
            title="Other app"
            subtitle="Other application"
            image={CreateNextStarter}
            onClick={() => setOpenModal('create')}
          />
          <Tile
            title="App"
            subtitle="Application"
            image={CreateNextStarter}
            onClick={() => setOpenModal('create')}
          />
        </div>
      </motion.div>
    </main>
  );
};

export default Projects;
