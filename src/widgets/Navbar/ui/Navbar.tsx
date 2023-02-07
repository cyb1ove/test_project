import { clsx } from 'clsx';
import { FC } from 'react';
import { AppLink } from 'shared/ui/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={clsx(classes.Navbar, className)}>
    <ThemeSwitcher />

    <div className={clsx(classes.links)}>
      <AppLink to={'/'} className={classes.mainLink}>
        Главная
      </AppLink>

      <AppLink to={'/about'}>О сайте</AppLink>
    </div>
  </div>
);
