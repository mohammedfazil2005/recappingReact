import React from 'react'
import './CategoryID.style.scss'

const CategoryID = ({data}) => {
  return (
    
        <div className='directory-item-container' key={data.id}> 
        <div className='background-image' style={{backgroundImage:`url(${data.imageUrl})`}}/>
        <div className="body">
          <h2>{data.title}</h2>
          <p>Shop now</p>
        </div>
      </div>
    
  )
}

export default CategoryID
