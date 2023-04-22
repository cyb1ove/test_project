import { ErrorContext } from 'app/providers/ErrorBoundary/ui/ErrorBoundary';
import { FC, useContext } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import { useActive } from 'shared/lib/hooks/useActive';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';

import classes from './SidebarItem.module.scss';

interface SidebarItemProps extends LinkProps {
  text: string;
  to: string;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const buttonTheme = {
  general: ThemeButton.EMPTY,
  size: ButtonSize.LARGE,
};

export const SidebarItem: FC<SidebarItemProps> = ({ to, text, icon: Icon }) => {
  const { clearError } = useContext(ErrorContext);
  const active = useActive(to);

  return (
    <li className={classes.SidebarItem} onClick={clearError}>
      <Button component={NavLink} to={to} theme={buttonTheme} active={active}>
        <Button.Extra component={Icon} />
        <Button.Text text={text} align="left" offset={10} />
      </Button>
    </li>
  );
};
