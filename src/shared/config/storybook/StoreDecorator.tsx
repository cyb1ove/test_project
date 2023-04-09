import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StableNavigateContextProvider } from 'app/providers/StableNavigateContextProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
};

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  ) =>
  (StoryComponent: Story) =>
    (
      <StableNavigateContextProvider>
        <StoreProvider
          initialState={state}
          asyncReducers={{ ...asyncReducers, ...defaultAsyncReducers }}
        >
          <StoryComponent />
        </StoreProvider>
      </StableNavigateContextProvider>
    );
