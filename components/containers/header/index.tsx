import { motion } from 'framer-motion';

type Header = {
  title: string;
  desc: string;
};

const Header = ({ title, desc }: Header) => {
  return (
    <motion.header
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="flex justify-between items-start py-6 lg:pb-0">
        <div className="flex flex-col lg:items-end lg:ml-auto text-left lg:text-right">
          <h1 className="font-bold text-white text-3xl xl:text-5xl mb-1 lg:mb-2">
            {title}
          </h1>
          <p className="text-grey">{desc}</p>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
