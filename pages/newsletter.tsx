import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi';
import { Container, Background, Seo, Button } from 'components';
import { FADE_IN_FIRST, FADE_IN_X } from 'data';
import { usePushView } from 'hooks';
import Mail from 'assets/images/mail.svg';

const NewsLetter = () => {
  usePushView('newsletter');

  return (
    <>
      <Seo
        templateTitle="Newsletter"
        description="Subscribe to the newsletter to stay up to date with articles,
        projects and much more!"
      />
      <Background />
      <Container isGrid>
        <motion.div
          className="prose prose-invert mb-10 flex h-full flex-col items-start lg:col-span-6 lg:justify-center"
          {...FADE_IN_FIRST}
        >
          <h1 className="mb-10 text-5xl sm:text-6xl lg:text-5xl xl:max-w-xl xl:text-6xl">
            Fuel your <span className="text-primary-main">passion</span> with
            valuable <span className="text-primary-main"> knowledge</span>{' '}
            emailed to you each week
          </h1>
          <Button
            StartIcon={HiOutlineMail}
            size="lg"
            href="https://liebner.substack.com/"
            target="_blank"
          >
            Subscribe
          </Button>
        </motion.div>
        <motion.div className="flex justify-end lg:col-span-6" {...FADE_IN_X}>
          <Image src={Mail} height={400} width={400} alt="mail" />
        </motion.div>
      </Container>
    </>
  );
};

export default NewsLetter;
