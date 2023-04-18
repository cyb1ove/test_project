import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { selectProfileError } from './selectProfileError';

describe('selectProfileError.test', () => {
  test('should return error', async () => {
    const state = {
      profile: {
        error: 'error',
      },
    };

    expect(selectProfileError(state as StateSchema)).toEqual('error');
  });

  test('should return undefined', async () => {
    const state = {};
    expect(selectProfileError(state as StateSchema)).toBe('');
  });
});
