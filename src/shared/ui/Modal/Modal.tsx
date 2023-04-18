import { clsx } from 'clsx';
import {
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useTheme } from 'shared/lib/hooks/useTheme';

import { Portal } from '../Portal/Portal';
import classes from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  isDisabled?: boolean;
}

type Ref = HTMLDivElement;

export const Modal = forwardRef<Ref, ModalProps>(
  ({ className, children, isOpen, onClose, isDisabled, ...rest }, ref) => {
    const { theme } = useTheme();
    const [isClosing, setIsClosing] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const mods: Record<string, boolean | undefined> = {
      [classes.openned]: isOpen,
      [classes.closing]: isClosing,
    };

    const onCloseModal = useCallback(() => {
      setIsClosing(true);

      timeoutRef.current = setTimeout(() => {
        setIsClosing(false);
        onClose?.();
      }, 100);
    }, [onClose]);

    const onContentClick = (e: React.MouseEvent) => {
      e.stopPropagation();
    };

    useEffect(() => {
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onCloseModal();
        }
      };

      document.addEventListener('keydown', onKeyDown);

      return () => {
        document.removeEventListener('keydown', onKeyDown);
      };
    }, [isOpen, onCloseModal]);

    if (!isOpen) {
      return null;
    }

    return (
      <Portal isDisabled={isDisabled}>
        <div
          className={clsx(classes.wrapper, theme, mods)}
          onClick={onCloseModal}
          role="dialog"
        >
          <div
            data-testid="modal"
            className={clsx(className, classes.Modal)}
            onClick={onContentClick}
            ref={ref}
            {...rest}
          >
            {children}
          </div>
        </div>
      </Portal>
    );
  }
);
