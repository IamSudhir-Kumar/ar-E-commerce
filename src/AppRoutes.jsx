// src/AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/hero';
import WhyConnex from './components/why/WhyConnex';
import Services from './components/services/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import PlansPricing from './components/pricing/Pricing';
import ARTryOn from './components/ar-tryon-page/ar-tryon';

const AppRoutes = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow pt-16"> {/* Adjust padding to match navbar height */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <WhyConnex />
                  <Services />
                  <PlansPricing />
                  <ContactUs />
                </>
              }
            />
            <Route path="/ar-tryon" element={<ARTryOn />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRoutes;
