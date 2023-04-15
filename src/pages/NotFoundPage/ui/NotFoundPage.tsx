import { clsx } from 'clsx';
import { FC } from 'react';
import { Text } from 'shared/ui/Text/Text';

import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  return (
    <div className={clsx(classes.NotFoundPage, className)}>
      <Text title="Страница не найдена" />
    </div>
  );
};
