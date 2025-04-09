import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './src/routes'

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      {/* <RoutesComponentonent /> */}
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
