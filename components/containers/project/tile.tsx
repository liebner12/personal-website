import Image, { StaticImageData } from 'next/image';
import { BiFullscreen } from 'react-icons/bi';
import { SiTailwindcss, SiNextdotjs, SiReact } from 'react-icons/si';
import { ImArrowRight2 } from 'react-icons/im';
import { motion } from 'framer-motion';
import React from 'react';

type Tile = {
  image: string;
  title: string;
  subtitle: string;
  desc: string;
  technologies: Array<string>;
};

const Tile = ({ image, title, subtitle, desc }: Tile) => {
  return (
    <motion.a
      className="w-full h-full text-left outline-none tapHighlight relative hoverOnParent will-change-auto"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      whileFocus={{ scale: 1.03 }}
      initial={{ y: '40px', opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      layoutId={title}
    >
      <div className={`h-full bg-blockBg rounded-lg flex flex-col `}>
        <div className="m-4 flex flex-col relative">
          <motion.h2
            layoutId={`${subtitle}-sub`}
            className="text-sm font-semibold text-primaryLight transColor"
          >
            {subtitle}
          </motion.h2>
          <motion.h3
            layoutId={`${title}-title`}
            className="text-white font-bold text-2xl"
          >
            {title}
          </motion.h3>
          <p className=" text-grey mt-1">{desc}</p>
          <div className="flex gap-3 pt-2 text-primary">
            <SiTailwindcss className=" w-6 h-6" />
            <SiReact className=" w-6 h-6" />
            <SiNextdotjs className=" w-6 h-6" />
          </div>
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
        <div className="flex flex-col h-full flex-1 m-4 mb-2 mt-0 flex-shrink-0">
          <motion.div
            className="rounded-md relative mt-auto"
            layoutId={`${title}-img`}
          >
            <Image
              src={image}
              alt={title}
              layout="fill"
              className="rounded object-top lg:transition-all lg:ease-in-out"
            />
          </motion.div>
        </div>
        <div className="mx-4 pb-4 mt-2">
          <motion.button
            className="text-primary font-semibold text-lg flex items-center gap-1"
            whileTap={{ scale: 0.95 }}
            whileFocus={{ scale: 1.02 }}
            whileHover={{ scale: 1.02 }}
          >
            See more <ImArrowRight2 />
          </motion.button>
        </div>
      </div>
      <div className="bg-gradient-to-r from-primary to-primarySecondary absolute bottom-0 left-0 h-1 w-full rounded-b-lg bg-[length:200%_1px] animateChild ease-linear" />
    </motion.a>
  );
};

export default Tile;
