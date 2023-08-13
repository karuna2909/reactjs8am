import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import ChangeCart from './ChangeCart'
import Student from './Student'

const TestNav = () => {
    const data=useSelector(store=>store.cart)
  return (
    <>
    <div className="text-center  text-primary">
        The total number of item in the cart is {data.cartCount}
    </div>
    <ChangeCart/>
    <Student/>
    </>
  )
}


export default TestNav