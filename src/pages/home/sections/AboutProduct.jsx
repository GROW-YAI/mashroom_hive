import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiMagicWandDuotone } from "react-icons/pi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import firstMushroom from "../../../../public/images/lionsmane-mushroom.jpg";
import secondMushroom from "../../../../public/images/shiitake-mushroom.jpg";
import thirdMushroom from "../../../../public/images/reishi-mushroom.jpg";
import fourthMushroom from "../../../../public/images/oyster-mushroom.jpg";
import fifthMushroom from "../../../../public/images/chaga-mushroom.jpg";
import sixthMushroom from "../../../../public/images/mushroom (5).jpg";

const AboutProduct = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  const products = [
    {
      title: "Lion's Mane",
      category: "medicinal",
      description: "Supports brain health and immunity",
      image: firstMushroom,
      benefits: ["Memory Enhancement", "Nerve Health", "Mental Clarity"],
    },
    {
      title: "Shiitake",
      category: "gourmet",
      description: "Rich umami flavor and immune support",
      image: secondMushroom,
      benefits: ["Heart Health", "Immune Support", "Rich in Vitamins"],
    },
    {
      title: "Reishi",
      category: "medicinal",
      description: "Ancient wisdom for modern wellness",
      image: thirdMushroom,
      benefits: ["Immune Support", "Stress Reduction", "Heart Health"],
    },
    {
      title: "Oyster",
      category: "gourmet",
      description: "Delicate texture and versatile taste",
      image: fourthMushroom,
      benefits: ["Heart Health", "Immune Support", "Rich in Vitamins"],
    },
    {
      title: "Chaga",
      category: "medicinal",
      description: "Powerful antioxidant properties",
      image: fifthMushroom,
      benefits: ["Immune Support", "Antioxidant", "Heart Health"],
    },
    {
      title: "Cordyceps",
      category: "medicinal",
      description: "Natural energy and vitality boost",
      image: sixthMushroom,
      benefits: ["Energy Boost", "Immune Support", "Heart Health"],
    },
  ];

  const features = [
    { title: "Organic", desc: "100% naturally grown without pesticides" },
    { title: "Fresh", desc: "Harvested daily for peak freshness" },
    { title: "Sustainable", desc: "Eco-friendly growing practices" },
    { title: "Premium", desc: "Highest quality standards" },
  ];

  const filteredProducts = products.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const handlePrevProduct = () => {
    setCurrentProductIndex((prev) =>
      prev === 0 ? filteredProducts.length - 1 : prev - 1
    );
  };

  const handleNextProduct = () => {
    setCurrentProductIndex((prev) =>
      prev === filteredProducts.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevFeature = () => {
    setCurrentFeatureIndex((prev) =>
      prev === 0 ? features.length - 1 : prev - 1
    );
  };

  const handleNextFeature = () => {
    setCurrentFeatureIndex((prev) =>
      prev === features.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-b from-[#f5fff5] to-[#e6f7e6] text-[#1b5e20] py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#2e7d32] via-[#1b5e20] to-[#2e7d32] bg-clip-text text-transparent drop-shadow-sm flex justify-center items-center gap-2">
            Mushroom Magic <PiMagicWandDuotone />
          </h1>
          <p className="mt-6 text-xl text-[#2e7d32]/80">
            Discover the healing power of nature's most mysterious organisms
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-16">
          {["all", "medicinal", "gourmet"].map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentProductIndex(0);
              }}
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all shadow-sm ${
                activeCategory === category
                  ? "bg-[#2e7d32] text-white font-medium shadow-md"
                  : "bg-white/80 border border-[#2e7d32]/30 text-[#2e7d32] hover:border-[#2e7d32] hover:bg-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Desktop Products Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.title}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70" />
              <div className="absolute bottom-0 p-6 space-y-4 w-full">
                <span className="px-3 py-1 rounded-full text-xs bg-white/90 text-[#1b5e20] font-medium uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="text-2xl font-bold text-white drop-shadow-sm">
                  {product.title}
                </h3>
                <p className="text-white/90 drop-shadow-sm">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Product Slider (Manual) */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentProductIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={filteredProducts[currentProductIndex].image}
                    alt={filteredProducts[currentProductIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70" />
                <div className="absolute bottom-0 p-6 space-y-4 w-full">
                  <span className="px-3 py-1 rounded-full text-xs bg-white/90 text-[#1b5e20] font-medium uppercase tracking-wide">
                    {filteredProducts[currentProductIndex].category}
                  </span>
                  <h3 className="text-2xl font-bold text-white drop-shadow-sm">
                    {filteredProducts[currentProductIndex].title}
                  </h3>
                  <p className="text-white/90 drop-shadow-sm">
                    {filteredProducts[currentProductIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Arrow buttons */}
          <button
            onClick={handlePrevProduct}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNextProduct}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Mobile Feature Slider (Manual) */}
        <div className="mt-24 md:hidden relative">
          <div className="overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentFeatureIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="p-8 rounded-2xl bg-white border border-[#2e7d32]/10 shadow-md group h-64 flex flex-col justify-center text-center"
              >
                <div className="w-16 h-16 mb-6 mx-auto rounded-full bg-[#2e7d32]/10 flex items-center justify-center">
                  <span className="text-2xl text-[#2e7d32]">✦</span>
                </div>
                <h3 className="text-2xl font-semibold text-[#2e7d32] mb-3">
                  {features[currentFeatureIndex].title}
                </h3>
                <p className="text-[#1b5e20]/80">
                  {features[currentFeatureIndex].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Arrow buttons */}
          <button
            onClick={handlePrevFeature}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNextFeature}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
