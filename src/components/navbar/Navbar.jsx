import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-white text-2xl font-bold">PANDORA</div>
        <ul className="flex space-x-6 m-0">
          <li className="text-white hover:text-gray-300 cursor-pointer">Home</li>
          <li className="text-white hover:text-gray-300 cursor-pointer">Products</li>
          <li className="text-white hover:text-gray-300 cursor-pointer">Price</li>
          <li className="text-white hover:text-gray-300 cursor-pointer">Contact us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
