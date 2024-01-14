import React from 'react'
import { FaStar } from 'react-icons/fa'

const Feedback = () => {
  return (
    <div className='flex flex-col xl:flex-row justify-evenly items-center border-2 p-2 xl:p-[4rem]'>
        <div className=' flex flex-col p-5 gap-10 md:flex-row'>
            <div className='flex items-center gap-3'>
                <div className='text-center'>
                    <img className='w-[70px] md:w-[100px] rounded-full' src="images/nck.png" alt="" />
                    <h4>Nick</h4>
                </div>
                <div className='flex flex-col'>
                    <p className='py-2 px-4 bg-gray-200 rounded-2xl mb-2'>Cool Kicks, Love it!!</p>
                    <div className='flex'>
                        <span><FaStar className='text-green-500'/></span>
                        <span><FaStar className='text-green-500'/></span>
                        <span><FaStar className='text-green-500'/></span>
                        <span><FaStar className='text-green-500'/></span>
                        <span><FaStar className='text-green-500'/></span>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <div className='text-center'>
                    <img className='w-[70px] md:w-[100px] rounded-full' src="images/nck.png" alt="" />
                    <h4>Nick</h4>
                </div>
                <div className='flex flex-col'>
                    <p className='py-2 px-4 bg-gray-200 rounded-2xl mb-2'>Cool Kicks, Love it!!</p>
                    <div className='flex'>
                        <span><FaStar className='text-green-500'/></span>
                        <span><FaStar className='text-green-500'/></span>
                        <span><FaStar className='text-green-500'/></span>
                        <span><FaStar className='text-green-500'/></span>
                        <span><FaStar className='text-green-500'/></span>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <div className='text-center'>
                    <img className='w-[70px] md:w-[100px] rounded-full' src="images/igop.png" alt="" />
                    <h4>Karl</h4>
                </div>
                <div className='flex flex-col'>
                    <p className='py-2 px-4 bg-gray-200 rounded-2xl mb-2'>Cool Kicks, Love it!!</p>
                    <div className='flex'>
                        <span><FaStar className='text-green-300'/></span>
                        <span><FaStar className='text-green-300'/></span>
                        <span><FaStar className='text-green-300'/></span>
                        <span><FaStar className='text-green-300'/></span>
                        <span><FaStar className='text-green-300'/></span>
                    </div>
                </div>
            </div>
        </div>
        <div className='p-5 '>
         <h1>SEND MESSAGE</h1>
            <textarea name="text" id="area" cols="40" rows="4" className='border-2 p-2 w-[80vw] sm:w-[20vw]'></textarea>
                <div className='flex  justify-center'>
                <button className='py-1 px-4 bg-blue-500 font-semibold rounded-lg'>SEND</button>
                </div>
        </div>
    </div>
  )
}

export default Feedback