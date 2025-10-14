import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ShoppingCart, X } from "lucide-react";

// Product images
import freshMushroom from "../../../../public/images/actual_product/fresh mushroom.jpg";
import gingerMushroom from "../../../../public/images/actual_product/Ginger Mushroom teabag.jpg";
import mintMushroom from "../../../../public/images/actual_product/mint mushroom teabag.jpg";
import mushroomTeabag from "../../../../public/images/actual_product/mushroom teabag.jpg";
import powderedMushroom from "../../../../public/images/actual_product/powdered mushroom.jpg";

const Showcase = () => {
  const mushrooms = [
    {
      id: 1,
      name: "Powdered Mushroom",
      image: powderedMushroom,
      price: "GH₵ 25",
      link: "https://paystack.shop/pay/7anw2yx8uo",
    },
    {
      id: 2,
      name: "Mushroom Teabag",
      image: mushroomTeabag,
      price: "GH₵ 35",
      link: "https://paystack.shop/pay/hy4tmd5lom",
    },
    {
      id: 3,
      name: "Ginger Mushroom Teabag",
      image: gingerMushroom,
      price: "GH₵ 35",
      link: "https://paystack.shop/pay/hy4tmd5lom",
    },
    {
      id: 4,
      name: "Fresh Mushroom",
      image: freshMushroom,
      price: "GH₵ 25",
      link: "https://paystack.shop/pay/7anw2yx8uo",
    },
    {
      id: 5,
      name: "Mint Mushroom Teabag",
      image: mintMushroom,
      price: "GH₵ 35",
      link: "https://paystack.shop/pay/hy4tmd5lom",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const sliderRef = useRef(null);
  const maxSlides = Math.max(0, Math.ceil(mushrooms.length / 4) - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1));
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, maxSlides]);

  const handleTouchStart = (e) => {
    setIsPaused(true);
    sliderRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (sliderRef.current === null) return;
    const diff = sliderRef.current - e.touches[0].clientX;
    if (diff > 5) setCurrentSlide((prev) => Math.min(maxSlides, prev + 1));
    if (diff < -5) setCurrentSlide((prev) => Math.max(0, prev - 1));
    sliderRef.current = null;
  };

  const handleTouchEnd = () => {
    sliderRef.current = null;
    setIsPaused(false);
  };

  return (
    <div id="product" className="py-16 bg-gradient-to-b from-green-50 to-white products relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
                      <div
                        className={`absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 z-10 flex items-center justify-center ${
                          isHovering === mushroom.id ? "opacity-100" : "opacity-0"
                        }`}
                      >
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
                        className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {mushroom.name}
                      </h3>
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

          {/* Arrows */}
          {currentSlide > 0 && (
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 text-green-600 p-2 rounded-full shadow-lg hover:bg-green-600 hover:text-white transition-colors duration-300 z-10"
              onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {currentSlide < maxSlides && (
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 text-green-600 p-2 rounded-full shadow-lg hover:bg-green-600 hover:text-white transition-colors duration-300 z-10"
              onClick={() => setCurrentSlide((prev) => Math.min(maxSlides, prev + 1))}
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-green-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to Experience Nature's Bounty?
          </h3>
          <button
            onClick={() => setShowAll(true)}
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-green-700 hover:shadow-lg"
          >
            View All Products
          </button>
        </div>
      </div>

      {/* Transparent Overlay Modal */}
      {showAll && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-4">
          <div className="relative bg-white bg-opacity-95 backdrop-blur-md rounded-2xl p-6 max-w-6xl w-full max-h-[85vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setShowAll(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition-colors"
            >
              <X size={28} />
            </button>

            <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
              Our Full Product Range
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {mushrooms.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-green-600 font-bold mb-3">{item.price}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Showcase;
