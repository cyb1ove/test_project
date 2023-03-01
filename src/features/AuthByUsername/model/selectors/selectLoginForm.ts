import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const selectLoginForm = (state: StateSchema) => state.loginForm;
