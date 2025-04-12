import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router'
import ProjectApp from './Projects/ProjectApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ProjectApp />
  </StrictMode>
)
