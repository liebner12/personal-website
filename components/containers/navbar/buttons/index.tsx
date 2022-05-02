import Link from 'next/link';
import Button from '../../../units/button';

import { useRouter } from 'next/router';

const NavbarButtons = () => {
  const router = useRouter();
  return (
    <ul className="flex font-semibold text-lg gap-4 lg:flex-col lg:justify-around md:text-xl lg:text-2xl md:gap-8 lg:gap-16 xl:gap-20 lg:py-8">
      <li className="btn-primary flex items-center">
        <Link href="/" passHref>
          <Button isActive={router.pathname === '/'} color="text-about">
            About me
          </Button>
        </Link>
      </li>
      <li className="btn-primary flex items-center">
        <Link href="/projects" passHref>
          <Button
            isActive={router.pathname === '/projects'}
            color="text-projects"
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
          >
            Contact
          </Button>
        </Link>
      </li>
    </ul>
  );
};

export default NavbarButtons;
