import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const selectLoginIsLoading = (state: StateSchema) =>
  state?.loginForm?.isLoading || false;
