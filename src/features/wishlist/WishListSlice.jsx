import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const getWishListFromLocalStore = ()=>{
    return JSON.parse(localStorage.getItem("wishList")) || defaultItems;
}

const defaultItems ={
    wishListItems:[]
}
const wishListSlice = createSlice({
    name:"wishList",
    initialState:getWishListFromLocalStore(),
    reducers:{
        addItem:(state,action)=>{
            const {product} =action.payload
            const items = state.wishListItems.find((i)=>i.wishListId === product.wishListId);
            if(items){
                toast.success("Item is already in Wish List")
            }else{
                toast.success("Item is added to Wish list");
            }
        },
        clearWishList:()=>{
            localStorage.setItem("wishList",JSON.stringify(defaultItems));
            return defaultItems
        },
        removeItem:(state,action)=>{
            const {wishListId}= action.payload;
            state.wishListItems = state.wishListItems.filter((i)=>i.wishListId !== wishListId);
                  toast.error('item is removed from your wishList');

        }
    }
})
export const {addItem,removeItem,clearWishList} = wishListSlice.actions;
export default wishListSlice.reducer