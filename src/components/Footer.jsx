import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#8fafac] py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h5 className="font-bold text-lg mb-2">Information</h5>
          <ul>
            <li className="mb-1"><a href="#" className="text-gray-700">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-700">Press Kit</a></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h5 className="font-bold text-lg mb-2">Follow Us</h5>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-700">Instagram</a></li>
            <li><a href="#" className="text-gray-700">Facebook</a></li>
            <li><a href="#" className="text-gray-700">LinkedIn</a></li>
            <li><a href="#" className="text-gray-700">Pinterest</a></li>
            <li><a href="#" className="text-gray-700">Youtube</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-2">Contact us</h5>
          <p className="text-gray-700">+1 (646) 980 6348<br/>
          Trillion Technology LLC 16192 Coastal Highway, Lewes, DE 19958<br/>
          info@trillion.jewelry</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
