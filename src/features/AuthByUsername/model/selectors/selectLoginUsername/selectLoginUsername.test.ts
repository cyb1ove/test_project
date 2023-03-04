import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { selectLoginUsername } from './selectLoginUsername';

describe('getLoginError.test', () => {
  test('should return error', async () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'test',
      },
    };

    expect(selectLoginUsername(state as StateSchema)).toEqual('test');
  });

  test('should return undefined', async () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectLoginUsername(state as StateSchema)).toBeUndefined();
  });
});
