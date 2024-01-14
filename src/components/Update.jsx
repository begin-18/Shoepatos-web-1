import React from 'react'

const Update = () => {
  return (
    <div className='bg-gradient-to-r from-blue-400 to-blue-600 p-[0.5rem] sm:p-[2rem] lg:p-[5rem]'>
        <div className='flex items-center justify-center gap-2 md:gap-[5rem]'>
            <div>
                <img className='drop-shadow-3xl ' src="images/travis1-removebg-preview.png" alt="" />
            </div>
            <div className='py-5 w-[45vh]'>
                <p className='text-[10px] sm:text-2xl lg:text-4xl text-white'>Only at ShoeBox</p>
                <h2 className='font-semibold text-[12px] sm:text-2xl lg:text-5xl '>Air Jordan 4 Travis Scott "Cactus Jack" F&F</h2>
                <p className='text-[10px] mb-5 sm:text-lg text-white'>Limited Edition</p>
                <button className='py-2 px-3 bg-blue-300 rounded-lg font-bold text-[12px] sm:text-sm'>Get it now!</button>
            </div>
        </div>
    </div>
  )
}

export default Update