import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layouts from './Components/Layouts'
import Homepage from './pages/Homepage'
import Login from './pages/Login'

import IncrementDecrement from './hooks/IncrementDecrement'
import Datafetch from './hooks/Datafetch'
import Effect from './hooks/Effect'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Card from './Components/Card'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Show from './context/Show'
import TestNav from './redux/TestNav'

const MyRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layouts />}>
            <Route index element={<Homepage />} />
            <Route path='login' element={<Login />} />
            <Route path='products' element={<Products />} />
            <Route path='productdetails/:productId' element={<ProductDetails />} />
            <Route path='cart' element={<Cart/>} />
            <Route path='signup' element={<Register />} />
          </Route>

          <Route path='/hooks/first' element={<IncrementDecrement />} />
          <Route path='/hooks/second' element={<Effect />} />
          <Route path='/hooks/data' element={<Datafetch />} />
          <Route path='context/show' element={<Show />} />
          <Route path='redux/cart' element={<TestNav />} />
        </Routes>
      </Router>
    </>
  )
}

export default MyRoutes