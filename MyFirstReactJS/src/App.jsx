import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './src/routes'
import Layout from './useofroutes.jsx/Layout'
import Outleet from './useofroutes.jsx/Outleet'

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      {/* <RoutesComponentonent /> */}
      {/* <AppRoutes /> */}
      <Outleet />
    </BrowserRouter>
  )
}

export default App
