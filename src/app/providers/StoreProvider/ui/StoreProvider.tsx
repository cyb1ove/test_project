import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  childred?: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider: FC<StoreProviderProps> = ({
  childred,
  initialState,
}) => {
  const store = createReduxStore(initialState);
  return <Provider store={store}>{childred}</Provider>;
};
