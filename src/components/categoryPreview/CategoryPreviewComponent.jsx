import React from 'react'
import ProductCard from '../productCard/ProductCard'
import './CategoryPreviewComponent.style.scss'
import { Link } from 'react-router-dom'
const CategoryPreviewComponent = ({title,product}) => {
    
  

  return (
    <div className='category-preview-container'>
        <h2>
           <Link to={`${product&&Object.keys(product)}`}><span className='title'>{product&&Object.keys(product)}</span></Link>
        </h2>
        <div className='preview'>
            {
               product&& Object.values(product)[0].slice(0,4).map((data,index)=>(
                    <ProductCard key={index} product={data}/>
                ))
            }
        </div>
      
    </div>
  )
}

export default CategoryPreviewComponent
