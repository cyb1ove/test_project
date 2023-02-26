import { clsx } from 'clsx';
import { ButtonHTMLAttributes, FC, forwardRef } from 'react';

import classes from './Button.module.scss';

export enum ThemeButton {
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_LIGHT = 'background-light',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum ButtonRoundedTypes {
  FULL = 'full',
  PARTLY = 'partly',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  rounded?: ButtonRoundedTypes;
  size?: ButtonSize;
  squared?: boolean;
}

type Ref = HTMLButtonElement;

export const Button = forwardRef<Ref, ButtonProps>(
  (
    {
      children,
      className,
      theme = ThemeButton.BACKGROUND,
      rounded = ButtonRoundedTypes.PARTLY,
      size = ButtonSize.SMALL,
      squared,
      ...otherProps
    },
    ref
  ) => {
    const mods = [
      classes[theme],
      classes[size],
      rounded === 'full' ? classes.full_rounded : classes.partly_rounded,
      { [classes.squared]: squared },
    ];

    return (
      <button
        ref={ref}
        className={clsx(classes.Button, className, mods)}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
);
