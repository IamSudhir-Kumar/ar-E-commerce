import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-100 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        
        {/* Augmented Reality */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Augmented Reality</h3>
          <p className="mb-4">We specialise in the development and deployment of both App-based Augmented Reality (Native AR) and Web-based Augmented Reality (Web AR) experiences.</p>
          <img src="augmented_reality_image_url" alt="Augmented Reality" className="rounded-lg"/>
        </div>
        
        {/* 3D Modelling & Animation */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">3D Modelling & Animation</h3>
          <p className="mb-4">3D modelling is the process of creating a three-dimensional representation of any object or surface.</p>
          <img src="3d_modelling_image_url" alt="3D Modelling & Animation" className="rounded-lg"/>
        </div>
        
        {/* Architectural 3D Services */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Architectural 3D Services</h3>
          <p className="mb-4">Our Architectural 3D Services bring your architectural designs to life with stunning, realistic 3D models and visualisations.</p>
          <img src="architectural_3d_image_url" alt="Architectural 3D Services" className="rounded-lg"/>
        </div>
        
      </div>
    </div>
  );
}

export default Services;
