import React from 'react';
import '../styles.css';

const WhyConnex = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-16 bg-[url(background-images/d2.png)] bg-contain">
      <div className="w-full max-w-6xl">
        <h2 className="text-7xl font-bold text-[#384241] text-left font-Poppins">
          Why CONNEX? <br />Right Now!
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-16 md:space-y-0 md:space-x-16 w-full max-w-6xl">
        <div className="flex-shrink-0">
          <model-viewer
            src="models/face.glb"
            camera-controls
            auto-rotate
            disable-zoom
          ></model-viewer>
        </div>
        <div className="max-w-xl font-Poppins">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-[#384241] mb-2">TRY IT ON IN SECONDS</h3>
            <p className="text-[#384241] mt-0 text-2xl">CONNEX allows your customers to try on products in seconds without waiting for days!</p>
          </div>
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-[#384241] mb-2">ACCURATE, FAST & LIGHTWEIGHT</h3>
            <p className="text-[#384241] mt-0 text-2xl">CONNEX is proven to be accurate, fast and lightweight virtual try on, helps you in brand differentiation.</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#384241] mb-2">DOUBLE SALES, HALF RETURNS</h3>
            <p className="text-[#384241] mt-0 text-2xl">We have been helping global brands to achieve double sales, triple visitors and half the product returns.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyConnex;
