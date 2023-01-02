import { FaGithub } from 'react-icons/fa';
import { MdCalendarToday, MdRemoveRedEye, MdTimer } from 'react-icons/md';
import { motion } from 'framer-motion';
import { BiLink } from 'react-icons/bi';
import { format } from 'date-fns';
import { FADE_IN_FIRST } from 'data';
import { BlogFrontmatter, ProjectFrontmatter } from 'types';
import { StyledLink } from 'components/StyledLink';
import { ArrowLink } from 'components/ArrowLink';

export type PostHeader = { endpoint: string } & Partial<
  Pick<BlogFrontmatter, 'title' | 'readingTime' | 'views' | 'publishedAt'> &
    Pick<
      ProjectFrontmatter,
      'title' | 'desc' | 'repository' | 'url' | 'publishedAt'
    >
>;

export function PostHeader({
  title,
  desc,
  publishedAt,
  repository,
  readingTime,
  url,
  views,
  endpoint,
}: PostHeader) {
  return (
    <motion.div className="mb-12" {...FADE_IN_FIRST}>
      <ArrowLink direction="left" href={`/${endpoint}`} isCircle={false}>
        Back to overview
      </ArrowLink>
      <h1 className="mt-10 text-4xl font-bold text-white">{title}</h1>
      {desc && <p className="mt-4 text-lg text-grey-300">{desc}</p>}
      <div className="mt-3 flex flex-wrap items-center gap-2 text-lg">
        {views && (
          <>
            <div className="flex items-center gap-1 text-primary-main">
              <MdRemoveRedEye /> {views} views
            </div>
          </>
        )}
        {repository && (
          <StyledLink
            StartIcon={FaGithub}
            href={repository}
            target="_blank"
            color="text-primary-main"
          >
            Repository
          </StyledLink>
        )}
        {readingTime && (
          <>
            -
            <div className="flex items-center gap-2 text-grey-300">
              <MdTimer />
              <span>{readingTime.text}</span>
            </div>
          </>
        )}
        {url && (
          <>
            -
            <StyledLink
              href={url}
              target="_blank"
              StartIcon={BiLink}
              color="text-primary-main"
            >
              Open Live Site
            </StyledLink>
          </>
        )}
        {publishedAt && (
          <>
            -
            <div className="flex items-center gap-1">
              <MdCalendarToday />
              <p>{format(new Date(publishedAt), 'dd MMM yyyy')}</p>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
