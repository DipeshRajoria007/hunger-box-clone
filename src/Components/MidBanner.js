import React from 'react'
import oneStop01 from '../Assets/onestop01.png'
import oneStop02 from '../Assets/onestop02.png'
import oneStop03 from '../Assets/onestop03.png'
import oneStop04 from '../Assets/onestop04.png'
const MidBanner = () => {
    const object = [
        {
            id:1,
            img : oneStop01,
            title :"Integrated solution that solves for all stakeholders",
        },
        {
            id:2,
            img : oneStop02,
            title :"Largest network of curated food partners",
        },
        {
            id:3,
            img : oneStop03,
            title :"Unmatched cafeteria management expertise",
        },
        {
            id:4,
            img : oneStop04,
            title :"Safe food and safe cafeteria, always!",
        }
    ]
  return (
    <div className='bg-bgSecondary lg:px-24 lg:pb-12 px-4' >
        <h1 className='lg:p-24 md:p-24 p-4 text-3xl font-bold text-primary' >The one-stop solution for a hassle-free cafeteria management</h1>
        <div className='flex lg:flex-row md:flex-row flex-col gap-4  ' >
            { object.map((item,id) => 
                (<div key={item.id} className="flex flex-col items-center justify-center" >
                    <div className='mb-4 flex justify-center ' >
                        <img src={item.img} alt={item.title} className="lg:w-[75px] md:w-[75px] w-2/3" />
                    </div>
                    <p>{item.title}</p>
            </div>)
            ) }
        </div>
    </div>
  )
}

export default MidBanner