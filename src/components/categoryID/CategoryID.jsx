import React from 'react'
import './CategoryID.style.scss'
import { useNavigate } from 'react-router-dom'

const CategoryID = ({data}) => {

  const navigate=useNavigate()
  const onNavigateHandler=(title)=>{
    navigate(`/shop/${title}`)
  }
  return (
    
        <div className='directory-item-container' key={data.id} onClick={()=>onNavigateHandler(data.title)}> 
        <div className='background-image' style={{backgroundImage:`url(${data.imageUrl})`}}/>
        <div className="body">
        <h2>{data.title}</h2>
          <p>Shop now</p>
        </div>
      </div>
    
  )
}

export default CategoryID
