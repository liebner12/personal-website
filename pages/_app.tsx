import axios from 'axios';
import 'styles/globals.scss';
import 'styles/dracula.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { getCurrentTheme, setDarkMode } from 'utils';
import { Layout } from 'components/containers';
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';
import { SWRConfig } from 'swr';
import { FiFacebook, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { color, theme } = getCurrentTheme(router.pathname);

  useEffect(() => {
    setDarkMode();
  }, []);

  return (
    <SWRConfig
      value={{
        fetcher: (url) => axios.get(url).then((res) => res.data),
      }}
    >
      <NextNProgress color={color} />
      <Layout theme={theme}>
        <Component {...pageProps} key={router.pathname} />
      </Layout>

      {false && (
        <footer className="mb-2 flex w-full flex-col items-center gap-6 text-grey">
          <div className="flex flex-col gap-2 text-center">
            <h4 className="font-medium">Reach me out</h4>
            <ul className="flex gap-4">
              <li>
                <FiMail className="h-6 w-6" />
              </li>
              <li>
                <FiGithub className="h-6 w-6" />
              </li>
              <li>
                <FiLinkedin className="h-6 w-6" />
              </li>
              <li>
                <FiFacebook className="h-6 w-6" />
              </li>
            </ul>
          </div>
          <p>&copy; Michał Liebner 2022</p>
        </footer>
      )}
    </SWRConfig>
  );
}

export default MyApp;
