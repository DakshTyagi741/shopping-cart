import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Cart() {
  const {cart}=useSelector((state)=>state);
  console.log(cart);
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    let amt=cart.reduce((acc,curr)=>acc+curr.price,0);
    setTotalAmount(amt);
  },[cart])
  return (
    <div>
    {
      cart.length>0?
      (
        <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center'>
          <div className='w-[100%] md:w-[60%] flex flex-col p-2'>
            {
              cart.map((item,index)=>{
                return <CartItem item={item} index={index}/>
              })
            }
          </div>
          <div className='w-[100%] md:w-[40%] mt-5  flex flex-col p-5 gap-5 my-14  h-[100%] justify-between'>
            <div className='flex flex-col gap-5 '>
              <div className='font-semibold text-xl text-green-800 uppercase'>
                <p>Your cart</p>
              </div>
              <div className='font-semibold text-5xl text-green-800 uppercase'>
                <p>Summary</p>
              </div>
              <div>
                <span className='text-gray-700 font-semibold text-xl'>Total Items:  </span>{cart.length}
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='text-xl font-bold'>
                <span className='text-gray-700 font-semibold text-xl'>Total Amount: </span><span>{totalAmount}</span>
              </div>
              <div >
                <button className='bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl'>
                  Checkout Now
                </button>
              </div>
            </div>
            
          </div>
        </div>
      )
      :
      (
        <div className='min-h-[80vh] flex flex-col items-center justify-center'>
          <div className='text-gray-700 font-semibold text-xl mb-2'>
            Your cart is Empty
          </div>
          <NavLink to="/">
            <button className='bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-200 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider'>
              Shop Now
            </button>
          </NavLink>
        </div>
      )
    }
    </div>
  )
}

export default Cart