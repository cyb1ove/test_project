import { UserSchema } from 'entities/User/model';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
  user: UserSchema;
  loginForm?: LoginSchema;
}
