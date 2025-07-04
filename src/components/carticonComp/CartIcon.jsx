import React, { useContext } from 'react'
import CartImage from '../../../assets/shopping-bag.svg'
import './CartIcon.scss'
import { ProductContext } from '../../contexts/ProductContext'

const CartIcon = ({count}) => { 
    const {showDropDown,setShowDropDown}=useContext(ProductContext)

    const toggleDropdown=()=>{
        setShowDropDown(!showDropDown)
    }




    
  return (
    <div className='cart-icon-container' onClick={toggleDropdown}>
      <img src={CartImage} alt="" />
      <span className='item-count'>{count}</span>
    </div>
  )
}

export default CartIcon
