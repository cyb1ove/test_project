import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const selectError = (state: StateSchema) => state?.loginForm?.error;
