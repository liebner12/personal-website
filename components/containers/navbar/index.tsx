import Link from 'next/link';
import Button from '../../units/button';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
const currentYear = new Date().getFullYear().toString();

const Navbar = () => {
  return (
    <nav className="h-full flex flex-col justify-between text-white py-8 px-20 flex-shrink-0">
      <div>
        <h1 className="text-grey">Author</h1>
        <h2 className="font-bold text-2xl">Michał Liebner</h2>
      </div>
      <ul className="flex flex-col justify-around font-semibold">
        <li className="my-10 text-2xl btn-primary flex items-center">
          <Link href="/" passHref>
            <Button>About me</Button>
          </Link>
        </li>
        <li className="my-10 text-2xl btn-primary flex items-center">
          <Link href="/projects" passHref>
            <Button>Projects</Button>
          </Link>
        </li>
        <li className="my-10 text-2xl btn-primary flex items-center">
          <Link href="/contact" passHref>
            <Button>Contact</Button>
          </Link>
        </li>
      </ul>
      <footer>
        <div className="flex gap-3 mb-4 text-emeraldLight">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/micha%C5%82-liebner-352034229/"
            rel="noreferrer"
            aria-label="Linkedin account"
          >
            <FiLinkedin className="h-5 w-5" />
          </a>
          <a
            target="_blank"
            href="https://github.com/liebner12"
            rel="noreferrer"
            aria-label="Github account"
          >
            <FiGithub className="h-5 w-5" />
          </a>
        </div>
        <p className="text-sm text-grey">Copyright &copy;</p>
        <time dateTime={currentYear} className="font-bold">
          {currentYear}
        </time>
      </footer>
    </nav>
  );
};

export default Navbar;
