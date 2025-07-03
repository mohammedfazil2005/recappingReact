import { createContext, useState } from "react";
import shopData from '../shop-data.json'

export const ProductContext=createContext()

export const ProductContextProvider=({children})=>{

    const [data,setData]=useState(shopData)
    const [showDropDown,setShowDropDown]=useState(false)


    return(
        <ProductContext.Provider value={{data,setData,showDropDown,setShowDropDown}}>
            {children}
        </ProductContext.Provider>   
    )
}

