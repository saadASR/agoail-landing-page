import React, { useState } from 'react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  
  // Product data
  const products = [
    {
      id: 1,
      name: "Distilled Thyme",
      image: "/images/DistilledThyme.jpg",
      description: "Our premium distilled thyme captures the essence of fresh thyme with its aromatic and flavorful profile. Carefully harvested and processed to preserve its natural properties.",
      features: ["100% Natural", "No Preservatives", "Traditional Processing"],
      price: "$12.99",
      badge: "Best Seller",
      details: "Sourced from the Atlas Mountains, our distilled thyme brings authentic Moroccan flavor to your kitchen. Perfect for meat dishes, stews, and traditional tagines."
    },
    {
      id: 2,
      name: "Garlic Powder",
      image: "/images/GarlicPowder.jpg",
      description: "Our finely ground garlic powder delivers intense flavor to your dishes. Made from premium garlic cloves, it's perfect for seasoning a wide variety of cuisines.",
      features: ["Pure Garlic", "No Additives", "Rich Flavor"],
      price: "$9.99",
      badge: "Popular",
      details: "Made from hand-selected garlic bulbs that are dried and ground to perfection. Our careful processing ensures maximum flavor retention and aroma."
    },
    {
      id: 3,
      name: "Herb-Infused Garlic Powder",
      image: "/images/herb-infused-garlic.jpg",
      description: "Our special blend combines the robust flavor of garlic with the aromatic notes of traditional Moroccan herbs. This versatile seasoning includes thyme, oregano, rosemary, and bay leaf for a complex and delicious flavor profile.",
      features: ["Premium Blend", "Versatile Use", "Rich Aroma"],
      price: "$14.99",
      badge: "New",
      details: "A proprietary blend developed by Moroccan culinary experts, combining the finest herbs with our signature garlic powder. Elevate any dish with just a pinch."
    },
    {
      id: 4,
      name: "Moroccan Spice Blend",
      image: "/images/herbs1.jpg",
      description: "An authentic blend of over 15 spices, crafted according to traditional Moroccan recipes. Bring the warmth and depth of North African cuisine to your home cooking.",
      features: ["Traditional Recipe", "Balanced Flavor", "No Fillers"],
      price: "$15.99",
      badge: "Limited",
      details: "Our most complex blend, featuring carefully balanced proportions of cumin, coriander, cinnamon, and other secret ingredients passed down through generations."
    }
  ];
  
  // Herbs in the special blend
  const herbs = [
    { letter: "T", name: "Thyme", color: "bg-[#EFECDD]" },
    { letter: "O", name: "Oregano", color: "bg-[#F2E8D5]" },
    { letter: "R", name: "Rosemary", color: "bg-[#E8F2D5]" },
    { letter: "B", name: "Bay Leaf", color: "bg-[#D5E8D8]" }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#4E6B4D]/10 text-[#4E6B4D] font-medium rounded-full text-sm mb-3">OUR PRODUCTS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Premium Moroccan Spices</h2>
          <div className="w-24 h-1 bg-[#4E6B4D] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our selection of authentic, sustainably sourced spices and herbs from the heart of Morocco
          </p>
        </div>
        
        {/* Product Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button 
            onClick={() => setSelectedProduct(null)} 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedProduct === null ? 'bg-[#4E6B4D] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            All Products
          </button>
          {products.map(product => (
            <button 
              key={product.id}
              onClick={() => setSelectedProduct(product.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedProduct === product.id ? 'bg-[#4E6B4D] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {product.name}
            </button>
          ))}
        </div>
        
        {/* Featured Product (if one is selected) */}
        {selectedProduct && (
          <div className="mb-16 bg-[#F9F7F2] rounded-2xl overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative">
                <div className="absolute top-4 left-4 bg-[#4E6B4D] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {products.find(p => p.id === selectedProduct)?.badge}
                </div>
                <img 
                  src={products.find(p => p.id === selectedProduct)?.image} 
                  alt={products.find(p => p.id === selectedProduct)?.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-10 md:w-3/5">
                <h3 className="text-3xl font-bold text-gray-800 mb-3">{products.find(p => p.id === selectedProduct)?.name}</h3>
                <div className="text-2xl font-semibold text-[#4E6B4D] mb-6">{products.find(p => p.id === selectedProduct)?.price}</div>
                <p className="text-gray-700 mb-6">{products.find(p => p.id === selectedProduct)?.description}</p>
                <p className="text-gray-700 mb-6">{products.find(p => p.id === selectedProduct)?.details}</p>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-800 mb-3">Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {products.find(p => p.id === selectedProduct)?.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4E6B4D] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-3 bg-[#4E6B4D] text-white font-medium rounded-lg hover:bg-[#3d553c] transition-colors duration-300 shadow-md">
                    Add to Cart
                  </button>
                  <button className="px-8 py-3 border border-[#4E6B4D] text-[#4E6B4D] font-medium rounded-lg hover:bg-[#4E6B4D]/10 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products
            .filter(product => selectedProduct === null || product.id === selectedProduct)
            .map(product => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#4E6B4D] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                    <div className="text-white/90 font-medium">{product.price}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 line-clamp-3">{product.description}</p>
                  <ul className="mb-5 space-y-2">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#4E6B4D] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={() => setSelectedProduct(product.id)}
                      className="text-[#4E6B4D] font-medium hover:underline flex items-center"
                    >
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button className="p-2 rounded-full bg-[#4E6B4D]/10 text-[#4E6B4D] hover:bg-[#4E6B4D]/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        
        {/* Special Product Feature - Herb-Infused Blend */}
        <div className="mt-20 bg-[#F9F7F2] rounded-2xl overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-[#4E6B4D]/10 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block px-3 py-1 bg-[#4E6B4D] text-white text-xs font-bold rounded-full mb-4">
                  FEATURED PRODUCT
                </div>
                <h3 className="text-2xl font-bold text-[#4E6B4D] mb-4">Herb-Infused<br />Garlic Powder</h3>
                <img 
                  src="/images/herb-infused-garlic.jpg" 
                  alt="Herb-Infused Garlic Powder" 
                  className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-white shadow-md"
                />
                <div className="mt-6 text-xl font-semibold text-[#4E6B4D]">$14.99</div>
              </div>
            </div>
            <div className="p-8 md:w-2/3">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">The Perfect Blend of Moroccan Herbs</h4>
              <p className="text-gray-700 mb-6">
                Our special blend combines the robust flavor of garlic with the aromatic notes of traditional Moroccan herbs. 
                This versatile seasoning includes thyme, oregano, rosemary, and bay leaf for a complex and delicious flavor profile 
                that enhances everything from grilled meats to roasted vegetables.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {herbs.map((herb, idx) => (
                  <div key={idx} className="text-center group">
                    <div className={`w-16 h-16 ${herb.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-md transition-all duration-300`}>
                      <span className="text-[#4E6B4D] font-bold text-xl">{herb.letter}</span>
                    </div>
                    <p className="font-medium text-gray-800">{herb.name}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="text-sm text-gray-500 mb-1">Customer Rating</div>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-sm text-gray-600">(126 reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-[#4E6B4D] text-white font-medium rounded-lg hover:bg-[#3d553c] transition-colors duration-300 shadow-md flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => setSelectedProduct(3)}
                    className="px-6 py-3 border border-[#4E6B4D] text-[#4E6B4D] font-medium rounded-lg hover:bg-[#4E6B4D]/10 transition-colors duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;