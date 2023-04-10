import { clsx } from 'clsx';
import { ButtonHTMLAttributes, FC, forwardRef, useState } from 'react';

import { ButtonLoader } from '../ButtonLoader/ButtonLoader';
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
  pending?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  theme = ThemeButton.BACKGROUND,
  rounded = ButtonRoundedTypes.PARTLY,
  size = ButtonSize.SMALL,
  squared,
  pending,
  ...otherProps
}) => {
  const [initialWidth, setInitialWidth] = useState(0);

  const mods = [
    classes[theme],
    classes[size],
    rounded === 'full' ? classes.full_rounded : classes.partly_rounded,
    { [classes.squared]: squared },
  ];

  return (
    <button
      ref={(node) => setInitialWidth(node ? node.offsetWidth : 0)}
      className={clsx(classes.Button, className, mods)}
      style={pending ? { width: initialWidth } : {}}
      {...otherProps}
    >
      {pending ? <ButtonLoader className={classes.loader} /> : children}
    </button>
  );
};
