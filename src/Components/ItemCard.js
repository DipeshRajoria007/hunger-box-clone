import React from 'react'
import dummyFood from "../Assets/dummyFood.jpg"
import { useDispatch } from 'react-redux'
import { cartActions } from '../Store/cartSlice'
const ItemCard = (props) => {
    // console.log(food)

    // if(food===undefined){
    //     return(
    //         <div>Currently no food item delivering</div>
    //     )
    // }
    console.log(props)

    const { food , cusine } = props
    const name = food.name , price = Number(food.price.slice(1)) ;
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(cartActions.addToCart({name , price }))
    }
  return (
    <div className=' flex flex-row gap-2 my-2  rounded ' >
        <div className='p-2 bg-bgSecondary rounded'>
            
            <img src={dummyFood} alt="food " className='w-24 rounded' />
        </div>
        <div className='flex flex-row justify-between w-full px-4 items-center bg-bgSecondary rounded ' >
            <div className='text-left flex flex-col ' >
                
                <p className='text-lg' >{food.name}</p>
                <div className="flex flex-row items-center gap-4" >
                    <p className='text-sm' >{food.description}
                    </p>
                    <div className='bg-blue-400 w-auto text-white rounded-full px-4 py-1 text-[.5rem] block ' >{cusine}</div>
                    
                </div>
            </div>
            <div className='flex flex-row gap-3 items-center' >
                <p className='text-lg' >{food.price}</p>
                <button onClick={addToCart} className='bg-secondary rounded px-4 py-2 hover:bg-blue-400 text-white' >Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default ItemCard