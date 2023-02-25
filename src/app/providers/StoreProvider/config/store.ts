import { configureStore } from '@reduxjs/toolkit';

import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore({
    reducer: {},
    devTools: IS_DEV,
    preloadedState: initialState,
  });
}
