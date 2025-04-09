import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './Home';
import Products from './Products';
import About from './About';
import Contact from './Contact';
import ProductDetails from './ProductDetails';

export default function RoutesComponent() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}