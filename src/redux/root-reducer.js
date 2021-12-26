import {combineReducers} from 'redux'

//import userReducer from './user/userReducer'
import cartReducer from './cart/cart.reducer'


const rootReducer = combineReducers({
    cart: cartReducer,
    
})

export default rootReducer