/* eslint-disable i18next/no-literal-string */
import { clsx } from 'clsx';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

import classes from './UserLogin.module.scss';

interface UserLoginProps {
  className?: string;
}

export const UserLogin: FC<UserLoginProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <Button
        className={clsx(classes.UserLogin, className)}
        theme={ThemeButton.OUTLINE}
        onClick={() => setIsAuthModalOpen((prev) => !prev)}
      >
        {t('Войти')}
      </Button>

      <Modal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsam.
        Illum consequuntur sequi quasi similique voluptatibus sit in quaerat ex,
        cupiditate molestiae! Odio consequuntur fugiat aut beatae mollitia
        veritatis voluptas?
      </Modal>
    </>
  );
};
