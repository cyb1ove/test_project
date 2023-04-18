import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const selectLoginPassword = (state: StateSchema) =>
  state?.loginForm?.password;
