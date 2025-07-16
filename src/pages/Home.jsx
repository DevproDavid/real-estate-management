import React from 'react';
import MainNav from '../components/GeneralComponents/MainNav';
import HeroSection from '../components/HomeComponents/Herosection';
import TrustedAgentSection from '../components/HomeComponents/TrustedAgentSection';
import ImageSlider from '../components/HomeComponents/imageSlider';
import Houselisting from '../components/HomeComponents/houselisting';
import Agencylogo from '../components/HomeComponents/propertySlider';
import Footer from '../components/GeneralComponents/footer';

function Home() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <MainNav />
      <HeroSection />
      <TrustedAgentSection />
      <ImageSlider />
      <Houselisting />
      <Agencylogo />
      <Footer />
    </div>
  );
}

export default Home;
