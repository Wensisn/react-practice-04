import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: '',
    isLoggenIn: false,
  },
  reducers: {
    logIn(state, action) {
      state.login = action.payload;
      state.isLoggenIn = true;
    },
    logOut(state) {
      state.login = '';
      state.isLoggenIn = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
