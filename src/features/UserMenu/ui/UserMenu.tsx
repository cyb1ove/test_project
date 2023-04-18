import { clsx } from 'clsx';
import { selectUserAuthData, userActions } from 'entities/User';
import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';

import classes from './UserMenu.module.scss';

interface UserButtonProps {
  className?: string;
  collapsed?: boolean;
}
export const UserMenu: FC<UserButtonProps> = ({ className, collapsed }) => {
  const user = useSelector(selectUserAuthData);

  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const userMenuTheme = {
    general: ThemeButton.OUTLINE,
    size: ButtonSize.LARGE,
  };

  return (
    <Button
      className={clsx(classes.UserButton, className)}
      theme={userMenuTheme}
      onDoubleClick={onLogout}
      collapsed={collapsed}
    >
      <Button.Extra
        component="img"
        className={classes.avatar}
        src={user?.avatar}
      />

      <Button.Text text={user?.username || ''} align="center" />
    </Button>
  );
};
