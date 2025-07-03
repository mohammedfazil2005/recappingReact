import React from 'react'
import './category.style.scss'
import CategoryID from './components/categoryID/CategoryID'
import Categories from './components/Categories/Categories'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Navigation from './routes/Navigation'
import SignIn from './routes/SignIn'
import Shop from './routes/Shop'




const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation/>}>
        <Route index  element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
