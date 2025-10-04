import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mushroom1 from '../../../../public/images/mushroom (1).jpg'
import mushroom2 from '../../../../public/images/mushroom (2).jpg'
import mushroom3 from '../../../../public/images/mushroom (3).jpg'
import mushroom4 from '../../../../public/images/mushroom (4).jpg'
import mushroom5 from '../../../../public/images/mushroom 5.jpg'
import mushroom6 from '../../../../public/images/mushroom 6.jpg'
import mushroom7 from '../../../../public/images/mushroom 7.jpg'
import mushroom8 from '../../../../public/images/mushroom 8.jpg'
 

const Hero = () => {
  // console.log('Image imports:', { mushroom1, mushroom2, mushroom3, mushroom4 });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    accessibility: true,
    focusOnSelect: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    arrows: true,
    ariaLive: "polite",
  };

  const slides = [
    {
      image: mushroom8,
      title: "Fresh Organic Mushrooms",
      description: "Locally sourced and naturally grown",
    },
    {
      image: mushroom5,
      title: "Premium Quality",
      description: "Hand-picked for the best flavor",
    },
    {
      image: mushroom6,
      title: "Sustainable Farming",
      description: "Environmentally conscious cultivation",
    },
    {
      image: mushroom7,
      title: "Farm to Table",
      description: "Direct from our farms to your plate",
    },
  ];

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-[50vh] md:h-[80vh] overflow-hidden bg-[#f5fff5]">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className="relative h-[50vh] md:h-[80vh]"
            role="tabpanel"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${slides.length}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0   bg-opacity-5 flex flex-col justify-center items-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#f5fff5] drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-[#f5fff5] mb-6 drop-shadow-lg">
                {slide.description}
              </p>
              <a
                href="#product"
                onClick={(e) => handleLinkClick(e, "#product")}
                className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                aria-label="Shop Now - Go to products section"
              >
                Products
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
