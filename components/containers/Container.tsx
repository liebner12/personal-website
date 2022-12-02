import { ReactNode, useCallback } from 'react';

export const Container = ({
  children,
  isGrid,
  className,
}: {
  children: ReactNode;
  isGrid?: boolean;
  className?: string;
}): JSX.Element => {
  const withGrid = useCallback((children: ReactNode) => {
    return (
      <div className="mb-auto grid gap-6 lg:grid-cols-12 lg:gap-8 xl:gap-y-6">
        {children}
      </div>
    );
  }, []);

  return (
    <main
      className={`mt-[10%] flex w-full flex-1 flex-col px-4 pt-[5%] pb-24 md:ml-28 md:mt-8 md:px-12 md:pr-10 md:pl-4 lg:mt-6 lg:ml-44 lg:pr-12 xl:pr-20 ${className}`}
    >
      {isGrid ? withGrid(children) : children}
    </main>
  );
};
