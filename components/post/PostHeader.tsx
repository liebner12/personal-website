import { FaGithub, FaRegComments } from 'react-icons/fa';
import { MdCalendarToday, MdRemoveRedEye, MdTimer } from 'react-icons/md';
import { motion } from 'framer-motion';
import { BiLink } from 'react-icons/bi';
import { format } from 'date-fns';
import Image from 'next/image';
import { FADE_IN_FIRST, FADE_IN_SECOND, FADE_IN_X } from 'data';
import { BlogFrontmatter, ProjectFrontmatter } from 'types';
import { Button, BackButton } from 'components';

export type PostHeader = Partial<
  Pick<BlogFrontmatter, 'title' | 'readingTime' | 'views' | 'publishedAt'> &
    Pick<
      ProjectFrontmatter,
      'title' | 'desc' | 'repository' | 'url' | 'publishedAt' | 'blurDataURL'
    >
> & {
  image: string;
  blurDataURL: string;
  href: string;
};

export function PostHeader({
  title,
  desc,
  publishedAt,
  repository,
  readingTime,
  url,
  views,
  blurDataURL,
  image,
  href,
}: PostHeader) {
  return (
    <>
      <motion.div className="mb-12" {...FADE_IN_FIRST}>
        <BackButton href={href} />
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        {desc && <p className="mt-4 text-lg text-grey-300">{desc}</p>}
        <div className="mt-3 flex flex-wrap items-center gap-2 text-base font-semibold text-grey-400">
          {readingTime && (
            <>
              <div className="flex items-center gap-1.5">
                <MdTimer />
                <span>{readingTime.text}</span>
              </div>
            </>
          )}
          {publishedAt && (
            <>
              -
              <div className="flex items-center gap-1.5">
                <MdCalendarToday />
                <p>{format(new Date(publishedAt), 'dd MMMM yyyy')}</p>
              </div>
            </>
          )}
        </div>
        <div className="mt-8 flex flex-wrap gap-6 text-xl text-grey-300">
          <div className="flex items-center gap-1">
            ❤️ <span className="text-base">1</span>
          </div>
          <div className="flex items-center gap-1">
            🤔 <span className="text-base">1</span>
          </div>
          <div className="flex items-center gap-1">
            🎉 <span className="text-base">1</span>
          </div>
          <div className="flex items-center gap-1">
            🚀 <span className="text-base">1</span>
          </div>
          <div className="flex items-center gap-1">
            👀 <span className="text-base">1</span>
          </div>
        </div>
        {(url || repository) && (
          <div className="mt-8 flex items-center gap-4">
            {url && (
              <Button
                href={url}
                target="_blank"
                StartIcon={BiLink}
                ariaLabel="Link to page"
              />
            )}
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
      <motion.div {...FADE_IN_SECOND} className="relative">
        {views && (
          <motion.div
            {...FADE_IN_X}
            className="absolute top-2 right-2 flex items-center gap-2 rounded-full bg-blured py-1.5 px-4 font-semibold text-white backdrop-blur md:top-4 md:right-4"
          >
            <MdRemoveRedEye className="text-primary-main" /> {views} views
          </motion.div>
        )}
        <Image
          placeholder="blur"
          blurDataURL={blurDataURL}
          src={image}
          alt="prop"
          width={900}
          height={506}
          className="max-w-full rounded-lg"
          loading="eager"
        />
      </motion.div>
    </>
  );
}
