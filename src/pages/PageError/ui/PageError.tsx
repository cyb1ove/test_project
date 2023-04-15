import { clsx } from 'clsx';
import { FC } from 'react';
import { Text } from 'shared/ui/Text/Text';

import classes from './PageError.module.scss';

interface ErrorPageProps {
  className?: string;
}

export const PageError: FC<ErrorPageProps> = ({ className }) => {
  return (
    <div className={clsx(classes.ErrorPage, className)}>
      <Text title="Произошла непредвиденная ошибка" />
    </div>
  );
};
