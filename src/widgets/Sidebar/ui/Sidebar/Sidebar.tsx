import { clsx } from 'clsx';
import { FC, useState } from 'react';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

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
    >
      <button onClick={onToggle}>toggle</button>

      <div className={clsx(classes.switchers, collapsed && classes.vertical)}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
