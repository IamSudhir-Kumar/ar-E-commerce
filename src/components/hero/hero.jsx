import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow p-4 bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800">VIRTUAL TRY-ON</h1>
      <p className="text-center text-gray-600 mt-4 max-w-lg">
        Powerful tools for creating and distributing lifelike 3D content and AR experiences. Elevate e-commerce, digital marketing, and more to boost engagement and drive sales.
      </p>
      <div className="flex items-center mt-6 space-x-4">
        <input
          type="email"
          placeholder="Business e-mail"
          className="px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800">DEMO</button>
      </div>
      <div className="mt-10">
        <model-viewer
          id="bangleViewer"
          src="models/bridge.glb"
          alt="Bangle"
          ar
          ar-modes="scene-viewer quick-look webxr"
          camera-controls
          environment-image="neutral"
          auto-rotate
          style={{ width: '100%', height: '500px' }}
        ></model-viewer>
      </div>
      <button
        className="mt-6 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
        onClick={() => {
          document.getElementById('bangleViewer').activateAR();
        }}
      >
        AR - Try On
      </button>
    </div>
  );
};

export default Hero;
