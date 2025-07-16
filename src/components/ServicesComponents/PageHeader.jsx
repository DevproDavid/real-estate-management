import React, { useState, useEffect } from 'react';
import "../../styles/globalStyles.css"; // Ensure this file includes animation

const PageHeader = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Skilled Workers & Reliable Home Service Providers";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 px-4 sm:px-8 bg-gradient-to-br from-green-500 via-gray-300 to-green-100 rounded-3xl shadow-xl overflow-hidden max-w-7xl mx-auto">
      {/* Background Glows */}
      <div className="absolute top-0 -left-32 w-96 h-96 bg-green-300 opacity-20 rounded-full blur-3xl z-0 animate-pulse"></div>
      <div className="absolute -bottom-10 -right-20 w-80 h-80 bg-emerald-300 opacity-20 rounded-full blur-2xl z-0 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Tagline */}
        <span className="inline-block text-sm sm:text-base font-semibold text-green-600 bg-green-100 px-4 py-1 rounded-full shadow-sm mb-4 animate-fade-in-down">
          Find the Right Hands for the Job
        </span>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight bg-gradient-to-r from-green-900 via-emerald-700 to-green-900 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x mb-4">
          {displayText}
        </h1>

        {/* Subtitle */}
        <p className="text-gray-900 text-base sm:text-lg max-w-2xl mx-auto animate-fade-in-up">
          Connect with trusted professionals across Nigeria — including
          plumbers, electricians, bricklayers, architects, engineers, and more —
          for your building and renovation needs.
        </p>

        {/* Search & CTA */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up">
          <div className="flex gap-2 items-center bg-white rounded-xl px-3 py-2 border shadow w-full sm:w-auto">
            <i className="fas fa-search text-green-600 text-lg"></i>
            <input
              type="text"
              placeholder="Search by skill or location"
              className="w-full outline-none border-none text-sm px-2 py-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
