import React, { useState } from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { IoMdArrowRoundForward } from 'react-icons/io'
import ShoppingCart from './ShoppingCart';
import { useSelector } from'react-redux';


const NavCart = () => {
  const quantity = useSelector(state => state.cart.totalQuantity);
    
    const [cardOpen, setCardOpen] = useState(false);
    const closeCard = () =>{
        setCardOpen(false);
    }
    const openCard = () =>{
        setCardOpen(true);
    }

  return (
    <>
      <div className='relative hover:scale-110 duration-300 transition ease-in-out p-3 rounded-full '  onClick={openCard} >
          <BiShoppingBag className='text-3xl text-white' />
          <span className='absolute bg-secondary rounded-full  text-[0.5rem] p-1 w-5 h-5 top-[5px] right-[5px] text-white '
          > {quantity} </span>
      </div>
      <div className={` fixed h-[100vh] w-[55vh]  bg-white rounded-xl drop-shadow-2xl top-0  z-10 right-0 ${cardOpen ? 'block' : 'hidden' }  ease-in-out duration-700 `} >
        <div className='flex flex-row justify-between items-center px-5 py-3' >
          <span className='text-xl font-bold ' >Orders</span>
          <div className='flex flex-row gap-6 items-center' >
            
            <IoMdArrowRoundForward onClick={closeCard} className="text-black text-xl" />
          </div>
        </div>
        <ShoppingCart />

      </div>
    </>
  )
}

export default NavCart