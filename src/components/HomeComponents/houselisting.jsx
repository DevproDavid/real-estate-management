import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigation
import '../../styles/houselisting.css';

const Houselisting = () => {
  const scrollRef = useRef();
  const navigate = useNavigate(); // ✅ Navigation hook

  const listings = [
    {
      title: '3 Bedroom Flat',
      description: 'Ikoyi, Lagos',
      buttonText: 'WhatsApp',
      imageUrl: 'https://images.unsplash.com/photo-1588854337221-4c9c1190b79b?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: '2 Bedroom Duplex',
      description: 'Wuse, Abuja',
      buttonText: 'WhatsApp',
      imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba934822a?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Mini Flat',
      description: 'Lekki, Lagos',
      buttonText: 'WhatsApp',
      imageUrl: 'https://images.unsplash.com/photo-1600566753114-4661c1f9f3c4?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: '4 Bedroom Bungalow',
      description: 'Port Harcourt',
      buttonText: 'WhatsApp',
      imageUrl: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Studio Apartment',
      description: 'Gwarinpa, Abuja',
      buttonText: 'WhatsApp',
      imageUrl: 'https://images.unsplash.com/photo-1598207955449-e52c23e33078?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: '2 Bedroom Terrace',
      description: 'Magodo, Lagos',
      buttonText: 'WhatsApp',
      imageUrl: 'https://images.unsplash.com/photo-1615874959474-d609969a9b0b?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Luxury Penthouse',
      description: 'Banana Island, Lagos',
      buttonText: 'WhatsApp',
      imageUrl: 'https://images.unsplash.com/photo-1600585154033-682e53bfb6c6?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Detached Duplex',
      description: 'Asokoro, Abuja',
      buttonText: 'WhatsApp',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Compact Apartment',
      description: 'Elekahia, Port Harcourt',
      buttonText: 'WhatsApp',
      imageUrl: 'https://images.bayut.com/thumbnails/782328044-800x600.webp',
    },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 400;
    if (direction === 'next') container.scrollLeft += scrollAmount;
    else if (direction === 'prev') container.scrollLeft -= scrollAmount;
  };

  // ✅ Make image clickable
  const Card = ({ title, description, buttonText, imageUrl }) => (
    <div className="bg-white text-gray-800 rounded-xl p-4 w-[280px] md:w-[320px] h-[420px] shrink-0 shadow-lg flex flex-col justify-between">
      <div>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover rounded-lg mb-4 cursor-pointer"
          onClick={() => navigate('/properties')} // ✅ Route on image click
        />
        <h3 className="text-xl md:text-2xl font-bold mb-1">{title}</h3>
        <p className="text-sm md:text-base text-gray-600">{description}</p>
      </div>
      <button className="bg-green-100 text-green-800 px-4 py-3 rounded mt-4 w-full flex items-center justify-center gap-3 font-semibold cursor-pointer">
        <i className="fab fa-whatsapp text-lg"></i>
        {buttonText}
      </button>
    </div>
  );

  return (
    <div className="h-auto max-w-[1200px] mx-auto bg-white text-gray-800 p-4 md:p-6 relative overflow-hidden rounded-xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-green-800">
        Top Properties Listing
      </h2>

      <button
        onClick={() => scroll('prev')}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-2 z-10 text-black px-4 py-2 rounded-full shadow-lg"
      >
        <i className="fas fa-chevron-left text-lg"></i>
      </button>

      <button
        onClick={() => scroll('next')}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-2 z-10 text-black px-4 py-2 rounded-full shadow-lg"
      >
        <i className="fas fa-chevron-right text-lg"></i>
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth px-1 md:px-6 scrollbar-hidden"
      >
        {listings.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          style={{ backgroundColor: '#E5EFF0' }}
          className="text-green-800 px-6 py-3 rounded-lg font-semibold transition cursor-pointer"
          onClick={() => navigate('/properties')} // ✅ Route on button click
        >
          View More Listings
        </button>
      </div>
    </div>
  );
};

export default Houselisting;
