import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

import useSWR from 'swr';
import { BlogFrontmatter } from 'types/frontmatters';
import { HiClock, HiEye } from 'react-icons/hi';

type Blog = {
  blog: BlogFrontmatter;
  checkTagged?: (tag: string) => boolean;
  withHover?: boolean;
};

const MotionLink = motion(Link);

export const BlogTile = ({
  blog: { image, title, desc, slug, tags, publishedAt, readingTime },
  checkTagged,
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
        href={`/blog/${slug}`}
        className="focus-state rounded-corners-gradient-borders relative block h-full rounded-xl rounded-b-sm bg-blockBg"
      >
        <div className="flex flex-col">
          <div className="relative overflow-hidden rounded-t-xl">
            <Image
              src={image}
              alt={title}
              width={640}
              height={360}
              className="rounded object-top lg:transition-all lg:ease-in-out "
            />
            <ul className="absolute right-2 bottom-4 flex gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className={`rounded-lg bg-pillBg py-0.5 px-2 text-sm font-semibold backdrop-blur-sm ${
                    checkTagged?.(tag) && 'text-primary'
                  }`}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-4 mt-2 mb-4 flex flex-col gap-1">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <div className="mb-1 flex items-center gap-2">
              <div className="flex items-center gap-1 text-sm">
                <HiClock className="h-4 w-4 text-primary" />
                <span className="text-grey">{readingTime.text}</span>
              </div>
              -
              <div className="flex items-center gap-1 text-sm">
                <HiEye className="h-4 w-4 text-primary" />
                <span className="text-grey">{data?.views} views</span>
              </div>
            </div>
            <div className="mb-2 flex flex-col gap-1">
              <span className="font-bold text-white">
                {format(new Date(publishedAt), 'dd MMMM yyyy')}
              </span>
              <p className="text-grey">{desc}</p>
            </div>
          </div>
        </div>
        <div className="bg-[length:200%_1px absolute bottom-0 left-0 h-1 w-full rounded-b-xl bg-gradient-to-r from-primary to-secondary" />
        <div className="bg-[length:200%_1px absolute -bottom-1 left-0 h-2 w-full rounded-b-xl bg-gradient-to-r from-primary to-secondary blur-xl" />
      </MotionLink>
    </motion.li>
  );
};
