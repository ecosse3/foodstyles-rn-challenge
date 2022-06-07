import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store';

interface User {
  name: string;
  email: string;
}

interface AuthState {
  user?: User;
}

const initialState = {
  user: undefined,
} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
    login(state: AuthState, action: PayloadAction<AuthState['user']>) {
      state.user = action.payload;
    },
  },
});

// Actions
export const { login, logout } = authSlice.actions;

// Selectors
export const selectAuth = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
