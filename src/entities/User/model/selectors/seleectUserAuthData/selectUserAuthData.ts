import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const selectUserAuthData = (state: StateSchema) => state.user?.authData;
