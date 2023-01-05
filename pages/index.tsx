import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import Image from 'next/image';
import {
  Container,
  IconsList,
  Seo,
  Background,
  StyledLink,
  Button,
  ArrowLink,
} from 'components';
import { FADE_IN_FIRST, FADE_IN_SECOND, FADE_IN_VIEW } from 'data';
import { getAllFilesFrontmatter, getTags } from 'lib';
import { sortByDate } from 'utils';
import { BlogFrontmatter, ProjectFrontmatter } from 'types';
import Me from 'assets/images/me.png';
import { ImagesGrid } from 'components/ImagesGrid';
import { CardsRange } from 'components/CardsRange';

function HomePage({
  blogs,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Seo
        templateTitle="Home"
        description="On this website I showcase my projects and write blog posts connected with Javascript ecosystem"
      />
      <Background />
      <Container className="overflow-hidden py-10 md:mt-0 md:overflow-auto md:!pt-0">
        <section className="flex min-h-screen flex-col justify-center">
          <div className="flex flex-col gap-20 lg:flex-row lg:items-center">
            <div className="prose prose-invert my-auto">
              <motion.h1
                className="mt-0 mb-8 max-w-xl text-5xl sm:text-6xl lg:text-5xl xl:text-6xl"
                {...FADE_IN_FIRST}
              >
                I am focused on
                <span className="text-primary-main"> web standards</span> and
                modern
                <span className="text-primary-main"> web apps</span> development
              </motion.h1>
              <motion.p className="max-w-lg text-xl" {...FADE_IN_SECOND}>
                Hi! My name is Michał. I work with Javascript Ecosystem on both
                backend and front side of applications.
              </motion.p>
              <motion.div {...FADE_IN_SECOND}>
                <div className="flex flex-col-reverse flex-wrap items-start gap-4 sm:flex-row">
                  <Button href="/blog" size="lg">
                    Read the blog
                  </Button>
                  <Button href="/about" variant="secondary" size="lg">
                    Get to know me!
                  </Button>
                </div>
                <div className="mt-6 flex gap-4">
                  <StyledLink
                    href="https://github.com/liebner12"
                    target="_blank"
                    StartIcon={SiGithub}
                    size="sm"
                  >
                    Github
                  </StyledLink>
                  <StyledLink
                    href="https://www.linkedin.com/in/micha%C5%82-liebner-352034229"
                    target="_blank"
                    StartIcon={SiLinkedin}
                    size="sm"
                  >
                    Linkedin
                  </StyledLink>
                </div>
              </motion.div>
            </div>
            <div className="relative mx-auto aspect-square w-[500px] max-w-full rounded-xl bg-primary-main">
              <div className="border-full absolute -top-8 -left-4 rounded-full bg-[#fddfff] px-12 py-4 text-grey-700 md:-left-12">
                Want to learn react together?
              </div>
              <Image
                src={Me}
                width={498}
                height={885}
                className=" absolute bottom-0 right-0 my-0 mx-auto max-w-[8rem] md:max-w-[10rem] lg:max-w-[16rem] xl:max-w-[20rem]"
                alt="Image presenting me"
              />
              <div className="border-full absolute -bottom-8 -right-4 rounded-full bg-[#ddffff] px-12 py-4 text-grey-700 md:-right-12">
                Let me show you what I&#39;m working on...🧑‍💻
              </div>
            </div>
          </div>
        </section>
        <section
          id="intro"
          className="mx-auto grid max-w-6xl items-center gap-20 py-20 pt-60 lg:grid-cols-2 lg:gap-36 lg:pt-40 xl:gap-20"
        >
          <motion.div {...FADE_IN_VIEW}>
            <h2 className="text-4xl font-bold text-primary-main md:text-6xl lg:text-5xl xl:text-6xl">
              Checkout my developer journey through my projects
            </h2>
            <p className="mt-4 text-lg text-grey-300">
              In this projects timeline I show spotlight of each of them and
              focus on lessons that I and You can gather from them. I&#39;ve
              used them as my way to learn new technologies frameworks that I
              found intresting.
            </p>
            <div className="mt-12 flex">
              <ArrowLink href="/projects">See more projects</ArrowLink>
            </div>
          </motion.div>
          <CardsRange posts={projects} />
        </section>
        <section className="mx-auto grid max-w-6xl items-center gap-20 py-40 lg:grid-cols-2 lg:gap-10 xl:gap-20">
          <ImagesGrid
            images={[
              ...blogs.map(({ image, title }) => ({ image, alt: title })),
            ]}
          />
          <motion.div {...FADE_IN_VIEW}>
            <h2 className="text-4xl font-bold text-primary-main md:text-6xl lg:text-5xl xl:text-6xl">
              Posts that share my knowledge
            </h2>
            <p className="mt-4 text-lg text-grey-300">
              I want this space to show some useful algorithms and
              functionalities that are good to know. Under this link You will
              find posts that cover concepts from Javascript world and few other
              languages too.
            </p>
            <div className="mt-8 flex">
              <ArrowLink href="/blog">Start reading the blog</ArrowLink>
            </div>
          </motion.div>
        </section>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  projects: ProjectFrontmatter[];
  blogs: BlogFrontmatter[];
  tags: Array<IconsList> | Array<string>;
}> = async () => {
  const projects = await getAllFilesFrontmatter('projects');
  const blogs = await getAllFilesFrontmatter('blog');

  return {
    props: {
      projects: projects.sort(sortByDate),
      tags: getTags(blogs),
      blogs: blogs.sort(sortByDate),
    },
  };
};

export default HomePage;
