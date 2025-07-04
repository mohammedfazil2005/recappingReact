import React, { Fragment, useContext } from 'react'
import { UserContext } from '../contexts/Context'
import { ProductContext } from '../contexts/ProductContext'
import ProductCard from '../components/productCard/ProductCard'
import CategoryPreviewComponent from '../components/categoryPreview/CategoryPreviewComponent'
import { Route, Routes } from 'react-router-dom'
import CategoriesPreview from './CategoriesPreview'
import Category from './Category'

const Shop = () => {
    const {data}=useContext(ProductContext)

  
  
 

  return (
       <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=':category' element={<Category/>}/>
       </Routes>
 
 
  )
}

export default Shop
