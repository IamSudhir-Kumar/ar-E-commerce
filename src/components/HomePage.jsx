import React from 'react';
import Navbar from "./navbar/Navbar.jsx";
import Hero from './hero/hero.jsx';
import WhyConnex from './why/WhyConnex.jsx';
import Services from './services/Services.jsx';
import ContactUs from './ContactUs.jsx';
import Footer from './Footer.jsx';
import PlansPricing from './pricing/Pricing.jsx';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col" id='home'>
      <Navbar />
      <Hero />
      <WhyConnex />
      <Services />
      <PlansPricing />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
