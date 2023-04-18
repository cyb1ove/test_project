import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { selectProfileIsLoading } from './selectProfileIsLoading';

describe('selectProfileIsLoading.test', () => {
  test('should return error', async () => {
    const state = {
      profile: {
        isLoading: true,
      },
    };

    expect(selectProfileIsLoading(state as StateSchema)).toBeTruthy();
  });

  test('should return undefined', async () => {
    const state = {};
    expect(selectProfileIsLoading(state as StateSchema)).toBeFalsy();
  });
});
