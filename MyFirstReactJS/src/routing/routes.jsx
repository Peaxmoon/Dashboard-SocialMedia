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
        <Route
        path="/"
        element={
            <div className="container">
                <h1 className="title">Welcome to My First React App</h1>
                <p className="description">This is a simple app to demonstrate routing in React.</p>
            </div>
        }> </Route>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

// export function Navbar() {
//   return (
//     <div>
//       <h1> Navbar</h1>
//     </div>
//   )
// }