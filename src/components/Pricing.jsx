import React, { useState } from 'react';

const PlansPricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="bg-[url('background-images/d3.png')] bg-contain bg-center min-h-screen flex flex-col items-center text-white font-Poppins" id='pricing'>
      <h2 className="text-4xl font-bold mt-12 mb-4">PLANS & PRICING</h2>
      <p className="text-2xl text-center mb-8 p-5 justify-center">
        Cost of a license to use a 3D viewer and virtual Try-on widget. Choose the<br /> appropriate tariff plan, depending on the traffic to your site:
      </p>
      <div className="flex space-x-4 mb-8 bg-[#5c6868] rounded-full p-2">
        <button
          className={`px-6 py-1 text-lg rounded-full shadow-lg ${isMonthly ? 'bg-white text-gray-900' : 'bg-transparent text-white'} font-semibold`}
          onClick={() => setIsMonthly(true)}
        >
          Monthly Fee
        </button>
        <button
          className={`px-6 py-1 text-lg rounded-full shadow-lg ${!isMonthly ? 'bg-white text-gray-900' : 'bg-transparent text-white'} font-semibold`}
          onClick={() => setIsMonthly(false)}
        >
          Annually Fee
        </button>
      </div>
      <div className="bg-[#384241] w-full max-w-6xl rounded-lg shadow-lg p-6 flex flex-col md:flex-row md:space-x-6">
        <div className="flex-1 bg-gray-700 rounded-lg p-8">
          <button class="bg-[#384241] text-white font-semibold px-4 py-2 rounded-full shadow-lg shadow-[#87a09e]">
            <a href="https://calendly.com/sudhir09014902020-msijanakpuri/meeting-regarding-price-plans" target='_blank'>Contact Us</a>
          </button>

        </div>
        <div className="flex-1 bg-gray-700 rounded-lg p-8"></div>
        <div className="flex-1 bg-gray-700 rounded-lg p-8"></div>
      </div>
    </div>
  );
};

export default PlansPricing;
