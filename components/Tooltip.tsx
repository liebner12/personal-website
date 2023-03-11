import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Props = {
  children: JSX.Element[] | JSX.Element;
  content: string;
  tabIndex?: number;
};

export const Tooltip = ({ children, content, tabIndex = 0 }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <motion.li
      onHoverStart={() => setIsVisible(true)}
      onHoverEnd={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
      className="relative flex justify-center focus:outline-0"
      tabIndex={tabIndex}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: '10px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '10px', opacity: 0 }}
            className="absolute bottom-full mb-3 whitespace-nowrap rounded-lg border-2 border-primary-main bg-grey-800 py-1.5 px-3 font-semibold"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </motion.li>
  );
};
