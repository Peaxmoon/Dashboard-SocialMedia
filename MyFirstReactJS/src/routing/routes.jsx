import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from './Layout';
import About from './About';
import Contact from './Contact';
import Error404 from './Error404';
import Home from './Home';
import ProductDetails from './ProductDetails';
import Products from './Products';
import { ReviewPage, OverViewPage } from './Products';

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetails />}>
            <Route path="reviews" element={<ReviewPage />} />
            <Route path="overview" element={<OverViewPage />} />
          </Route>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  )
}