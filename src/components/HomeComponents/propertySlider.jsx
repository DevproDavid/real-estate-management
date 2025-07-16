import React, { useEffect, useState, useRef } from 'react';
import '../../styles/propertySlider.css';

const agencies = [
  {
    id: 1,
    name: 'Prime Estates',
    logo: 'https://logo.clearbit.com/redfin.com', // Real estate logo-style
    properties: [{ type: 'sale' }, { type: 'rent' }],
  },
  {
    id: 2,
    name: 'Greenland Realty',
    logo: 'https://logo.clearbit.com/greystar.com',
    properties: [{ type: 'rent' }],
  },
  {
    id: 3,
    name: 'City Homes',
    logo: 'https://logo.clearbit.com/remax.com',
    properties: [{ type: 'sale' }],
  },
  {
    id: 4,
    name: 'Urban Nest',
    logo: 'https://logo.clearbit.com/zillow.com',
    properties: [{ type: 'rent' }],
  },
  {
    id: 5,
    name: 'Oak Realtors',
    logo: 'https://logo.clearbit.com/century21.com',
    properties: [{ type: 'sale' }],
  },
  {
    id: 6,
    name: 'Comfort Living',
    logo: 'https://logo.clearbit.com/aptos.com', // General soft brand logo
    properties: [{ type: 'rent' }],
  },
  {
    id: 7,
    name: 'Smart Realty',
    logo: 'https://logo.clearbit.com/trulia.com',
    properties: [{ type: 'sale' }],
  },
  {
    id: 8,
    name: 'Metro Properties',
    logo: 'https://logo.clearbit.com/loopnet.com',
    properties: [{ type: 'rent' }],
  },
  {
    id: 9,
    name: 'Cozy Homes',
    logo: 'https://logo.clearbit.com/compass.com',
    properties: [{ type: 'rent' }],
  },
];


export default function Agencylogo() {
  const containerRef = useRef(null);
  const total = agencies.length;
  const logos = [...agencies, ...agencies, ...agencies];
  const startIndex = total;
  const [index, setIndex] = useState(startIndex);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index >= logos.length - 3) {
      setTimeout(() => {
        setTransition(false);
        setIndex(startIndex);
      }, 600);
    }
  }, [index]);

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => {
        setTransition(true);
      });
    }
  }, [transition]);

  const visible = logos.slice(index, index + 3);
  const center = visible[1];
  const saleCount = center.properties.filter((p) => p.type === 'sale').length;
  const rentCount = center.properties.filter((p) => p.type === 'rent').length;

  const formatText = (count, label) =>
    `${count} ${label}${count === 1 ? '' : 's'}`;

  return (
    <div style={{ maxWidth: '960px', margin: '40px auto', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px' }}>Featured Agencies</h2>

      <div style={{ overflow: 'hidden', width: '360px', margin: '0 auto' }}>
        <div
          ref={containerRef}
          style={{
            display: 'flex',
            gap: '20px',
            transform: `translateX(-${index * 120}px)`,
            transition: transition ? 'transform 0.6s ease-in-out' : 'none',
          }}
        >
          {logos.map((agency, i) => (
            <div
              key={`${i}-${agency.id}`}
              style={{
                width: '100px',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src={agency.logo}
                alt={agency.name}
                style={{ width: '80px', height: '80px', borderRadius: '8px', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: '20px',
          backgroundColor: '#f4f4f4',
          padding: '16px',
          borderRadius: '6px',
          width: '200px',
          marginInline: 'auto',
        }}
      >
        <h4 style={{ margin: 0 }}>{center.name}</h4>
        <small>{formatText(saleCount, 'property for sale')}</small><br />
        <small>{formatText(rentCount, 'property for rent')}</small>
      </div>
    </div>
  );
}
