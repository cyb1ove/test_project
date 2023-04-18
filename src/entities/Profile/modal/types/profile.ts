export interface Profile {
  username: string;
  firstname: string;
  email: string;
  lastname: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
