import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logOut,
  fetchCurrentUser,
} from '../../redux/auth/authOperations';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      // console.log('state: ', state, 'action: ', action);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled]: (state, action) => {
      // console.log('state: ', state, 'action: ', action);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled]: state => {
      // console.log('state: ', state);
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.fulfilled]: (state, action) => {
      // console.log('state: ', state);
      state.user = action.payload;
      // state.token = null;
      state.isLoggedIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

export const getName = state => state.auth.user.name;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
