import { motion } from 'framer-motion';

type Background = {
  background: string;
};

const Background = ({ background }: Background) => {
  return (
    <div
      className="overflow-hidden absolute top-0 right-0 w-full h-1/3 lg:w-[45%] lg:h-[75%] max-w-full"
      style={{ zIndex: '-1' }}
    >
      <motion.div
        key="modal"
        className={`h-full ${background}`}
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 0.75 }}
        exit={{ x: 400, opacity: 0 }}
        transition={{
          duration: 0.5,
          type: 'tween',
        }}
      />
    </div>
  );
};

export default Background;
