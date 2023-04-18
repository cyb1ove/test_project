import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { selectLoginIsLoading } from './selectLoginIsLoading';

describe('getLoginError.test', () => {
  test('should return error', async () => {
    const state = {
      loginForm: {
        isLoading: true,
      },
    };

    expect(selectLoginIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should return undefined', async () => {
    const state = {};
    expect(selectLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
