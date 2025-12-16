import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Footer from './component/Footer/Footer'
import ScrollToTop from './ScrollTop/ScrollToTop'
import Login from './component/LoginP/Login'
import PlaceOrder from './pages/placeOrder/placeOrder'

function App() {
  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin? <Login setShowLogin={setShowLogin}/>: <></>}
    <div className='app'>
       <Navbar setShowLogin={setShowLogin}/>
       <Routes>
        <Route path='' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
       </Routes>
    </div>
     <Footer/>
     <ScrollToTop/>
    </>
  )
}

export default App