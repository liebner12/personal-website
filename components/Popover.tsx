import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactNode, useRef } from 'react';
import clsx from 'clsx';
import { Popover } from '@headlessui/react';
import { IconType } from 'react-icons/lib';
import { Button, ButtonProps } from './Button';
import { Reactions } from './post';

export const MobilePopover = ({
  Icon,
  Reactions,
}: {
  Icon: IconType;
  Reactions: React.FC<Reactions>;
}) => {
  return (
    <Popover>
      <Popover.Button className="focus-state rounded-full p-3 text-grey-300 hover:bg-grey-800 hover:text-primary-main focus:bg-grey-800 focus:text-primary-main">
        <Icon className="h-6 w-6" />
      </Popover.Button>
      <Popover.Panel>
        {({ close }) => (
          <div className="absolute bottom-3/4 left-[10%] z-20 flex items-center gap-4 rounded-full border-2 border-grey-800 bg-grey-900 py-3 px-6">
            <Reactions onClick={close} />
          </div>
        )}
      </Popover.Panel>
    </Popover>
  );
};

export const DesktopPopover = ({
  children,
  isHovered,
  setIsHovered,
  button,
}: {
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
  children: ReactNode;
  button: ReactNode;
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
      {button}
      <AnimatePresence>
        {isHovered && (
          <motion.div className="absolute right-[120%] bottom-1/2 -z-50 translate-y-1/2">
            <motion.div
              className="rounded-full border-2 border-grey-800 bg-grey-900 py-3 px-6"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{
                duration: 0.2,
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

const PopoverButton = ({
  variant = 'secondary',
  StartIcon,
  ariaLabel,
  className,
}: Pick<ButtonProps, 'variant' | 'StartIcon' | 'className' | 'ariaLabel'>) => {
  return (
    <Button
      as="button"
      variant={variant}
      StartIcon={StartIcon}
      size="circle"
      ariaLabel={ariaLabel}
      className={clsx(
        'transition-colors hover:bg-grey-800 hover:text-primary-main focus:bg-grey-800 focus:text-primary-main',
        className
      )}
    />
  );
};

DesktopPopover.Button = PopoverButton;
