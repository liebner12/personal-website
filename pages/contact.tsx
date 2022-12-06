import { Container, Background, ContactBlog } from 'components';
import { BACKGROUNDS, FADE_IN_FIRST, FADE_IN_SECOND } from 'data';
import type { NextPage } from 'next';
import Head from 'next/head';
import { FiFacebook, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Seo from 'components/Seo';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="I am young developer :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Seo
        templateTitle="Contact"
        description="Do contact me if you want to talk about programming and especially if it's connected with Javascript ecosystem. I'll be happy to get to know each other!"
      />
      <Background background={BACKGROUNDS.contact} />
      <Container>
        <div className="my-auto">
          <motion.div className="prose prose-invert" {...FADE_IN_FIRST}>
            <h1 className="text-primary">GET IN TOUCH</h1>
            <p>
              Do contact me if you want to talk about programming and especially
              if it&#39;s connected with Javascript ecosystem. I&#39;ll be happy
              to get to know each other!
            </p>
          </motion.div>
          <motion.ul
            className="mt-8 grid max-w-screen-lg grid-cols-1 gap-8 pl-0 text-primary md:grid-cols-2 md:grid-rows-2"
            {...FADE_IN_SECOND}
          >
            <ContactBlog
              Icon={FiGithub}
              text="Github"
              showedLink="https://github.com/liebner12"
              link="https://github.com/liebner12"
            />
            <ContactBlog
              Icon={FiMail}
              text="Email"
              showedLink="liebner.michal@outlook.com"
              link="mailto:liebner.michal@outlook.com"
            />
            <ContactBlog
              Icon={FiLinkedin}
              text="Linkedin"
              showedLink="Michał Liebner"
              link="https://www.linkedin.com/in/micha%C5%82-liebner-352034229"
            />
            <ContactBlog
              Icon={FiFacebook}
              text="Facebook"
              showedLink="Michał Liebner"
              link="https://www.facebook.com/liebner12"
            />
          </motion.ul>
        </div>
      </Container>
    </>
  );
};

export default Contact;
