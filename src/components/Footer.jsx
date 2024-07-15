import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#8fafac] text-gray-800 py-5 font-Poppins">
      <div className="container mx-auto flex justify-around">
        <div className="text-left">
          <h3 className="font-semibold mb-2">Information</h3>
          <ul>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Press Kit</a></li>
          </ul>
        </div>
        <div className="text-center">
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <ul>
            {/* <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li> */}
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            {/* <li><a href="#" className="hover:underline">Pinterest</a></li>
            <li><a href="#" className="hover:underline">YouTube</a></li> */}
          </ul>
        </div>
        <div className="text-left">
          <h3 className="font-semibold mb-2">Contact Us</h3>
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
