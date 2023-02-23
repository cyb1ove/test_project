import { clsx } from 'clsx';
import { FC, ReactNode, useCallback, useEffect } from 'react';
import { useTheme } from 'shared/hooks/useTheme';

import { Portal } from '../Portal/Portal';
import classes from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  isPortalDisabled?: boolean;
}

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
  isPortalDisabled,
}) => {
  const { theme } = useTheme();

  const mods: Record<string, boolean> = {
    [classes.openned]: isOpen,
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler]
  );

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal isPortalDisabled={isPortalDisabled}>
      <div className={clsx(classes.wrapper, theme)} onClick={closeHandler}>
        <div
          className={clsx(classes.Modal, className, mods)}
          onClick={onContentClick}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};
