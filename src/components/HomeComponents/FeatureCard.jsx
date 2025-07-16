import React from 'react';

const FeatureCard = ({ title, description, imageUrl }) => {
  return (
    <div className="w-[375px] max-w-sm overflow-hidden cursor-pointer hover:bg-opacity-95 transition duration-300 rounded-xl border shadow h-24 md:h-full">
      {/* Desktop layout: full background image with overlay */}
      <div className="hidden md:block relative h-64 rounded-xl overflow-hidden">
        <img
          src={imageUrl}
          alt="Feature visual"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col justify-start items-start px-4 py-6">
          <h2 className="text-gray-900 text-2xl font-bold mb-1">{title}</h2>
          <p className="text-gray-700 text-md font-bold">{description}</p>
        </div>
      </div>

      {/* Mobile layout: image left, text right */}
      <div className="flex md:hidden flex-row h-24">
        {/* Image on the left */}
        <div className="w-1/3 h-full">
          <img
            src={imageUrl}
            alt="Feature visual"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Text on the right */}
        <div className="w-2/3 flex flex-col justify-center px-2 leading-none">
          <h2 className="text-gray-900 text-sm font-bold">{title}</h2>
          <p className="text-gray-700 text-xs font-medium mt-0.5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
