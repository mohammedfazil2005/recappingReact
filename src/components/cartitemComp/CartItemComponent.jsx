import React, { useContext } from 'react'
import './CartItemComponent.scss'
import { ProductContext } from '../../contexts/ProductContext'

const CartItemComponent = ({item}) => {
  
  return (
    <div className='cart-item-container'>
        <img src={item.imageUrl} alt="" />
        <div className='item-details'>
  <span>{item.name}</span>
  <span>{item.quantity} x {item.price}</span>
  
        </div>
    
    </div>  
  )
}

export default CartItemComponent
