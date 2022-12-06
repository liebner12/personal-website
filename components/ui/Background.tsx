import { FADE_IN_X } from 'data';
import { motion } from 'framer-motion';

type Props = {
  background: string;
};

export const Background = ({ background }: Props) => {
  return (
    <div
      className="absolute top-0 right-0 h-full w-full lg:w-3/5"
      style={{ zIndex: '-1' }}
    >
      <div className="h-3/5 lg:h-full">
        <motion.div
          key="modal"
          className={`h-full ${background} blur-3xl`}
          {...FADE_IN_X}
          transition={{
            duration: 0.5,
            type: 'tween',
          }}
        />
      </div>
    </div>
  );
};
