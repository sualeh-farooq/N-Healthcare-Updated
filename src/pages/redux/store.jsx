// store.js
import { configureStore } from '@reduxjs/toolkit';
import checkoutReducer from './DataFeature/checkoutSlice'

export const store = configureStore({
  reducer: {
    checkout: checkoutReducer,
  },
});
