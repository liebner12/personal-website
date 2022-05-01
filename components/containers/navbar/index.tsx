import { FiGithub, FiLinkedin } from 'react-icons/fi';
import NavbarButtons from './buttons';
import { HiOutlineX, HiOutlineMenu } from 'react-icons/hi';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { children } from '../../../utils/types/common';
import useOnScreen from '../../../utils/hooks/useOnScreen';
import { motion } from 'framer-motion';
import Background from '../../units/background';
import { useRouter } from 'next/router';
import useMediaQuery from '../../../utils/hooks/useMediaQuery';

type Navbar = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>> | (() => void);
};

export const NavbarContext = createContext<Navbar>({
  open: false,
  setOpen: () => {
    // empty
  },
});

const currentYear = new Date().getFullYear().toString();

export const Toggle = () => {
  const { setOpen } = useContext(NavbarContext);

  return (
    <motion.button
      className="py-1"
      whileTap={{ scale: 0.95 }}
      whileFocus={{ scale: 1.1 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => setOpen((prev) => !prev)}
    >
      <HiOutlineMenu className="w-10 h-10 text-white" />
    </motion.button>
  );
};

const currentBackground = (path: string) => {
  switch (path) {
    case '/contact':
      return 'contactBg';
    case '/projects':
      return 'projectsBg';
    default:
      return 'aboutBg';
  }
};

const Nav = () => {
  const router = useRouter();
  const { open, setOpen } = useContext(NavbarContext);
  const matches = useMediaQuery(1024);

  useEffect(() => {
    setOpen(matches ? true : false);
  }, [matches, setOpen]);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: '-100%' },
  };
  return (
    <motion.nav
      initial={{ opacity: 1, x: '-100%' }}
      animate={open ? 'open' : 'closed'}
      variants={variants}
      transition={{
        duration: 0.4,
        type: 'tween',
      }}
      className="lg:flex bg-black lg:bg-transparent z-30 h-screen w-full lg:w-auto lg:px-20 overflow-y-auto top-0 left-0 lg:sticky fixed flex flex-col justify-between text-white py-8 px-4 lg:pr-10 flex-shrink-0"
    >
      {!matches && open && (
        <Background background={currentBackground(router.pathname)} />
      )}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-primary transition-colors duration-1000">
            Author
          </h1>
          <h2 className="font-bold text-2xl">Michał Liebner</h2>
        </div>
        {!matches && (
          <motion.button
            className="p-2"
            whileTap={{ scale: 0.95 }}
            whileFocus={{ scale: 1.1 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setOpen(false)}
          >
            <HiOutlineX className="w-7 h-7 text-white" />
          </motion.button>
        )}
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

const Navbar = ({ children }: children) => {
  const [open, setOpen] = useState(false);

  const value = useMemo(() => ({ open, setOpen }), [open, setOpen]);
  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
};

Navbar.Toggle = Toggle;
Navbar.Nav = Nav;

export default Navbar;
