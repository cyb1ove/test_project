import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { NavigateFunction } from 'react-router-dom';
import { $api } from 'shared/api/api';

import { createReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';

export function createReduxStore(
  initialState?: DeepPartial<StateSchema>,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: NavigateFunction
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    ...asyncReducers,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<any>({
    reducer: reducerManager.reduce,
    devTools: IS_DEV,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
      }),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}
