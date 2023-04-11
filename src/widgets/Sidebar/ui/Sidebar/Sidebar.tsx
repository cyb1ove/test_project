import { clsx } from 'clsx';
import { selectUserAuthData, userActions } from 'entities/User';
import { FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const user = useSelector(selectUserAuthData);
  const [collapsed, setCollapsed] = useState(false);

  const dispatch = useDispatch();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

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
          <SidebarItem
            to={path}
            text={text}
            icon={icon}
            collapsed={collapsed}
          />
        ))}
      </ul>

      <Button
        data-testid="collapse-button"
        className={classes.collapsedBtn}
        theme={ThemeButton.BACKGROUND}
        size={ButtonSize.SMALL}
        shaped={ShapedTypes.CIRCLE}
        onClick={onToggle}
      >
        <ShevronIcon className={clsx(mods)} />
      </Button>

      <Button
        className={clsx(classes.item)}
        theme={ThemeButton.OUTLINE}
        size={ButtonSize.LARGE}
        onDoubleClick={onLogout}
        image={<img className={classes.avatar} src={user.avatar} />}
      >
        <span className={clsx(classes.username, mods)}>{user.username}</span>
      </Button>
    </aside>
  );
};
