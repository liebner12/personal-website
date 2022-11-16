import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Props = {
  children: JSX.Element[] | JSX.Element;
  content: string;
};

export const Tooltip = ({ children, content }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setIsVisible(true)}
      onHoverEnd={() => setIsVisible(false)}
      className="relative flex justify-center"
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            style={{
              boxShadow: '0px 0px 4px 0px rgba(198, 198, 198)',
            }}
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.75, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="absolute bottom-full mb-2 whitespace-nowrap rounded-md bg-dark p-1 px-3 text-grey shadow-md"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </motion.div>
  );
};
