import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { FADE_IN_FIRST } from 'data';

export const Heading = ({
  children,
  className = 'mb-12',
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.h1
      className={clsx(
        'text-5xl font-extrabold sm:text-6xl lg:text-5xl xl:max-w-3xl xl:text-6xl',
        className
      )}
      {...FADE_IN_FIRST}
    >
      {children}
    </motion.h1>
  );
};
