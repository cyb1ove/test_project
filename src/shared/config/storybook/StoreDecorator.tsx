import { Story } from '@storybook/react';
import { StableNavigateContextProvider } from 'app/providers/StableNavigateContextProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/hooks/useDynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
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
