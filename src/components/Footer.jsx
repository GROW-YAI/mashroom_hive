import React, { useState } from "react";
import logo from "../../public/images/logo.png";
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
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400"></div>

      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-6">
        {/* MOBILE VIEW */}
        <div className="sm:hidden">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center mb-4">
            <div className="bg-white rounded-lg p-2 shadow-sm mb-2 transform hover:scale-105 transition-all duration-300">
              <img
                src={logo}
                alt="Company Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-600 text-xs text-center leading-relaxed font-light font-['Poppins'] max-w-xs">
              Innovating sustainable solutions for a greener tomorrow.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center items-center space-x-4 mb-4">
            {[
              {
                Icon: FaFacebookF,
                color: "hover:bg-blue-600",
                link: "https://www.facebook.com/themushroomhive?mibextid=ZbWKwL",
              },
              {
                Icon: FaInstagram,
                color: "hover:bg-pink-600",
                link: "https://www.instagram.com/the_mushroomhive?igsh=MW82cGZmY2xydHgwdw==",
              },
              {
                Icon: FaWhatsapp,
                color: "hover:bg-green-600",
                link: "https://wa.me/+233240800951",
              },
            ].map(({ Icon, color, link }) => (
              <a
                key={color}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full bg-white shadow-md transform hover:-translate-y-1 transition-all duration-300 ${color} hover:text-white group`}
              >
                <Icon className="w-4 h-4 transform transition-transform group-hover:rotate-12" />
              </a>
            ))}
          </div>

          {/* Collapsible Sections */}
          <div className="space-y-1 mb-4">
            {/* Quick Links */}
            <div className="border border-emerald-100 rounded-lg overflow-hidden bg-white shadow-sm">
              <button
                onClick={() => toggleSection("links")}
                className="w-full py-2 px-4 flex justify-between items-center text-left text-emerald-800 font-semibold"
              >
                <span className="font-['Poppins'] text-sm">Quick Links</span>
                {activeSection === "links" ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </button>

              {activeSection === "links" && (
                <div className="px-4 py-2 bg-white border-t border-emerald-50">
                  <nav className="flex flex-col space-y-1">
                    {[
                      "Home",
                      "About",
                      "Product",
                      "Testimonials",
                      "Contact Us",
                      "Shop",
                    ].map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-600 hover:text-emerald-600 transform hover:translate-x-1 transition-all duration-300 text-xs font-['Poppins'] py-0.5"
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="border border-emerald-100 rounded-lg overflow-hidden bg-white shadow-sm">
              <button
                onClick={() => toggleSection("contact")}
                className="w-full py-2 px-4 flex justify-between items-center text-left text-emerald-800 font-semibold"
              >
                <span className="font-['Poppins'] text-sm">Contact Us</span>
                {activeSection === "contact" ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </button>

              {activeSection === "contact" && (
                <div className="px-4 py-2 bg-white border-t border-emerald-50">
                  <div className="space-y-1">
                    <a
                      href="mailto:themushroomhive@gmail.com"
                      className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 text-xs"
                    >
                      <Email className="w-3 h-3" />
                      <span>themushroomhive@gmail.com</span>
                    </a>
                    <a
                      href="tel:+233240800951"
                      className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 text-xs"
                    >
                      <Phone className="w-3 h-3" />
                      <span>+233 240 800 951</span>
                    </a>
                    <a
                      href="tel:+233501425027"
                      className="ml-6 text-gray-600 hover:text-emerald-600 text-xs"
                    >
                      +233 501 425 027
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-5">
            {/* Brand Section */}
            <div className="md:col-span-4 group">
              <div className="transform transition-all duration-500 hover:scale-105">
                <div className="bg-white rounded-lg p-2 shadow-sm mb-3 w-fit">
                  <img
                    src={logo}
                    alt="Company Logo"
                    className="h-14 sm:h-16 w-auto object-contain"
                  />
                </div>
                <p className="text-gray-600 text-sm leading-snug font-light font-['Poppins']">
                  Innovating sustainable solutions for a greener tomorrow.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-4">
              <h3 className="text-base font-bold mb-3 text-emerald-800 font-['Poppins']">
                Quick Links
              </h3>
              <nav className="flex flex-col space-y-1.5">
                {[
                  "Home",
                  "About",
                  "Product",
                  "Testimonials",
                  "Contact Us",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-emerald-600 transform hover:translate-x-1 transition-all duration-300 w-fit text-sm font-['Poppins']"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Section - UPDATED */}
            <div className="md:col-span-4 space-y-3">
              <h3 className="text-base font-bold text-emerald-800 font-['Poppins']">
                Connect With Us
              </h3>

              <div className="flex flex-col space-y-3">
                {/* Social Icons */}
                <div className="flex items-center space-x-3">
                  {[
                    {
                      Icon: FaFacebookF,
                      color: "hover:bg-blue-600",
                      link: "https://www.facebook.com/themushroomhive?mibextid=ZbWKwL",
                    },
                    {
                      Icon: FaInstagram,
                      color: "hover:bg-pink-600",
                      link: "https://www.instagram.com/the_mushroomhive?igsh=MW82cGZmY2xydHgwdw==",
                    },
                    {
                      Icon: FaWhatsapp,
                      color: "hover:bg-green-600",
                      link: "https://wa.me/+233240800951",
                    },
                  ].map(({ Icon, color, link }) => (
                    <a
                      key={color}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full bg-white shadow-md transform hover:-translate-y-1 transition-all duration-300 ${color} hover:text-white group`}
                    >
                      <Icon className="w-4 h-4 transform transition-transform group-hover:rotate-12" />
                    </a>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="space-y-1.5">
                  <a
                    href="mailto:themushroomhive@gmail.com"
                    className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 text-sm"
                  >
                    <Email className="w-4 h-4" />
                    <span>themushroomhive@gmail.com</span>
                  </a>

                  <a
                    href="tel:+233240800951"
                    className="flex items-center space-x-1 text-gray-600 hover:text-emerald-600 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+233 240 800 951</span>
                  </a>

                  <a
                    href="tel:+233501425027"
                    className="pl-6 text-gray-600 hover:text-emerald-600 text-sm"
                  >
                    +233 501 425 027
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-3 sm:mt-6 pt-2 border-t border-gray-200">
          <p className="text-center text-gray-600 text-xs font-['Poppins']">
            © {new Date().getFullYear()} All Rights Reserved •
            <span className="text-emerald-600 animate-pulse"> ❤ </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
