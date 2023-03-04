import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const selectLoginUsername = (state: StateSchema) =>
  state?.loginForm?.username;
