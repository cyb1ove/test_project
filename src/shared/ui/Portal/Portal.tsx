import { FC, ReactElement } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactElement;
  isPortalDisabled?: boolean;
}

export const Portal: FC<PortalProps> = ({ children, isPortalDisabled }) => {
  const target = document.querySelector('#dialogs-root');

  return isPortalDisabled
    ? children
    : target
    ? createPortal(children, document.querySelector('#dialogs-root'))
    : null;
};
