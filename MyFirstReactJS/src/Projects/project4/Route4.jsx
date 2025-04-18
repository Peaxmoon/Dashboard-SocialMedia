import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout4 from './Layout4'
import Home from './components/Home/Home'
import About from './components/Home/About'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout4 />,
        children: [
            {
                path: "project4/home",
                element: <Home />
            },
            {
                path: "project4/about",
                element: <About />
            },
        ]
    }
])

function Route4() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default Route4