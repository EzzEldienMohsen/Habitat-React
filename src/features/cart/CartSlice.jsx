import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const getCartFromLocalStore = ()=>{
      return JSON.parse(localStorage.getItem('cart')) || defaultState;
}

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStore(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const items = state.cartItems.find((i) => i.cartID === product.cartID);
      if (items) {
        items.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success('item added to cart');
    },
    clearCart: () => {
      localStorage.setItem('cart', JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const removedProduct = state.cartItems.find((i) => i.cartID === cartID);
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);
      state.numItemsInCart -= removedProduct.amount;
      state.cartTotal -= removedProduct.price * removedProduct.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.error('item is removed from your cart');
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === cartID);
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success('item amount is modified');
    }, calculateTotals: (state) => {
      state.tax = 0;
      state.tax += 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.tax + state.shipping;
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});
export const {addItem,clearCart,removeItem,calculateTotals} =cartSlice.actions
export default cartSlice.reducer;