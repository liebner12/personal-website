import { FaGithub } from 'react-icons/fa';
import { MdRemoveRedEye, MdTimer } from 'react-icons/md';
import { motion } from 'framer-motion';
import { FADE_IN_FIRST } from 'data';
import { BiLink } from 'react-icons/bi';
import { BlogFrontmatter, ProjectFrontmatter } from 'types';

export type PostHeader = Partial<
  Pick<BlogFrontmatter, 'title' | 'readingTime' | 'desc' | 'views'> &
    Pick<
      ProjectFrontmatter,
      'title' | 'subtitle' | 'desc' | 'repository' | 'url'
    >
>;

export function PostHeader({
  subtitle,
  title,
  desc,
  repository,
  readingTime,
  url,
  views,
}: PostHeader) {
  return (
    <motion.div className="mb-6" {...FADE_IN_FIRST}>
      {subtitle && <p className="text-primary">{subtitle}</p>}
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="mt-2 text-grey">{desc}</p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {views && (
          <>
            <div className="flex items-center gap-1 text-primary">
              <MdRemoveRedEye /> {views} views
            </div>
          </>
        )}
        {repository && (
          <a
            className="flex items-center gap-1 text-primary"
            href={repository}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> Repository
          </a>
        )}
        {readingTime && (
          <>
            -
            <div className="flex items-center gap-0.5 text-grey">
              <MdTimer />
              <span>{readingTime.text}</span>
            </div>
          </>
        )}
        {url && (
          <>
            -
            <a
              className="flex items-center gap-1 text-primary"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              <BiLink />
              Open Live Site
            </a>
          </>
        )}
      </div>
    </motion.div>
  );
}
