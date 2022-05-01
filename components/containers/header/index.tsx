import { AnimatePresence, motion } from 'framer-motion';
import useMediaQuery from '../../../utils/hooks/useMediaQuery';
import useOnScreen from '../../../utils/hooks/useOnScreen';
import { Toggle } from '../../containers/navbar';
import HeaderUnit from '../../units/header';
type Header = {
  title: string;
  desc: string;
};

const Header = ({ title, desc }: Header) => {
  const matches = useMediaQuery(1024);
  const options = {
    root: null,
    rootMargin: '-8px',
    threshold: 0.5,
  };
  const { ref, isIntersecting } = useOnScreen(true, options);

  return (
    <motion.header
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{
        duration: 0.5,
      }}
    >
      <div ref={ref} className="flex justify-between items-start">
        {!matches && <Toggle />}
        <div className="flex flex-col items-end ml-auto">
          <h1 className="font-bold text-white text-5xl mb-2">{title}</h1>
          <p className="text-grey text-right">{desc}</p>
        </div>
      </div>
      <AnimatePresence>
        {!isIntersecting && !matches && <HeaderUnit title={title} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
