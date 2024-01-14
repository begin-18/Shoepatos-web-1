import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const BlogPages = () => {
  return (
    <div>
        <Header />
        <div className='lg:mx-[25vh] gap-[2rem] sm:gap-[5rem] flex flex-col mb-[2rem]'>
        <div className='pt-[12vh] md:pt-[15vh] flex flex-col sm:flex-row items-center px-3'>
            <div className='w-[70%] sm-w-[50%] mb-5'>
                <img src="images/blogshoes.jpg" alt="" className='rounded-lg' />
            </div>
            <div className='flex items-center'>
                <h1 className='text-md sm:text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl text-center font-extrabold'>Unveiling Shoepatos' Latest Collection: <span className='text-yellow-600'>Comfort Meets Trend</span></h1>
            </div>
        </div>
        <div className='flex flex-col gap-[3rem] mx-[5vw]'>
            <div>
                <h2 className='sm:text-2xl font-bold mb-2'>Step into the Future of Footwear:</h2>
                <p className='text-black sm:text-2xl'> Welcome, Shoepatos enthusiasts! Today, we are thrilled to unveil our latest collection that seamlessly blends comfort with the latest trends in fashion. At Shoepatos, we believe that your footwear should not only make a statement but should also carry you through the day with unparalleled comfort.</p>
            </div>
            <div>
                <h2 className='sm:text-2xl font-bold mb-2'>The Perfect Fusion of Style and Comfort</h2>
                <p className='text-black sm:text-2xl'>Our newest collection is a celebration of the perfect fusion of style and comfort. From sleek and modern designs to timeless classics, each pair is meticulously crafted to cater to your unique fashion sensibilities while ensuring your feet are cradled in comfort.</p>
            </div>
            <div>
                <h2 className='sm:text-2xl font-bold mb-2'>Innovation in Every Stitch</h2>
                <p className='text-black sm:text-2xl'>Behind every pair of Shoepatos lies a dedication to innovation. We have incorporated the latest in footwear technology to ensure that each step you take is supported, cushioned, and oh-so-stylish. Our designers have meticulously chosen materials that not only elevate the aesthetics but also prioritize durability and comfort.</p>
            </div>
            <div>
                <h2 className='sm:text-2xl font-bold mb-2'>Trendsetting Designs for Every Occasion</h2>
                <p className='text-black sm:text-2xl'>Whether you're stepping into the office, hitting the town for a night out, or just running errands, Shoepatos has you covered. Our diverse collection features designs for every occasion, ensuring you're stepping out in style no matter where life takes you.</p>
            </div>
            <div>
                <h2 className='sm:text-2xl font-bold mb-2'>Sustainability at the Heart</h2>
                <p className='text-black sm:text-2xl'>At Shoepatos, we're not just committed to style and comfort; we're also passionate about sustainability. Our materials are ethically sourced, and we are continually exploring eco-friendly options to reduce our environmental footprint.</p>
            </div>
            <div>
                <h2 className='sm:text-2xl font-bold mb-2'>Limited-Time Offer: Step into Savings</h2>
                <p className='text-black sm:text-2xl'>To celebrate the launch of our latest collection, we're offering an exclusive limited-time promotion. Use code COMFORTSTYLE15 at checkout to enjoy a 15% discount on your order. This offer is our way of saying thank you for being a part of the Shoepatos family.</p>
            </div>
            <div>
                <h2 className='sm:text-2xl font-bold mb-2'>Join the Shoepatos Community</h2>
                <p className='text-black sm:text-2xl'>We invite you to explore our latest collection and join the Shoepatos community. Follow us on social media for behind-the-scenes looks, styling tips, and exclusive promotions. Your journey into style and comfort begins with Shoepatos.</p>
            </div>
            
        </div>
        <div className='text-center'>
            <h1 className='text-2xl font-extrabold'>Step into the future. Step into Shoepatos.</h1>
            <h2 className='text-xl'>Happy stepping!</h2>
        </div>

    </div>
    <Footer />
    </div>
  )
}

export default BlogPages