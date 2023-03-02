import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const selectUsername = (state: StateSchema) =>
  state?.loginForm?.username;
