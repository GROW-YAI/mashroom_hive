import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

// // Import product images
// import product1 from '../../../../public/images/product_images/A0004.jpg'
// import product2 from '../../../../public/images/product_images/A0005.jpg'
// import product3 from '../../../../public/images/product_images/A0006.jpg'
// import product4 from '../../../../public/images/product_images/A0007.jpg'
// import product5 from '../../../../public/images/product_images/A0008.jpg'
// import product6 from '../../../../public/images/product_images/A0009.jpg'
// import product7 from '../../../../public/images/product_images/A0010.jpg'
// import product8 from '../../../../public/images/product_images/A0011.jpg'
// import product9 from '../../../../public/images/product_images/A0012.jpg'
// import product10 from '../../../../public/images/product_images/A0013.jpg'
// import product11 from '../../../../public/images/product_images/A0014.jpg'
// import product12 from '../../../../public/images/product_images/A0015.jpg'
// import product13 from '../../../../public/images/product_images/A0016.jpg'

import freshMushroom from '../../../../public/images/actual_product/fresh mushroom.jpg'
import gingerMushroom from '../../../../public/images/actual_product/Ginger Mushroom teabag.jpg'
import mintMushroom from '../../../../public/images/actual_product/mint mushroom teabag.jpg'
import mushroomTeabag from '../../../../public/images/actual_product/mushroom teabag.jpg'
import powderedMushroom from '../../../../public/images/actual_product/powdered mushroom.jpg'



const Showcase = () => {
  const mushrooms = [
    {
      id: 1,
      name: "Powdered Mushroom",
      image: powderedMushroom,
      // description: "Rich umami flavor, perfect for Asian cuisine",
      price: "GH₵ 25",
      link: "https://paystack.com/buy/powdered-mushroom-jarasy"
    },
    {
      id: 2,
      name: "Mushroom Teabag",
      image: mushroomTeabag,
      // description: "Delicate texture with mild seafood-like flavor",
      price: "GH₵ 35",
      link: "https://paystack.com/buy/mushroom-teabag-wrepvy"
    },
    {
      id: 3,
      name: "Ginger Mushroom Teabag",
      image: gingerMushroom,
      // description: "Meaty texture with subtle pine notes",
      price: "GH₵ 35",
      link: "https://paystack.com/buy/ginger-mushroom-teabag-qandic"
    },
    {
      id: 4,
      name: "Fresh Mushroom",
      image: freshMushroom,
      // description: "Unique texture, known for cognitive benefits",
      price: "GH₵ 25",
      link: "https://paystack.com/buy/fresh-mushroom-jgqswm"
    },
    {
      id: 5,
      name: "Mint Mushroom Teabag",
      image: mintMushroom,
      // description: "Traditional medicinal mushroom for wellness",
      price: "GH₵ 35",
      link: "https://paystack.com/buy/mint-mushroom-teabag-rryrjl"
    },
    // {
    //   id: 6,
    //   name: "Mushroom Teabag",
    //   image: mintMushroom,
    //   // description: "Rich, woodsy flavor with immune benefits",
    //   price: "GH₵ 35",
    //   link: "https://paystack.com/buy/mushroom-tea-mjdywc"
    // },
    // {
    //   id: 7,
    //   name: "Enoki",
    //   image: product7,
    //   description: "Delicate, crispy texture perfect for soups",
    //   price: "GH₵6.99",
    //   link: "https://paystack.com/buy/mushroom-tea-mjdywc"
    // },
    // {
    //   id: 8,
    //   name: "Cordyceps",
    //   image: product8,
    //   description: "Energy-boosting medicinal mushroom",
    //   price: "GH₵15.99",
    //   link: "https://paystack.com/buy/mushroom-tea-mjdywc"
    // },
    // {
    //   id: 9,
    //   name: "Chaga",
    //   image: product9,
    //   description: "Powerful antioxidant properties",
    //   price: "GH₵13.99",
    //   link: "https://paystack.com/buy/mushroom-tea-mjdywc"
    // },
    // {
    //   id: 10,
    //   name: "Turkey Tail",
    //   image: product10,
    //   description: "Beautiful pattern, immune system support",
    //   price: "GH₵10.99",
    //   link: "https://paystack.com/buy/mushroom-tea-mjdywc"
    // },
    // {
    //   id: 11,
    //   name: "Wood Ear",
    //   image: product11,
    //   description: "Crunchy texture, great in Asian dishes",
    //   price: "GH₵8.99",
    //   link: "https://paystack.com/buy/mushroom-tea-mjdywc"
    // },
    // {
    //   id: 12,
    //   name: "Porcini",
    //   image: product12,
    //   description: "Rich, nutty flavor perfect for Italian cuisine",
    //   price: "GH₵16.99",
    //   link: "https://paystack.com/buy/mushroom-tea-mjdywc"
    // },
    // {
    //   id: 13,
    //   name: "King Trumpet",
    //   image: product13,
    //   description: "Meaty texture with mild seafood notes",
    //   price: "GH₵13.99",
    //   link: "https://paystack.com/buy/mushroom-tea-mjdywc"
    // }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(null);
  const sliderRef = useRef(null);

  const maxSlides = Math.max(0, Math.ceil(mushrooms.length / 4) - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide(prev => 
          prev >= maxSlides ? 0 : prev + 1
        );
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, maxSlides]);

  const handleTouchStart = (e) => {
    setIsPaused(true);
    const touchDown = e.touches[0].clientX;
    sliderRef.current = touchDown;
  };

  const handleTouchMove = (e) => {
    if (sliderRef.current === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = sliderRef.current - currentTouch;

    if (diff > 5) { // Swipe left
      setCurrentSlide(prev => Math.min(maxSlides, prev + 1));
      sliderRef.current = null;
    }

    if (diff < -5) { // Swipe right
      setCurrentSlide(prev => Math.max(0, prev - 1));
      sliderRef.current = null;
    }
  };

  const handleTouchEnd = () => {
    sliderRef.current = null;
    setIsPaused(false);
  };

  return (
    <div id="product" className="py-16 bg-gradient-to-b from-green-50 to-white products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">
            Discover Our <span className="text-green-600">Mushroom</span> Collection
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our premium selection of culinary and medicinal mushrooms, 
            harvested with care for your health and culinary delight.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="relative">
          <div 
            className="overflow-hidden rounded-xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {mushrooms.map((mushroom) => (
                <div 
                  key={mushroom.id}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 p-3"
                  onMouseEnter={() => setIsHovering(mushroom.id)}
                  onMouseLeave={() => setIsHovering(null)}
                >
                  <div className="relative h-full bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                    <div className="relative h-48 md:h-64 overflow-hidden">
                      <div className={`absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 z-10 flex items-center justify-center ${isHovering === mushroom.id ? 'opacity-100' : 'opacity-0'}`}>
                        <Link 
                          to={mushroom.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transform transition-transform duration-300 hover:scale-105"
                        >
                          <ShoppingCart size={18} />
                          <span>Buy Now</span>
                        </Link>
                      </div>
                      <img
                        src={mushroom.image}
                        alt={mushroom.name}
                        className="w-full h-full object-cover md:object-[50%_31%] transition-transform duration-500 transform hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{mushroom.name}</h3>
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-bold text-green-600">{mushroom.price}</p>
                        <div className="flex items-center">
                          <span className="text-amber-500 text-lg mr-1">★★★★★</span>
                          <span className="text-gray-500 text-sm">(5.0)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          {currentSlide > 0 && (
            <button 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 text-green-600 p-2 rounded-full shadow-lg hover:bg-green-600 hover:text-white transition-colors duration-300 z-10"
              onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          
          {currentSlide < maxSlides && (
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 text-green-600 p-2 rounded-full shadow-lg hover:bg-green-600 hover:text-white transition-colors duration-300 z-10"
              onClick={() => setCurrentSlide(prev => Math.min(maxSlides, prev + 1))}
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          )}
          
          {/* Pagination Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? "bg-green-600 w-6" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Experience Nature's Bounty?</h3>
          <Link 
            to="#all-products"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-green-700 hover:shadow-lg"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
