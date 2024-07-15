import React from 'react';
import FeaturesSection from './FeaturesSection';

const Services = () => {
  return (
    <div className="bg-[url('background-images/d1.png')] py-12 font-Poppins min-h-[100vh] bg-contain" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold text-[#312a1e] text-center mb-8 uppercase">Our Services</h2>
        <FeaturesSection />
      </div>
    </div>
  );
};

export default Services;
