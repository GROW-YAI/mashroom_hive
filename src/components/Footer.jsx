import React, { useState } from "react";
import logo from '../../public/images/logo.png';
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Email } from "@mui/icons-material";
import { Phone } from "@mui/icons-material";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <footer className="relative bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400"></div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* MOBILE VIEW (Hidden on sm and above screens) */}
        <div className="sm:hidden">
          {/* Logo & Tagline - Always visible */}
          <div className="flex flex-col items-center mb-8">
            <div className="bg-white rounded-lg p-3 shadow-sm mb-4 transform hover:scale-105 transition-all duration-300">
              <img
                src={logo}
                alt="Company Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm text-center leading-relaxed font-light font-['Poppins'] max-w-xs">
              Innovating sustainable solutions for a greener tomorrow.
            </p>
          </div>

          {/* Social Icons - Always visible */}
          <div className="flex justify-center items-center space-x-6 mb-8">
            {[
              { Icon: FaFacebookF, color: "hover:bg-blue-600", link: "https://www.facebook.com/themushroomhive?mibextid=ZbWKwL" },
              { Icon: FaInstagram, color: "hover:bg-pink-600", link: "https://www.instagram.com/the_mushroomhive?igsh=MW82cGZmY2xydHgwdw==" },
              { Icon: FaWhatsapp, color: "hover:bg-green-600", link: "https://wa.me/+233240800951" }
            ].map(({ Icon, color, link }) => (
              <a
                key={color}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-white shadow-md transform hover:-translate-y-1 transition-all duration-300 ${color} hover:text-white group`}
              >
                <Icon className="w-5 h-5 transform transition-transform group-hover:rotate-12" />
              </a>
            ))}
          </div>

          {/* Collapsible Sections */}
          <div className="space-y-2 mb-8">
            {/* Quick Links Section */}
            <div className="border border-emerald-100 rounded-lg overflow-hidden bg-white shadow-sm">
              <button 
                onClick={() => toggleSection('links')}
                className="w-full py-3 px-4 flex justify-between items-center text-left text-emerald-800 font-semibold"
              >
                <span className="font-['Poppins']">Quick Links</span>
                {activeSection === 'links' ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              
              {activeSection === 'links' && (
                <div className="px-4 py-3 bg-white border-t border-emerald-50">
                  <nav className="flex flex-col space-y-3">
                    {['Home', 'About', 'Product', 'Testimonials', 'Contact Us', 'Shop'].map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-600 hover:text-emerald-600 transform hover:translate-x-2 transition-all duration-300 text-sm font-['Poppins'] py-1"
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </div>

            {/* Contact Info Section */}
            <div className="border border-emerald-100 rounded-lg overflow-hidden bg-white shadow-sm">
              <button 
                onClick={() => toggleSection('contact')}
                className="w-full py-3 px-4 flex justify-between items-center text-left text-emerald-800 font-semibold"
              >
                <span className="font-['Poppins']">Contact Us</span>
                {activeSection === 'contact' ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              
              {activeSection === 'contact' && (
                <div className="px-4 py-3 bg-white border-t border-emerald-50">
                  <div className="space-y-3">
                    <a
                      href="mailto:themushroomhive@gmail.com"
                      className="flex items-center space-x-3 text-gray-600 hover:text-emerald-600 transition-colors duration-300 py-1"
                    >
                      <Email className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm break-all">themushroomhive@gmail.com</span>
                    </a>
                    
                    <a
                      href="tel:+233240800951"
                      className="flex items-center space-x-3 text-gray-600 hover:text-emerald-600 transition-colors duration-300 py-1"
                    >
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">+233 240 800 951</span>
                    </a>
                    
                    <a
                      href="tel:+233501425027"
                      className="flex items-center space-x-3 text-gray-600 hover:text-emerald-600 transition-colors duration-300 py-1 ml-7"
                    >
                      <span className="text-sm">+233 501 425 027</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW (Hidden on xs screens, visible from sm and above) */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
            {/* Brand Section */}
            <div className="md:col-span-4 group">
              <div className="transform transition-all duration-500 hover:scale-105">
                <div className="bg-white rounded-lg p-4 shadow-sm mb-6 w-fit">
                  <img
                    src={logo}
                    alt="Company Logo"
                    className="h-20 sm:h-28 w-auto object-contain"
                  />
                </div>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light font-['Poppins']">
                  Innovating sustainable solutions for a greener tomorrow. Join us in making a difference.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-4">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-emerald-800 relative inline-block font-['Poppins']">
                Quick Links
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-emerald-500 transform origin-left transition-all duration-300 group-hover:w-full"></span>
              </h3>
              <nav className="flex flex-col space-y-3 sm:space-y-4">
                {['Home', 'About', 'Product', 'Testimonials', 'Contact Us','Shop'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-emerald-600 transform hover:translate-x-2 transition-all duration-300 w-fit text-base sm:text-lg group font-['Poppins']"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Section */}
            <div className="md:col-span-4 space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl font-bold text-emerald-800 relative inline-block font-['Poppins']">
                Connect With Us
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-emerald-500"></span>
              </h3>

              {/* Social Icons */}
              <div className="flex justify-center items-center space-x-2 sm:space-x-6">
                {[
                  { Icon: FaFacebookF, color: "hover:bg-blue-600", link: "https://www.facebook.com/themushroomhive?mibextid=ZbWKwL" },
                  { Icon: FaInstagram, color: "hover:bg-pink-600", link: "https://www.instagram.com/the_mushroomhive?igsh=MW82cGZmY2xydHgwdw==" },
                  { Icon: FaWhatsapp, color: "hover:bg-green-600", link: "https://wa.me/+233240800951" }
                ].map(({ Icon, color, link }) => (
                  <a
                    key={color}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 sm:p-3 rounded-full bg-white shadow-lg transform hover:-translate-y-2 transition-all duration-500 ${color} hover:text-white group`}
                  >
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 transform transition-transform group-hover:rotate-12" />
                  </a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col space-y-2">
                  <a
                    href="mailto:themushroomhive@gmail.com"
                    className="flex items-center space-x-4 text-gray-600 hover:text-emerald-600 transition-colors duration-300 group"
                  >
                    <Email className="w-5 h-5 transform transition-transform group-hover:rotate-12" />
                    <span className="text-sm break-all">
                      themushroomhive@gmail.com
                    </span>
                  </a>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <a
                    href="tel:+233240800951"
                    className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors duration-300 group"
                  >
                    <Phone className="w-5 h-5 transform transition-transform group-hover:rotate-12"/>
                    <span className="text-sm">
                      +233 240 800 951
                    </span>
                  </a>
                  <a
                    href="tel:+233501425027"
                    className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors duration-300 group pl-7"
                  >
                    <span className="text-sm">
                      +233 501 425 027
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - shared between mobile and desktop */}
        <div className="mt-8 sm:mt-16 pt-4 sm:pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-xs sm:text-base font-['Poppins']">
            © {new Date().getFullYear()} All Rights Reserved •
            <span className="text-emerald-600 animate-pulse"> ❤ </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// KJDcu34?83#Sw9R