import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { StyledLink } from './StyledLink';
import { HOVER_SCALE } from 'data';

const sizeVariants = {
  xl: 'px-6 lg:px-10 py-8',
  lg: 'px-10 py-4',
  md: 'px-6 py-2',
  sm: 'px-4 py-1',
  circle: 'p-3',
};

type Props = {
  variant?: 'primary' | 'secondary' | 'filled';
  rounded?: 'full' | 'xl' | 'lg';
  containerClassName?: string;
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'circle';
};

export type ButtonProps = Omit<StyledLink, 'size'> & Props;

const getVariant = (variant: 'primary' | 'secondary' | 'filled') => {
  switch (variant) {
    case 'filled': {
      return 'border-2 border-grey-700 bg-grey-800 font-semibold';
    }
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
  StartIcon,
  EndIcon,
  ...props
}: ButtonProps) => {
  return (
    <motion.div {...HOVER_SCALE} className={containerClassName} tabIndex={-1}>
      <StyledLink
        focusState="focus-state"
        className={clsx(
          getVariant(variant),
          sizeVariants[size],
          `rounded-${rounded}`,
          className
        )}
        StartIcon={StartIcon}
        EndIcon={EndIcon}
        {...props}
      >
        {children}
      </StyledLink>
    </motion.div>
  );
};
