import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Utensils, Book, ThumbsUp } from 'lucide-react';

const HowToUse = () => {
  const [expandedSection, setExpandedSection] = useState('all');
  const [activeTab, setActiveTab] = useState('culinary');

  const toggleSection = (section: React.SetStateAction<string>) => {
    setExpandedSection(expandedSection === section ? 'all' : section);
  };

  const products = [
    {
      id: 'thyme',
      name: 'Distilled Thyme',
      description: 'A delicate herb with a subtle, earthy flavor perfect for Mediterranean cooking.',
      image: '/images/DistilledThyme.jpg',
      culinaryUses: [
        'Add to soups, stews, and broths for a rich herbal flavor',
        'Sprinkle over roasted vegetables before cooking',
        'Mix with olive oil for a flavorful bread dipping sauce',
        'Use in marinades for chicken or lamb'
      ],
      chefTip: 'For an authentic Moroccan experience, add a pinch of our distilled thyme to tagine dishes during the last 15 minutes of cooking to preserve its delicate aroma.'
    },
    {
      id: 'garlic',
      name: 'Garlic Powder',
      description: 'Intensely flavored garlic powder made from premium Moroccan-grown garlic cloves.',
      image: '/images/GarlicPowder.jpg',
      culinaryUses: [
        'Use as a seasoning for meats, poultry, and fish',
        'Blend into sauces, dressings, and marinades',
        'Mix with butter for a quick and flavorful garlic bread',
        'Add to rubs and spice blends'
      ],
      chefTip: 'Add our garlic powder early in the cooking process to allow its flavor to fully develop and infuse throughout your dish.'
    },
    {
      id: 'herb-garlic',
      name: 'Herb-Infused Garlic Powder',
      description: 'Our signature blend combining garlic powder with traditional Moroccan herbs.',
      image: '/images/herb-infused-garlic.jpg',
      culinaryUses: [
        'Use as an all-purpose seasoning for Mediterranean dishes',
        'Sprinkle over pizza, pasta, or roasted vegetables',
        'Mix with olive oil for a flavorful bread dipping sauce',
        'Add to yogurt for a quick herb dip'
      ],
      perfectPairings: [
        'Grilled lamb or chicken',
        'Couscous and grain dishes',
        'Roasted vegetables and legumes',
        'Fresh bread and olive oil'
      ],
      chefTip: 'Our herb-infused garlic powder is the perfect shortcut to authentic Moroccan flavors. Try it in a traditional tagine or sprinkle over roasted vegetables with a drizzle of olive oil for an instant taste of Morocco.'
    }
  ];

  return (
    <section id="how-to-use" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl md:text-4xl font-semibold text-gray-800 mb-2 relative">
            How To Use
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-green-600 rounded-full"></span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover the versatility of our authentic Moroccan spices with these chef-approved suggestions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div 
              key={product.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-2 ${expandedSection === product.id || expandedSection === 'all' ? 'border-green-600' : 'border-transparent'}`}
            >
              <div className="p-6 bg-[#4E6B4D] text-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <button 
                    onClick={() => toggleSection(product.id)}
                    className="text-white hover:bg-green-700 p-1 rounded-full transition-colors"
                  >
                    {expandedSection === product.id ? 
                      <ChevronUp size={20} /> : 
                      <ChevronDown size={20} />
                    }
                  </button>
                </div>
              </div>
              
              <div className="flex p-4 bg-[#EFECDD] border-b border-gray-200">
                <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
                </div>
                <p className="text-gray-700 text-sm">{product.description}</p>
              </div>
              
              {(expandedSection === product.id || expandedSection === 'all') && (
                <div className="p-6 bg-white">
                  <div className="mb-4 border-b border-gray-200">
                    <div className="flex space-x-4">
                      <button
                        className={`py-2 px-1 border-b-2 text-sm font-medium transition-colors ${activeTab === 'culinary' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                        onClick={() => setActiveTab('culinary')}
                      >
                        <div className="flex items-center">
                          <Utensils className="mr-1" size={16} />
                          Culinary Uses
                        </div>
                      </button>
                      
                      {product.perfectPairings && (
                        <button
                          className={`py-2 px-1 border-b-2 text-sm font-medium transition-colors ${activeTab === 'pairings' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                          onClick={() => setActiveTab('pairings')}
                        >
                          <div className="flex items-center">
                            <Book className="mr-1" size={16} />
                            Perfect Pairings
                          </div>
                        </button>
                      )}
                      
                      <button
                        className={`py-2 px-1 border-b-2 text-sm font-medium transition-colors ${activeTab === 'tips' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                        onClick={() => setActiveTab('tips')}
                      >
                        <div className="flex items-center">
                          <ThumbsUp className="mr-1" size={16} />
                          Chef's Tip
                        </div>
                      </button>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    {activeTab === 'culinary' && (
                      <ul className="space-y-2">
                        {product.culinaryUses.map((use, index) => (
                          <li key={index} className="flex items-start">
                            <div className="bg-green-100 rounded-full p-1 mr-2 mt-0.5">
                              <Check size={14} className="text-green-600" />
                            </div>
                            <span className="text-gray-700 text-sm">{use}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {activeTab === 'pairings' && product.perfectPairings && (
                      <ul className="space-y-2">
                        {product.perfectPairings.map((pairing, index) => (
                          <li key={index} className="flex items-start">
                            <div className="bg-green-100 rounded-full p-1 mr-2 mt-0.5">
                              <Check size={14} className="text-green-600" />
                            </div>
                            <span className="text-gray-700 text-sm">{pairing}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {activeTab === 'tips' && (
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                        <p className="text-gray-700 text-sm italic">
                          "{product.chefTip}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {expandedSection !== product.id && expandedSection !== 'all' && (
                <div className="px-6 py-4 text-center">
                  <button 
                    onClick={() => toggleSection(product.id)}
                    className="text-green-600 hover:text-green-700 font-medium text-sm"
                  >
                    Show Details
                  </button>
                </div>
              )}
              
              <div className="bg-gray-50 px-6 py-4 flex justify-between">
                <button className="text-xs text-gray-500 hover:text-green-600 transition-colors flex items-center">
                  <Book size={14} className="mr-1" />
                  Download Recipe
                </button>
                <button className="text-xs text-gray-500 hover:text-green-600 transition-colors flex items-center">
                  <Utensils size={14} className="mr-1" />
                  Cooking Video
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a 
            href="#recipes" 
            className="px-6 py-3 bg-[#4E6B4D] text-white rounded-full hover:bg-green-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center"
          >
            <Utensils size={18} className="mr-2" />
            Explore Moroccan Recipes
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;