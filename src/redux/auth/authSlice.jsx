import { createSlice } from '@reduxjs/toolkit';
import { register } from '../../redux/auth/authOperations';
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
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  //   whitelist: ['contacts'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
// export default authSlice.reducer;
