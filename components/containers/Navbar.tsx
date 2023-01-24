import { motion, Variants } from 'framer-motion';
import {
  HiOutlineChevronDoubleRight,
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineNewspaper,
  HiOutlinePhone,
  HiOutlineUser,
} from 'react-icons/hi';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { SiGithub } from 'react-icons/si';
import {
  Button,
  menuItemVariants,
  NavbarLink,
  SkipToContent,
} from 'components';
import { useMediaQuery } from 'hooks';
import { FADE_IN_X_REVERSE } from 'data';

const Menu = () => {
  return (
    <motion.div
      {...FADE_IN_X_REVERSE}
      className="navbar sticky top-0 left-0 z-30 mr-4 h-screen w-0 items-start text-white supports-[h-[100dvh]]:h-[100dvh]"
    >
      <div className="absolute left-0 top-0 flex h-full w-auto flex-col justify-between py-16 pl-20 transition-all duration-200">
        <div className="nav-arrow block">
          <HiOutlineChevronDoubleRight className="h-8 w-8 text-primary-main" />
        </div>
        <ul className="my-auto flex w-full flex-col justify-around gap-10 text-lg font-semibold">
          <NavbarLink path="/" text="Home" isExact icon={HiOutlineHome} />
          <NavbarLink path="/about" text="About" icon={HiOutlineUser} />
          <NavbarLink
            path="/projects"
            text="Projects"
            icon={HiOutlineHashtag}
          />
          <NavbarLink path="/blog" text="Blog" icon={HiOutlineNewspaper} />
          <NavbarLink path="/contact" text="Contact" icon={HiOutlinePhone} />
        </ul>
      </div>
    </motion.div>
  );
};

const navigationLinksVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const backgroundFill: Variants = {
  open: {
    clipPath: `circle(2000px at calc(100% - 52px) 52px)`,
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    clipPath: `circle(0px at calc(100% - 52px) 52px)`,
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLargeScreen = useMediaQuery(1024);

  useEffect(() => {
    if (!isLargeScreen) return;
    setIsOpen(false);
    document.querySelector(':root')?.classList.remove('disable-scrolling');
  }, [isLargeScreen]);

  const toggleSetIsOpen = () => {
    document.querySelector(':root')?.classList.toggle('disable-scrolling'),
      setIsOpen((prev) => !prev);
  };

  return (
    <motion.div
      className="flex w-full px-8 py-8"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <motion.div
        className="absolute top-0 left-0 z-40 h-screen w-full bg-backgroundOpacity backdrop-blur-sm"
        variants={backgroundFill}
      />
      <button
        aria-label="nav-toggle"
        className="z-50 ml-auto rounded-lg focus:border-primary-main focus:outline-none"
        onClick={toggleSetIsOpen}
      >
        <div className="flex h-8 w-8 flex-col items-end gap-[7px]">
          <motion.span
            variants={{
              open: {
                rotate: -45,
                width: '100%',
                translateY: '14px',
              },
              closed: {
                rotate: 0,
                width: 23,
              },
            }}
            className="h-[3px] flex-shrink-0 rounded-full bg-white"
          />
          <motion.span
            variants={{
              open: { opacity: 0, translateX: '5%' },
              closed: {
                opacity: 1,
                translateX: '0',
              },
            }}
            transition={{ duration: 0.1, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="h-[3px] w-full flex-shrink-0 rounded-full bg-white "
          />
          <motion.span
            variants={{
              open: { rotate: 45, width: '100%', translateY: '-5px' },
              closed: {
                rotate: 0,
                width: 16,
              },
            }}
            className="h-[3px] flex-shrink-0 rounded-full bg-white "
          />
        </div>
      </button>
      <motion.div
        className={clsx(
          'grid-rows-auto-fr fixed left-0 top-0 z-40 h-screen w-full transition-all'
        )}
        variants={{
          open: { display: 'grid', transition: { duration: 0 } },
          closed: { display: 'none', transition: { delay: 0.8, duration: 0 } },
        }}
      >
        <div className="pb-20" />
        <motion.ul
          className="my-auto flex w-full flex-col items-center justify-around gap-10 font-semibold"
          variants={navigationLinksVariants}
        >
          <NavbarLink path="/" text="Home" isExact onClick={toggleSetIsOpen} />
          <NavbarLink path="/about" text="About" onClick={toggleSetIsOpen} />
          <NavbarLink
            path="/projects"
            text="Projects"
            onClick={toggleSetIsOpen}
          />
          <NavbarLink path="/blog" text="Blog" onClick={toggleSetIsOpen} />
          <NavbarLink
            path="/contact"
            text="Contact"
            onClick={toggleSetIsOpen}
          />
          <motion.li variants={menuItemVariants} className="mx-auto pt-20">
            <Button
              StartIcon={SiGithub}
              href="https://github.com/liebner12"
              target="_blank"
              onClick={toggleSetIsOpen}
            />
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export const Navbar = () => {
  return (
    <nav>
      <div className="relative hidden h-full lg:block">
        <SkipToContent id="Skip navbar">
          <Menu />
        </SkipToContent>
      </div>
      <div className="block lg:hidden">
        <MobileMenu />
      </div>
    </nav>
  );
};
