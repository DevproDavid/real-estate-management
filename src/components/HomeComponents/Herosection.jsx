import React from 'react';
import HeroContent from './HeroContent';
import '../../styles/globalStyles.css';
import backgroundImage from '../../assets/images/backgroud-img.jpg';
import Navbar from './Navbar'; // still import, but render outside on mobile

function Herosection() {
  const handlePlayClick = () => {
    window.open(
      'https://www.google.com/search?q=pst+paul+rika',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="relative mt-0 mb-28 md:px-5 sm:px-0 z-10 sm:rounded-xl">
      <div className="relative w-full sm:rounded-xl overflow-visible md:min-h-screen">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:min-h-screen h-96 sm:rounded-xl"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 sm:rounded-xl" />
        </div>

        {/* Mobile-only play button */}
        <div className="sm:hidden relative w-full aspect-video flex items-center justify-center z-20">
          <button
            onClick={handlePlayClick}
            aria-label="Play video"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-white bg-opacity-30 hover:bg-opacity-50 transition border-white border-2 mt-20"
            style={{ backdropFilter: 'blur(0px)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-8 h-8 ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        {/* Desktop content */}
        <div className="relative z-30 py-8 sm:py-12 text-white max-w-7xl mx-auto md:rounded-xl">
          <div className="text-center max-w-2xl mx-auto mb-8 px-3">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mb-1 leading-tight">
              Real homes live here
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold">
              Real Home. Real Price. Real Properties.
            </p>
          </div>

          {/* Only show navbar inside Hero on desktop */}
          <div className="mt-28 md:mt-0">
            <Navbar />
          </div>
          <HeroContent />

        </div>
      </div>
    </div>
  );
}

export default Herosection;




