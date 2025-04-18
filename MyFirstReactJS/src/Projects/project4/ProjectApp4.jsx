import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function ProjectApp4() {
  return (
    <div className='bg-green-600 p-4'>
        <h1>Project app 4  </h1>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default ProjectApp4  