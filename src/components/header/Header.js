import React from 'react'
import {Link} from 'react-router-dom'
import{ connect } from  'react-redux'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartDropdown from '../cart-dropdown/CartDropDown'
import CartIcon from '../cart-icon/cart-icon'


const Header = ({hidden}) => {
    return(
        <div className='header'>

          <Link to="/" className='logo-container'>
            <Logo className='logo'/>
          </Link>

          <div className='options'> 
            <Link to='/shop' className='option'> SHOP </Link>
            <Link to='/signin' className='option'> CONTACT </Link>   
            <CartIcon />        
          </div>
         {
           hidden ? null : <CartDropdown/> 
          }
        </div>
    )
}

const mapStateToProps = ({ cart: {hidden} }) => ({
   hidden
});

export default connect(mapStateToProps)(Header)