import React from 'react';
import dummyFood from "../Assets/dummyFood.jpg";
import { useDispatch } from 'react-redux';
import { cartActions } from '../Store/cartSlice';
import { MdDeleteForever } from "react-icons/md"


const CartItemCard = ({item}) => {

    const { name , price } = item;
    const dispatch = useDispatch();
    const IncreaseCount = ()=>{
        dispatch(cartActions.addToCart({name , price }))
    }
    const DecreseCount = ()=>{
        dispatch(cartActions.removeFromCart(name))
    }
  return (
          <div className="bg-secondary p-2 rounded-md flex flex-row gap-4 " >
            <div className='relative flex justify-center items-center' >
                <MdDeleteForever className='absolute rounded-md text-lg duration-500 ease-in-out opacity-0 hover:opacity-90  text-black bg-gray-700 w-full h-full cursor-pointer' onClick={() => dispatch(cartActions.DeleteFromCart(name))} />
              <img src={dummyFood} alt = "img" className="w-16 rounded-md" />
            </div>
      
            <div className='flex flex-row justify-between w-full ' >
              <div className='flex flex-col text-left w-32' >
                <p className='truncate overflow-hidden ' >{item.name}</p>
                <p>Price : {item.price}</p>
              </div>
              <div className='flex flex-row  items-center gap-6'>
                <div className='flex flex-row bg-black text-white font-bold text-xl items-center gap-6 p-1 px-2 rounded-md' >
                  <button onClick={DecreseCount} className= '  ' >-</button>
                  <div className=' ' >{item.quantity}</div>
                  <button onClick={IncreaseCount} className='' >+</button>
                </div>
                <div className='p-2' >${item.totalPrice}</div>
              </div>
            </div>
          </div>
  )
}

export default CartItemCard