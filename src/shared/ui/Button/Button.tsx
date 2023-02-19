import { clsx } from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';

import classes from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  rounded?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  theme = ThemeButton.CLEAR,
  rounded = false,
  size = ButtonSize.SMALL,
  ...otherProps
}) => {
  const mods = [classes[theme], classes[size], { [classes.rounded]: rounded }];

  return (
    <button className={clsx(classes.Button, className, mods)} {...otherProps}>
      {children}
    </button>
  );
};
