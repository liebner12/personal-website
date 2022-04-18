import { children } from '../../../utils/types/common';

const Container = ({ children }: children) => {
  return (
    <div className="w-full flex flex-col h-full pt-10 px-4 md:px-10 pb-10 lg:pr-20 overflow-hidden">
      {children}
    </div>
  );
};

export default Container;
