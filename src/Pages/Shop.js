import React from 'react'
import {Restaurants} from "../Data/Restaurants"
import VendorCard from "../Components/VendorCard"
const Shop = () => {
  // console.log(Restaurants);
  return (
    <div className=' m-3 p-4 rounded' >
        <div className='text-3xl font-bold text-left' >Our Vandors</div>
        <div>
          {
            Restaurants.map((restaurant, index) => (<VendorCard props = {restaurant.items[0]} index={index} key={index} />))
          }
        </div>
    </div>
  )
}

export default Shop