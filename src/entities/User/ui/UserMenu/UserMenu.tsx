import clsx from 'clsx';
import { selectUserAuthData, userActions } from 'entities/User';
import { FC, useEffect, useState } from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { ContextMenu } from 'shared/ui/ContextMenu/ContextMenu';

import { UserHeader } from '../UserHeader/UserHeader';
import classes from './UserMenu.module.scss';

interface UserButtonProps {
  className?: string;
  collapsed?: boolean;
}
export const UserMenu: FC<UserButtonProps> = ({ className, collapsed }) => {
  const user = useSelector(selectUserAuthData);

  const [visible, onVisibleChange] = useState(false);
  const { getTooltipProps, setTooltipRef, setTriggerRef } = usePopperTooltip({
    trigger: 'click',
    placement: 'right-start',
    visible,
    onVisibleChange,
  });

  const location = useLocation();

  const menuItems = {
    Выйти: userActions.logout,
  };

  const userMenuTheme = {
    general: ThemeButton.OUTLINE,
    size: ButtonSize.LARGE,
  };

  useEffect(() => {
    onVisibleChange(false);
  }, [location]);

  return (
    <div className={clsx(classes.UserMenu, className)}>
      <Button
        className={classes.userButton}
        theme={userMenuTheme}
        collapsed={collapsed}
        innerRef={setTriggerRef}
        active={visible}
      >
        <Button.Extra
          component="img"
          className={classes.avatar}
          src={user?.avatar}
        />

        <Button.Text text={user?.username || ''} align="center" />
      </Button>

      {visible && (
        <ContextMenu
          className={classes.userMenu}
          menuItems={menuItems}
          header={<UserHeader />}
          innerRef={setTooltipRef}
          {...getTooltipProps()}
        />
      )}
    </div>
  );
};
