import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import useSWR from 'swr';
import { HiClock, HiEye } from 'react-icons/hi';
import clsx from 'clsx';
import { Icons } from './Icons';
import { BlogFrontmatter, ProjectFrontmatter } from 'types/frontmatters';
import { HOVER_SCALE } from 'data';

type Card = Pick<ProjectFrontmatter & BlogFrontmatter, 'slug'> & {
  children: JSX.Element[] | JSX.Element;
  endpoint?: 'projects' | 'blog';
};

const MotionLink = motion(Link);

export const Card = ({ slug, children, endpoint = 'blog' }: Card) => {
  return (
    <motion.li
      layoutId={slug}
      initial={{ y: '40px', opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      className="h-full"
    >
      <MotionLink
        {...HOVER_SCALE}
        href={`/${endpoint}/${slug}`}
        className="focus-state focus-state-clean rounded-border-gradient relative block h-full rounded-xl"
      >
        <div className="flex h-full flex-col pb-4">{children}</div>
      </MotionLink>
    </motion.li>
  );
};

export type CardImage = Pick<
  ProjectFrontmatter & BlogFrontmatter,
  'blurDataURL' | 'image' | 'title'
> & {
  overlay?: JSX.Element[] | JSX.Element;
};

const CardImage = ({ image, title, blurDataURL, overlay }: CardImage) => {
  return (
    <div className="relative flex-shrink-0 overflow-hidden rounded-t-xl">
      <Image
        placeholder="blur"
        blurDataURL={blurDataURL}
        src={image}
        alt={title}
        width={640}
        height={360}
      />
      {overlay && <div className="absolute inset-0 z-10">{overlay}</div>}
    </div>
  );
};

export type CardDate = Pick<
  ProjectFrontmatter & BlogFrontmatter,
  'publishedAt' | 'readingTime'
>;

const CardDate = ({ publishedAt, readingTime }: CardDate) => {
  return (
    <div className="mx-4 mt-4 mb-1 flex items-center gap-2 text-sm font-semibold text-grey-300">
      <span>{format(new Date(publishedAt), 'dd MMM yyyy')}</span>-
      <div className="flex items-center gap-1">
        <HiClock className="h-4 w-4" />
        <span>{readingTime.text}</span>
      </div>
    </div>
  );
};

export type CardText = Pick<BlogFrontmatter, 'title'> & {
  desc?: string;
  size?: string;
};

const CardText = ({ title, desc, size }: CardText) => {
  return (
    <>
      <h2
        className={clsx('mx-4 mb-3 text-xl font-bold text-white', {
          'text-2xl': size === '2xl',
        })}
      >
        {title}
      </h2>
      {desc && <p className="mx-4 mb-4 text-grey-300">{desc}</p>}
    </>
  );
};

export type CardFooter = Pick<
  ProjectFrontmatter & BlogFrontmatter,
  'tags' | 'slug'
> & {
  checkTagged?: (tag: string) => boolean;
};

const CardFooter = ({ tags, slug, checkTagged }: CardFooter) => {
  const { data } = useSWR(`/api/views/${slug}`);

  return (
    <div className="mx-4 mt-auto mb-1 flex items-center">
      <div className="mt-auto flex flex-shrink-0 items-center gap-1 rounded-lg bg-primary-dark px-2 py-1 text-white">
        <span className="text-sm">{data?.views} views</span>
        <HiEye className="h-4 w-4" />
      </div>
      <Icons icons={tags} className="ml-auto" checkTagged={checkTagged} />
    </div>
  );
};

export type CardOverlay = Pick<ProjectFrontmatter & BlogFrontmatter, 'slug'> & {
  tags: Array<string>;
  checkTagged?: (tag: string) => boolean;
};

const CardOverlay = ({ tags, slug, checkTagged }: CardOverlay) => {
  const { data } = useSWR(`/api/views/${slug}`);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-2 ml-2 mr-auto flex items-center gap-1 rounded-lg bg-primary-dark px-2 py-1 text-white">
        <span className="text-sm">{data?.views} views</span>
        <HiEye className="h-4 w-4" />
      </div>
      <ul className="mt-auto mb-1 mr-1 flex flex-wrap justify-end gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className={clsx(
              'rounded-full border-2 border-grey-800 bg-grey-900 px-2.5 py-1 text-sm',
              { 'border-primary-main text-primary-main': checkTagged?.(tag) }
            )}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

Card.Text = CardText;
Card.Date = CardDate;
Card.Image = CardImage;
Card.Footer = CardFooter;
Card.Overlay = CardOverlay;
