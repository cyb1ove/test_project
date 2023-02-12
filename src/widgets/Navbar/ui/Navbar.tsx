import { ErrorContext } from 'app/providers/ErrorBoundary/ui/ErrorBoundary';
import { clsx } from 'clsx';
import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const { clearError } = useContext(ErrorContext);

  return (
    <div className={clsx(classes.Navbar, className)}>
      <div onClick={clearError} className={clsx(classes.links)}>
        <AppLink to={'/'} className={classes.mainLink}>
          {t('Главная')}
        </AppLink>

        <AppLink to={'/about'}>{t('О сайте')}</AppLink>
      </div>
    </div>
  );
};
