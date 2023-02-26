import { clsx } from 'clsx';
import { LoginModal } from 'features/AuthByUsername';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { usePopperTooltip } from 'react-popper-tooltip';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [showLoginModal, setShowLoginModal] = useState(false);
  const { getTooltipProps, setTooltipRef, setTriggerRef, visible } =
    usePopperTooltip({
      trigger: 'click',
      placement: 'bottom-end',
      closeOnOutsideClick: false,
      visible: showLoginModal,
      onVisibleChange: setShowLoginModal,
    });

  const onCloseLoginModal = useCallback(() => setShowLoginModal(false), []);

  return (
    <div className={clsx(classes.Navbar, className)}>
      <Button
        className={clsx(classes.login_button)}
        theme={ThemeButton.OUTLINE}
        ref={setTriggerRef}
      >
        {t('Войти')}
      </Button>

      <LoginModal
        isOpen={visible}
        onClose={onCloseLoginModal}
        ref={setTooltipRef}
        {...getTooltipProps()}
      />
    </div>
  );
};
