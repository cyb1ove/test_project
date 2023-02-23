import { FC, ReactElement } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactElement;
  isPortalDisabled?: boolean;
}

export const Portal: FC<PortalProps> = ({ children, isPortalDisabled }) => {
  return !isPortalDisabled
    ? createPortal(children, document.querySelector('#dialogs-root'))
    : children;
};
