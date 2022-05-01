import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useContext } from 'react';
import { ProjectsContext } from '../../../pages/projects';
import StyczneTury from '../../../assets/images/smallGuide.webp';
import PollWorld from '../../../assets/images/poll.webp';
import Centrum from '../../../assets/images/centrum.webp';
import CreateNextStarter from '../../../assets/images/createNextStarter.png';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineClose, MdOutlineOpenInNew } from 'react-icons/md';

const Modal = () => {
  const { openModal, setOpenModal } = useContext(ProjectsContext);

  if (!openModal) return <></>;

  const selectedData = ModalData[openModal as keyof ModalData];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full h-screen grid place-items-center bg-blockBg backdrop-blur-xl z-30 cursor-pointer will-change-auto"
        onClick={() => setOpenModal(null)}
      />
      <div className="absolute top-0 left-0 w-full h-screen grid place-items-center">
        <div className="w-full h-full md:w-4/5 md:h-4/5 rounded-xl z-40 fixed p-4 max-w-screen-2xl">
          <motion.div
            layoutId={selectedData.title}
            className="bg-projectBg rounded-xl w-full h-full backdrop-blur-md flex flex-col lg:flex-row justify-between gap-4"
          >
            <div className="flex-1 flex flex-col justify-between p-4 md:p-12">
              <div>
                <motion.h2
                  layoutId={`${selectedData.heading}-sub`}
                  className="font-semibold text-primaryLight mb-1"
                >
                  {selectedData.heading}
                </motion.h2>
                <motion.h3
                  layoutId={`${selectedData.title}-title`}
                  className="text-white font-bold text-5xl"
                >
                  {selectedData.title}
                </motion.h3>
                <div className="flex text-primary gap-2 flex-wrap mt-6">
                  {selectedData.tags.map((tag) => (
                    <div
                      className="rounded-full border-primaryDark p-1 px-3 border-2 font-semibold"
                      key={tag}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <p className="text-grey text-xl mt-8">{selectedData.desc}</p>
              </div>

              <div className="flex flex-shrink-0 gap-6 ">
                <motion.a
                  href={selectedData.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-4 bg-primaryDark rounded-md flex gap-2 text-white font-bold"
                  whileTap={{ scale: 0.95 }}
                  whileFocus={{ scale: 1.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  Open in Github <FaGithub className="w-6 h-6" />
                </motion.a>
                {selectedData.websiteLink && (
                  <motion.a
                    href={selectedData.websiteLink}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 px-4 bg-blockBgLight rounded-md flex gap-2 text-white hover:text-primary transition-colors font-bold"
                    whileTap={{ scale: 0.95 }}
                    whileFocus={{ scale: 1.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Website <MdOutlineOpenInNew className="w-6 h-6" />
                  </motion.a>
                )}
              </div>
            </div>
            <div className="flex-1 flex flex-col items-end md:p-4">
              <div>
                <motion.button
                  className="p-1.5 bg-blockBg rounded-md "
                  aria-label="Open details"
                  whileTap={{ scale: 0.95 }}
                  whileFocus={{ scale: 1.1 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setOpenModal(null)}
                >
                  <MdOutlineClose className="w-5 h-5 text-white" />
                </motion.button>
              </div>
              <div className="relative flex-1 w-full h-full flex gap-8 px-8 pb-12">
                <motion.div
                  className="w-3/4 relative h-full bg-dark rounded-lg shadow-md will-change-auto"
                  layoutId={`${selectedData.title}-img`}
                >
                  <Image
                    src={selectedData.img}
                    alt={selectedData.title}
                    className="rounded-lg touch-pinch-zoom"
                    layout="fill"
                    objectFit="contain"
                  />
                </motion.div>
                <div className="flex-1 flex flex-col gap-4 h-full justify-between">
                  <div className="relative h-1/4 w-full bg-dark rounded-lg">
                    <Image
                      src={selectedData.img}
                      alt={selectedData.title}
                      className="rounded-lg"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="relative h-1/4 w-full bg-dark rounded-lg">
                    <Image
                      src={selectedData.img}
                      alt={selectedData.title}
                      className="rounded-lg"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="relative h-1/4 w-full bg-dark rounded-lg">
                    <Image
                      src={selectedData.img}
                      alt={selectedData.title}
                      className="rounded-lg"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Modal;

type ChildObject = {
  title: string;
  heading: string;
  desc: string;
  img: StaticImageData;
  githubLink: string;
  websiteLink?: string;
  tags: Array<string>;
};

type ModalData = {
  small: ChildObject;
  development: ChildObject;
  poll: ChildObject;
  create: ChildObject;
};

const ModalData: ModalData = {
  small: {
    title: 'Small Guide',
    heading: 'Travel app',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: StyczneTury,
    githubLink: 'https://github.com/liebner12/small-guide',
    websiteLink: 'https://small-guide.vercel.app/',
    tags: [
      'Next.js',
      'Tailwindcss',
      'Docker',
      'Typescript',
      'Framer Motion',
      'Firebase',
      'Algolia',
      'Redux Toolkit',
    ],
  },
  development: {
    title: 'Development Center',
    heading: 'First Gatsby Site',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: Centrum,
    githubLink: 'https://github.com/liebner12/CentrumRozwoju',
    websiteLink: 'https://centrum-rozwoju-i-terapii.web.app/',
    tags: ['GatsbyJS', 'Styled components', 'React router'],
  },
  poll: {
    title: 'Poll world',
    heading: 'React Native app',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: PollWorld,
    githubLink: 'https://github.com/liebner12/PollWorld',
    tags: ['React Native', 'Expo', 'React Native Paper', 'Redux'],
  },
  create: {
    title: 'Create Next Starter',
    heading: 'NPM helper package',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: CreateNextStarter,
    githubLink: 'https://github.com/liebner12/create-next-starter',
    tags: [
      'Semantic release',
      'ESLint',
      'Prettier',
      'Docker',
      'Husky',
      'Commitizen',
    ],
  },
};
