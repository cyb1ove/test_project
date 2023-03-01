import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const selectPassword = (state: StateSchema) => state.loginForm.password;
