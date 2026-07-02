import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import uiReducer from './slices/uiSlice';
import appointmentReducer from './slices/appointmentSlice';
import { baseApi } from './api/baseApi';

export const store = configureStore({
  reducer: {
    auth:        authReducer,
    ui:          uiReducer,
    appointment: appointmentReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(baseApi.middleware),
  devTools: import.meta.env.MODE !== 'production',
});

export default store;
