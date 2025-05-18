import React from 'react';
import users from '../assets/account.png';


import herbsImg from '../assets/herbs1.png';

import { Leaf, Flame, Award, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section header with decorative elements */}
        <div className="relative mb-16 text-center">
          <div className="transform transition-all duration-700 ease-out">
            <span className="inline-block px-4 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-4">OUR LEGACY</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-800">Moroccan Heritage</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Bringing centuries of Moroccan culinary tradition to your kitchen with premium spices that tell a story.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-green-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-50 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl opacity-50"></div>
        
        {/* Heritage section with image and text */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20 opacity-100 transition-all duration-700 ease-out">
          {/* Image container */}
          <div className="lg:w-1/2 transform transition-all duration-500 hover:scale-[1.02]">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-green-700 rounded-lg"></div>
              <div className="relative bg-amber-50 h-96 rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-amber-700/20"></div>
                <div className="p-6 h-full flex items-center justify-center">
                <img src={herbsImg} alt="Moroccan Herbs" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-20"></div>
            </div>
          </div>
          
          {/* Text content */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <h3 className="text-3xl font-serif font-semibold text-green-800 mb-4">Authentic Moroccan<br />Culinary Heritage</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Agoail brings the authentic flavors of Morocco to your kitchen. Our premium spices are sourced from the finest regions of Morocco, where traditional cultivation methods have been preserved for generations.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Founded on the principles of quality and authenticity, Agoail represents the perfect blend of Moroccan culinary heritage and modern elegance. Each product in our collection is carefully crafted to deliver the true essence of Moroccan flavors.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We take pride in offering 100% natural products with no preservatives or chemical additives, ensuring that you experience the pure, unadulterated taste that has been cherished in Moroccan households for centuries.
              </p>
            </div>
            
            {/* Origin label */}
            <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg border border-green-100 text-green-800 transform transition hover:bg-green-100 hover:scale-[1.02] duration-300">
              <MapPin size={20} className="text-green-700" />
              <p className="font-medium">Harvested in the Atlas Mountains, Morocco</p>
            </div>
          </div>
        </div>
        
        {/* Quality commitment section */}
        <div 
          className="bg-gradient-to-r from-green-800 to-green-700 rounded-2xl shadow-xl overflow-hidden relative transform transition-all duration-500 hover:shadow-2xl"
        >
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '24px 24px'
            }}></div>
          </div>
          
          {/* Content */}
          <div className="relative p-12 text-white">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Our Commitment to Quality</h3>
              <div className="w-24 h-1 bg-amber-400 mx-auto mb-4"></div>
              <p className="max-w-2xl mx-auto text-green-50">
                Every product we offer embodies our commitment to preserving tradition while delivering exceptional quality.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:translate-y-[-4px]">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center">
                    <Leaf size={28} className="text-green-800" />
                  </div>
                </div>
                <h4 className="text-xl font-medium mb-3 text-center">100% Natural</h4>
                <p className="text-green-50 text-center">
                  Pure ingredients with no artificial additives or preservatives, just as nature intended.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:translate-y-[-4px]">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center">
                    <Award size={28} className="text-green-800" />
                  </div>
                </div>
                <h4 className="text-xl font-medium mb-3 text-center">Premium Quality</h4>
                <p className="text-green-50 text-center">
                  Carefully selected and processed to preserve the full spectrum of flavor and aroma.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:translate-y-[-4px]">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center">
                    <Flame size={28} className="text-green-800" />
                  </div>
                </div>
                <h4 className="text-xl font-medium mb-3 text-center">Authentic Taste</h4>
                <p className="text-green-50 text-center">
                  Traditional Moroccan flavors that bring the vibrant markets of Marrakech to your home.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial */}
        <div 
          className="mt-20 text-center max-w-3xl mx-auto opacity-100 transform transition-all duration-1000 ease-out"
        >
          <div className="text-5xl text-amber-400 font-serif">"</div>
          <p className="text-xl md:text-2xl font-serif italic text-gray-700 mb-6">
            Agoail spices have transformed my cooking. The flavors are so rich and authentic — it's like taking a culinary journey to Morocco with every dish.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200">
            <img src={users} alt="Moroccan Herbs" />

            </div>
            <div className="text-left">
              <p className="font-medium text-gray-800">Sarah Mitchell</p>
              <p className="text-sm text-gray-500">Culinary Enthusiast</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
