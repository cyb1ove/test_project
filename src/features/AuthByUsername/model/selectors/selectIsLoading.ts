import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const selectIsLoading = (state: StateSchema) =>
  state?.loginForm?.isLoading || false;
