import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import test1 from '../../../../public/images/testimonials/test1.jpg'
import test2 from '../../../../public/images/testimonials/test2.jpg'
import test3 from '../../../../public/images/testimonials/test3.jpg'

const testimonials = [
  {
    id: 1,
    name: "Akua Mensah",
    role: "Blue-Collar Worker",
    image: test2,
    quote: "This product has been a game-changer for my health. It's like finding a rare, nutrient-rich mushroom in the forest - it's a treasure that nourishes my body and mind!",
    benefit: "Increased Energy"
  },
  {
    id: 2,
    name: "Dr. Kwame Owusu",
    role: "Construction Engineer",
    image: test1,
    quote: "The quality of this product is reminiscent of the finest, most potent mushrooms. It's a testament to the power of nature in promoting immune system balance.",
    benefit: "Immune Support"
  },
  {
    id: 3,
    name: "Nana Ama Boateng",
    role: "Fisherman",
    image: test3,
    quote: "Incorporating this product into my daily routine has been like adding a boost of mushroom-based energy to my fishing trips. I'm performing better and recovering faster!",
    benefit: "Enhanced Recovery"
  }
];

const TestimonialCard = ({ testimonial }) => (
  <motion.div
  id='testimonials'
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gradient-to-b from-white to-green-50/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 relative hover:shadow-2xl transition-shadow duration-300 border border-green-100/30"
  >
    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
      <div className="w-14 h-14 rounded-full border-4 border-white shadow-lg overflow-hidden">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    <div className="mt-10 text-center">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
        <p className="text-secondary font-medium">{testimonial.role}</p>
      </div>

      <div className="mb-6">
        <span className="inline-block px-4 py-2 rounded-full bg-[#2e7d32]/10 text-[#2e7d32] text-sm font-medium">
          {testimonial.benefit}
        </span>
      </div>

      <p className="text-gray-600 italic leading-relaxed">"{testimonial.quote}"</p>
    </div>
  </motion.div>
);

const MobileSlideshow = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full px-8">
      <div className="overflow-visible">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-secondary w-4' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 -translate-y-1/2 -left-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-300 border border-gray-100"
      >
        <span className="text-secondary text-lg">←</span>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 -translate-y-1/2 -right-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-300 border border-gray-100"
      >
        <span className="text-secondary text-lg">→</span>
      </button>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f5fff5] via-green-50/30 to-green-100/50 relative">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#2e7d32]/10 rounded-full mix-blend-multiply blur-3xl animate-blob opacity-70"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#1b5e20]/10 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000 opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Health Benefits That <span className="text-[#2e7d32]">Matter</span>
          </h2>
          <div className="w-20 h-1 bg-[#2e7d32] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover how our product has transformed the lives of our customers, promoting better health and wellness naturally.
          </p>
        </div>

        {/* Responsive Grid/Slideshow */}
        <div className="mt-20">
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          <div className="md:hidden">
            <MobileSlideshow testimonials={testimonials} />
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <button className="bg-[#2e7d32] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1b5e20] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Experience the Benefits
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial; 