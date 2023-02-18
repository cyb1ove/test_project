import { clsx } from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';

import classes from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  theme,
  ...otherProps
}) => (
  <button
    className={clsx(classes.Button, className, classes[theme])}
    {...otherProps}
  >
    {children}
  </button>
);
