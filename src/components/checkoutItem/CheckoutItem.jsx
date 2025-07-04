import React, { useContext } from 'react'
import './CheckoutItem.style.scss'
import { ProductContext } from '../../contexts/ProductContext'

const CheckoutItem = ({cartItem}) => {
      const {onAddToCart,DecreaseQuantity,RemoveItemFromCart}=useContext(ProductContext)
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={cartItem.imageUrl} alt="" />
      </div>
      <span className='name'>{cartItem.name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={()=>DecreaseQuantity(cartItem.id)}>&#10094;</div>
        <span className='value'>{cartItem.quantity}</span>
           <div className='arrow' onClick={()=>onAddToCart(cartItem)}>&#10095;</div>
        </span>
      <span className='price'>{cartItem.price}</span>
      <div className='remove-button' onClick={()=>RemoveItemFromCart(cartItem.id)}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem
