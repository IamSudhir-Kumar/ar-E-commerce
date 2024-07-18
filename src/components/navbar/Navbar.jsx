import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="w-full bg-[#384241] py-4 fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-20">
        <div className="flex items-center">
          <img src="assets/logo.png" alt="Logo" className="h-12 w-auto cursor-pointer" onClick={scrollToTop} />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 text-xl font-Poppins mt-4 md:mt-0 md:ml-10 lg:ml-40 text-center md:text-left">
            <li>
              {location.pathname === '/' ? (
                <ScrollLink to="home" smooth={true} duration={500} offset={-50} className="text-white hover:text-gray-300 cursor-pointer">
                  {/* Home */}
                </ScrollLink>
              ) : (
                <RouterLink to="/" className="text-white hover:text-gray-300 cursor-pointer">
                  {/* Home */}
                </RouterLink>
              )}
            </li>
            <li>
              <RouterLink to="/ar-tryon" className="text-white hover:text-gray-300 cursor-pointer">
                Augmented Reality Try-on
              </RouterLink>
            </li>
            <li>
              {location.pathname === '/' ? (
                <ScrollLink to="services" smooth={true} duration={500} offset={-50} className="text-white hover:text-gray-300 cursor-pointer">
                  Products
                </ScrollLink>
              ) : (
                <RouterLink to="/" className="text-white hover:text-gray-300 cursor-pointer">
                  Products
                </RouterLink>
              )}
            </li>
            <li>
              {location.pathname === '/' ? (
                <ScrollLink to="pricing" smooth={true} duration={500} offset={-50} className="text-white hover:text-gray-300 cursor-pointer">
                  Price
                </ScrollLink>
              ) : (
                <RouterLink to="/" className="text-white hover:text-gray-300 cursor-pointer">
                  Price
                </RouterLink>
              )}
            </li>
            <li>
              {location.pathname === '/' ? (
                <ScrollLink to="contact-us" smooth={true} duration={500} offset={-50} className="text-white hover:text-gray-300 cursor-pointer">
                  Contact us
                </ScrollLink>
              ) : (
                <RouterLink to="/" className="text-white hover:text-gray-300 cursor-pointer">
                  Contact us
                </RouterLink>
              )}
            </li>
            <li>
              <a href="#blogs" className="text-white hover:text-gray-300 cursor-pointer">
                Blogs
              </a>
            </li>
            <li>
              <a href="#career" className="text-white hover:text-gray-300 cursor-pointer">
                Career
              </a>
            </li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pt-4 pb-2">
          <ul className="flex flex-col space-y-2">
            <li>
              {location.pathname === '/' ? (
                <ScrollLink to="home" smooth={true} duration={500} offset={-50} className="text-white hover:text-gray-300 cursor-pointer">
                  Home
                </ScrollLink>
              ) : (
                <RouterLink to="/" className="text-white hover:text-gray-300 cursor-pointer">
                  Home
                </RouterLink>
              )}
            </li>
            <li>
              <RouterLink to="/ar-tryon" className="text-white hover:text-gray-300 cursor-pointer">
                Augmented Reality Try-on
              </RouterLink>
            </li>
            <li>
              {location.pathname === '/' ? (
                <ScrollLink to="services" smooth={true} duration={500} offset={-50} className="text-white hover:text-gray-300 cursor-pointer">
                  Products
                </ScrollLink>
              ) : (
                <RouterLink to="/" className="text-white hover:text-gray-300 cursor-pointer">
                  Products
                </RouterLink>
              )}
            </li>
            <li>
              {location.pathname === '/' ? (
                <ScrollLink to="pricing" smooth={true} duration={500} offset={-50} className="text-white hover:text-gray-300 cursor-pointer">
                  Price
                </ScrollLink>
              ) : (
                <RouterLink to="/" className="text-white hover:text-gray-300 cursor-pointer">
                  Price
                </RouterLink>
              )}
            </li>
            <li>
              {location.pathname === '/' ? (
                <ScrollLink to="contact-us" smooth={true} duration={500} offset={-50} className="text-white hover:text-gray-300 cursor-pointer">
                  Contact us
                </ScrollLink>
              ) : (
                <RouterLink to="/" className="text-white hover:text-gray-300 cursor-pointer">
                  Contact us
                </RouterLink>
              )}
            </li>
            <li>
              <a href="#blogs" className="text-white hover:text-gray-300 cursor-pointer">
                Blogs
              </a>
            </li>
            <li>
              <a href="#career" className="text-white hover:text-gray-300 cursor-pointer">
                Career
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
