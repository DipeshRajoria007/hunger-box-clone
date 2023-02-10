import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItemCard from "./CartItemCard"
import { cartActions } from '../Store/cartSlice'
import { MdDeleteForever } from "react-icons/md"


const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart.itemsList);
  let totalPrice = 0 ;
  for(let i = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i].price * cartItems[i].quantity;
  }

  const dispatch = useDispatch();
    const EmptyCart = () =>{
      dispatch(cartActions.EmptyCart())
    }
  
  console.log(cartItems)
  return (
    <div className=' mx-4 rounded-lg flex flex-col gap-4 jus ' >
      <div className='h-[80vh] flex flex-col gap-4' >
        {
          cartItems.map((item, index) => (
            <CartItemCard key={index} item={item} />
          ))
        }
      </div>
      
      <div className='flex flex-row gap-2' > 
        <button className='bg-secondary rounded py-1 px-2 text-xl text-white' onClick={EmptyCart} ><MdDeleteForever/></button>
        <button className='bg-black rounded p-3 w-full text-white flex flex-row justify-evenly' >
          <span>Proceed to CheckOut</span> | <span>${totalPrice}</span> 
        </button></div>
    </div>
  )
}

export default ShoppingCart