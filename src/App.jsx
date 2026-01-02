import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element ={<Dashboard/>}/>
        <Route path='/users' element ={<Users/>}/>

      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
