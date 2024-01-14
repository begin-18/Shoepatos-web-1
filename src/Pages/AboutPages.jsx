import React from 'react'
import SliderComponent from '../components/SliderComponent'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AboutPages = () => {
  return (
    <div>
        <Header />
        <div className='mx-[5vw] lg:mx-[25vh] gap-[2rem] sm:gap-[5rem] flex flex-col mb-[2rem] pt-[15vh] pb-10'>
       <div className='text-center'>
        <h1 className='text-2xl sm:text-6xl font-extrabold'>ABOUT US</h1>
            <div className='flex flex-col xl:flex-row sm:py-10 gap-5 sm:gap-10'>
                <div className='w-[100%] p-5 sm:p-0 flex justify-center'>
                    <img src="images/jonard.jpg" alt="" />
                </div>
                <div className='flex flex-col justify-center gap-3'>
                    <h2 className='sm:text-3xl font-extrabold'>Welcome to Shoepatos</h2>
                    <p className=' text:lg 2xl:text-2xl text-black'> At Shoepatos, we believe that shoes are more than just a necessity; they're an expression of your individuality and style. Our journey began with a simple vision - to offer footwear that seamlessly combines fashion, comfort, and quality.</p>
                </div>
            </div>
            <SliderComponent />
       </div>
       <div className='flex flex-col gap-[3rem]'>
            <div>
                <h2 className='sm:text-2xl font-bold mb-2'>Our Story</h2>
                <p className='text-black sm:text-2xl'>Our mission is clear: to be your go-to destination for all things shoes. We strive to offer a curated collection that caters to diverse tastes, occasions, and preferences. Each pair is a result of thoughtful design, quality craftsmanship, and a commitment to exceeding your expectations.</p>
            </div>
            <div>
                <h2 className='sm:text-2xl font-bold mb-2'>Our Mission</h2>
                <p className='text-black sm:text-2xl'>Founded on a passion for exceptional footwear, Shoepatos has evolved into a destination where style meets comfort in every step. Our story is a narrative of dedication, innovation, and a relentless pursuit of providing the best in footwear fashion.</p>
            </div>
            <div>
                <h2 className='sm:text-2xl font-bold mb-2'>What Sets Us Apart</h2>
                <ol className='list-disc'>
                    <li className='ml-[1rem] sm:ml-[5rem]'><p className='text-black sm:text-2xl'><span className='font-bold'>Style Diversity:</span>From trendy sneakers to classic formal shoes, our collection is as diverse as our customers.</p></li>
                    <li className='ml-[1rem] sm:ml-[5rem]'><p className='text-black sm:text-2xl'><span className='font-bold'>Comfort First:</span>We understand the importance of comfort. That's why each pair is designed to not just look good but also feel good.</p></li>
                    <li className='ml-[1rem] sm:ml-[5rem]'><p className='text-black sm:text-2xl'><span className='font-bold'>Quality Matters:</span>Our shoes are crafted using high-quality materials and undergo rigorous quality checks to ensure durability and longevity.</p></li>
                    <li className='ml-[1rem] sm:ml-[5rem]'><p className='text-black sm:text-2xl'><span className='font-bold'>Fashion-Forward Thinking:</span>Keeping up with the latest trends, we bring you shoes that are not just functional but also make a fashion statement.</p></li>
                </ol>
            </div>
            <div>
                <h2 className='sm:text-2xl font-bold mb-2'>Join Our Shoepatos Community</h2>
                <p className='text-black sm:text-2xl'>We invite you to join our community of shoe enthusiasts. Follow us on social media for the latest updates, behind-the-scenes content, and exclusive offers. Your journey into the world of Shoepatos is just a step away.</p>
            </div>
         
       </div>
       <hr/>
      <div className='text-center'>
        <h1 className='sm:text-2xl'>Thank you for being a part of our story. Step into style. Stride in comfort. Welcome to Shoepatos!</h1>
      </div>
    </div>
    <Footer />
    </div>
    
  )
}

export default AboutPages