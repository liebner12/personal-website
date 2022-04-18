import Link from 'next/link';
import Button from '../../../units/button';

import { useRouter } from 'next/router';
import { useContext } from 'react';
import { NavbarContext } from '..';
import useMediaQuery from '../../../../utils/hooks/useMediaQuery';

const NavbarButtons = () => {
  const { setOpen } = useContext(NavbarContext);
  const matches = useMediaQuery(1024);
  const router = useRouter();
  return (
    <ul className="flex flex-col justify-around font-semibold text-3xl md:text-2xl gap-20">
      <li className="btn-primary flex items-center">
        <Link href="/" passHref>
          <Button
            isActive={router.pathname === '/'}
            color="text-about"
            onClick={() => !matches && setOpen(false)}
          >
            About me
          </Button>
        </Link>
      </li>
      <li className="btn-primary flex items-center">
        <Link href="/projects" passHref>
          <Button
            isActive={router.pathname === '/projects'}
            color="text-projects"
            onClick={() => !matches && setOpen(false)}
          >
            Projects
          </Button>
        </Link>
      </li>
      <li className="btn-primary flex items-center">
        <Link href="/contact" passHref>
          <Button
            isActive={router.pathname === '/contact'}
            color="text-contact"
            onClick={() => !matches && setOpen(false)}
          >
            Contact
          </Button>
        </Link>
      </li>
    </ul>
  );
};

export default NavbarButtons;
