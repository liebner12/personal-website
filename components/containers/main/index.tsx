import Navbar from '../navbar';
import { children } from '../../../utils/types/common';

const Main = ({ children }: children) => {
  return (
    <div className="flex h-screen relative">
      <Navbar />
      <div className="mainGradient w-full flex flex-col h-full pl-10 pr-20 py-10">
        <header className="flex flex-col items-end">
          <h1 className="font-bold text-white text-3xl mb-2">Projects</h1>
          <p className="text-grey">Some things that I&apos;ve built</p>
        </header>
        <main className="w-full flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Main;
