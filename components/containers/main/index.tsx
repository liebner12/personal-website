import Navbar from '../navbar';
import { children } from '../../../utils/types/common';
import { useRouter } from 'next/router';

const currentTitle = (path: string) => {
  switch (path) {
    case '/contact':
      return 'theme-contact';
    case '/projects':
      return 'theme-projects';
    default:
      return 'theme-about';
  }
};

const Main = ({ children }: children) => {
  const router = useRouter();

  return (
    <>
      <div
        className={`w-full h-full grid place-items-center xl:overflow-y-hidden ${currentTitle(
          router.pathname
        )}`}
      >
        <div className="flex h-full relative w-full max-w-screen-2xl">
          <Navbar.Nav />
          {children}
        </div>
      </div>
    </>
  );
};

export default Main;
