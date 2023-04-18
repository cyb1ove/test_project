import { ErrorContext } from 'app/providers/ErrorBoundary/ui/ErrorBoundary';
import { FC, useContext, useEffect, useState } from 'react';
import { LinkProps, NavLink, useLocation } from 'react-router-dom';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';

import classes from './SidebarItem.module.scss';

interface SidebarItemProps extends LinkProps {
  text: string;
  to: string;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const buttonTheme = (active: boolean) => ({
  theme: active ? ThemeButton.PRIMARY : ThemeButton.EMPTY,
  size: ButtonSize.LARGE,
  hoverTheme: ThemeButton.PRIMARY,
});

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
      <Button component={NavLink} to={to} theme={buttonTheme(active)}>
        <Button.Extra component={Icon} />
        <Button.Text text={text} align="left" offset={10} />
      </Button>
    </li>
  );
};
