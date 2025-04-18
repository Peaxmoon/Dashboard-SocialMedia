import React from 'react'
import ProjectApp1 from './project1/ProjectApp1'
import ProjectApp2 from './project2/ProjectApp2'
import { Link, NavLink, Outlet } from 'react-router-dom'
import './project1/project1.css'

export default function ProjectApp() {
  return (
    <div className='w-full'>
      <nav className='bg-yellow-300 flex w-full '>
        <div className='w-[20%]'>
        <h1 className='justify-around p-4'><Link to="/">Home Page</Link></h1>
        </div>
        <div className='w-[80%]'>
        <ul className='flex w-[100%] justify-center gap-4 p-4'>
          <li><NavLink className={({isActive}) => isActive ? "active" : ""} to="/project1">Project 1</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? "active" : ""} to="/project2">Project 2</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? "active" : ""} to="/project3">Project 3</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? "active" : ""} to="/project4">Project 4</NavLink></li>
        </ul>
        </div>
      </nav>
      <main style={{ padding: '' }}>
        <Outlet />
      </main>
      <footer className='bg-yellow-300 p-2 mt-6'>
        <p className='text-black text-center'>This is Footer.</p>
      </footer>
    </div>
  )
}
