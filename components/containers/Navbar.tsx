import { motion } from 'framer-motion';
import {
  HiOutlineChevronDoubleRight,
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineNewspaper,
  HiOutlinePhone,
  HiOutlineUser,
} from 'react-icons/hi';
import { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { Button, NavbarLink, SkipToContent } from 'components';
import { useMaxWidthPosition } from 'hooks';
import { FADE_IN_X_REVERSE } from 'data';

export const Navbar = () => {
  const x = useMaxWidthPosition();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SkipToContent id="Skip navbar">
      <motion.nav
        {...FADE_IN_X_REVERSE}
        style={{ left: x }}
        className="navbar fixed bottom-0 z-30 w-full items-start border-t-2 border-grey-800 text-white transition-all sm:border-none md:top-0 md:mr-4 md:w-32 md:bg-transparent"
      >
        <div className="flex w-full justify-between py-2 md:h-screen md:w-auto md:flex-col md:py-12 md:pl-12 lg:py-16 lg:pl-20">
          <div className="nav-arrow hidden md:block">
            <HiOutlineChevronDoubleRight className="h-8 w-8 text-primary-main" />
          </div>
          <ul className="my-auto flex w-full justify-around gap-4 font-semibold transition-all md:flex-col md:gap-10 md:text-lg">
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
      </motion.nav>
    </SkipToContent>
  );
};
