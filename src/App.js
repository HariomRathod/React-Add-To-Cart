import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
// import css from './index.css'

function App() {
  return (
   <Router>
    <Navbar/>
      <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/cart' }element={<Cart/>}/>
      </Routes>
   </Router>
  )
}

export default App