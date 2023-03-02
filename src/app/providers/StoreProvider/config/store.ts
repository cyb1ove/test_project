import {
  configureStore,
  DeepPartial,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/User/model';

import { createReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: DeepPartial<StateSchema>) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<DeepPartial<StateSchema>>({
    reducer: reducerManager.reduce,
    devTools: IS_DEV,
    preloadedState: initialState,
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}
