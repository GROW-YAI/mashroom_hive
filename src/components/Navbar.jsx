import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from '../../public/images/logo.png';
import { Menu, ShoppingCart } from 'lucide-react';
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track active section
  const menuRef = useRef(null); // Add this ref

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e, sectionId) => {
    setIsOpen(false); // Close menu on click

    if (sectionId.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId); // Update active section
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#home", "#about", "#product", "#testimonials", "#contact"];
      for (let section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add this useEffect for handling clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Innovator", path: "#innovator" },
    { name: "Product", path: "#product" },
    { name: "Testimonials", path: "#testimonials" },
    { name: "Contact Us", path: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <div className="container mx-auto max-w-7xl px-8 py-4">
        <div className="flex justify-between items-center w-full" ref={menuRef}>
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-12 hover:scale-105 transition-transform duration-300" />
          </div>

          {/* Navbar Items - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleLinkClick(e, item.path)}
                className={`relative text-sm font-medium transition-all duration-300 group ${
                  activeSection === item.path
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full ${
                  activeSection === item.path ? "w-full" : ""
                }`}></span>
              </a>
            ))}

            {/* Shop Now Button */}
            <a
              href="https://paystack.shop/themushroomhive"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-6 py-2.5 bg-green-600 text-white overflow-hidden rounded-lg group"
            >
              <span className="absolute w-0 h-full bg-green-700 transition-all duration-300 ease-out group-hover:w-full top-0 left-0"></span>
              <AiOutlineShopping size={20} className="relative z-10" />
              <span className="relative z-10">Shop Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-2 text-gray-700 hover:text-green-600 transition-colors duration-300"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100">
            <div className="flex flex-col py-4 px-8 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === item.path
                      ? "text-green-600"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {item.name}
                </a>
              ))}

              {/* Store Link */}
              <a
                href="https://paystack.shop/themushroomhive"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-1/4 items-center gap-2 px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                <ShoppingCart size={20} />
                <span className="-ml-4">Store</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
