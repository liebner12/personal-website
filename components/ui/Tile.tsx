import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

import useSWR from 'swr';
import { BlogFrontmatter, ProjectFrontmatter } from 'types/frontmatters';
import { HiClock, HiEye } from 'react-icons/hi';
import { Icons } from './Icons';

type Blog = {
  post: BlogFrontmatter | ProjectFrontmatter;
  checkTagged?: (tag: string) => boolean;
  withHover?: boolean;
  endpoint?: 'projects' | 'blog';
};

const MotionLink = motion(Link);

export const Tile = ({
  post: {
    image,
    title,
    desc,
    slug,
    tags,
    publishedAt,
    readingTime,
    blurDataURL,
  },
  checkTagged,
  endpoint = 'blog',
  withHover = true,
}: Blog) => {
  const { data } = useSWR(`/api/views/${slug}`);
  const hoverConfig = withHover && {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.96 },
    whileFocus: { scale: 1.03 },
  };

  return (
    <motion.li
      layoutId={slug}
      initial={{ y: '40px', opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <MotionLink
        {...hoverConfig}
        href={`/${endpoint}/${slug}`}
        className="tap-highlight focus-state relative block h-full rounded-xl rounded-b-sm bg-blockBg"
      >
        <div className="flex h-full flex-col">
          <div className="relative flex-shrink-0 overflow-hidden rounded-t-xl">
            <Image
              placeholder="blur"
              blurDataURL={blurDataURL}
              src={image}
              alt={title}
              width={640}
              height={360}
              className="rounded object-top lg:transition-all lg:ease-in-out "
            />
          </div>
          <div className="mx-4 my-4 flex h-full flex-col gap-1">
            <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-grey">
              <span>{format(new Date(publishedAt), 'dd MMM yyyy')}</span>-
              <div className="flex items-center gap-1">
                <HiClock className="h-4 w-4" />
                <span>{readingTime.text}</span>
              </div>
            </div>
            <h2 className="mb-3 text-xl font-bold text-white">{title}</h2>
            <div className="mb-4 flex flex-col gap-1">
              <p className="text-grey">{desc}</p>
            </div>
            <div className="mt-auto mb-1 flex items-center">
              <div className="flex items-center gap-1 rounded-lg bg-primaryDark px-2 py-1">
                <span className="text-sm text-white">{data?.views} views</span>
                <HiEye className="h-4 w-4 text-white" />
              </div>
              <ul className="ml-auto flex gap-2">
                <Icons icons={tags} />
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[length:200%_1px absolute bottom-0 left-0 h-1 w-full rounded-b-xl bg-gradient-to-r from-primary to-secondary" />
      </MotionLink>
    </motion.li>
  );
};
