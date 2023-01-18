import clsx from 'clsx';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

type Props = {
  children: JSX.Element[] | JSX.Element;
  theme: string;
};

export const Layout = ({ children, theme }: Props) => {
  return (
    <div className={clsx('min-h-screen w-full', theme)}>
      <div className="flex min-h-full w-full max-w-screen-2xl flex-col lg:flex-row">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};
