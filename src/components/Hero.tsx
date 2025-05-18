import React from 'react';
import herobgggg from '../assets/herobggg.png';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-[#EFECDD]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4E6B4D] mb-4">
            Authentic Moroccan Spices
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-700">
            Premium quality, 100% natural spices from the heart of Morocco
          </p>
          <div className="flex flex-col sm:flex-row gap-4 fade-in-delay-1">
            <a 
              href="#products" 
              className="px-6 py-3 bg-[#4E6B4D] text-white rounded-md hover:bg-[#3A5039] transition-colors text-center"
            >
              Explore Products
            </a>
            <a 
              href="#about" 
              className="px-6 py-3 border-2 border-[#4E6B4D] text-[#4E6B4D] rounded-md hover:bg-[#4E6B4D] hover:text-white transition-colors text-center"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="md:w-1/2 fade-in-delay-2">
          <div className="relative">
            {/* Hero image placeholder - will be replaced with actual product image */}
            <div className="bg-[#D6D3C5] h-80 md:h-96 rounded-lg flex items-center justify-center">
            <img src={herobgggg} alt="Moroccan Herbs" />
            </div>
            {/* Decorative element - Moroccan pattern */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#4E6B4D] rounded-full opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#4E6B4D] rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
