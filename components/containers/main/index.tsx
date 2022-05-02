import Navbar, { MobileNavbar } from '../navbar';
import { children } from '../../../utils/types/common';
import { useRouter } from 'next/router';
import useMediaQuery from '../../../utils/hooks/useMediaQuery';

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
  const isNotMobile = useMediaQuery(1024);

  return (
    <>
      <div
        className={`w-full h-full grid place-items-center ${currentTitle(
          router.pathname
        )}`}
      >
        <div className="flex flex-col lg:flex-row h-full w-full max-w-screen-2xl">
          {isNotMobile ? <Navbar /> : <MobileNavbar />}
          {children}
        </div>
      </div>
    </>
  );
};

export default Main;
