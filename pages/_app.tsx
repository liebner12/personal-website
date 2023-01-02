import 'styles/globals.scss';
import 'styles/prose.css';
import 'styles/prism.css';
import axios from 'axios';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';
import { SWRConfig } from 'swr';
import { Layout } from 'components';
import { getCurrentTheme } from 'utils';

function Application({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const { color, theme } = getCurrentTheme(pathname);

  return (
    <SWRConfig
      value={{
        fetcher: (url) => axios.get(url).then((res) => res.data),
      }}
    >
      <NextNProgress color={color} />
      <Layout theme={theme}>
        <Component {...pageProps} key={pathname} />
      </Layout>
    </SWRConfig>
  );
}

export default Application;
