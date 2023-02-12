import { clsx } from 'clsx';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './PageError.module.scss';

interface ErrorPageProps {
  className?: string;
}

export const PageError: FC<ErrorPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={clsx(classes.ErrorPage, className)}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
    </div>
  );
};
