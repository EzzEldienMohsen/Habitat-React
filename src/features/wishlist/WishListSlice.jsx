import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const getWishListFromLocalStore = ()=>{
    return JSON.parse(localStorage.getItem("wishList")) || defaultItems;
}

const defaultItems ={
    wishListItems:[],
     numItemsInWishList: 0,
}
const wishListSlice = createSlice({
    name:"wishList",
    initialState:getWishListFromLocalStore(),
    reducers:{
        addItem:(state,action)=>{
            const {product} =action.payload
            const items = state.wishListItems.find((i)=>i.id === product.id);
            if(items){
                toast.success("Item is already in Wish List")
            }else{
                state.wishListItems.push(product);
                localStorage.setItem('wishList',JSON.stringify(state));

                toast.success("Item is added to Wish list");
            }
                  state.numItemsInWishList += 1;

        },
        clearWishList:()=>{
            localStorage.setItem("wishList",JSON.stringify(defaultItems));
            return defaultItems
        },
        removeItem:(state,action)=>{
            const {id}= action.payload;
            state.wishListItems = state.wishListItems.filter((i)=>i.id !== id);
                  toast.error('item is removed from your wishList');

        }
    }
})
export const {addItem,removeItem,clearWishList} = wishListSlice.actions;
export default wishListSlice.reducer