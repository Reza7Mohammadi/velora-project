import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem('cart'));
const initialState = savedCart ? ({items:savedCart}) : ({items:[]});

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const exist = state.items.find(item=>item.id===action.payload.id);
            if(exist){
                exist.quantity+=1;
            }else{
                state.items.push({...action.payload,quantity:1});
            }
        },
        removeFromCart:(state,action)=>{
            state.items = state.items.filter(item=> item.id !== action.payload);
        },
        increaseQuantity:(state,action)=>{
            const item = state.items.find(e => e.id === action.payload)
            if(item){
                item.quantity+=1;
            }
        },
        decreaseQuantity:(state,action)=>{
            const item = state.items.find(e => e.id === action.payload);
            if(item){
                if(item.quantity>1){
                   item.quantity-=1;
                }else{
                    state.items=state.items.filter(e=> e.id !== item.id)
                }
            }
        }
    }
})

export const{addToCart,removeFromCart,increaseQuantity,decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;