import { ReactNode, forwardRef, CSSProperties } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { IconType } from 'react-icons/lib';

export type StyledLink = {
  className?: string;
  children?: ReactNode | string;
  StartIcon?: IconType;
  EndIcon?: IconType;
  onClick?: () => void;
  href?: string;
  isActive?: boolean;
  color?: string;
  ariaLabel?: string;
  target?: '_blank' | undefined;
  focusState?: 'focus-state-bottom' | 'focus-state' | '';
  size?: 'xl' | 'lg' | 'md' | 'sm';
  style?: CSSProperties;
};

const sizeVariants = {
  xl: 'h-10 w-10',
  lg: 'h-8 w-8',
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
};

export const StyledLink = forwardRef<HTMLAnchorElement, StyledLink>(
  (
    {
      target,
      children,
      StartIcon,
      EndIcon,
      onClick,
      href = '',
      className,
      isActive,
      color,
      ariaLabel,
      focusState = 'focus-state-bottom',
      size = 'md',
      style,
    },
    ref
  ) => {
    const startIcon = StartIcon && <StartIcon className={sizeVariants[size]} />;
    const endIcon = EndIcon && <EndIcon className={sizeVariants[size]} />;

    return (
      <Link
        ref={ref}
        rel={target && 'noreferrer'}
        target={target}
        onClick={onClick}
        href={href}
        className={clsx(
          {
            'font-bold text-primary-main': isActive,
            [color || 'text-grey-300']: !isActive,
          },
          focusState,
          className,
          { 'flex items-center gap-2': StartIcon || EndIcon },
          { 'inline-block': !StartIcon && !EndIcon }
        )}
        style={style}
        aria-label={ariaLabel}
      >
        {startIcon}
        {children}
        {endIcon}
      </Link>
    );
  }
);

StyledLink.displayName = 'StyledLink';
