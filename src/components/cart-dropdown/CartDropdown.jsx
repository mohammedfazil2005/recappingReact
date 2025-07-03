import React from 'react'
import './CartDropdown.style.scss'
import ButtonComp from '../buttoncomp/ButtonComp'


const CartDropdown = () => {

  return (
    <div onClick={()=>setShowDropDown(true)} className='cart-dropdown-container'>
        <div className="cart-items"/>
        <ButtonComp>GO TO CHECKOUT</ButtonComp>
    </div>
  )
}

export default CartDropdown
