import { clsx } from 'clsx';
import { FC } from 'react';

import classes from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={clsx(classes.PageLoader, className)}>
      <span className={classes.loader}></span>
    </div>
  );
};
