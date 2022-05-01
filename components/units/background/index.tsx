import { motion } from 'framer-motion';

type Background = {
  background: string;
};

const Background = ({ background }: Background) => {
  return (
    <div
      className="overflow-hidden absolute top-0 right-0 w-full h-full max-w-full"
      style={{ zIndex: '-1' }}
    >
      <motion.div
        key="modal"
        className={`h-full ${background}`}
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 0.75 }}
        exit={{ x: 400, opacity: 0 }}
        transition={{
          duration: 1,
          type: 'spring',
        }}
      />
    </div>
  );
};

export default Background;
