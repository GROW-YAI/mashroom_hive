import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import firstMushroom from "../../../../public/images/lionsmane-mushroom.jpg";
import secondMushroom from "../../../../public/images/shiitake-mushroom.jpg";
import thirdMushroom from "../../../../public/images/reishi-mushroom.jpg";
import fourthMushroom from "../../../../public/images/oyster-mushroom.jpg";
import fifthMushroom from "../../../../public/images/chaga-mushroom.jpg";
import sixthMushroom from "../../../../public/images/mushroom (5).jpg";
import seventhMushroom from "../../../../public/images/mushroom_7.jpg";
import { PiMagicWandDuotone } from "react-icons/pi";
import Showcase from "./Showcase";

const AboutProduct = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  const products = [
    {
      title: "Lion's Mane",
      category: "medicinal",
      description: "Supports brain health and immunity",
      image: firstMushroom,
      benefits: ["Memory Enhancement", "Nerve Health", "Mental Clarity"]
    },
    {
      title: "Shiitake",
      category: "gourmet",
      description: "Rich umami flavor and immune support",
      image: secondMushroom,
      benefits: ["Heart Health", "Immune Support", "Rich in Vitamins"]
    },
    {
      title: "Reishi",
      category: "medicinal",
      description: "Ancient wisdom for modern wellness",
      image: thirdMushroom,
      benefits: ["Immune Support", "Stress Reduction", "Heart Health"]
    },
    {
      title: "Oyster",
      category: "gourmet",
      description: "Delicate texture and versatile taste",
      image: fourthMushroom,
      benefits: ["Heart Health", "Immune Support", "Rich in Vitamins"]
    },
    {
      title: "Chaga",
      category: "medicinal",
      description: "Powerful antioxidant properties",
      image: fifthMushroom,
      benefits: ["Immune Support", "Antioxidant", "Heart Health"]
    },
    {
      title: "Cordyceps",
      category: "medicinal",
      description: "Natural energy and vitality boost",
      image: sixthMushroom,
      benefits: ["Energy Boost", "Immune Support", "Heart Health"]
    }
  ];

  const features = [
    { title: "Organic", desc: "100% naturally grown without pesticides" },
    { title: "Fresh", desc: "Harvested daily for peak freshness" },
    { title: "Sustainable", desc: "Eco-friendly growing practices" },
    { title: "Premium", desc: "Highest quality standards" }
  ];

  const filteredProducts = products.filter(
    product => activeCategory === 'all' || product.category === activeCategory
  );

  // Automatic sliding for products (every 3 seconds)
  useEffect(() => {
    const productInterval = setInterval(() => {
      setCurrentProductIndex((prevIndex) => 
        (prevIndex + 1) % filteredProducts.length
      );
    }, 3000); // 3 seconds
    return () => clearInterval(productInterval); // Cleanup on unmount
  }, [filteredProducts.length]);

  // Automatic sliding for features (every 4 seconds)
  useEffect(() => {
    const featureInterval = setInterval(() => {
      setCurrentFeatureIndex((prevIndex) => 
        (prevIndex + 1) % features.length
      );
    }, 4000); // 4 seconds
    return () => clearInterval(featureInterval); // Cleanup on unmount
  }, [features.length]);

  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  return (
    <div id="about" className="min-h-screen bg-gradient-to-b from-[#f5fff5] to-[#e6f7e6] text-[#1b5e20] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-20"
        >
          <motion.h1 
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#2e7d32] via-[#1b5e20] to-[#2e7d32] bg-clip-text text-transparent drop-shadow-sm"
          >
            Mushroom Magic <PiMagicWandDuotone />
          </motion.h1>
          <motion.p 
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            className="mt-6 text-xl text-[#2e7d32]/80"
          >
            Discover the healing power of nature's most mysterious organisms
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-16">
          {['all', 'medicinal', 'gourmet'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all shadow-sm
                ${activeCategory === category 
                  ? 'bg-[#2e7d32] text-white font-medium shadow-md' 
                  : 'bg-white/80 border border-[#2e7d32]/30 text-[#2e7d32] hover:border-[#2e7d32] hover:bg-white'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70"/>
              <div className="absolute bottom-0 p-6 space-y-4 w-full">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 rounded-full text-xs bg-white/90 text-[#1b5e20] font-medium uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white drop-shadow-sm">{product.title}</h3>
                <p className="text-white/90 drop-shadow-sm">{product.description}</p>
                <ul className="space-y-2 bg-black/30 p-3 rounded-xl backdrop-blur-sm">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white">
                      <span className="text-[#4caf50] drop-shadow-sm">●</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Products Slider with AnimatePresence */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentProductIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={filteredProducts[currentProductIndex].image} 
                    alt={filteredProducts[currentProductIndex].title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70"/>
                <div className="absolute bottom-0 p-6 space-y-4 w-full">
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full text-xs bg-white/90 text-[#1b5e20] font-medium uppercase tracking-wide">
                      {filteredProducts[currentProductIndex].category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white drop-shadow-sm">
                    {filteredProducts[currentProductIndex].title}
                  </h3>
                  <p className="text-white/90 drop-shadow-sm">
                    {filteredProducts[currentProductIndex].description}
                  </p>
                  <ul className="space-y-2 bg-black/30 p-3 rounded-xl backdrop-blur-sm">
                    {filteredProducts[currentProductIndex].benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-white">
                        <span className="text-[#4caf50] drop-shadow-sm">●</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2e7d32] mb-4 drop-shadow-sm">
              Our Quality Promise
            </h2>
            <p className="text-xl text-[#1b5e20]/80 max-w-2xl mx-auto">
              Every mushroom we offer meets these exacting standards, ensuring you receive nature's finest
            </p>
          </motion.div>

          {/* Desktop Features Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-[#2e7d32]/10 hover:border-[#2e7d32]/30 transition-all shadow-md hover:shadow-lg group"
              >
                <div className="w-16 h-16 mb-6 rounded-full bg-[#2e7d32]/10 flex items-center justify-center group-hover:bg-[#2e7d32]/20 transition-all">
                  <span className="text-2xl text-[#2e7d32]">✦</span>
                </div>
                <h3 className="text-2xl font-semibold text-[#2e7d32] mb-3">{feature.title}</h3>
                <p className="text-[#1b5e20]/80">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Features Slider with AnimatePresence */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentFeatureIndex}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="p-8 rounded-2xl bg-white border border-[#2e7d32]/10 transition-all shadow-md group h-64 flex flex-col justify-center"
                >
                  <div className="w-16 h-16 mb-6 mx-auto rounded-full bg-[#2e7d32]/10 flex items-center justify-center">
                    <span className="text-2xl text-[#2e7d32]">✦</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#2e7d32] mb-3 text-center">
                    {features[currentFeatureIndex].title}
                  </h3>
                  <p className="text-[#1b5e20]/80 text-center">
                    {features[currentFeatureIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        {/* Call to Action Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 text-center"
        >
          <div className="bg-gradient-to-r from-[#1b5e20] to-[#2e7d32] rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Experience Nature's Bounty?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Discover the exceptional quality and benefits of our premium mushroom products
            </p>
            <a href="https://paystack.shop/themushroomhive" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-[#1b5e20] rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform transition hover:-translate-y-1">
              Shop Now
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutProduct;