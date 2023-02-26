import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User/model';

import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      user: userReducer,
    },
    devTools: IS_DEV,
    preloadedState: initialState,
  });
}
