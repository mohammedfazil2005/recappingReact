import React, { useContext } from 'react'
import './CartDropdown.style.scss'
import ButtonComp from '../buttoncomp/ButtonComp'
import CartItemComponent from '../cartitemComp/CartItemComponent'
import { ProductContext } from '../../contexts/ProductContext'
import { Link, useNavigate } from 'react-router-dom'


const CartDropdown = () => {
    const {cartItems,setShowDropDown}=useContext(ProductContext)
    const navigate=useNavigate()

    const navigateFunction=()=>{
      setShowDropDown(false)
      navigate('/checkout')
    }


  return (
    <div  className='cart-dropdown-container'>
        <div className="cart-items">
            {cartItems.length>0?cartItems.map((a)=>(
                <CartItemComponent item={a} key={a.id}/>
            )):<p>Empty Cart</p>}
        </div>
       <ButtonComp onClick={navigateFunction}>GO TO CHECKOUT</ButtonComp>
    </div>
  )
}

export default CartDropdown
