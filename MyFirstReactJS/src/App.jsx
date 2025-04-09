import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesComponent from './routing/routes'
import Navbar from './routing/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RoutesComponent />
    </BrowserRouter>
  )
}

export default App
