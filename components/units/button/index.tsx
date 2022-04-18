import React, { forwardRef, Ref } from 'react';
import { motion } from 'framer-motion';

interface Button {
  classes?: string;
  children: React.ReactChild | React.ReactChildren[] | string;
  startIconProp?: React.ReactChild;
  endIconProp?: React.ReactChild;
  onClick?: () => void;
  href?: string;
  isActive?: boolean;
  color?: string;
}

type ButtonIcon = {
  children: React.ReactChild;
};

const ButtonIcon = ({ children }: ButtonIcon) => {
  return <i>{children}</i>;
};

const Button = (
  {
    children,
    startIconProp,
    endIconProp,
    onClick,
    href,
    classes,
    isActive,
    color,
  }: Button,
  ref: Ref<HTMLAnchorElement> | undefined
) => {
  const startIcon = startIconProp && <ButtonIcon>{startIconProp}</ButtonIcon>;

  const endIcon = endIconProp && <ButtonIcon>{endIconProp}</ButtonIcon>;

  return (
    <a href={href} onClick={onClick} ref={ref} className="relative z-0">
      {startIcon}
      <motion.p
        whileTap={{ scale: 0.96 }}
        className={`${classes} ${
          isActive ? color : 'text-white'
        } transition-colors relative after:transition-all after:duration-300 after:block after:absolute after:h-[0.10rem] after:-left-full hover:after:left-0 after:w-full after:-bottom-1 after:box-content hover:after:bg-primary after:z-[-1]`}
      >
        {children}
      </motion.p>
      {endIcon}
    </a>
  );
};

export default forwardRef(Button);
