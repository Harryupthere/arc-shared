import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';
import commonSlice from './slice/commonSlice';
import languageSlice from './slice/languageSlice';

const store = configureStore({
  reducer: {
    auth:authSlice.reducer,
    common:commonSlice.reducer,
    language: languageSlice.reducer
  },
 
});

export default store;
