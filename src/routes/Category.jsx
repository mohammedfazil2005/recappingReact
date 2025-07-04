import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../contexts/ProductContext'
import { filterCategories } from '../services/firebase/FirebaseUtile'
import ProductCard from '../components/productCard/ProductCard'
import '../category.style.scss'
const Category = () => {
    const {category}= useParams()
    const {data}=useContext(ProductContext)
    const [products,setProducts]=useState({})

   


    const fetchData=async()=>{
        let responce=await filterCategories(category)
        setProducts(responce.items)
    }

    useEffect(()=>{
        fetchData()
    },[])

    console.log(products)

    

  return (
    <div className='category-container'>
    {products?.length>0?products?.map((res)=>(
        <ProductCard product={res}/>
    )):<h1>Loading</h1>}
 
    </div>
  )
}

export default Category
