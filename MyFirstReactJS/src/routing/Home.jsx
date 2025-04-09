import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-xl mb-8">Discover amazing products at great prices</p>
          <Link 
            to="/products" 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
          >
            Browse Products
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="mb-8">Join thousands of satisfied customers today</p>
          <Link 
            to="/products" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    icon: "🚀",
    title: "Fast Delivery",
    description: "Get your products delivered within 24 hours"
  },
  {
    icon: "💎",
    title: "Premium Quality",
    description: "All products are carefully selected and quality assured"
  },
  {
    icon: "🔒",
    title: "Secure Payment",
    description: "Shop with confidence using our secure payment system"
  }
];

export default Home