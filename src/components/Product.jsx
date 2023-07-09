import React, { useState } from 'react'
import {add ,remove} from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';


function Product({post}) {
  const {cart} = useSelector((state) => state);
  let description=post.description.split(" ").slice(0,10).join(" ")+ "...";
  const [selected,setSelected]=useState(cart.some((p)=>p.id===post.id)?true:false);
  const dispatch=useDispatch();

  function addToCart(){
    dispatch(add(post));
    toast.success("Item added to cart");
    setSelected(true);
  }

  function removeFromCart(){
    dispatch(remove(post));
    toast.error("Item removed from cart");
    setSelected(false);
  }

  return (
    <div className='group flex flex-col items-center justify-between rounded-xl mt-5 ml-5 gap-3 p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] hover:scale-110 transition-all duration-200 ease-linear'>
      <div className='truncate w-40 mt-1 text-gray-700 font-semibold text-lg  text-left '>
        {post.title}
      </div>
      <div className=' w-40 text-gray-400 font-normal text-[10px] text-left'>
        {description}
      </div>
      <div className='h-[180px]'>
        <img src={post.image} className='h-full w-full object-contain'/>
      </div>
      <div className='flex flex-row items-center justify-between w-full mt-5'>
        <p className='text-green-600 font-semibold'>${post.price}</p>
          {
            selected ?
            ( <button className='rounded-full border-2 border-gray-700 text-gray-700 font-semibold uppercase text-[12px] tracking-wide p-1 px-3 group-hover:bg-gray-700 group-hover:text-white' onClick={removeFromCart}>Remove Item</button> )
            :
            ( <button className='rounded-full border-2 border-gray-700 text-gray-700 font-semibold uppercase text-[12px] tracking-wide p-1 px-3 group-hover:bg-gray-700 group-hover:text-white' onClick={addToCart}> Add to Cart</button>)
          }

      </div>
    </div>
  )
}

export default Product