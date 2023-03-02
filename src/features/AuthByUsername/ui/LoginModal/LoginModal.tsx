import { clsx } from 'clsx';
import { forwardRef, Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal/Modal';

// import LoginForm from '../LoginForm/LoginForm';
import LoginFormAsync from '../LoginForm/LoginForm.async';
import classes from './LoginModal.module.scss';

export interface LoginModalProps {
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
        <Suspense fallback={<Loader />}>
          <LoginFormAsync />
        </Suspense>
      </Modal>
    );
  }
);
