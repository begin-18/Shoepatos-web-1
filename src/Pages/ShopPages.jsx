import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { data } from '../ShopData.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';

const ShopPages = () => {
  const [shop, setShop] = useState(data);

  const filterType = (category) => {
    setShop(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
   <div>
    <Header/>
    <div className='pt-[15vh] mx-2'>
      <div>
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-5 items-center justify-center'>
          <div className='flex gap-5'>
            <h4 onClick={() => setShop(data)} className='bg-yellow-600 cursor-pointer text-[12px] md:text-sm px-3 py-2 rounded-lg font-semibold hover:text-white'>
                ALL
            </h4>
            <h4 onClick={() => filterType('Adidas')} className='bg-yellow-600 cursor-pointer text-[12px] md:text-sm px-3 py-2 rounded-lg font-semibold hover:text-white'>
                Adidas
            </h4>
            <h4 onClick={() => filterType('Nike')} className='bg-yellow-600 cursor-pointer text-[12px] md:text-sm px-3 py-2 rounded-lg font-semibold hover:text-white'>
                Nike
            </h4>
            <h4 onClick={() => filterType('Vans')} className='bg-yellow-600 cursor-pointer text-[12px] md:text-sm px-3 py-2 rounded-lg font-semibold hover:text-white'>
                Vans
            </h4>
          </div>
         <div className='flex gap-5'>
            <h4 onClick={() => filterType('Asics')} className='bg-yellow-600 cursor-pointer text-[12px] md:text-sm px-3 py-2 rounded-lg font-semibold hover:text-white'>
                Asics
            </h4>
            <h4 onClick={() => filterType('Jordan')} className='bg-yellow-600 cursor-pointer text-[12px] md:text-sm px-3 py-2 rounded-lg font-semibold hover:text-white'>
                Jordan
            </h4>
            <h4 onClick={() => filterType('New Balance')} className='bg-yellow-600 cursor-pointer text-[12px] md:text-sm px-3 py-2 rounded-lg font-semibold hover:text-white'>
                New Balance
            </h4>
         </div>
        </div>
      </div>
      <div className='py-[5rem] mx-2 sm:mx-[5vh] lg:mx-[15vh] flex flex-col items-center'>
        <div className='gap-[1rem] sm:gap-[4rem] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 pt-4'>
          {shop.map((item, index) => (
            <div key={index} className=''>
              <Link to={`/products/${item.id}`}>
              <div className='flex flex-col items-center'>
                <img className='h-[100px] md:h-[200px]' src={item.image} alt="" />
              </div>
            </Link>
              <div className='flex gap-2 md-gap-10'>
                <div className='md:w-[200px]'>
                  <p className='line-clamp-1 md:line-clamp-1 text-[14px] md:text-md text-black font-bold hover:line-clamp-3 ease-in duration-700'>
                    {item.name}
                  </p>
                  <p className='font-bold text-black'>₱ {item.price}</p>
                </div>
                <span className='flex items-center cursor-pointer'>
                  <FaCartPlus className='size-[15px] sm:size-[30px] text-yellow-600' />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
    <Footer/>
   </div>
  );
};

export default ShopPages;
