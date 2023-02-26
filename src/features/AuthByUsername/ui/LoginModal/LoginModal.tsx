import { clsx } from 'clsx';
import { forwardRef } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';

import { LoginForm } from '../LoginForm/LoginForm';
import classes from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
}

type Ref = HTMLDivElement;

export const LoginModal = forwardRef<Ref, LoginModalProps>(
  ({ className, isOpen, onClose, ...rest }, ref) => {
    return (
      <Modal
        className={clsx(classes.LoginModal, className)}
        isOpen={isOpen}
        onClose={onClose}
        ref={ref}
        {...rest}
      >
        <LoginForm />
      </Modal>
    );
  }
);
