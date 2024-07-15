import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen py-12 flex flex-col items-center bg-[url(background-images/d2.png)] font-Poppins bg-contain" id="contact-us">
      <h2 className="text-5xl font-bold mb-2" style={{ color: '#394241' }}>CONTACT US</h2>
      <p className="mb-6" style={{ color: '#394241' }}>A member of our team will get back to you shortly.</p>
      <form className="bg-white bg-opacity-10 shadow-md rounded-lg p-8 w-full max-w-lg backdrop-blur-lg border border-opacity-25 border-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="col-span-1">
            <label className="block text-sm font-bold mb-2" htmlFor="name" style={{ color: '#394241' }}>
             
            </label>
            <div className="relative">
              <input
                className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-b-2 border-gray-300 focus:border-gray-800 placeholder-gray-400"
                id="name"
                type="text"
                placeholder="Name"
                style={{ color: '#394241' }}
              />
              <span className="absolute left-0 top-0 px-3 py-2 transition-transform duration-500 ease-in-out transform -translate-y-1/2"></span>
            </div>
          </div>
          {/* Ensuring all columns have same length */}
          <div className="col-span-1">
            <label className="block text-sm font-bold mb-2" htmlFor="email" style={{ color: '#394241' }}>
             
            </label>
            <div className="relative">
              <input
                className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-b-2 border-gray-300 focus:border-gray-800 placeholder-gray-400"
                id="email"
                type="email"
                placeholder="E-mail"
                style={{ color: '#394241' }}
              />
              <span className="absolute left-0 top-0 px-3 py-2 transition-transform duration-500 ease-in-out transform -translate-y-1/2"></span>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="phone" style={{ color: '#394241' }}>
           
          </label>
          <div className="relative">
            <input
              className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-b-2 border-gray-300 focus:border-gray-800 placeholder-gray-400"
              id="phone"
              type="tel"
              placeholder="Phone"
              style={{ color: '#394241' }}
            />
            <span className="absolute left-0 top-0 px-3 py-2 transition-transform duration-500 ease-in-out transform -translate-y-1/2"></span>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="company" style={{ color: '#394241' }}>
            
          </label>
          <div className="relative">
            <input
              className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-b-2 border-gray-300 focus:border-gray-800 placeholder-gray-400"
              id="company"
              type="text"
              placeholder="Company"
              style={{ color: '#394241' }}
            />
            <span className="absolute left-0 top-0 px-3 py-2 transition-transform duration-500 ease-in-out transform -translate-y-1/2"></span>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="message" style={{ color: '#394241' }}>
           
          </label>
          <div className="relative">
            <textarea
              className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-b-2 border-gray-300 focus:border-gray-800 placeholder-gray-400"
              id="message"
              placeholder="Message"
              style={{ color: '#394241' }}
            ></textarea>
            <span className="absolute left-0 top-0 px-3 py-2 transition-transform duration-500 ease-in-out transform -translate-y-1/2"></span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            SEND
          </button>
        </div>
      </form>
      <p className="text-xs mt-4 text-center max-w-lg" style={{ color: '#394241' }}>
        We will process your personal information in accordance with our Privacy Policy.
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
      </p>
    </div>
  );
};

export default ContactUs;
