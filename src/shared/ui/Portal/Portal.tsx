import { FC, ReactElement } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactElement;
  isDisabled?: boolean;
}

export const Portal: FC<PortalProps> = ({ children, isDisabled }) => {
  const target = document.querySelector('#dialogs-root');

  if (isDisabled || !target) {
    return children;
  }

  return createPortal(children, target);
};
