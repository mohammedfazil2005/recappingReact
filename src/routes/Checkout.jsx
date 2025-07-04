import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import CheckoutItem from '../components/checkoutItem/CheckoutItem'

const Checkout = () => {
    const {cartItems,total}=useContext(ProductContext)
  return (
    <div className='checkout-container'>
        <div className="checkout-header">
            <div className='header-block'>
                <span>Product</span>
            </div>
             <div className='header-block'>
                <span>Description</span>
            </div>
             <div className='header-block'>
                <span>Quantity</span>
            </div>
             <div className='header-block'>
                <span>Price</span>
            </div>
             <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
     {cartItems.length>0?cartItems.map((a)=>(
       <CheckoutItem cartItem={a} key={a.id}/>
     )):<p>Nothing in the cart</p>}
     <span className='total'>Total :{total}</span>
    </div>
  )
}

export default Checkout
