import React from 'react'
import './CategoryID.style.scss'

const CategoryID = ({data}) => {
  return (
    
        <div className='category-container' key={data.id}> 
        <div className='background-image' style={{backgroundImage:`url(${data.imageUrl})`}}/>
        <div className="category-body-container">
          <h2>{data.title}</h2>
          <p>Shop now</p>
        </div>
      </div>
    
  )
}

export default CategoryID
