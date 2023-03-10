import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  loginByUsername,
  LoginByUsernameProps,
} from '../../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../../types/loginSchema';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
};

type UpdatePayloadType = {
  key: keyof LoginByUsernameProps;
  value: string;
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<UpdatePayloadType>) => {
      const {
        payload: { key, value },
      } = action;

      state[key] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
