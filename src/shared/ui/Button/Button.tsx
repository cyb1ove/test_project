import { clsx } from 'clsx';
import { ButtonHTMLAttributes, FC, useState } from 'react';

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

export enum ShapedTypes {
  SQUARE = 'square',
  CIRCLE = 'circle',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  size?: ButtonSize;
  pending?: boolean;
  shaped?: ShapedTypes;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  theme = ThemeButton.BACKGROUND,
  size = ButtonSize.SMALL,
  shaped,
  pending,
  ...otherProps
}) => {
  const [initialWidth, setInitialWidth] = useState(0);

  const mods = [
    classes[theme],
    classes[size],
    shaped ? classes[shaped] : undefined,
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
