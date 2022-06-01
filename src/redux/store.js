import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedAuthReducer } from '../redux/auth/authSlice';
import { myContactsApi } from './contactsSlice';

export const store = configureStore({
  reducer: {
    [myContactsApi.reducerPath]: myContactsApi.reducer,
    auth: persistedAuthReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    myContactsApi.middleware,
  ],
});

export const persistor = persistStore(store);
