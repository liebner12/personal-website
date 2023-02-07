import { ReactNode, useCallback } from 'react';
import { clsx } from 'clsx';
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
      <div className="mb-auto grid gap-6 lg:grid-cols-12 lg:gap-10 xl:gap-y-6">
        {children}
      </div>
    );
  }, []);

  return (
    <main
      className={clsx(
        'flex flex-1 flex-col px-8 pt-[5%] pb-24 md:px-12 lg:mt-6 lg:ml-44 lg:px-12 lg:pl-4 lg:pr-20',
        className
      )}
    >
      {isGrid ? withGrid(children) : children}
    </main>
  );
};
