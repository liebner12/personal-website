import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from './Button';

type Props = {
  path: string;
  text: string;
  isExact?: boolean;
  icon: JSX.Element[] | JSX.Element;
};

export const NavbarLinks = ({ path, text, isExact, icon }: Props) => {
  const { pathname } = useRouter();

  const isActive = isExact
    ? pathname === path
    : new RegExp(`${path}*`).test(pathname);

  return (
    <li className="btn-primary flex h-10 items-center">
      <Button
        href={path}
        ariaLabel={text}
        color="text-primary"
        isActive={isActive}
        startIconProp={icon}
        classes="focus-state relative flex cursor-pointer items-center gap-2 rounded-md py-2 transition-colors ease-in-out after:absolute after:-left-full after:-bottom-1 after:z-[-1] after:box-content after:block after:h-0.5 after:rounded-md after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full hover:after:bg-primary"
      >
        <p className="link-text hidden lg:block">{text}</p>
      </Button>
    </li>
  );
};
