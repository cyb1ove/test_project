import { configureStore, DeepPartial } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User/model';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: DeepPartial<StateSchema>) {
  return configureStore<DeepPartial<StateSchema>>({
    reducer: {
      user: userReducer,
      loginForm: loginReducer,
    },
    devTools: IS_DEV,
    preloadedState: initialState,
  });
}
