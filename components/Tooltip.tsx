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
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.75, opacity: 0 }}
            className="absolute bottom-full mb-2 whitespace-nowrap rounded-lg bg-grey-800 py-1.5 px-3"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </motion.li>
  );
};
