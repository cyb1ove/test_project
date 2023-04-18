import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { selectLoginPassword } from './selectLoginPassword';

describe('getLoginError.test', () => {
  test('should return error', async () => {
    const state = {
      loginForm: {
        password: 'test',
      },
    };

    expect(selectLoginPassword(state as StateSchema)).toEqual('test');
  });

  test('should return undefined', async () => {
    const state = {};
    expect(selectLoginPassword(state as StateSchema)).toBeUndefined();
  });
});
