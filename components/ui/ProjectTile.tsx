import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';
import { Icons } from './Icons';
import { ProjectFrontmatter } from 'types';

const MotionLink = motion(Link);

export const ProjectTile = ({
  project: { image, title, subtitle, desc, slug, tags, blurDataURL },
}: {
  project: ProjectFrontmatter;
}) => {
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
            <Icons icons={tags} className="mt-1 flex gap-3 text-primary" />
          </div>
          <div className="relative my-auto mx-4 mb-6 rounded-md">
            <Image
              placeholder="blur"
              blurDataURL={blurDataURL}
              src={image}
              alt={title}
              width={640}
              height={360}
              className="rounded object-top lg:transition-all lg:ease-in-out"
            />
          </div>
        </div>
        <div className="bg-[length:200%_1px absolute bottom-0 left-0 h-1 w-full rounded-b-xl bg-gradient-to-r from-primary to-secondary " />
        <div className="bg-[length:200%_1px absolute -bottom-1 left-0 h-2 w-full rounded-b-xl bg-gradient-to-r from-primary to-secondary blur-xl" />
      </MotionLink>
    </motion.li>
  );
};
