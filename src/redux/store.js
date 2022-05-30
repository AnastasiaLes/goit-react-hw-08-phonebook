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
import { authReducer } from '../redux/auth/authSlice';
// import { persistedMyContactsReducer } from './contactsSlice';
// import persistReducer from 'redux-persist/es/persistReducer';

export const store = configureStore({
  reducer: {
    // myContacts: persistedMyContactsReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import persistReducer from 'redux-persist/es/persistReducer';
// import { myContactsApi } from './contactsSlice';
// import persistStore from 'redux-persist/es/persistStore';
// import authReducer from '../redux/auth/authSlice';

// export const store = configureStore({
//   reducer: {
//         [myContactsApi.reducerPath]: myContactsApi.reducer,
//       auth: persistReducer(authReducer)
//   },
//   middleware: (getDefaultMiddleware) => [
//     ...getDefaultMiddleware(),
//     myContactsApi.middleware,
//    ]
// })

// export const persistor = persistStore(store)
