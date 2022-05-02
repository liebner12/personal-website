import { FiGithub, FiLinkedin } from 'react-icons/fi';
import NavbarButtons from './buttons';
import { Dispatch, SetStateAction } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

type Navbar = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>> | (() => void);
};

const currentYear = new Date().getFullYear().toString();

const Navbar = () => {
  return (
    <motion.nav className="lg:flex lg:bg-transparent z-30 h-screen lg:pl-12 xl:pl-20 overflow-y-auto top-0 left-0 lg:sticky fixed flex flex-col justify-between text-white py-8 px-4 flex-shrink-0">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-primary transition-colors duration-1000">
            Author
          </h1>
          <h2 className="font-bold text-2xl">Michał Liebner</h2>
        </div>
      </div>
      <NavbarButtons />
      <footer>
        <div className="flex gap-3 mb-4 text-primary transition-colors duration-1000">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/micha%C5%82-liebner-352034229/"
            rel="noreferrer"
            aria-label="Linkedin account"
          >
            <FiLinkedin className="h-8 w-8 md:h-7 md:w-7" />
          </a>
          <a
            target="_blank"
            href="https://github.com/liebner12"
            rel="noreferrer"
            aria-label="Github account"
          >
            <FiGithub className="h-8 w-8 md:h-7 md:w-7" />
          </a>
        </div>
        <p className="text-grey">Copyright &copy;</p>
        <time dateTime={currentYear} className="font-bold text-lg">
          {currentYear}
        </time>
      </footer>
    </motion.nav>
  );
};

export default Navbar;

export const MobileNavbar = () => {
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, 50], [0, 1]);

  return (
    <nav className="sticky top-0 left-0 w-full z-40">
      <div className="bg-gradient-to-r from-primary to-primarySecondary h-1 w-full rounded-b-lg bg-[length:200%_1px] animateChild ease-linear" />
      <div className="flex items-center justify-between p-4 md:px-12 flex-wrap">
        <NavbarButtons />
        <div className="flex gap-3 text-white">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/micha%C5%82-liebner-352034229/"
            rel="noreferrer"
            aria-label="Linkedin account"
          >
            <FiLinkedin className="h-6 w-6" />
          </a>
          <a
            target="_blank"
            href="https://github.com/liebner12"
            rel="noreferrer"
            aria-label="Github account"
          >
            <FiGithub className="h-6 w-6" />
          </a>
        </div>
      </div>
      <motion.div
        className="h-full w-full absolute top-0 bg-dark -z-10"
        style={{ opacity: opacity }}
      />
    </nav>
  );
};
