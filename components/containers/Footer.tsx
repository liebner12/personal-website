import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { BsSpotify } from 'react-icons/bs';
import clsx from 'clsx';
import { StyledLink } from 'components/StyledLink';
import { navigationItemVariants, navigationListVariants } from 'data';
import { ArrowLink } from 'components/ArrowLink';

type Props = {
  path?: string;
  text?: string;
  children?: ReactNode;
  target?: '_blank';
  as?: 'header' | 'container';
};

const FooterList = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.ul
      className={clsx('flex flex-col gap-4', className)}
      variants={navigationListVariants}
    >
      {children}
    </motion.ul>
  );
};

const FooterItem = ({ path, text, target, as, children }: Props) => {
  return (
    <motion.li className="flex items-center" variants={navigationItemVariants}>
      {as === 'header' ? (
        <div className="mb-4 text-xl font-semibold">{text}</div>
      ) : as === 'container' ? (
        children
      ) : (
        <StyledLink
          href={path}
          target={target}
          className="text-lg text-grey-400"
        >
          <p>{text}</p>
        </StyledLink>
      )}
    </motion.li>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full px-8 pb-8 pt-16 md:px-12 lg:pt-32 lg:pb-32">
      <div className="mb-20 flex items-center gap-3 text-grey-400">
        <BsSpotify className="h-8 w-8" />
        <span className="text-xl font-bold text-white">Not Playing</span>
        <span>—</span>
        <span>Spotify</span>
      </div>
      <motion.div
        className="grid grid-cols-2 gap-10 sm:gap-y-20 md:grid-cols-3"
        initial="closed"
        whileInView="open"
        viewport={{ once: true }}
      >
        <FooterList>
          <FooterItem as="header" text="Site map" />
          <FooterItem path="/" text="Home" />
          <FooterItem path="/about" text="About" />
          <FooterItem path="/projects" text="Projects" />
          <FooterItem path="/blog" text="Blog" />
          <FooterItem path="/contact" text="Contact" />
          <FooterItem path="/sitemap-0.xml" text="Sitemap" />
        </FooterList>
        <FooterList>
          <FooterItem as="header" text="General" />
          <FooterItem path="/privacy" text="Privacy" />
          <FooterItem path="/newsletter" text="Newsletter" />
          <FooterItem path="/rss" text="RSS" />
          <FooterItem as="container">
            <FooterList className="mt-10">
              <FooterItem as="header" text="Contact" />
              <FooterItem
                target="_blank"
                path="https://twitter.com/liebner12"
                text="Twitter"
              />
              <FooterItem
                path="https://www.linkedin.com/in/micha%C5%82-liebner-352034229"
                text="LinkedIn"
                target="_blank"
              />
              <FooterItem
                path="https://github.com/liebner12"
                text="Github"
                target="_blank"
              />
            </FooterList>
          </FooterItem>
        </FooterList>
        <FooterList className="col-span-2 md:col-span-1">
          <FooterItem as="container">
            <div>
              <div className="mb-4 text-xl font-semibold">Stay up to date</div>
              <p className="mb-8 text-lg text-grey-400">
                Subscribe to the newsletter to stay up to date with articles,
                courses and much more!
              </p>
            </div>
          </FooterItem>
          <FooterItem as="container">
            <div className="w-full">
              <label className="mb-8 block text-lg text-grey-300">
                Email
                <input className="focus-state mt-2 h-28 w-full rounded-xl border-2 border-grey-800 bg-grey-900 p-4 transition-colors hover:bg-grey-800"></input>
              </label>
              <ArrowLink href="/">Sign me up</ArrowLink>
            </div>
          </FooterItem>
        </FooterList>
      </motion.div>
      <div className="mt-10 flex w-full flex-col items-center gap-24 sm:mt-32 sm:gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3 rounded-full border-2 border-grey-800 bg-grey-900 px-5 py-2 text-grey-400">
          <span className="inline-block h-1.5 w-1.5 animate-ping rounded-full bg-primary-main"></span>
          302 visitors in last 7 days
        </div>
        <div className="text-grey-300">
          All rights reserved © Michał Liebner 2023
        </div>
      </div>
    </footer>
  );
};
