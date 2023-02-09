import { motion } from 'framer-motion';
import {
  HiOutlineChevronDoubleRight,
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineNewspaper,
  HiOutlinePhone,
  HiOutlineUser,
} from 'react-icons/hi';
import { useRouter } from 'next/dist/client/router';
import { IconType } from 'react-icons/lib';
import dynamic from 'next/dynamic';
import { SkipToContent, StyledLink } from 'components';
import { FADE_IN_X_REVERSE, navigationItemVariants } from 'data';

const DynamicMobileMenu = dynamic(() =>
  import('components/navbar/MobileMenu').then((mod) => mod.MobileMenu)
);

type Props = {
  path: string;
  text: string;
  isExact?: boolean;
  icon?: IconType;
  onClick?: () => void;
};

export const NavbarLink = ({ path, text, isExact, icon, onClick }: Props) => {
  const { pathname } = useRouter();

  const isActive = isExact
    ? pathname === path
    : new RegExp(`${path}*`).test(pathname);

  return (
    <motion.li
      className="flex h-10 items-center"
      variants={navigationItemVariants}
    >
      <StyledLink
        href={path}
        ariaLabel={text}
        isActive={isActive}
        StartIcon={icon}
        className="z-20 h-6 text-xl lg:text-lg"
        onClick={onClick}
      >
        <p className="link-text">{text}</p>
      </StyledLink>
    </motion.li>
  );
};

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

export const Navbar = () => {
  return (
    <nav>
      <SkipToContent id="Skip navbar">
        <div className="relative hidden h-full lg:block">
          <Menu />
        </div>
      </SkipToContent>
      <div className="block lg:hidden">
        <DynamicMobileMenu />
      </div>
    </nav>
  );
};
