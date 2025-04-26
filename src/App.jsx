import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import WorkFlow from './components/WorkFlow';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Services />
        <WorkFlow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
