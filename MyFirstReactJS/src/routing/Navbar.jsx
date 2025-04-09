import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">MyStore</Link>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/products" className="hover:text-blue-400 transition-colors">Products</Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar