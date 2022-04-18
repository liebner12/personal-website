import { motion } from 'framer-motion';
import { Toggle } from '../../containers/navbar';

type Header = {
  title: string;
};

const HeaderUnit = ({ title }: Header) => {
  return (
    <motion.div
      className={
        'fixed left-0 top-0 z-20 w-screen bg-[rgba(30,30,30,0.85)] backdrop-blur-lg flex items-center justify-between px-4 py-1 border-b-[hsl(0,0%,15%)] border-b-2 shadow-lg'
      }
      initial={{ y: '-50px', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '-50px', opacity: 0 }}
      transition={{ type: 'tween', duration: 0.2 }}
    >
      <motion.div
        className="flex items-center"
        initial={{ y: '-50px', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Toggle />
      </motion.div>
      <motion.h2
        className="text-white text-2xl font-bold"
        initial={{ y: '-50px', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {title}
      </motion.h2>
    </motion.div>
  );
};

export default HeaderUnit;
