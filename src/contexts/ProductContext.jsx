import { createContext, useEffect, useState } from "react";
import shopData from '../shop-data'
import { AddCollectionAndDocument, getCategoriesAndDocuments } from "../services/firebase/FirebaseUtile";

export const ProductContext=createContext()

export const ProductContextProvider=({children})=>{

    const [data,setData]=useState([ ])
    const [showDropDown,setShowDropDown]=useState(false)
    const [cartItems,setCartItems]=useState([])
    const [cartQuantity,setCartQuantity]=useState(0)
    const [total,setTotal]=useState(0)

  

    const onAddToCart=(newProduct)=>{
        const isProductAlreadyExists=cartItems.find((a)=>a.id==newProduct.id)
        if(isProductAlreadyExists){
          let updatedArray=cartItems.map((item)=>item.id==newProduct.id?{...item,quantity:item.quantity+1}:item)
          setCartItems(updatedArray)
     
        }else{
   
            setCartItems([...cartItems,{...newProduct,quantity:1}])
        }
    }


  

    const DecreaseQuantity=(productId)=>{
       let isProductIsOne=cartItems.find((a)=>a.id==productId)
       if(isProductIsOne.quantity==1){
        let removedProductArray=cartItems.filter((a)=>a.id!=productId)
        setCartItems(removedProductArray)
       }else{
        let updatedArray=cartItems.map((a)=>a.id==productId?{...a,quantity:a.quantity-1}:a)
        setCartItems(updatedArray)
       }
    }

    const RemoveItemFromCart=(pid)=>{
        let removedProductArray=cartItems.filter((a)=>a.id!=pid)
        setCartItems(removedProductArray)
    }

    useEffect(()=>{
        setCartQuantity(cartItems.reduce((a,b)=>a+b['quantity'],0))
    },[cartItems])

    useEffect(()=>{
        setTotal(cartItems.reduce((a,b)=>a+b['quantity']*b['price'],0))
    },[cartItems])


    useEffect(()=>{
       const fetchDocuments=async()=>{
        const apiResponce=await getCategoriesAndDocuments()
        setData(apiResponce)
       }
       fetchDocuments()
    },[])

    



    return(
        <ProductContext.Provider value={{data,setData,showDropDown,setShowDropDown,cartItems,setCartItems,onAddToCart,cartQuantity,DecreaseQuantity,RemoveItemFromCart,total}}>
            {children}
        </ProductContext.Provider>   
    )
}

