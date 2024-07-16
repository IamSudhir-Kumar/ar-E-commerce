import React from 'react';

const Prices = () => {
  return (
    <div className= "flex  items-center">
      <div className="w-full max-w-5xl bg-gray-800 rounded-[100px] shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          
          {/* STARTER PLAN */}
          <div className="bg-[#384241] text-white p-8 border-r border-gray-600">
            <h3 className="text-3xl font-bold text-white mb-4">STARTER</h3>
            <p className="text-sm mb-2">Less than 20,000</p>
            <p className="text-sm mb-4">Monthly average website traffic</p>
            <p className="text-4xl font-bold mb-4">$99</p>
            <p className="text-sm mb-6">per month</p>
            <p className="mb-4">Starter includes:</p>
            <ul className="list-none mb-6 space-y-2">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 15l-3.5-3.5L4 13l6 6 12-12-2.5-2.5z" />
                </svg>
                Installation support
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 15l-3.5-3.5L4 13l6 6 12-12-2.5-2.5z" />
                </svg>
                Content management
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 15l-3.5-3.5L4 13l6 6 12-12-2.5-2.5z" />
                </svg>
                Analytics
              </li>
            </ul>
            <button className="bg-purple-500 text-gray-800 font-bold py-2 px-4 rounded hover:bg-purple-400 transition duration-300">
              Sign Up Now
            </button>
          </div>

          {/* GROWTH PLAN */}
          <div className="bg-[#384241] text-white p-8 border-r border-gray-600">
            <h3 className="text-3xl font-bold text-white mb-4">GROWTH</h3>
            <p className="text-sm mb-2">20k - 100k</p>
            <p className="text-sm mb-4">Monthly average website traffic</p>
            <p className="text-4xl font-bold mb-4">$199</p>
            <p className="text-sm mb-6">per month</p>
            <p className="mb-4">Everything in Starter, plus:</p>
            <ul className="list-none mb-6 space-y-2">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 15l-3.5-3.5L4 13l6 6 12-12-2.5-2.5z" />
                </svg>
                24/7 support
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 15l-3.5-3.5L4 13l6 6 12-12-2.5-2.5z" />
                </svg>
                Advanced analytics
              </li>
            </ul>
            <button className="bg-purple-500 text-gray-800 font-bold py-2 px-4 rounded hover:bg-purple-400 transition duration-300">
              Sign Up Now
            </button>
          </div>

          {/* BUSINESS PLAN */}
          <div className="bg-[#384241] text-white p-8">
            <h3 className="text-3xl font-bold text-white mb-4">BUSINESS</h3>
            <p className="text-sm mb-2">100k - 250k</p>
            <p className="text-sm mb-4">Monthly average website traffic</p>
            <p className="text-4xl font-bold mb-4">$499</p>
            <p className="text-sm mb-6">per month</p>
            <p className="mb-4">Everything in Growth, plus:</p>
            <ul className="list-none mb-6 space-y-2">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 15l-3.5-3.5L4 13l6 6 12-12-2.5-2.5z" />
                </svg>
                UX consultation
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 15l-3.5-3.5L4 13l6 6 12-12-2.5-2.5z" />
                </svg>
                Multi Domain support
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 15l-3.5-3.5L4 13l6 6 12-12-2.5-2.5z" />
                </svg>
                Advanced analytics
              </li>
            </ul>
            <button className="bg-purple-500 text-gray-800 font-bold py-2 px-4 rounded hover:bg-purple-400 transition duration-300">
              Sign Up Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Prices;
