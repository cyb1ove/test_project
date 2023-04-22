import { ReducersMapObject } from '@reduxjs/toolkit';
import { useStableNavigate } from 'app/providers/StableNavigateContextProvider';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  const navigate = useStableNavigate();
  const store = createReduxStore(
    initialState,
    asyncReducers as ReducersMapObject<StateSchema>,
    navigate
  );
  return <Provider store={store}>{children}</Provider>;
};
