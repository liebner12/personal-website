import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { Container, Background, Seo, StyledLink, Button } from 'components';
import { FADE_IN_FIRST, FADE_IN_SECOND } from 'data';
import { usePushView } from 'hooks';

const Privacy = () => {
  usePushView('privacy');

  return (
    <>
      <Seo
        templateTitle="Privacy policy"
        description="This page describes what and how data is processed on this project"
      />
      <Background />
      <Container>
        <div className="prose prose-invert my-auto text-lg lg:!max-w-full">
          <motion.h1 className="text-primary-main" {...FADE_IN_FIRST}>
            Privacy policy
          </motion.h1>

          <motion.div className="prose prose-invert" {...FADE_IN_SECOND}>
            <p>
              I want to assure visitors and subscribers that I do not use any
              cookies or other tracking technologies to collect personal
              information, and I do not retain any personal data.
            </p>
            <p>
              I use Substack to manage email subscriptions and to communicate
              with subscribers. When you subscribe to email list, Substack
              collects your personal data which is desribed on their{' '}
              <StyledLink
                href="https://substack.com/privacy"
                target="_blank"
                isActive
              >
                website
              </StyledLink>
              . Substack&apos;s privacy policy governs the collection and use of
              this information.
            </p>
            <p>
              If you have any questions or concerns, please do not hesitate to
              contact.
            </p>
            <div className="mt-10 flex justify-start">
              <Button href="/contact" EndIcon={FiExternalLink}>
                Link to contact page
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </>
  );
};

export default Privacy;
