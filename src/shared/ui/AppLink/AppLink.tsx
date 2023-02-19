import { clsx } from 'clsx';
import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, LinkProps } from 'react-router-dom';

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
  const mods = [classes[theme], { [classes.collapsed]: collapsed }];

  return (
    <Link
      to={to}
      className={clsx(classes.AppLink, className, mods)}
      {...otherProps}
    >
      <div className={classes.icon}>{icon}</div>

      <span className={classes.text}>{t(text)}</span>
    </Link>
  );
};
