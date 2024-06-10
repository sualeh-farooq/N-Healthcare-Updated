// store.js
import { configureStore } from '@reduxjs/toolkit';
import checkoutReducer from './DataFeature/checkoutSlice'

const store = configureStore({
  reducer: {
    checkout: checkoutReducer,
  },
});

export default store