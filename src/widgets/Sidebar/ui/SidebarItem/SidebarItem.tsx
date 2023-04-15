import { ErrorContext } from 'app/providers/ErrorBoundary/ui/ErrorBoundary';
import { ComponentType, FC, useContext, useEffect, useState } from 'react';
import { LinkProps, NavLink, useLocation } from 'react-router-dom';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';

import classes from './SidebarItem.module.scss';

interface SidebarItemProps extends LinkProps {
  text: string;
  to: string;
  icon: ComponentType;
}

export const SidebarItem: FC<SidebarItemProps> = ({ to, text, icon: Icon }) => {
  const location = useLocation();
  const { clearError } = useContext(ErrorContext);

  const [active, setActive] = useState(false);

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
        leftElement={<Icon />}
        theme={active ? ThemeButton.PRIMARY : ThemeButton.EMPTY}
        hoverTheme={ThemeButton.PRIMARY}
        align="left"
      >
        {text}
      </Button>
    </li>
  );
};
