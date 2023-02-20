import { ErrorContext } from 'app/providers/ErrorBoundary/ui/ErrorBoundary';
import { clsx } from 'clsx';
import { FC, ReactElement, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LinkProps, NavLink } from 'react-router-dom';

import classes from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  text: string;
  icon: ReactElement;
  collapsed: boolean;
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  className,
  theme = AppLinkTheme.PRIMARY,
  text,
  icon,
  collapsed,
  ...otherProps
}) => {
  const { t } = useTranslation();
  const { clearError } = useContext(ErrorContext);
  const mods = [classes[theme], { [classes.collapsed]: collapsed }];

  return (
    <li className={clsx(classes.AppLink, className, mods)} onClick={clearError}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? classes.active_link : classes.link
        }
        {...otherProps}
      >
        <div className={classes.icon}>{icon}</div>

        <span className={classes.text}>{t(text)}</span>
      </NavLink>
    </li>
  );
};
