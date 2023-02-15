import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Container, Background, ContactButton, Header, Seo } from 'components';
import { FADE_IN_SECOND } from 'data';
import { usePushView } from 'hooks';

const Contact = () => {
  usePushView('contact');

  return (
    <>
      <Seo
        templateTitle="Contact"
        description="Do contact me if you want to talk about programming and especially if it's connected with Javascript ecosystem. I'll be happy to get to know each other!"
      />
      <Background />
      <Container>
        <div className="my-auto">
          <Header
            title="GET IN TOUCH"
            desc="Do contact me if you want to talk about programming and especially
              if it&#39;s connected with Javascript ecosystem. I&#39;ll be happy
              to get to know each other!"
          />
          <motion.ul
            className="mt-8 grid max-w-screen-lg grid-cols-1 gap-8 pl-0 text-primary-main md:grid-cols-2 md:grid-rows-2"
            {...FADE_IN_SECOND}
          >
            <ContactButton
              Icon={FiGithub}
              text="Github"
              showedLink="https://github.com/liebner12"
              link="https://github.com/liebner12"
            />
            <ContactButton
              Icon={FiMail}
              text="Email"
              showedLink="liebner.michal@outlook.com"
              link="mailto:liebner.michal@outlook.com"
            />
            <ContactButton
              Icon={FiLinkedin}
              text="LinkedIn"
              showedLink="Michał Liebner"
              link="https://www.linkedin.com/in/micha%C5%82-liebner-352034229"
            />
            <ContactButton
              Icon={FiTwitter}
              text="Twitter"
              showedLink="@liebner12"
              link="https://twitter.com/liebner12"
            />
          </motion.ul>
        </div>
      </Container>
    </>
  );
};

export default Contact;
