import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { StyledLink } from './StyledLink';
import { HOVER_SCALE } from 'data';

const sizeVariants = {
  xl: 'px-10 py-8',
  lg: 'px-10 py-4',
  md: 'px-6 py-2',
  sm: 'px-4 py-1',
};

type Props = {
  variant?: 'primary' | 'secondary';
  rounded?: 'full' | 'xl' | 'lg';
  containerClassName?: string;
};

const getVariant = (variant: 'primary' | 'secondary' | 'icon') => {
  switch (variant) {
    case 'secondary': {
      return 'border-2 border-grey-700 font-semibold';
    }
    default: {
      return 'bg-primary-main text-grey-900 font-bold';
    }
  }
};

export const Button = ({
  children,
  variant = 'primary',
  rounded = 'full',
  size = 'md',
  containerClassName = '',
  className = '',
  ...props
}: StyledLink & Props) => {
  return (
    <motion.div {...HOVER_SCALE} className={containerClassName}>
      <StyledLink
        focusState="focus-state"
        className={clsx(
          getVariant(variant),
          sizeVariants[size],
          `rounded-${rounded}`,
          className
        )}
        {...props}
      >
        {children}
      </StyledLink>
    </motion.div>
  );
};
