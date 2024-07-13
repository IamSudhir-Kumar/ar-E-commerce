import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-[#384241] py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-white text-2xl font-bold">PANDORA</div>
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-6 m-0">
            <li className="text-white hover:text-gray-300 cursor-pointer">Home</li>
            <li className="text-white hover:text-gray-300 cursor-pointer">Argumented Reality Try-on</li>
            <li className="text-white hover:text-gray-300 cursor-pointer">Products</li>
            <li className="text-white hover:text-gray-300 cursor-pointer">Price</li>
            <li className="text-white hover:text-gray-300 cursor-pointer">Contact us</li>
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
            <li className="text-white hover:text-gray-300 cursor-pointer">Home</li>
            <li className="text-white hover:text-gray-300 cursor-pointer">Products</li>
            <li className="text-white hover:text-gray-300 cursor-pointer">Price</li>
            <li className="text-white hover:text-gray-300 cursor-pointer">Contact us</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
