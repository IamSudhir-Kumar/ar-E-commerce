import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-[#384241] py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-y-5 ml-44"> {/* Adjusted logo position */}
          <img src="assets/logo.png" alt="Logo" className="h-12 w-auto" />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
        <div className={`md:flex flex-grow items-center ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex space-x-6 ml-[350px] font-Poppins text-xl"> {/* Adjusted menu items position */}
            <li>
              <Link to="home" smooth={true} duration={500} offset={-50} className="text-white hover:text-gray-300 cursor-pointer">Home</Link>
            </li>
            <li>
              <a href="#ar-tryon" className="text-white hover:text-gray-300 cursor-pointer">Augmented Reality Try-on</a>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500} offset={-50} className="text-white hover:text-gray-300 cursor-pointer">Products</Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} duration={500} offset={-50} className="text-white hover:text-gray-300 cursor-pointer">Price</Link>
            </li>
            <li>
              <Link to="contact-us" smooth={true} duration={500} offset={-50} className="text-white hover:text-gray-300 cursor-pointer">Contact us</Link>
            </li>
            <li>
            <a href="#ar-tryon" className="text-white hover:text-gray-300 cursor-pointer">Blogs</a>
            </li>
            <li>
            <a href="#ar-tryon" className="text-white hover:text-gray-300 cursor-pointer">Career</a>
            </li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pt-4 pb-2">
          <ul className="flex flex-col space-y-2">
            <li>
              {/* <a href="#home" className="text-white hover:text-gray-300 cursor-pointer">Home</a> */}
              <Link to="home" smooth={true} duration={500} offset={-50}>Home</Link>
            </li>
            <li>
              <a href="#ar-tryon" className="text-white hover:text-gray-300 cursor-pointer">Augmented Reality Try-on</a>
            </li>
            <li>
              <a href="#products" className="text-white hover:text-gray-300 cursor-pointer">Products</a>
            </li>
            <li>
              <a href="#price" className="text-white hover:text-gray-300 cursor-pointer">Price</a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-gray-300 cursor-pointer">Contact us</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
