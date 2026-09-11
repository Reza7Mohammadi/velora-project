import  {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import wishlistReducer from '../features/wishlist/wishlistSlice';
import { middleWare } from './localStorageMiddleware'

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        wishlist:wishlistReducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(middleWare)
    }
})
