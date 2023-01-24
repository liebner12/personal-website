import clsx from 'clsx';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

type Props = {
  children: JSX.Element[] | JSX.Element;
  theme: string;
};

export const Layout = ({ children, theme }: Props) => {
  return (
    <div
      className={clsx('flex min-h-screen w-full flex-col items-center', theme)}
    >
      <div className="flex min-h-full w-full max-w-screen-2xl flex-col lg:flex-row">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};
