import { motion } from 'framer-motion';
import Image from 'next/image';
import { useContext } from 'react';
import { BiFullscreen } from 'react-icons/bi';
import { ProjectsContext } from '../../../pages/projects';
import StyczneTury from '../../../assets/images/smallguide.png';
const Modal = () => {
  const { openModal, setOpenModal } = useContext(ProjectsContext);

  if (!openModal) return <></>;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute top-0 left-0 w-full h-screen grid place-items-center bg-blockBg backdrop-blur-xl z-20"
      />
      <div className="absolute top-0 left-0 w-full h-screen grid place-items-center z-20">
        <motion.div
          layoutId="Small Guide"
          className="bg-projectBg rounded-xl w-4/5 h-4/5 backdrop-blur-md flex justify-between p-8 relative"
        >
          <div className="flex-1">
            <div className="m-4 flex flex-col">
              <motion.h2
                layoutId="Travel app-sub"
                className="text-sm font-semibold text-emeraldLight mb-1"
              >
                Travel app
              </motion.h2>
              <motion.h3
                layoutId="Small Guide-title"
                className="text-white font-bold text-2xl"
              >
                Small Guide
              </motion.h3>
            </div>
          </div>
          <motion.div layoutId="Small Guide-img" className="relative w-1/3">
            <Image
              src={StyczneTury}
              alt="StyczneTury"
              layout="fill"
              className="h-full rounded-md"
              objectFit="contain"
            />
          </motion.div>
          <motion.button
            className="p-1.5 bg-blockBg rounded-md absolute top-4 right-4"
            aria-label="Open details"
            whileTap={{ scale: 0.95 }}
            whileFocus={{ scale: 1.1 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setOpenModal(false)}
          >
            <BiFullscreen className="w-5 h-5 text-white" />
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default Modal;
