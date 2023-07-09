import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const {cart}=useSelector((state)=>state);

  return (
    <nav className="flex flex-row justify-between mx-auto items-center h-20 max-w-6xl bg-slate-900">
    <div className='ml-5'>
      <NavLink to="/">
        <img src="https://codehelp-shopping-cart.netlify.app/logo.png" className='h-14'/>
      </NavLink>  
    </div>

   
    <div className='flex gap-5 items-center'>
      <NavLink to="/">
        <p className='text-white'>Home</p>
      </NavLink>
      <div className='relative'>
        <NavLink to="/cart">
        {
          cart.length>0 &&
          <div className='bg-green-600 w-5 h-5 text-xs absolute -top-1 -right-1 rounded-full flex justify-center items-center text-white animate-bounce'>
            {cart.length}
          </div>
        }
          
          <AiOutlineShoppingCart className='text-white text-3xl'/>
        </NavLink>
      </div>
      
  
    </div>
  </nav>
  )
}

export default Navbar


