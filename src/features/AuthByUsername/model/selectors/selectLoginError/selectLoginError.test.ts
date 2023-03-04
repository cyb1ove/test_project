import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { selectLoginError } from './selectLoginError';

describe('getLoginError.test', () => {
  test('should return error', async () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    };

    expect(selectLoginError(state as StateSchema)).toEqual('error');
  });

  test('should return undefined', async () => {
    const state: DeepPartial<StateSchema> = {};
    expect(selectLoginError(state as StateSchema)).toBeUndefined();
  });
});
