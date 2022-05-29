import SmallGuide from '../../../assets/images/smallGuide.webp';
import PollWorld from '../../../assets/images/poll.webp';
import Centrum from '../../../assets/images/centrum.webp';
import CreateNextStarter from '../../../assets/images/createNextStarter.png';
import Tile from '../../containers/project/tile';
import { motion } from 'framer-motion';
import { SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si';
import { ProjectsType } from '../../../utils/types';

const projects = [
  {
    id: 'smallGuide',
    title: 'Small Guide',
    subtitle: 'Traveling app',
    image: SmallGuide,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    technologies: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    id: 'developmentCenter',
    title: 'Development Center',
    subtitle: 'First Gatsby Site',
    image: Centrum,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    technologies: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    id: 'pollWorld',
    title: 'Poll world',
    subtitle: 'First Gatsby Site',
    image: PollWorld,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    technologies: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    id: 'cns',
    title: 'Create Next Starter',
    subtitle: 'NPM helper package',
    image: CreateNextStarter,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    technologies: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    id: 'cnsa',
    title: 'Create Next Starterd',
    subtitle: 'NPM helper package',
    image: CreateNextStarter,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    technologies: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    id: 'cnsad',
    title: 'Create Next Startera',
    subtitle: 'NPM helper package',
    image: CreateNextStarter,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    technologies: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
];

const Projects = ({ projects }: ProjectsType) => {
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
        <div className="grid h-full xl:grid-cols-3 gap-10 lg:py-10 w-full xl:h-full md:grid-cols-2">
          {projects.map(
            ({ title, technologies, subtitle, desc, image, slug }) => (
              <Tile
                title={title}
                subtitle={subtitle}
                image={image}
                desc={desc}
                key={slug}
                technologies={technologies}
              />
            )
          )}
        </div>
      </motion.div>
    </main>
  );
};

export default Projects;
