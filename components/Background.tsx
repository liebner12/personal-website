import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FADE_IN_X } from 'data';

type Props = {
  background: string;
};

export const Background = ({ background }: Props) => {
  return (
    <div className="absolute top-0 right-0 -z-10 h-full w-full overflow-hidden lg:w-4/5">
      <div className="h-3/5 opacity-30 lg:h-full">
        <motion.div className={clsx('h-full', background)} {...FADE_IN_X} />
      </div>
    </div>
  );
};
