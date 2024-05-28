import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Contact from './Components/Contact'
import { Routes, Route } from "react-router-dom"
import Categories from './Components/Categories'
import Cart from './Components/Cart'
import Details from './Components/Details'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<Details />} /> 
      </Routes>
    </div>
  )
}

export default App
