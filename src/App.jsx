import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Product from './pages/products'
import './App.css'

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element ={<Dashboard/>}/>
        <Route path='/users' element ={<Users/>}/>
        <Route path='/products' element ={<Product/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
