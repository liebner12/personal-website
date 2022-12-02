import { Container, Background, Icons } from 'components';
import { BACKGROUNDS, FADE_IN_FIRST, FADE_IN_SECOND, FADE_IN_X } from 'data';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Me from 'assets/images/me.png';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { useMaxWidthPosition } from 'hooks';
import { motion } from 'framer-motion';

const About: NextPage = () => {
  const x = useMaxWidthPosition();
  return (
    <>
      <Head>
        <title>About me</title>
        <meta name="description" content="I am young developer :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background background={BACKGROUNDS.about} />
      <Container>
        <div className="prose prose-invert my-auto lg:max-w-full">
          <motion.h1 className="text-primary" {...FADE_IN_FIRST}>
            About
          </motion.h1>
          <motion.div className="float-right" {...FADE_IN_X}>
            <Image
              src={Me}
              width={498}
              height={885}
              className=" my-0 ml-4 max-w-[8rem] md:max-w-[10rem] lg:max-w-[16rem] xl:max-w-[20rem]"
              style={{ right: x }}
              alt="Image presenting me"
            />
          </motion.div>
          <motion.div className="prose prose-invert" {...FADE_IN_SECOND}>
            <p>
              Hi! I&#39;m Michał. I&#39;ve been learning frontend development
              since 2018. To accquire necessary skills I&#39;ve used online
              courses like freeCodeCamp, and during my studies of Algorithmic
              Computer Science in Wrocław University of Science and Technology
              I&#39;ve learned a lot about analysis. This preperation gave me
              oppurtonity to join amazing IDENTT team and work there as
              front-end developer.
            </p>
            <p>
              Right now there are many areas that I would like to improve on
              especially in Javascript environment and I am motivated to learn
              as much as possible. Frontend isn&#39;t only thing that I can do,
              also I have developed some backend servers, scripts, CI.
            </p>
            <p>
              This website I would like to treat as my playground that will
              allow me to improve my coding skills and also showcase projects.
              Blog posts will allow me to share my knowledge and mainly it could
              help me consolidate things I&#39;ve learned. So feel free to
              contact me and I will be glad to help!
            </p>

            <h2>Currently used stack</h2>
            <Icons
              icons={[
                'react',
                'nextjs',
                'nodejs',
                'tailwindcss',
                'gatsby',
                'typescript',
                'supabase',
              ]}
              className="flex list-none flex-wrap gap-5 pl-0"
              technologyClassName="h-8 w-8 hover:text-primary"
            />
            <h3>Links:</h3>
            <ul className="mt-4 flex list-none items-center gap-8 pl-0">
              <li className="pl-0">
                <motion.a
                  target="_blank"
                  whileTap={{ scale: 0.95 }}
                  whileFocus={{ scale: 1.02 }}
                  whileHover={{ scale: 1.02 }}
                  tabIndex={-1}
                  href="https://github.com/liebner12"
                  className="flex items-center gap-2 text-primary"
                  rel="noreferrer"
                >
                  <SiGithub className="h-6 w-6" /> Github
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
                  className="flex items-center gap-2 text-primary"
                  rel="noreferrer"
                >
                  <SiLinkedin className="h-6 w-6" /> Linkedin
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </div>
      </Container>
    </>
  );
};

export default About;
