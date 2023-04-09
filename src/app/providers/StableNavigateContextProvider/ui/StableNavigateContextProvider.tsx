import {
  createContext,
  FC,
  MutableRefObject,
  ReactElement,
  useRef,
} from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

export const StableNavigateContext =
  createContext<MutableRefObject<NavigateFunction> | null>(null);

type Props = {
  children: ReactElement;
};

export const StableNavigateContextProvider: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const navigateRef = useRef(navigate);

  return (
    <StableNavigateContext.Provider value={navigateRef}>
      {children}
    </StableNavigateContext.Provider>
  );
};
