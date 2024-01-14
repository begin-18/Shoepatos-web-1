import React, {useState} from 'react'
import {data} from '../Brand.js'

const Brand = () => {
    const [ brand] = useState (data);
  return (
    <div >
        <div className='flex justify-center p-5 gap-5'>
            {brand.map((items, index)=>(
               <div key={index} className='flex items-center grayscale hover:grayscale-0 duration-300'>
                    <img src={items.image} alt={items.name}
                    className='sm:w-[150px] ' />
               </div>
            ))}
        </div>
    </div>
  )
}

export default Brand