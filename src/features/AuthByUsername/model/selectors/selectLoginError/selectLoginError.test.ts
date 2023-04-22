import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { selectLoginError } from './selectLoginError';

describe('getLoginError.test', () => {
  test('should return error', async () => {
    const state = {
      loginForm: {
        error: 'error',
      },
    };

    expect(selectLoginError(state as StateSchema)).toEqual('error');
  });

  test('should return undefined', async () => {
    const state = {};
    expect(selectLoginError(state as StateSchema)).toBeUndefined();
  });
});
