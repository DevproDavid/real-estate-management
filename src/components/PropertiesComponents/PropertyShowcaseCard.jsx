import React, { useEffect, useRef, useState } from 'react';

const defaultImages = [
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600587851747-7f21c348b07b",
  "https://images.unsplash.com/photo-1599423300746-b62533397364"
];

function PropertyShowcaseCard({
  images = defaultImages,
  badgeText = 'Verified',
  avatarUrl = 'https://randomuser.me/api/portraits/men/32.jpg',
  price = '30,000,000',
  type = 'Duplex',
  beds = 4,
  baths = 3,
  area = '450 sqft',
  highlights = ['Close to park', 'Exclusive'],
  location = 'Gwarinpa, Abuja, Nigeria',
  agent = {
    name: 'Mr. John Doe',
    email: 'agent@email.com',
    phone: '+2348030000000',
    whatsapp: '+2348030000000'
  }
}) {
  const [current, setCurrent] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const [liked, setLiked] = useState(false);
  const [loved, setLoved] = useState(false);
  const [likeAnimate, setLikeAnimate] = useState(false);
  const [loveAnimate, setLoveAnimate] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const sliderRef = useRef(null);
  const extendedImages = [images[images.length - 1], ...images, images[0]];

  const handleTransitionEnd = () => {
    if (current === 0) {
      setIsAnimating(false);
      setCurrent(images.length);
    } else if (current === images.length + 1) {
      setIsAnimating(false);
      setCurrent(1);
    }
  };

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const prevSlide = () => setCurrent((prev) => prev - 1);
  const nextSlide = () => setCurrent((prev) => prev + 1);

  const handleLoveClick = () => {
    setLoved(!loved);
    setLoveAnimate(true);
    setTimeout(() => setLoveAnimate(false), 500);
  };

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikeAnimate(true);
    setTimeout(() => setLikeAnimate(false), 500);
  };

  const handleSendEmail = () => {
    console.log('Sending contact:', userEmail, userPhone);
    setShowEmailPopup(false);
    setUserEmail('');
    setUserPhone('');
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl items-start gap-6 md:border-2 md:rounded-xl md:bg-white md:shadow-lg overflow-hidden ml-auto z-0 -z-10">
      {/* Image Slider */}
      <div className="relative w-full md:w-1/2 overflow-hidden h-72 group border-r-2 border-t-2 border-b-2 rounded-2xl md:rounded-tl-xl md:rounded-bl-xl md:rounded z-0">
        {badgeText && (
          <p className="absolute top-2 left-2 bg-white text-black px-3 py-1 text-sm rounded-2xl font-semibold shadow z-20 flex items-center gap-1">
            <i className="fas fa-check text-black"></i>
            {badgeText}
          </p>
        )}

        <div
          ref={sliderRef}
          onTransitionEnd={handleTransitionEnd}
          className={`flex ${
            isAnimating ? "transition-transform duration-500 ease-in-out" : ""
          }`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {extendedImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className="w-full flex-shrink-0 h-72 object-cover"
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black rounded-full py-1.5 px-3 shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-200"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black rounded-full py-1.5 px-3 shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-200"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        <div className="absolute bottom-3 right-4 flex gap-4 z-30">
          <button
            onClick={handleLoveClick}
            className={`text-xl transition duration-300 transform ${
              loveAnimate ? "scale-150 rotate-12 animate-ping once" : ""
            }`}
          >
            <i
              className={`fas fa-heart ${
                loved ? "text-red-500 drop-shadow-md" : "text-white"
              }`}
            ></i>
          </button>
          <button
            onClick={handleLikeClick}
            className={`text-xl transition duration-300 transform ${
              likeAnimate ? "scale-150 -rotate-12 animate-bounce once" : ""
            }`}
          >
            <i
              className={`fas fa-thumbs-up ${
                liked ? "text-blue-500 drop-shadow-md" : "text-white"
              }`}
            ></i>
          </button>
        </div>

        <div className="absolute bottom-3 left-4 z-30">
          <img
            src={avatarUrl}
            alt="Avatar"
            className="w-8 h-8 rounded-full border-2 border-white shadow-md object-cover"
          />
        </div>

        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center gap-1 z-30">
          {images.map((_, index) => {
            const relativeIndex = index + 1;
            const distance = Math.abs(current - relativeIndex);
            let sizeClass = "w-1.5 h-1.5";
            if (distance === 0) sizeClass = "w-2.5 h-2.5";
            else if (distance === 1) sizeClass = "w-2 h-2";
            return (
              <div
                key={index}
                className={`${sizeClass} bg-white rounded-full transition-all duration-300 opacity-80`}
              />
            );
          })}
        </div>
      </div>

      {/* Details */}
      <div className="w-full md:w-1/2 px-4 py-4 text-black rounded-lg space-y-4">
        <div className="text-2xl font-bold text-black">₦{price}</div>

        <div className="flex flex-wrap items-center text-md text-gray-700 gap-2 font-bold">
          <span className="flex items-center gap-1">
            <i className="fas fa-home"></i>
            {type}
          </span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <i className="fas fa-bed"></i>
            {beds}
          </span>
          <span className="flex items-center gap-1">
            <i className="fas fa-bath"></i>
            {baths}
          </span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <i className="fas fa-ruler-combined"></i>
            {area}
          </span>
        </div>

        <div className="flex gap-2 text-lg text-green-600 whitespace-nowrap overflow-hidden">
          {highlights.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="mx-1">|</span>}
              {index === highlights.length - 1 ? (
                <span className="truncate overflow-hidden text-ellipsis whitespace-nowrap flex-1">
                  {item}
                </span>
              ) : (
                <span>{item}</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="text-md text-gray-800">
          <i className="fas fa-map-marker-alt text-green-500 mr-2"></i>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              location
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-700"
          >
            {location}
          </a>
        </div>

        <div className="flex justify-start gap-4">
          <button
            onClick={() => setShowEmailPopup(true)}
            className="flex items-center gap-1 bg-[#D1F0E2] font-bold text-green-600 text-sm px-4 py-1 rounded hover:bg-gray-200"
          >
            <i className="fas fa-envelope"></i> Email
          </button>
          <button
            onClick={() => setShowPhonePopup(true)}
            className="flex items-center gap-1 bg-[#D1F0E2] font-bold text-green-600 text-sm px-4 py-1 rounded hover:bg-gray-200"
          >
            <i className="fas fa-phone-alt"></i> Phone
          </button>
          <a
            href={`https://wa.me/${agent.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 bg-[#D1F0E2] font-bold text-green-600 text-sm px-4 py-2 rounded hover:bg-gray-200"
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>

      {/* Email Modal */}
      {showEmailPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg relative">
            <h2 className="text-lg font-bold mb-4 text-center">
              Contact Agent
            </h2>
            <input
              type="email"
              placeholder="Your Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full border px-3 py-2 rounded mb-3 text-sm"
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
              className="w-full border px-3 py-2 rounded mb-4 text-sm"
            />
            <button
              onClick={handleSendEmail}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Send
            </button>
            <button
              onClick={() => setShowEmailPopup(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}

      {/* Phone Modal */}
      {showPhonePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg relative text-center space-y-3">
            <h2 className="text-lg font-bold text-gray-800">Call Agent</h2>
            <p className="text-sm text-gray-600">
              Agent Name: <strong>{agent.name}</strong>
            </p>
            <p className="text-sm text-gray-600">
              Phone: <strong>{agent.phone}</strong>
            </p>
            <a
              href={`tel:${agent.phone}`}
              className="inline-block w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-2"
            >
              Call Now
            </a>
            <button
              onClick={() => setShowPhonePopup(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyShowcaseCard;
