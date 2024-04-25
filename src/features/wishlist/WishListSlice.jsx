import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const getWishListFromLocalStore = () => {
  return JSON.parse(localStorage.getItem('wishList')) || defaultItems;
};

const defaultItems = {
  wishListItems: [],
  numItemsInWishList: 0,
};
const wishListSlice = createSlice({
  name: 'wishList',
  initialState: getWishListFromLocalStore(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const existingItem = state.wishListItems.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        toast.success('Item is already in Wish List');
      } else {
        state.wishListItems.push(product);
        state.numItemsInWishList += 1;
        toast.success('Item is added to Wish list');
      }
      localStorage.setItem('wishList', JSON.stringify(state));
    },
    clearWishList: () => {
      localStorage.setItem('wishList', JSON.stringify(defaultItems));
      return defaultItems;
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      state.wishListItems = state.wishListItems.filter(
        (item) => item.id !== id
      );
      state.numItemsInWishList -= 1;
      toast.error('Item is removed from your Wish List');
      localStorage.setItem('wishList', JSON.stringify(state));
    },
  },
});

export const {addItem,removeItem,clearWishList} = wishListSlice.actions;
export default wishListSlice.reducer