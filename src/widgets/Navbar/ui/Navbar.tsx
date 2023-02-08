import { clsx } from 'clsx';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={clsx(classes.Navbar, className)}>
      <div className={clsx(classes.links)}>
        <AppLink to={'/'} className={classes.mainLink}>
          {t('Главная')}
        </AppLink>

        <AppLink to={'/about'}>{t('О сайте')}</AppLink>
      </div>
    </div>
  );
};
