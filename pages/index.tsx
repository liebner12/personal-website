import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/layouts/about';
import Background from '../components/units/background';
import Header from '../components/containers/header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>About me</title>
        <meta name="description" content="I am young developer :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="About" desc="Few words about me" />
      <Background background="aboutBg" />
      <About />
    </>
  );
};

export default Home;
