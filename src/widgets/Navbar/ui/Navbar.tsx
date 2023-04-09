import { clsx } from 'clsx';
import { selectUserAuthData, userActions } from 'entities/User';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { usePopperTooltip } from 'react-popper-tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(selectUserAuthData);

  // const [showLoginModal, setShowLoginModal] = useState(false);
  // const { getTooltipProps, setTooltipRef, setTriggerRef, visible } =
  //   usePopperTooltip({
  //     trigger: 'click',
  //     placement: 'bottom-end',
  //     closeOnOutsideClick: false,
  //     visible: showLoginModal,
  //     onVisibleChange: setShowLoginModal,
  //   });

  // const onCloseLoginModal = useCallback(() => setShowLoginModal(false), []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={clsx(classes.Navbar, className)}>
        <Button
          className={clsx(classes.login_button)}
          size={ButtonSize.MEDIUM}
          theme={ThemeButton.OUTLINE}
          onMouseUp={onLogout}
        >
          {t('Выйти')}
        </Button>
      </div>
    );
  }

  return (
    <div className={clsx(classes.Navbar, className)}>
      <Button
        className={clsx(classes.login_button)}
        theme={ThemeButton.OUTLINE}
        size={ButtonSize.MEDIUM}
        data-testid="login-button"
      >
        {t('Войти')}
      </Button>
    </div>
  );
};
