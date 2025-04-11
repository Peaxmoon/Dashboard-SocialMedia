import React from 'react'
import { Route, Routes } from 'react-router'
import Contact from './Contact'
import About from './About'
import Products from './Products'
import Layout from './Layout'

export default function Outleet() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />}>About</Route>
        <Route path="/contact" element={<Contact />}>Contact</Route>
      </Route>
    </Routes>
  )
}
