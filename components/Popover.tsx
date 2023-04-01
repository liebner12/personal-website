import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { MdFavorite } from 'react-icons/md';
import { Button } from './Button';

export const Popover = ({
  children,
  isHovered,
  setIsHovered,
}: {
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
  children: ReactNode;
}) => {
  const timeoutRef = useRef<number | null>(null);

  const handleHover = (value: boolean) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (value) {
      setIsHovered(true);
      return;
    }

    timeoutRef.current = window.setTimeout(() => {
      setIsHovered(false);
    }, 200);
  };

  return (
    <motion.div
      className="relative"
      onHoverStart={() => handleHover(true)}
      onFocus={() => handleHover(true)}
      onBlur={() => handleHover(false)}
      onHoverEnd={() => handleHover(false)}
    >
      <Button
        as="button"
        variant="secondary"
        StartIcon={MdFavorite}
        size="circle"
        className="hover:bg-grey-800 hover:text-primary-main focus:bg-grey-800 focus:text-primary-main"
      />
      <AnimatePresence>
        {isHovered && (
          <motion.div className="absolute right-[120%] bottom-1/2 z-50 translate-y-1/2">
            <motion.div
              className="flex items-center gap-3 rounded-full border-2 border-grey-800 bg-grey-900 py-4 px-6"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{
                duration: 0.25,
              }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
