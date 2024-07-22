import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#8fafac] text-gray-800 py-7 font-Poppins">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0 px-4 lg:px-20">
        <div className="text-left w-full lg:w-1/3">
          <h3 className="font-bold mb-2 text-lg">Information</h3>
          <ul>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Press Kit</a></li>
          </ul>
        </div>
        <div className="text-left w-full lg:w-1/3">
          <h3 className="font-bold mb-2 text-lg">Follow Us</h3>
          <ul>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
          </ul>

          <h3>
          <a href="./career"  className="font-bold mt-3 text-xl capitalise">Career</a>
          </h3>
        </div>
        <div className="text-left w-full lg:w-1/3">
          <h3 className="font-bold mb-2 text-lg">Contact Us</h3>
          <ul>
            <li>+1 (646) 980 6348</li>
            <li>Trillion Technology LLC</li>
            <li>16192 Coastal Highway, Lewes, DE 19958</li>
            <li><a href="mailto:info@trillion.jewelry" className="hover:underline">info@trillion.jewelry</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
