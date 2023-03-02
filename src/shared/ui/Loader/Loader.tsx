import { clsx } from 'clsx';
import { FC } from 'react';

import classes from './Loader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const Loader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={clsx(classes.PageLoader, className)}>
      <span className={classes.loader}></span>
    </div>
  );
};
