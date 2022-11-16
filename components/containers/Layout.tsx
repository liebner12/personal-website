import { SkipToContent } from 'components/ui';
import { Navbar } from './Navbar';

type Props = {
  children: JSX.Element[] | JSX.Element;
  theme: string;
};

export const Layout = ({ children, theme }: Props) => {
  return (
    <div className={`flex min-h-screen w-full justify-center ${theme}`}>
      <div className="flex min-h-full w-full max-w-screen-2xl flex-col md:flex-row">
        <SkipToContent id="Skip navbar">
          <Navbar />
        </SkipToContent>
        {children}
      </div>
    </div>
  );
};
