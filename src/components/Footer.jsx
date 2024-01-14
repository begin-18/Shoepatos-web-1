import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLocationArrow, FaPhone, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='py-[5rem] flex flex-col bg-black lg:flex-row justify-evenly p-5 right-0 gap-10 lg:items-start'>
        <div className='flex flex-col sm:flex-row gap-[5rem]'>
        <div className=' text-white sm:w-[50vw] lg:w-[20vw] '>
            <div className='mb-4'>
                 <h2 className='text-2xl mb-2'>About ShoePatos</h2>
                    <p className='text-xl mb-5'>Welcome to Shoepatos, where style meets comfort in every step with our passion for crafting exceptional footwear.</p>
                    <div>
                    <p className='text-[12px] sm:text-[1rem] flex'><FaLocationArrow className='text-white mr-2' /> Poblacion, Danao, Cebu</p>     
                    <p className='text-[12px] sm:text-[1rem] flex'><FaPhone className='text-white mr-2' />(+63) 994 6412 332</p>
                    <p className='text-[12px] sm:text-[1rem] flex'><FaEnvelope className='text-white mr-2' />manulat.emman@ctu.edu.ph</p>
                    </div>
                
            </div>
            <div className='flex gap-5'>
                    <img className='h-5 sm:h-10' src="images/store1.png" alt="" />
                    <img className='h-5 sm:h-10' src="images/store.png" alt="" />
            </div>
        </div>
      
        <div className='text-white'>
            <h2 className='text-2xl mb-2'>Categories</h2>
            <ul>
                <li className='text-lg mb-4'><a href="/">HOME</a></li>
                <li className='text-lg mb-4'><a href="/">SHOP</a></li>
                <li className='text-lg mb-4'><a href="/">BLOG</a></li>
                <li className='text-lg mb-4'><a href="/">ABOUT</a></li>
                <li className='text-lg mb-4'><a href="/">CONTACT</a></li>
            </ul>
        </div>
        </div>
       <div className='flex flex-col sm:flex-row gap-[3rem]'>
        <div className='flex flex-col text-white gap-4 w-[50vw] lg:w-[20vw]'>
                <h2 className='text-2xl mb-2'>Social Media</h2>
                <span className='flex text-[12px] sm:text-[1.2rem] items-center'><FaFacebook className='mx-2 size-[20px] text-blue-500'/><a href="/">Facebook</a></span>
                <span className='flex text-[12px] sm:text-[1.2rem] items-center'><FaTwitter className='mx-2 size-[20px] text-blue-300'/> <a href="/">Twitter</a></span>
                <span className='flex text-[12px] sm:text-[1.2rem] items-center'><FaInstagram className='mx-2 size-[20px] text-violet-300'/> <a href="/">Instgram</a></span>
            </div>

            <div className='flex'>
                <div className='w-[220px] flex-col items-center'>
                <img src="/images/riel-removebg.png" alt="" />
                <h1 className='text-white font-bold text-2xl text-center'>Shoe<span className='text-yellow-500'>Patos</span></h1>
                </div>
                
            </div>
       </div>
    </div>
  )
}

export default Footer