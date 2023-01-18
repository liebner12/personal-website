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
import { CgMenuRight } from 'react-icons/cg';
import clsx from 'clsx';
import { SiGithub } from 'react-icons/si';
import {
  Button,
  menuItemVariants,
  NavbarLink,
  SkipToContent,
} from 'components';
import { useMaxWidthPosition, useMediaQuery, useTopPosition } from 'hooks';
import { FADE_IN_X_REVERSE } from 'data';

const Menu = () => {
  const x = useMaxWidthPosition();
  const top = useTopPosition();
  return (
    <div
      {...FADE_IN_X_REVERSE}
      style={{ left: x }}
      className="navbar absolute top-0 z-30 h-screen items-start text-white transition-all lg:mr-4 lg:w-32"
    >
      <div className="flex w-full justify-between py-2 lg:h-screen lg:w-auto lg:flex-col lg:py-16 lg:pl-20">
        <div className="nav-arrow hidden lg:block">
          <HiOutlineChevronDoubleRight className="h-8 w-8 text-primary-main" />
        </div>
        <ul className="my-auto flex w-full justify-around gap-4 font-semibold transition-all lg:flex-col lg:gap-10 lg:text-lg">
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
    </div>
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
    clipPath: `circle(1000px at calc(100% - 52px) 52px)`,
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
    setIsOpen(false);
  }, [isLargeScreen]);

  const toggleSetIsOpen = () => {
    document.querySelector(':root')?.classList.toggle('disable-scrolling');
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
        className="z-50 ml-auto"
        onClick={toggleSetIsOpen}
      >
        <CgMenuRight className="h-10 w-10" />
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
