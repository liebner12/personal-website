import Image, { StaticImageData } from 'next/image';
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
    <motion.div
      role="button"
      className={`${
        !horizontal && 'row-span-2'
      } w-full h-full hoverOnParent text-left will-change-auto outline-none tapHighlight`}
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
            className="text-sm font-semibold text-primaryLight mb-1 transColor"
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
          <motion.div
            className={`rounded-md min-h-[20rem] md:h-full shadow-md relative will-change-auto ${
              horizontal ? 'md:min-h-[6rem]' : 'md:min-h-[16rem]'
            }`}
            layoutId={`${title}-img`}
          >
            <Image
              src={image}
              alt={title}
              layout="fill"
              className="rounded-md lg:grayscale lg:brightness-90 lg:contrast-100 lg:mix-blend-luminosity object-top lg:transition-all lg:ease-in-out"
              objectFit="cover"
              objectPosition="center"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Tile;
