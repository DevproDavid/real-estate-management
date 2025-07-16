import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import for routing
import '../../styles/imageSlider.css';

const slides = [
  {
    bgImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    text: 'Modern Apartment Living',
  },
  {
    bgImage: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
    text: 'Luxury Duplex Homes',
  },
  {
    bgImage: 'https://images.unsplash.com/photo-1600585153837-51d7c2e3f1a4?auto=format&fit=crop&w=1200&q=80',
    text: 'City Real Estate Deals',
  },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [animating, setAnimating] = useState(false);

  const navigate = useNavigate(); // ✅ Navigation hook

  useEffect(() => {
    if (isHovered || animating) return;

    const interval = setInterval(() => {
      triggerSlide((current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [current, isHovered, animating]);

  const triggerSlide = (targetIndex) => {
    if (targetIndex === current) return;

    setNext(targetIndex);
    setAnimating(true);

    setTimeout(() => {
      setCurrent(targetIndex);
      setNext(null);
      setAnimating(false);
    }, 500);
  };

  const handleClick = (index) => {
    if (!animating && index !== current) {
      triggerSlide(index);
    }
  };

  const handleViewMoreClick = () => {
    navigate('/properties'); // ✅ Navigate on button click
  };

  return (
    <div
      className="slider-container mt-8 mb-12 ml-6 md:ml-20 rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Current Slide */}
      <div
        className="slide"
        style={{
          backgroundImage: `url(${slides[current].bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          left: next !== null ? '-100%' : '0%',
          transition: next !== null ? 'left 0.5s ease-in-out' : 'none',
          zIndex: 1,
        }}
      >
        <div className="overlay">
          <h2 className="heading">{slides[current].text}</h2>
          <p className="paragraph">Find premium apartments and homes</p>
          <button className="button" onClick={handleViewMoreClick}>View More</button>
        </div>
      </div>

      {/* Incoming Slide */}
      {next !== null && (
        <div
          className="slide"
          style={{
            backgroundImage: `url(${slides[next].bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            left: '100%',
            animation: 'slideInLeft 0.5s forwards',
            zIndex: 2,
          }}
        >
          <div className="overlay">
            <h2 className="heading">{slides[next].text}</h2>
            <p className="paragraph">Find premium apartments and homes</p>
            <button className="button" onClick={handleViewMoreClick}>View More</button>
          </div>
        </div>
      )}

      {/* Indicators */}
      <div className="indicators">
        {slides.map((_, i) => (
          <div
            key={i}
            className="dash-block"
            onClick={() => handleClick(i)}
            style={{ opacity: current === i ? 1 : 0.4 }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
