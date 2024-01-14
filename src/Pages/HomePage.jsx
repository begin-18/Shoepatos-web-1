import React from 'react'
import '../App.css'
import LandingPage from '../components/LandingPage'
import Update from '../components/Update'
import NewProduct from '../components/NewProduct'
import SliderComponent from '../components/SliderComponent'
import Feedback from '../components/Feedback'
import Header from '../components/Header'
import Footer from '../components/Footer'



const HomePage = () => {
  return (
    <div>
        <Header/>
        <SliderComponent />
        <div className='text-center py-[1.5rem] sm:py-[5rem]'>
          <h1 className='font-bold text-lg md:text-4xl'>RECEOMMENDED FOR YOU</h1>
          <LandingPage />
        </div>
     
        <Update />
        <div className='text-center py-[1.5rem] sm:py-[5rem]'>
          <h1 className='font-bold text-lg md:text-4xl mb-5'>RECEOMMENDED FOR YOU</h1>
          <NewProduct/>
        </div>
        
        <Feedback />
        <Footer />
    </div>
  )
}

export default HomePage