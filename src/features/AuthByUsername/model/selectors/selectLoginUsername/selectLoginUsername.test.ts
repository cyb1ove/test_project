import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { selectLoginUsername } from './selectLoginUsername';

describe('getLoginError.test', () => {
  test('should return error', async () => {
    const state = {
      loginForm: {
        username: 'test',
      },
    };

    expect(selectLoginUsername(state as StateSchema)).toEqual('test');
  });

  test('should return undefined', async () => {
    const state = {};
    expect(selectLoginUsername(state as StateSchema)).toBeUndefined();
  });
});
