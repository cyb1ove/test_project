import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

import { Profile } from '../../types/profile';

export interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>(
  'profile/fetchProfileData',
  async (_, { extra, dispatch, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Profile>('/profile');

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
