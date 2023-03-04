import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { selectLoginPassword } from './selectLoginPassword';

describe('getLoginError.test', () => {
  test('should return error', async () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: 'test',
      },
    };

    expect(selectLoginPassword(state as StateSchema)).toEqual('test');
  });

  test('should return undefined', async () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectLoginPassword(state as StateSchema)).toBeUndefined();
  });
});
