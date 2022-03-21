import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import setDarkMode from '../utils/utils';
import Main from '../components/containers/main';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setDarkMode();
  }, []);
  return (
    <Main>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </Main>
  );
}

export default MyApp;
