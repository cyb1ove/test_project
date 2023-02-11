import { clsx } from 'clsx';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={clsx(classes.NotFoundPage, className)}>
      {t('Страница не найдена')}
    </div>
  );
};
