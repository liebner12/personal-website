import { motion } from 'framer-motion';
import { NavbarLinks } from 'components/ui';
import { useMaxWidthPosition } from 'hooks';
import {
  HiOutlineChevronDoubleRight,
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineNewspaper,
  HiOutlinePhone,
  HiOutlineUser,
} from 'react-icons/hi';

export const Navbar = () => {
  const x = useMaxWidthPosition();
  return (
    <motion.nav
      initial="collapsed"
      animate="open"
      exit="collapsed"
      variants={{
        open: { x: 0, opacity: 1 },
        collapsed: { x: '-100px', opacity: 0 },
      }}
      transition={{ delay: 0.5 }}
      style={{ left: x }}
      className="navbar fixed bottom-0 z-30 w-full items-start overflow-hidden overflow-y-auto border-t-2 border-blockBg bg-background text-white sm:border-none md:top-0 md:mr-4 md:w-32 md:bg-transparent"
    >
      <div className="flex w-full justify-between py-2 md:h-screen md:w-auto md:flex-col md:py-12 md:pl-12 lg:py-16 lg:pl-20">
        <div key="nav-toggle" className="nav-toggle hidden md:block">
          <HiOutlineChevronDoubleRight className="h-8 w-8 text-primary" />
        </div>
        <ul className="my-auto flex w-full justify-around gap-4 font-semibold transition-all md:flex-col md:gap-10 md:text-lg">
          <NavbarLinks
            path="/"
            text="Home"
            isExact
            icon={<HiOutlineHome className="h-6 w-6" />}
          />
          <NavbarLinks
            path="/about"
            text="About"
            icon={<HiOutlineUser className="h-6 w-6" />}
          />
          <NavbarLinks
            path="/projects"
            text="Projects"
            icon={<HiOutlineHashtag className="h-6 w-6" />}
          />
          <NavbarLinks
            path="/blog"
            text="Blog"
            icon={<HiOutlineNewspaper className="h-6 w-6" />}
          />
          <NavbarLinks
            path="/contact"
            text="Contact"
            icon={<HiOutlinePhone className="h-6 w-6" />}
          />
        </ul>
      </div>
    </motion.nav>
  );
};
