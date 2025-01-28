import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import HeroSection from './component/Herosection';
import ThreeColumnSection from './component/Afterhero';
import Footer from './component/Footer';
import Navbar from './component/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ThreeColumnSection />
      <Footer />
    </div>
  );
};

export default App;
