import React, { forwardRef, Ref } from 'react';
import { motion } from 'framer-motion';
import { children } from 'types';
import Link from 'next/link';

interface Button {
  classes?: string;
  children: JSX.Element[] | JSX.Element | string;
  startIconProp?: JSX.Element[] | JSX.Element;
  endIconProp?: JSX.Element[] | JSX.Element;
  onClick?: () => void;
  href?: string;
  isActive?: boolean;
  color?: string;
  ariaLabel?: string;
}

const ButtonIcon = ({ children }: children) => {
  return <i>{children}</i>;
};

const MotionLink = motion(Link);

export const Button = forwardRef(
  (
    {
      children,
      startIconProp,
      endIconProp,
      onClick,
      href = '',
      classes,
      isActive,
      color,
      ariaLabel,
    }: Button,
    ref: Ref<HTMLAnchorElement> | undefined
  ) => {
    const startIcon = startIconProp && <ButtonIcon>{startIconProp}</ButtonIcon>;

    const endIcon = endIconProp && <ButtonIcon>{endIconProp}</ButtonIcon>;

    return (
      <MotionLink
        onClick={onClick}
        ref={ref}
        href={href}
        className={`${classes} ${
          isActive ? `${color} font-bold` : 'text-grey'
        } tap-highlight focus-state relative rounded-md py-2 transition-colors ease-in-out after:absolute after:-left-full after:-bottom-1 after:z-[-1] after:box-content after:block after:h-0.5 after:rounded-md after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full hover:after:bg-primary`}
        whileTap={{ scale: 0.96 }}
        whileFocus={{ scale: 1.02 }}
        whileHover={{ scale: 1.02 }}
        aria-label={ariaLabel}
      >
        {startIcon}
        {children}
        {endIcon}
      </MotionLink>
    );
  }
);

Button.displayName = 'Button';
