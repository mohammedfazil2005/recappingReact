import React, { Fragment, useContext } from 'react'
import { UserContext } from '../contexts/Context'
import { ProductContext } from '../contexts/ProductContext'
import ProductCard from '../components/productCard/ProductCard'
import CategoryPreviewComponent from '../components/categoryPreview/CategoryPreviewComponent'

const CategoriesPreview = () => {
    const {data}=useContext(ProductContext)

  
  
 

  return (
      <div className='shop-container'>
        {data.length>0&&Object.keys(data).map((keys,index)=>{
          const eachObjData=data[keys]
          return(
            <CategoryPreviewComponent key={index} product={eachObjData}/>
          )
        })}
  
      
    </div>
 
 
  )
}

export default CategoriesPreview
