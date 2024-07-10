import React from 'react';
import Navbar from "./navbar/Navbar.jsx";
import Hero from './hero/hero.jsx';
import WhyConnex from './WhyConnex.jsx';
import Services from './Services.jsx';
import ContactUs from './ContactUs.jsx';
import Footer from './Footer.jsx';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <WhyConnex />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
