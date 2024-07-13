import React, { useState } from 'react';

const PlansPricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="bg-[url('background-images/d3.png')] bg-cover bg-center min-h-screen flex flex-col items-center text-white">
      <h2 className="text-4xl font-bold mt-12 mb-4">PLANS & PRICING</h2>
      <p className="text-xl text-center mb-8">
        Cost of a license to use a 3D viewer and virtual Try-on widget. Choose the appropriate tariff plan, depending on the traffic to your site:
      </p>
      <div className="flex space-x-4 mb-8">
        <button
          className={`px-6 py-3 text-lg rounded-full shadow-lg ${isMonthly ? 'bg-white text-gray-900' : 'bg-transparent border border-white text-white'} font-semibold`}
          onClick={() => setIsMonthly(true)}
        >
          Monthly Fee
        </button>
        <button
          className={`px-6 py-3 text-lg rounded-full shadow-lg ${!isMonthly ? 'bg-white text-gray-900' : 'bg-transparent border border-white text-white'} font-semibold`}
          onClick={() => setIsMonthly(false)}
        >
          Annually Fee
        </button>
      </div>
      <div className="bg-gray-800 w-full max-w-6xl rounded-lg shadow-lg p-6 flex flex-col md:flex-row md:space-x-6">
        <div className="flex-1 bg-gray-700 rounded-lg p-8"></div>
        <div className="flex-1 bg-gray-700 rounded-lg p-8"></div>
        <div className="flex-1 bg-gray-700 rounded-lg p-8"></div>
      </div>
    </div>
  );
};

export default PlansPricing;
