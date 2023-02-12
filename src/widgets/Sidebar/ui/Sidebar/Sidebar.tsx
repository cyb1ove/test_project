import { clsx } from 'clsx';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { FC, useState } from 'react';

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
      className={clsx(classes.Sidebar, className, {
        [classes.collapsed]: collapsed,
      })}
      onClick={onToggle}
    >
      <div className={clsx(classes.switchers, collapsed && classes.vertical)}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
