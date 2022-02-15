import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import {connect} from 'react-redux'
import { selectCartItems} from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { useNavigate } from "react-router-dom";


const CartDropdown = ({cartItems, dispatch}) => {
    let navigate = useNavigate();
    return(
        <div className='cart-dropdown'> 
            <div className='cart-items'>
              {
                cartItems.length?
                cartItems.map(cartItem =>(
                   <CartItem item={cartItem} key={cartItem.id}/>
                )) : <span className='empty-message'>There are no items in your cart</span>
              }
            </div>
            <CustomButton onClick={() =>{
              navigate('/checkout');
              dispatch(toggleCartHidden())
            }
              }>GO TO CHECKOUT</CustomButton>           
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    hidden: toggleCartHidden
})

export default connect(mapStateToProps, null)(CartDropdown)

