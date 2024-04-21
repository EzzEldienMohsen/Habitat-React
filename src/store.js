import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './features/cart/CartSlice';
import WishListReducer from './features/wishlist/WishListSlice';

export var store = configureStore({
  reducer: {
    cart: CartReducer,
    wishList:WishListReducer
  }})