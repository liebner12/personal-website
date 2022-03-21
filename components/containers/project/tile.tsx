import Image from 'next/image';
import { BiFullscreen } from 'react-icons/bi';
import { motion } from 'framer-motion';

type Tile = {
  image: string | StaticImageData;
  title: string;
  subtitle: string;
  horizontal?: boolean;
  onClick: () => void;
};

const Tile = ({ image, title, subtitle, horizontal, onClick }: Tile) => {
  return (
    <motion.button
      className={`${
        !horizontal && 'row-span-2'
      } w-full h-full hoverOnParent text-left`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      whileFocus={{ scale: 1.02 }}
      layoutId={title}
      onClick={onClick}
    >
      <div className={`h-full bg-blockBg rounded-lg flex flex-col `}>
        <div className="m-4 flex flex-col relative">
          <motion.h2
            layoutId={`${subtitle}-sub`}
            className="text-xs font-semibold text-emeraldLight mb-1"
          >
            {subtitle}
          </motion.h2>
          <motion.h3
            layoutId={`${title}-title`}
            className="text-white font-bold text-2xl"
          >
            {title}
          </motion.h3>
          <motion.button
            className="p-1.5 bg-blockBg rounded-md absolute top-0 right-0 z-10"
            aria-label="Open details"
            whileTap={{ scale: 0.95 }}
            whileFocus={{ scale: 1.1 }}
            whileHover={{ scale: 1.1 }}
          >
            <BiFullscreen className="w-5 h-5 text-white" />
          </motion.button>
        </div>
        <div className="flex flex-col h-full flex-1 m-4 mt-0 flex-shrink-0">
          <div className="flex-1 relative w-full">
            <motion.div
              className="rounded-md h-full w-full shadow-md"
              layoutId={`${title}-img`}
            >
              <Image
                src={image}
                alt={title}
                layout="fill"
                className="rounded-md grayscale brightness-90 contrast-100 mix-blend-luminosity object-top transition-all ease-in-out"
                objectFit="cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.button>
  );
};

export default Tile;
