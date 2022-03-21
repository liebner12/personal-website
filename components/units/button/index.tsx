import React, { forwardRef, LegacyRef } from 'react';
import buttonStyles from './Button.module.scss';

interface Button {
  classes?: string;
  children: React.ReactChild | React.ReactChildren[] | string;
  startIconProp?: React.ReactChild;
  endIconProp?: React.ReactChild;
  onClick?: () => void;
  href?: string;
}

type ButtonIcon = {
  children: React.ReactChild;
};

const ButtonIcon = ({ children }: ButtonIcon) => {
  return <i>{children}</i>;
};

const Button = (
  { children, startIconProp, endIconProp, onClick, href }: Button,
  ref: LegacyRef<HTMLAnchorElement>
) => {
  const startIcon = startIconProp && <ButtonIcon>{startIconProp}</ButtonIcon>;

  const endIcon = endIconProp && <ButtonIcon>{endIconProp}</ButtonIcon>;

  return (
    <a href={href} onClick={onClick} className={buttonStyles.button} ref={ref}>
      {startIcon}
      {children}
      {endIcon}
    </a>
  );
};

export default forwardRef(Button);
