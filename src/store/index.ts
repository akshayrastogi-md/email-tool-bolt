import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import campaignReducer from './slices/campaignSlice';
import templateReducer from './slices/templateSlice';
import contactReducer from './slices/contactSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    campaigns: campaignReducer,
    templates: templateReducer,
    contacts: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
