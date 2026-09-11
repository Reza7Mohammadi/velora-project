export const middleWare = store=> next => action =>{

    const result = next(action);
    if(action.type.startsWith('cart/')){
        const cart = store.getState().cart.items;
        localStorage.setItem('cart',JSON.stringify(cart))
    }
    if(action.type.startsWith('wishlist/')){
        const wishlist = store.getState().wishlist;
        localStorage.setItem('wishlist',JSON.stringify(wishlist))
    }
    return result;
}