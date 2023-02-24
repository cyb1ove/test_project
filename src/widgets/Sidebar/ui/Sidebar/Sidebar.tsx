import { clsx } from 'clsx';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { FC, useState } from 'react';
import HomeIcon from 'shared/assets/icons/home.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import ShevronIcon from 'shared/assets/icons/shevron.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import {
  Button,
  ButtonRoundedTypes,
  ButtonSize,
  ThemeButton,
} from 'shared/ui/Button/Button';

import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside
      data-testid="sidebar"
      className={clsx(classes.Sidebar, className, {
        [classes.collapsed]: collapsed,
      })}
    >
      <Button
        data-testid="collapse-button"
        onClick={onToggle}
        className={classes.collapsedBtn}
        theme={ThemeButton.BACKGROUND}
        rounded={ButtonRoundedTypes.FULL}
        size={ButtonSize.MEDIUM}
      >
        <ShevronIcon />
      </Button>

      <ul className={classes.items}>
        <AppLink
          to={RoutePath.main}
          className={classes.link}
          text="Главная"
          icon={<HomeIcon />}
          collapsed={collapsed}
        />

        <AppLink
          to={RoutePath.about}
          className={classes.link}
          text="О сайте"
          icon={<ListIcon />}
          collapsed={collapsed}
        />
      </ul>

      <div className={clsx(classes.switchers)}>
        <ThemeSwitcher className={classes.switcher} collapsed={collapsed} />
      </div>
    </aside>
  );
};
