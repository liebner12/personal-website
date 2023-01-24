import { Variants, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons/lib';
import { StyledLink } from './StyledLink';

type Props = {
  path: string;
  text: string;
  isExact?: boolean;
  icon?: IconType;
  onClick?: () => void;
};

export const menuItemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

export const NavbarLink = ({ path, text, isExact, icon, onClick }: Props) => {
  const { pathname } = useRouter();

  const isActive = isExact
    ? pathname === path
    : new RegExp(`${path}*`).test(pathname);

  return (
    <motion.li className="flex h-10 items-center" variants={menuItemVariants}>
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
