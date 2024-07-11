import React from 'react';

const WhyConnex = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Why CONNEX? Right Now!</h2>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
        <div className="flex-shrink-0">
          {/* <img
            src="path/to/your/head-image.jpg"
            alt="Head"
            className="w-64 h-auto"
          /> */}
          <model-viewer
          src="models/girls-face.glb"
          camera-controls
          auto-rotate
          ></model-viewer>
        </div>
        <div className="max-w-lg">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-900">TRY IT ON IN SECONDS</h3>
            <p className="text-gray-700 mt-2">CONNEX allows your customers to try on products in seconds without waiting for days!</p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-900">ACCURATE, FAST & LIGHTWEIGHT</h3>
            <p className="text-gray-700 mt-2">CONNEX is proven to be accurate, fast and lightweight virtual try on, helps you in brand differentiation.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-900">DOUBLE SALES, HALF RETURNS</h3>
            <p className="text-gray-700 mt-2">We have been helping global brands to achieve double sales, triple visitors and half the product returns.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyConnex;
