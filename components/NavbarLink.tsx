import { useRouter } from 'next/router';
import { IconType } from 'react-icons/lib';
import { StyledLink } from './StyledLink';

type Props = {
  path: string;
  text: string;
  isExact?: boolean;
  icon: IconType;
};

export const NavbarLink = ({ path, text, isExact, icon }: Props) => {
  const { pathname } = useRouter();

  const isActive = isExact
    ? pathname === path
    : new RegExp(`${path}*`).test(pathname);

  return (
    <li className="flex h-10 items-center">
      <StyledLink
        href={path}
        ariaLabel={text}
        isActive={isActive}
        StartIcon={icon}
        className="h-6"
      >
        <p className="link-text">{text}</p>
      </StyledLink>
    </li>
  );
};
