import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-[#384241] py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-white text-2xl font-bold">
        <img src="../../background-images/logo.png" alt="Logo" className="h-10 w-auto mr-2" />
          </div>
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-6 m-0">
            <li className="text-white hover:text-gray-300 cursor-pointer">
              <Link to="home" smooth={true} duration={500} offset={50}>Home</Link>
            </li>
            <li className="text-white hover:text-gray-300 cursor-pointer">
              <a href="#ar-tryon">Augmented Reality Try-on</a>
            </li>
            <li className="text-white hover:text-gray-300 cursor-pointer">
              <Link to="services" smooth={true} duration={500} offset={50}>Products</Link>
            </li>
            <li className="text-white hover:text-gray-300 cursor-pointer">
            <Link to="pricing" smooth={true} duration={500} offset={50}>Price</Link>
            </li>
            <li className="text-white hover:text-gray-300 cursor-pointer">
              <Link to='contact-us' smooth={true} duration={500} offset={50}>Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pt-4 pb-2 space-y-1">
          <ul className="flex flex-col space-y-1">
            <li className="text-white hover:text-gray-300 cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="text-white hover:text-gray-300 cursor-pointer">
              <a href="#ar-tryon">Augmented Reality Try-on</a>
            </li>
            <li className="text-white hover:text-gray-300 cursor-pointer">
              <a href="#products">Products</a>
            </li>
            <li className="text-white hover:text-gray-300 cursor-pointer">
              <a href="#price">Price</a>
            </li>
            <li className="text-white hover:text-gray-300 cursor-pointer">
              <a href="#contact">Contact us</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
