import React from 'react'
import { Link } from 'react-router'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <nav>
            <h1>Sujjal.</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
        <h1>This is outlet</h1>
        <Outlet />

        <footer>
            <h1>Footer</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <p>All rights reserved &copy; 2023</p>
        </footer>
    </div>
  )
}
