import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: <>TruEstimate<sup className='text-xs'>TM</sup></>,
    description: "Accurately estimate property values with AI-powered insights.",
    imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
  },
  {
    title: "Search 2.0",
    description: "Discover homes faster with advanced filtering and smart suggestions.",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
  },
  {
    title: "Map View",
    description: "Visualize listings in real time across neighborhoods and cities.",
    imageUrl: "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
  }
];

function FeatureHighlights() {
  return (
    <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 max-w-7xl mx-auto px-2 mt-8 md:-mt-7">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          imageUrl={feature.imageUrl}
        />
      ))}
    </div>
  );
}

export default FeatureHighlights;
