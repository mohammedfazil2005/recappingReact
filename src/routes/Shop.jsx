import React, { useContext } from 'react'
import { UserContext } from '../contexts/Context'
import { ProductContext } from '../contexts/ProductContext'
import ProductCard from '../components/productCard/ProductCard'

const Shop = () => {
    const {data}=useContext(ProductContext)
    console.log(data)
  return (
    <div className='products-container'>
      {data.map((a)=>(
        <ProductCard key={a.id} product={a}/>
      ))}
    </div>
  )
}

export default Shop
