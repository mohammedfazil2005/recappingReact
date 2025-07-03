import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import {  UserProvider } from './contexts/Context.jsx'
import {  ProductContextProvider } from './contexts/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <UserProvider>
      <ProductContextProvider>
    <App />
    </ProductContextProvider>
    </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
