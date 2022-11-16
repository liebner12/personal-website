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
              width={512}
              height={512}
              className=" my-0 ml-4 max-w-[8rem] md:max-w-[10rem] lg:max-w-[16rem] xl:max-w-[20rem]"
              style={{ right: x }}
              alt="Image presenting me"
            />
          </motion.div>
          <motion.div className="prose prose-invert" {...FADE_IN_SECOND}>
            <p>
              Hi! Im Michał :). Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
              className="flex list-none gap-5 pl-0"
              technologyClassName="h-8 w-8 hover:text-white"
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
