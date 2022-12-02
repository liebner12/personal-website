import { BlogTile, Container, IconsList } from 'components';
import { BACKGROUNDS, FADE_IN_FIRST, FADE_IN_SECOND } from 'data';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { Background } from 'components';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { BsArrowDownCircle, BsArrowRight } from 'react-icons/bs';
import { getAllFilesFrontmatter, getTags, getTechnologies } from 'lib';
import { sortByDate } from 'utils';
import useInjectContent from 'hooks/useInjectContent';
import { BlogFrontmatter, ProjectFrontmatter } from 'types';
import Image from 'next/image';
import Blog from 'assets/images/blog.jpg';
import Centrum from 'assets/images/centrum.webp';
import CreateNextStarter from 'assets/images/createNextStarter.png';
import SmallGuide from 'assets/images/smallGuide.webp';
import Poll from 'assets/images/poll.webp';

const MotionLink = motion(Link);

function HomePage({
  blogs,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const populatedPosts = useInjectContent(blogs);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="I am young developer :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background background={BACKGROUNDS.home} />
      <Container className="!mt-0 overflow-hidden !pt-0 md:overflow-auto">
        <section className="flex h-screen flex-col justify-center">
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="prose prose-invert mb-14">
              <motion.h1
                className="mb-0 text-2xl font-bold text-primary"
                {...FADE_IN_FIRST}
              >
                Hello!
              </motion.h1>
              <motion.h2 className="mt-0 mb-8 text-6xl" {...FADE_IN_FIRST}>
                I am <span className="text-primary">Michał Liebner</span>
              </motion.h2>
              <motion.p className="text-xl" {...FADE_IN_SECOND}>
                I work with Javascript Ecosystem, especially in front-end but
                also I can do some backend stuff too!
              </motion.p>
              <motion.div className="flex gap-4" {...FADE_IN_SECOND}>
                <MotionLink
                  href="/blog"
                  whileTap={{ scale: 0.99 }}
                  whileFocus={{ scale: 1.02 }}
                  whileHover={{ scale: 1.02 }}
                  className="block rounded-lg border-2 border-dark py-1.5 px-4 text-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-grey focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  Read the blog
                </MotionLink>

                <MotionLink
                  href="/about"
                  whileTap={{ scale: 0.99 }}
                  whileFocus={{ scale: 1.02 }}
                  whileHover={{ scale: 1.02 }}
                  className="block rounded-lg border-2 border-dark py-1.5 px-4 focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-grey focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  Learn more about me
                </MotionLink>
              </motion.div>
              <motion.ul
                className="mt-4 flex list-none items-center gap-4 pl-0 text-lg"
                {...FADE_IN_SECOND}
              >
                <li className="pl-0">
                  <motion.a
                    target="_blank"
                    whileTap={{ scale: 0.95 }}
                    whileFocus={{ scale: 1.02 }}
                    whileHover={{ scale: 1.02 }}
                    tabIndex={-1}
                    href="https://github.com/liebner12"
                    className="flex items-center gap-2 text-grey hover:text-white"
                    rel="noreferrer"
                  >
                    <SiGithub /> Github
                  </motion.a>
                </li>
                <li className="flex items-center gap-2">
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    whileFocus={{ scale: 1.02 }}
                    whileHover={{ scale: 1.02 }}
                    tabIndex={-1}
                    target="_blank"
                    href="https://www.linkedin.com/in/micha%C5%82-liebner-352034229"
                    className="flex items-center gap-2 text-grey hover:text-white"
                    rel="noreferrer"
                  >
                    <SiLinkedin /> Linkedin
                  </motion.a>
                </li>
              </motion.ul>
            </div>
          </div>
          <motion.a
            transition={{
              repeat: Infinity,
              duration: 0.5,
              ease: 'easeIn',
              repeatType: 'reverse',
            }}
            animate={{ y: 10 }}
            href="#intro"
            className="absolute left-1/2 bottom-24"
          >
            <motion.div {...FADE_IN_SECOND}>
              <BsArrowDownCircle className="h-8 w-8 -translate-x-1/2 text-white" />
            </motion.div>
          </motion.a>
        </section>
        <section
          id="intro"
          className="mx-auto grid max-w-6xl items-center gap-20 py-20 lg:grid-cols-2 lg:gap-36 xl:gap-20"
        >
          <div>
            <h2 className="text-4xl font-bold text-primary md:text-6xl lg:text-5xl xl:text-6xl">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="mt-4 text-lg text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="mt-8 flex">
              <MotionLink
                href="/blog"
                whileTap={{ scale: 0.99 }}
                whileFocus={{ scale: 1.02 }}
                whileHover={{ scale: 1.02 }}
                className="flex w-auto items-center gap-2 rounded-xl text-lg font-semibold text-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-grey focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                See more posts <BsArrowRight />
              </MotionLink>
            </div>
          </div>

          <div className="relative mx-auto w-11/12 max-w-sm md:w-80">
            <div className="h-96 w-full"></div>
            <ul>
              <motion.li
                className="absolute top-0 z-20 h-full w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                whileFocus={{ scale: 1.05 }}
                transition={{
                  type: 'spring',
                  duration: 0.7,
                  bounce: 0.2,
                }}
              >
                <div className="absolute top-0 h-full w-full rounded-xl rounded-b-sm bg-background" />
                <ul className="h-full">
                  <BlogTile
                    blog={populatedPosts[0]}
                    key={populatedPosts[0].slug}
                    withHover={false}
                  />
                </ul>
              </motion.li>
              <motion.li
                className="absolute top-4 -right-24 z-10 w-80 opacity-70"
                initial={{ rotate: 6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                whileFocus={{ scale: 1.05 }}
                transition={{
                  type: 'spring',
                  duration: 0.7,
                  bounce: 0.2,
                }}
              >
                <div className="absolute top-0 h-full w-full rounded-xl rounded-b-sm bg-background" />
                <ul>
                  <BlogTile
                    blog={populatedPosts[1]}
                    key={populatedPosts[1].slug}
                    withHover={false}
                  />
                </ul>
              </motion.li>
              <motion.li
                className="absolute top-4 -left-24 z-0 w-80 opacity-70"
                initial={{ rotate: -6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                whileFocus={{ scale: 1.05 }}
                transition={{
                  type: 'spring',
                  duration: 0.7,
                  bounce: 0.2,
                }}
              >
                <div className="absolute top-0 h-full w-full rounded-xl rounded-b-sm bg-background" />
                <ul>
                  <BlogTile
                    blog={populatedPosts[2]}
                    key={populatedPosts[2].slug}
                    withHover={false}
                  />
                </ul>
              </motion.li>
            </ul>
          </div>
        </section>
        <section className="mx-auto grid max-w-6xl items-center gap-20 py-40 lg:grid-cols-2 lg:gap-10 xl:gap-20">
          <div className="relative mx-auto grid grid-cols-12 grid-rows-3 items-end gap-4">
            <Image
              src={Blog}
              alt="a"
              className="col-span-6 rounded-lg"
              width={300}
              height={200}
            />
            <Image
              src={Blog}
              alt="a"
              className="col-span-4 col-start-7 rounded-lg lg:col-start-3 lg:row-start-1"
              width={300}
              height={200}
            />
            <Image
              src={Blog}
              alt="a"
              className="col-span-6 rounded-lg"
              width={300}
              height={200}
            />
            <Image
              src={Blog}
              alt="a"
              className="col-span-6 rounded-lg"
              width={300}
              height={200}
            />
            <Image
              src={Blog}
              alt="a"
              className="col-span-6 rounded-lg "
              width={300}
              height={200}
            />
            <Image
              src={Blog}
              alt="a"
              className="col-span-4 col-start-7 mb-auto rounded-lg lg:col-start-3 lg:row-start-3"
              width={300}
              height={200}
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-primary md:text-6xl lg:text-5xl xl:text-6xl">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="mt-4 text-lg text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="mt-8 flex">
              <MotionLink
                href="/projects"
                whileTap={{ scale: 0.99 }}
                whileFocus={{ scale: 1.02 }}
                whileHover={{ scale: 1.02 }}
                className="flex w-auto items-center gap-2 rounded-xl text-lg font-semibold text-primary focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-grey focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                See more projects <BsArrowRight />
              </MotionLink>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  technologies: IconsList[];
  projects: ProjectFrontmatter[];
  blogs: BlogFrontmatter[];
  tags: string[];
}> = async () => {
  const projects = await getAllFilesFrontmatter('projects');
  const blogs = await getAllFilesFrontmatter('blog');

  return {
    props: {
      technologies: getTechnologies(projects),
      projects: projects.sort(sortByDate),
      tags: getTags(blogs),
      blogs: blogs.sort(sortByDate),
    },
  };
};

export default HomePage;
