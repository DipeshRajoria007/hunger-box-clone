import React from 'react';
import {Link } from 'react-router-dom';

import a_1 from '../Assets/1.png'
import a_2 from '../Assets/2.jpeg'
import a_3 from '../Assets/3.png'
import a_4 from '../Assets/4.png'
import a_5 from '../Assets/5.png'

const VendorCard = ({props,index}) => {
    // console.log(props);
    const img = [{
        imgPath : a_1,
    },
    {
        imgPath : a_2,
    },
    {
        imgPath : a_3,
    },
    {
        imgPath : a_4,
    },
    {
        imgPath : a_5,
    }
]

  return (
    <Link to={`/shop/${props.name}`} className='flex flex-row m-2 p-2 gap-4 bg-bgSecondary rounded cursor-pointer' >
        <div className='w-[100px]' >
            <img src={`${img[index].imgPath}`} alt="img" className=' rounded' />
        </div>
        <div className='w-full flex flex-col gap-4' >
            <p className='text-lg text-left' >{props.name}</p>
            <div className='flex flex-row text-white text-[0.65rem] gap-2' >
                <p className='bg-primary rounded-full px-4 py-2 ' >open</p>
                <p className='bg-primary rounded-full px-4 py-2 ' >Cusine</p>
                <p className='bg-primary rounded-full px-4 py-2 ' >Rating 3/5</p>
            </div>
        </div>
        
    </Link>
  )
}

export default VendorCard;