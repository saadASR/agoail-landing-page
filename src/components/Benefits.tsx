import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-16 relative overflow-hidden">
      <div className="pattern-bg absolute inset-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-center text-3xl md:text-4xl mb-12">Natural Benefits</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md fade-in">
            <div className="w-16 h-16 bg-[#4E6B4D] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#4E6B4D] mb-3 text-center">100% Natural</h3>
            <p className="text-gray-700 text-center">
              Our spices are 100% natural, harvested from the finest regions of Morocco. We never use artificial additives, preservatives, or fillers in any of our products.
            </p>
          </div>
          
          {/* Benefit 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md fade-in-delay-1">
            <div className="w-16 h-16 bg-[#4E6B4D] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#4E6B4D] mb-3 text-center">Health Benefits</h3>
            <p className="text-gray-700 text-center">
              Our spices are not only flavorful but also packed with natural health benefits. Thyme and garlic are known for their antioxidant and antimicrobial properties.
            </p>
          </div>
          
          {/* Benefit 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md fade-in-delay-2">
            <div className="w-16 h-16 bg-[#4E6B4D] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#4E6B4D] mb-3 text-center">Superior Quality</h3>
            <p className="text-gray-700 text-center">
              Each batch of our spices undergoes rigorous quality control to ensure the highest standards of flavor, aroma, and purity are maintained from harvest to your kitchen.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-[#4E6B4D] mb-6 text-center">Why Choose Agoail?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-[#EFECDD] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4E6B4D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-[#4E6B4D] mb-2">Traditional Processing</h4>
                <p className="text-sm text-gray-700">
                  We use time-honored traditional methods to process our spices, preserving their authentic flavor and nutritional value.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-[#EFECDD] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4E6B4D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-[#4E6B4D] mb-2">Sustainable Sourcing</h4>
                <p className="text-sm text-gray-700">
                  We work directly with local farmers who use sustainable farming practices to grow our herbs and spices.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-[#EFECDD] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4E6B4D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-[#4E6B4D] mb-2">Rich in Flavor</h4>
                <p className="text-sm text-gray-700">
                  Our spices are harvested at peak ripeness and processed immediately to lock in their intense flavor and aroma.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-[#EFECDD] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4E6B4D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-[#4E6B4D] mb-2">Versatile Use</h4>
                <p className="text-sm text-gray-700">
                  Our products are designed to be versatile additions to your kitchen, perfect for a wide range of culinary applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Benefits };
export default Benefits;
