import React, { useState, useEffect } from 'react';
import users from '../assets/account.png'; // <-- correct import

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      content: "I've been using Agoail's distilled thyme for over a year now...",
      author: "Sarah L.",
      title: "Home Chef",
      image: users,
      product: "Distilled Thyme"
    },
    {
      id: 2,
      content: "The herb-infused garlic powder is a game-changer...",
      author: "Michael T.",
      title: "Restaurant Owner",
      image: users,
      product: "Herb-infused Garlic Powder"
    },
    {
      id: 3,
      content: "As someone who values natural ingredients...",
      author: "Amina K.",
      title: "Nutritionist",
      image: users,
      product: "Organic Garlic Powder"
    },
    {
      id: 4,
      content: "The Moroccan spice blend has transformed my cooking...",
      author: "David R.",
      title: "Food Blogger",
      image: users,
      product: "Moroccan Spice Blend"
    },
    {
      id: 5,
      content: "I discovered Agoail at a local farmer's market...",
      author: "Elena J.",
      title: "Sustainable Chef",
      image: users,
      product: "Organic Cumin Seeds"
    }
  ];

  useEffect(() => {
    if (isHovering !== null) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering, testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[#EFECDD] to-[#F5F2E8]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#4E6B4D]/10 text-[#4E6B4D] font-medium rounded-full text-sm mb-3">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-[#4E6B4D] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why chefs and food enthusiasts trust Agoail for the most authentic Moroccan flavors
          </p>
        </div>

        <div className="hidden md:block relative mb-12">
          <div className="flex items-stretch gap-6 justify-center">
            {testimonials
              .slice(activeIndex, activeIndex + 3 > testimonials.length ? testimonials.length : activeIndex + 3)
              .map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-card w-1/3 bg-white rounded-xl shadow-lg transition-all duration-300 transform ${
                    idx === 1 ? 'scale-105 z-10' : 'scale-100 opacity-90'
                  }`}
                  onMouseEnter={() => setIsHovering(testimonial.id)}
                  onMouseLeave={() => setIsHovering(null)}
                >
                  <div className="p-6 md:p-8 flex flex-col h-full">
                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                          <img src={testimonial.image} alt={testimonial.author} className="h-full w-full object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-800">{testimonial.author}</p>
                          <p className="text-sm text-gray-500">{testimonial.title}</p>
                        </div>
                      </div>
                      <div className="inline-block px-4 py-1 bg-[#4E6B4D]/10 text-[#4E6B4D] text-xs font-medium rounded-full mb-3">
                        {testimonial.product}
                      </div>
                      <div className="flex mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-yellow-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 italic">"{testimonial.content}"</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'bg-[#4E6B4D]' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full shadow-md p-2 hover:bg-[#4E6B4D] hover:text-white transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full shadow-md p-2 hover:bg-[#4E6B4D] hover:text-white transition-colors duration-300"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
