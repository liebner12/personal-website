import { motion } from 'framer-motion';

type Background = {
  background: string;
};

const Background = ({ background }: Background) => {
  return (
    <div
      className="overflow-hidden absolute top-0 left-0 w-screen h-full max-w-full 2xl:max-w-none"
      style={{ zIndex: '-1' }}
    >
      <motion.div
        key="modal"
        className={`w-full h-full ${background}`}
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 100, opacity: 1 }}
        exit={{ x: 200, opacity: 0 }}
        transition={{
          duration: 1,
          type: 'tween',
        }}
      />
    </div>
  );
};

export default Background;
