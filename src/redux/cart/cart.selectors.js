import { createSelector } from "reselect";

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart], (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart], (cart) => cart.hidden
)


export const selectCartTotal = createSelector(
       [selectCartItems], cartItems => cartItems.reduce( (accumalatedQuantity, cartItem) => (
             accumalatedQuantity + cartItem.quantity * cartItem.price
         ), 0)
    )
    
export const selectCartItemsCount = createSelector(
        // using the reduce function to return a single value to show in the cart interface
       [selectCartItems], cartItems => cartItems.reduce(  (accumalatedQuantity, cartItem) => (
           accumalatedQuantity + cartItem.quantity 
           ), 0) 
     )

