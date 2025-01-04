import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userslice';


export const store = configureStore({
  reducer: {user: userReducer},
  middleware: (getDefaultMiddlewre) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

