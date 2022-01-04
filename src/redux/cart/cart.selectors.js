import { createSelector } from "reselect";
// input selector that doesn't use the select library, it's only used to get a specific piece of the state
const selectCart = state => state.cart
// return the cart items for using in another selector
export const selectCartItems = createSelector(
    [selectCart], (cart) => cart.cartItems
);
// output selector
export const selectCartHidden = createSelector(
    // first argument is an array of INPUT selectors
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

