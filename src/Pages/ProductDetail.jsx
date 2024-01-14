import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../ShopData.js';
import NewProduct from '../components/NewProduct.jsx';
import LandingPage from '../components/LandingPage.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const ProductDetail = () => {
  const { id } = useParams();
  const product = data.find(item => item.id === Number(id));

  const [selectedSize, setSelectedSize] = useState(''); // State to track selected size

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    // Implement your logic to add the product to the cart
    console.log(`Added ${product.name} to cart with size: ${selectedSize}`);
  };

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto p-8 pt-[12vh]">
        <h2 className="sm:text-3xl font-semibold mb-4">{product.name}</h2>
        <div className="flex justify-center mb-6">
          <img src={product.image} alt={product.name} className='w-[60%] sm:w-[40%]' />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 xl:mx-[10vw]">
          <div className='w-full'>
            <h2 className="sm:text-2xl font-semibold">Brand: {product.category}</h2>
            <h5 className="sm:text-lg font-semibold">Price: ₱{product.price}</h5>
            
            {/* Size Dropdown */}
            <label className="sm:text-lg font-semibold mt-4">Size: </label>
            <select
              value={selectedSize}
              onChange={handleSizeChange}
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="" disabled>Select Size</option>
              <option value="1">7</option>
              <option value="2">7.5</option>
              <option value="3">8</option>
              <option value="4">8.5</option>
            </select>
          </div>
          <div>
            <p className="text-lg font-extrabold text-black">Product History:</p>
            <p className='text-black font-extralight '>{product.history}</p>
            
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className="bg-yellow-600 text-white px-4 py-2 mt-4 rounded-md cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <NewProduct />
        <LandingPage />
        
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
