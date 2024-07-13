import React from 'react';
import FeaturesSection from './FeaturesSection';

const Services = () => {
  return (
    <div className="bg-[url('assets/d1.png')] py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Services</h2>
        {/* <div className="bg-white rounded-[120px] p-6 shadow-lg flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1 flex flex-col items-center justify-between p-4">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">AUGMENTED REALITY</h3>
              <p className="text-gray-700 mt-2">
                We specialise in the development and deployment of both App-based Augmented Reality (Native AR) and Web-based Augmented Reality (Web AR) experiences.
              </p>
            </div>
            <img src="assets/ar.jpg" alt="Augmented Reality" className="rounded-b-[50px]  w-23 h-50 mt-4" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-between p-4">
            <div className="text-center mb-4">
              
            <img src="assets/car.jpeg" alt="3D Modelling" className="rounded-lg w-full h-auto mt-4" />
            <h3 className="text-xl font-bold text-gray-900">3D MODELLING & ANIMATION</h3>
              <p className="text-gray-700 mt-2">
                3D modelling is the process of creating a three-dimensional representation of any object or surface.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-between p-4">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">ARCHITECTURAL 3D SERVICES</h3>
              <p className="text-gray-700 mt-2">
                Our Architectural 3D Services bring your architectural designs to life with stunning, realistic 3D models and visualisations.
              </p>
            </div>
            <img src="assets/archi.jpg" alt="Architectural Services" className="rounded-lg w-full h-auto mt-4" />
          </div>
        </div> */}
        <FeaturesSection />
      </div>
    </div>
  );
};

export default Services;
