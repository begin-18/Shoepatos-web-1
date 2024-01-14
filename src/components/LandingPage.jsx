import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../Shoesdata.js';
import { FaCartPlus } from 'react-icons/fa';

const LandingPage = () => {
  const [product] = useState(data);

  return (
    <div className='mx-2 sm:mx-[5vh] lg:mx-[5vh] flex flex-col items-center'>
    <div className='gap-[1rem] sm:gap-[4rem] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 pt-4'>
      {product.map((item, index) => (
        <div key={index} className=''>
          <Link to={`/products/${item.id}`}>
            <div className='flex flex-col items-center'>
              <img className='h-[60px] sm:h-[100px] lg:h-[150px]' src={item.image} alt="" />
            </div>
          </Link>
          <div className='flex gap-2 md-gap-10'>
            <div className='md:w-[200px]'>
              <p className='line-clamp-2 md:line-clamp-1 text-[12px] sm:text-md md:text-lg md:text-md text-black font-bold hover:line-clamp-3 ease-in duration-700'>{item.name}</p>
              <p className='text-[12px] sm:text-md md:text-lg font-bold text-black'>₱ {item.price}</p>
            </div>
            <span className='flex items-center cursor-pointer'><FaCartPlus className='size-[15px] sm:size-[30px] text-yellow-600'/></span>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default LandingPage;
