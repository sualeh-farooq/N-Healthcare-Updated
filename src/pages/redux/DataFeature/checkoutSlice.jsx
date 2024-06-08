// checkoutSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    formData: null,
    cart: [],
    total: 0,
  },
  reducers: {
    setFormDataRedux: (state, action) => {
      state.formData = action.payload;
    },
    setCartRedux: (state, action) => {
      state.cart = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { setFormDataRedux, setCartRedux, setTotal } = checkoutSlice.actions;

export const selectFormData = (state) => state.checkout.formData;
export const selectCart = (state) => state.checkout.cart;
export const selectTotal = (state) => state.checkout.total;

export default checkoutSlice.reducer;
