import { ErrorContext } from 'app/providers/ErrorBoundary/ui/ErrorBoundary';
import { clsx } from 'clsx';
import { ComponentType, FC, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LinkProps, NavLink, useLocation } from 'react-router-dom';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';

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
  const location = useLocation();
  const { t } = useTranslation();
  const { clearError } = useContext(ErrorContext);

  const [active, setActive] = useState(false);

  const mods = {
    [classes.collapsed]: collapsed,
  };

  useEffect(() => {
    if (location.pathname === to) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [location, to]);

  return (
    <li className={classes.SidebarItem} onClick={clearError}>
      <Button
        component={NavLink}
        to={to}
        size={ButtonSize.LARGE}
        image={<Icon />}
        theme={active ? ThemeButton.BACKGROUND : ThemeButton.EMPTY}
        hoverTheme={ThemeButton.BACKGROUND}
      >
        <span className={clsx(classes.text, mods)}>{t(text)}</span>
      </Button>
    </li>
  );
};
