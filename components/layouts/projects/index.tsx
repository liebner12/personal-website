import StyczneTury from '../../../assets/images/smallguide.png';
import PollWorld from '../../../assets/images/pollworld.png';
import Centrum from '../../../assets/images/centrumRozwojuDesktop.png';
import CreateNextStarter from '../../../assets/images/createNextStarter.png';
import Tile from '../../containers/project/tile';
import { useContext } from 'react';
import { ProjectsContext } from '../../../pages/projects';

const Projects = () => {
  const { setOpenModal } = useContext(ProjectsContext);
  return (
    <div className="w-full h-full flex flex-col items-end">
      <div
        className="grid grid-rows-2 grid-cols-3 gap-10 py-10 w-full h-full"
        style={{
          gridTemplateColumns: 'auto auto auto',
        }}
      >
        <Tile
          title="Small Guide"
          subtitle="Travel app"
          image={StyczneTury}
          onClick={() => setOpenModal(true)}
        />
        <Tile
          horizontal
          title="Development Center"
          subtitle="First Gatsby Site"
          image={Centrum}
          onClick={() => setOpenModal(true)}
        />
        <Tile
          title="Poll world"
          subtitle="React Native app"
          image={PollWorld}
          onClick={() => setOpenModal(true)}
        />
        <Tile
          horizontal
          title="Create Next Starter"
          subtitle="NPM helper package"
          image={CreateNextStarter}
          onClick={() => setOpenModal(true)}
        />
      </div>
    </div>
  );
};

export default Projects;
