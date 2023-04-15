import { clsx } from 'clsx';
import { UserMenu } from 'features/UserMenu';
import { FC, useState } from 'react';
import ShevronIcon from 'shared/assets/icons/shevron.svg';
import {
  Button,
  ButtonSize,
  ShapedTypes,
  ThemeButton,
} from 'shared/ui/Button/Button';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';

import { SidebarItem } from '../SidebarItem/SidebarItem';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const mods = { [classes.collapsed]: collapsed };

  return (
    <aside
      data-testid="sidebar"
      className={clsx(classes.Sidebar, className, {
        [classes.collapsed]: collapsed,
      })}
    >
      <ul className={classes.items}>
        {SidebarItemsList.map(({ path, text, icon }) => (
          <SidebarItem key={path} to={path} text={text} icon={icon} />
        ))}
      </ul>

      <Button
        data-testid="collapse-button"
        className={classes.collapsedBtn}
        theme={ThemeButton.PRIMARY}
        size={ButtonSize.SMALL}
        shaped={ShapedTypes.CIRCLE}
        onClick={onToggle}
        icon={<ShevronIcon className={clsx(mods)} />}
      />

      <UserMenu />
    </aside>
  );
};
