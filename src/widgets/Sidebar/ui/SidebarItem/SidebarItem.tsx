import { ErrorContext } from 'app/providers/ErrorBoundary/ui/ErrorBoundary';
import { clsx } from 'clsx';
import { ComponentType, FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LinkProps, NavLink } from 'react-router-dom';

import classes from './SidebarItem.module.scss';

interface SidebarItemProps extends LinkProps {
  text: string;
  to: string;
  icon: ComponentType;
  collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = ({
  to,
  text,
  collapsed,
  icon: Icon,
}) => {
  const { t } = useTranslation();
  const { clearError } = useContext(ErrorContext);

  const mods = [{ [classes.collapsed]: collapsed }];

  return (
    <li className={clsx(classes.SidebarItem, mods)} onClick={clearError}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? classes.active_link : classes.link
        }
      >
        <div className={classes.icon}>
          <Icon />
        </div>

        <span className={classes.text}>{t(text)}</span>
      </NavLink>
    </li>
  );
};
