import React from 'react'
import Banner from '../Assets/banner-video-bg.png'

const HeroBanner = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row lg:flex-row lg:px-24 mb-12 px-4 ' >
        <div className='lg:w-1/2 text-left py-4 ' >
            <p className='my-4' >Enable a safe cafeteria experience with the</p>
            <p className='text-5xl font-bold text-primary' >HungerBox</p>
            <p className='text-5xl font-bold my-4 text-accent font-ubuntu ' >Safe Cafe Suite</p>
            <p className = "my-4" >Comprehensive solution, <br/> customisable to suit your needs.</p>
            <div className='flex md:flex-row lg:flex-row flex-col gap-2' >
              <button className='bg-btn rounded-full py-2 px-6 text-white uppercase '  >Learn More</button>
              <button className='bg-btn rounded-full py-2 px-6 text-white uppercase ' >About HungerBox</button>
            </div>
        </div>
        <div className='lg:w-1/2 flex justify-center items-center'   >
            <img src={Banner} alt="" className=' rounded-lg w-[80%]  border-solid border-2 border-primary' />
        </div>
    </div>
  )
}

export default HeroBanner