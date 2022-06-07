import { configureStore } from '@reduxjs/toolkit';
import { authSlice, cardSlice } from './slices';

const store = configureStore({
  reducer: {
    auth: authSlice,
    card: cardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
