import { clsx } from 'clsx';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { FC, useState } from 'react';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';

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
    <div
      data-testid="sidebar"
      className={clsx(classes.Sidebar, className, {
        [classes.collapsed]: collapsed,
      })}
    >
      <Button
        onClick={onToggle}
        className={classes.collapsedBtn}
        theme={ThemeButton.BACKGROUND}
        rounded
        size={ButtonSize.SMALL}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={clsx(classes.switchers, collapsed && classes.vertical)}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
