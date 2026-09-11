import { createSlice } from "@reduxjs/toolkit";

const savedWishlist = JSON.parse(localStorage.getItem('wishlist'))
const initialState = savedWishlist ? savedWishlist : ([]);

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState,
    reducers:{
        handleWishlist:(state,action)=>{
            const exist = state.includes(action.payload);
            if(exist){
                return  state.filter(item => item !== action.payload)
            }else{
                state.push(action.payload)
            }
        }
    }
})

export const{handleWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;