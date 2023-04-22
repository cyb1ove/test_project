import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('longSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: '123' };
    expect(
      loginReducer(
        state as LoginSchema,
        loginActions.updateField({ key: 'username', value: '123123' })
      )
    ).toEqual({ username: '123123' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { username: '123' };
    expect(
      loginReducer(
        state as LoginSchema,
        loginActions.updateField({ key: 'password', value: '123123' })
      )
    ).toEqual({ username: '123123' });
  });
});
