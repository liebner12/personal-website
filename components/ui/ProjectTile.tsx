import Image from 'next/image';
import { BiFullscreen } from 'react-icons/bi';
import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { Icons, IconsList } from './Icons';

type Tile = {
  image: string;
  title: string;
  subtitle: string;
  desc: string;
  slug: string;
  technologies: Array<IconsList>;
};

const MotionLink = motion(Link);

export const ProjectTile = ({
  image,
  title,
  subtitle,
  desc,
  slug,
  technologies,
}: Tile) => {
  return (
    <motion.li
      layoutId={slug}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      whileFocus={{ scale: 1.03 }}
      initial={{ y: '40px', opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <MotionLink
        href={`/projects/${slug}`}
        className="tap-highlight focus-state relative block h-full rounded-xl rounded-b-sm bg-blockBg"
      >
        <div className="flex h-full flex-col">
          <div className="relative m-4 flex flex-col">
            <h2 className="transColor text-sm text-primary">{subtitle}</h2>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="my-2 text-grey">{desc}</p>
            <Icons
              icons={technologies}
              className="mt-1 flex gap-3 text-primary"
            />
            <motion.button
              className="absolute top-0 right-0 z-10 rounded-md bg-blockBg p-1.5"
              aria-label="Open details"
              whileTap={{ scale: 0.95 }}
              whileFocus={{ scale: 1.1 }}
              whileHover={{ scale: 1.1 }}
              tabIndex={-1}
            >
              <BiFullscreen className="h-5 w-5 text-white" />
            </motion.button>
          </div>
          <div className="mx-4 flex h-full flex-1 flex-shrink-0 flex-col">
            <div className="relative my-auto rounded-md">
              <Image
                src={image}
                alt={title}
                width={640}
                height={360}
                className="rounded object-top lg:transition-all lg:ease-in-out"
              />
            </div>
          </div>
          <div className="mx-4 mt-2 pb-4">
            <motion.button
              className="flex items-center gap-1 font-semibold text-primary"
              whileTap={{ scale: 0.95 }}
              whileFocus={{ scale: 1.02 }}
              whileHover={{ scale: 1.02 }}
              tabIndex={-1}
            >
              See more <FaArrowRight />
            </motion.button>
          </div>
        </div>
        <div className="bg-[length:200%_1px absolute bottom-0 left-0 h-1 w-full rounded-b-xl bg-gradient-to-r from-primary to-secondary " />
        <div className="bg-[length:200%_1px absolute -bottom-1 left-0 h-2 w-full rounded-b-xl bg-gradient-to-r from-primary to-secondary blur-xl" />
      </MotionLink>
    </motion.li>
  );
};
