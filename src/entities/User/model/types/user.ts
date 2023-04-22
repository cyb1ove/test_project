export interface User {
  id: string;
  username: string;
  avatar: string;
  email: string;
}

export interface UserSchema {
  authData?: User;
}
