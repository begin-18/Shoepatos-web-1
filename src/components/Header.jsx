import React , {useState}from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaArrowRight, FaCartPlus} from 'react-icons/fa'


const Header = () => {

    const [nav, setNav] = useState(false)
  return (
    <div id='header' className='flex justify-between w-full p-[1rem] sm:px-[8rem] fixed z-10 bg-white'>
        <div className='flex items-center gap-2'>
            <img className='h-[40px] sm:h-[60px] md:h-[80px] hover:border-2 rounded-full' src="/images/riel-removebg.png" alt="" />
            <h1 className='text-black font-bold sm:text-2xl'>Shoe<span className='text-yellow-500'>Patos</span></h1>
        </div>
   
        <nav id='nav' className='flex items-center'>
        <div onClick = {()=> setNav(!nav)} className='flex lg:hidden absolute top-8 right-4 '>
                <FaBars size={25}/>
            </div>
            <ul className='hidden lg:flex gap-10 items-center'>
                <li className='font-semibold text-lg cursor-pointer'><Link to="/HomePages">HOME</Link></li>
                <li className='font-semibold text-lg cursor-pointer'><Link to="/ShopPages">SHOP</Link></li>
                <li className='font-semibold text-lg cursor-pointer'><Link to="/BlogPages">BLOG</Link></li>
                <li className='font-semibold text-lg cursor-pointer'><Link to="/AboutPages">ABOUT</Link></li>
                <li className='font-semibold text-lg cursor-pointer px-3 py-2 bg-yellow-600 hover:text-white rounded-lg'><Link to="/LoginPages">LOG OUT</Link></li>
                <div>
                    <span ><a href="/"><FaCartPlus className='size-[30px] cursor-pointer'/></a></span>
                    
                </div>
            </ul>
        
        </nav>
        
        {nav? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 right-0 sm:hidden'> </div>: '' }
        <div className={ nav ? 'fixed top-0 right-0 w-[200px] sm:w-[300px] h-screen bg-gray-200 z-10 duration-300 px-5 shadow-2xl' : 'hidden'}>
            <FaArrowRight onClick = {() => setNav(!nav)} size={20} className='absolute right-4 top-4 cursor-pointer' />
            <h2 className='mt-5  font-semibold'> Menu </h2>
            <nav className='mt-20'>
                <ul className='font-semibold text-center flex flex-col gap-5'>
                    <li className='font-semibold text-lg cursor-pointer hover:text-yellow-600 hover:bg-white'><Link to="/HomePages">HOME</Link></li>
                    <li className='font-semibold text-lg cursor-pointer hover:text-yellow-600 hover:bg-white'><Link to="/ShopPages">SHOP</Link></li>
                    <li className='font-semibold text-lg cursor-pointer hover:text-yellow-600 hover:bg-white'><Link to="/BlogPages">BLOG</Link></li>
                    <li className='font-semibold text-lg cursor-pointer hover:text-yellow-600 hover:bg-white'><Link to="/AboutPages">ABOUT</Link></li>
                    <li className='font-semibold text-lg cursor-pointer hover:text-yellow-600 hover:bg-white'><Link to="/LoginPages">SIGNOUT</Link></li>
                </ul>
            </nav>
        </div>
        
    </div>
    
  )
}

export default Header