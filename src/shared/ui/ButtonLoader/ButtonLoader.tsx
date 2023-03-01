import { clsx } from 'clsx';
import { FC } from 'react';

import classes from './ButtonLoader.module.scss';

interface ButtonLoaderProps {
  className?: string;
}

export const ButtonLoader: FC<ButtonLoaderProps> = ({ className }) => {
  return (
    <div className={clsx(classes.ButtonLoader, className)} role="loader"></div>
  );
};
