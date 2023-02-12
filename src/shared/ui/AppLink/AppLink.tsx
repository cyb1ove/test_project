import { clsx } from 'clsx';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import classes from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  className,
  children,
  theme = AppLinkTheme.PRIMARY,
  ...otherProps
}) => {
  return (
    <Link
      to={to}
      className={clsx(classes.AppLink, [className, classes[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};