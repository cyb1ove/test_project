import { useContext } from 'react';
import { NavigateFunction } from 'react-router-dom';

import { StableNavigateContext } from './StableNavigateContextProvider';

export const useStableNavigate = (): NavigateFunction | undefined => {
  const navigateRef = useContext(StableNavigateContext);
  if (navigateRef?.current === null)
    throw new Error('StableNavigate context is not initialized');

  return navigateRef?.current;
};
