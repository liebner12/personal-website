import {
  FaComment,
  FaGithub,
  FaRegComment,
  FaRegComments,
} from 'react-icons/fa';
import { MdCalendarToday, MdRemoveRedEye, MdTimer } from 'react-icons/md';
import { motion } from 'framer-motion';
import { BiLink } from 'react-icons/bi';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { FADE_IN_FIRST } from 'data';
import { BlogFrontmatter, ProjectFrontmatter } from 'types';
import { ArrowLink } from 'components/ArrowLink';
import { Button } from 'components/Button';

export type PostHeader = Partial<
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
}: PostHeader) {
  const router = useRouter();

  return (
    <motion.div className="mb-12" {...FADE_IN_FIRST}>
      <ArrowLink
        direction="left"
        isCircle={false}
        onClick={() => router.back()}
        as="button"
      >
        Back to overview
      </ArrowLink>
      <h1 className="mt-12 text-4xl font-bold text-white">{title}</h1>
      {desc && <p className="mt-4 text-lg text-grey-300">{desc}</p>}
      <div className="mt-3 flex flex-wrap items-center gap-2 text-lg">
        {readingTime && (
          <>
            <div className="flex items-center gap-2 text-primary-main">
              <MdTimer />
              <span>{readingTime.text}</span>
            </div>
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

        {views && (
          <>
            -
            <div className="flex items-center gap-1">
              <MdRemoveRedEye /> {views} views
            </div>
          </>
        )}
      </div>
      {(url || repository) && (
        <div className="mt-10 flex items-center gap-4">
          {url && <Button href={url} target="_blank" StartIcon={BiLink} />}
          {repository && (
            <Button
              ariaLabel="Github"
              variant="filled"
              StartIcon={FaGithub}
              href={repository}
              target="_blank"
            />
          )}
          <Button
            StartIcon={FaRegComments}
            href="#comments"
            ariaLabel="Comments"
          />
        </div>
      )}
    </motion.div>
  );
}
