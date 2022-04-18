import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import setDarkMode from '../utils/utils';
import Main from '../components/containers/main';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import '../styles/globals.scss';
import NavbarContext from '../components/containers/navbar';
import NextNProgress from 'nextjs-progressbar';
import { theme } from '../tailwind.config';

const currentBackground = (path: string) => {
  switch (path) {
    case '/contact':
      return theme.colors.contact;
    case '/projects':
      return theme.colors.projects;
    default:
      return theme.colors.about;
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [currentColor, setCurrentColor] = useState('');

  useEffect(() => {
    setDarkMode();
  }, []);

  useEffect(() => {
    const handleStart = (url: string) => {
      console.log(url, currentBackground(url));
      setCurrentColor(currentBackground(url));
    };
    router.events.on('routeChangeStart', handleStart);

    return () => {
      router.events.off('routeChangeStart', handleStart);
    };
  }, [router]);

  return (
    <NavbarContext>
      <NextNProgress color={currentColor} />
      <Main>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </Main>
    </NavbarContext>
  );
}

export default MyApp;
