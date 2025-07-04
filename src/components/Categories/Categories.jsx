import React from 'react'
import CategoryID from '../categoryID/CategoryID'
import './Categoires.style.scss'
import { Link, useNavigate } from 'react-router-dom'

const Categories = () => {
     const categories=[
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
  }
]
     const navigate=useNavigate()
  return (
    <div  className='categories-container'>
      {categories.map((a,key)=>(
    <CategoryID data={a} key={a.id}/>
      ))}
    </div>
  )
}

export default Categories
