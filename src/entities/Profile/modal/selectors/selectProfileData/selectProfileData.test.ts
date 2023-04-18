import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { selectProfileData } from './selectProfileData';

describe('selectProfileData.test', () => {
  test('should return error', async () => {
    const state = {
      profile: {
        data: {},
      },
    };

    expect(selectProfileData(state as StateSchema)).toEqual({});
  });

  test('should return undefined', async () => {
    const state = {};
    expect(selectProfileData(state as StateSchema)).toBeUndefined();
  });
});
