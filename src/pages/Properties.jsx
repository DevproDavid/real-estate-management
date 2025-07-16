import React, { useEffect, useState } from 'react';
import MainNav from '../components/GeneralComponents/MainNav';
import PropertyShowcaseCard from '../components/PropertiesComponents/PropertyShowcaseCard';
import PropertiesNav from '../components/PropertiesComponents/propertiesNav';
import Footer from "../components/GeneralComponents/footer";

// Scroll-changing Ad images
const adImages = [
  "https://images.unsplash.com/photo-1599423300746-b62533397364?fit=crop&w=300&h=600",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fit=crop&w=300&h=600",
  "https://images.unsplash.com/photo-1600607681928-46063e0f79c2?fit=crop&w=300&h=600"
];


function Properties() {
  const [adIndex, setAdIndex] = useState(0);

  // Scroll-based ad switching logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const nextIndex = Math.floor(scrollY / 1000) % adImages.length;
      setAdIndex(nextIndex);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const properties = [
    {
      images: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      ],
      badgeText: 'Verified',
      avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      price: '45,000,000',
      type: 'Luxury Duplex',
      beds: 5,
      baths: 4,
      area: '600 sqft',
      highlights: ['Close to Park', 'Private Garden', 'Near Airport'],
      location: 'No. 25B Prince & Princess Estate, Gudu, Abuja',
      agent: {
        name: 'Grace ubong',
        email: 'grace.okoro@realtyhub.com',
        phone: '+2348123456789',
        whatsapp: '+2348123456789'
      }
    },
    {
      images: [
        "https://images.unsplash.com/photo-1599423300746-b62533397364",
        "https://images.unsplash.com/photo-1600587851747-7f21c348b07b",
      ],
      price: '35,000,000',
      type: 'Terrace',
      beds: 4,
      baths: 3,
      area: '500 sqft',
      highlights: ['Gated Community', '24/7 Power', 'Water Supply'],
      location: 'Plot 14 Unity Close, Lokogoma, Abuja',
      agent: {
        name: 'Ahmed Bello',
        email: 'ahmed.bello@realtyhub.com',
        phone: '+2348051234567',
        whatsapp: '+2348051234567'
      }
    },
    {
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600587851747-7f21c348b07b"
      ],
      price: '28,000,000',
      type: 'Bungalow',
      beds: 3,
      baths: 2,
      area: '400 sqft',
      highlights: ['Near Mall', 'Good Road Network', 'Security'],
      location: 'Block 6, Gwarinpa Estate, Abuja',
      agent: {
        name: 'Chinwe Obi',
        email: 'chinwe.obi@realtyhub.com',
        phone: '+2348061112233',
        whatsapp: '+2348061112233'
      }
    },
    {
      images: [
        "https://images.unsplash.com/photo-1600587851747-7f21c348b07b",
        "https://images.unsplash.com/photo-1599423300746-b62533397364"
      ],
      price: '60,000,000',
      type: 'Detached Duplex',
      beds: 6,
      baths: 5,
      area: '850 sqft',
      highlights: ['Swimming Pool', 'Cinema Room', 'Private Gym'],
      location: 'Luxury Drive, Maitama Hills, Abuja',
      agent: {
        name: 'Daniel Ekom',
        email: 'daniel.eze@realtyhub.com',
        phone: '+2348023344556',
        whatsapp: '+2348023344556'
      }
    },
    {
      images: [
        "https://images.unsplash.com/photo-1600587771525-78b9dba3b914",
        "https://images.unsplash.com/photo-1599423300746-b62533397364"
      ],
      price: '20,000,000',
      type: 'Mini Flat',
      beds: 2,
      baths: 2,
      area: '300 sqft',
      highlights: ['Near Transport', 'Affordable', 'Fenced Compound'],
      location: '12 Unity Street, Karu, Abuja',
      agent: {
        name: 'Sarah Musa',
        email: 'sarah.musa@realtyhub.com',
        phone: '+2348099876543',
        whatsapp: '+2348099876543'
      }
    },
    {
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
      ],
      price: '75,000,000',
      type: 'Penthouse',
      beds: 5,
      baths: 5,
      area: '950 sqft',
      highlights: ['Skyline View', 'Rooftop Deck', 'Smart Home'],
      location: '15 Banana Island, Ikoyi, Lagos',
      agent: {
        name: 'Tunde Akin',
        email: 'tunde.akin@realtyhub.com',
        phone: '+2348130001122',
        whatsapp: '+2348130001122'
      }
    },
    {
      images: [
        "https://images.unsplash.com/photo-1600587851747-7f21c348b07b",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
      ],
      price: '18,000,000',
      type: 'Studio Apartment',
      beds: 1,
      baths: 1,
      area: '180 sqft',
      highlights: ['Compact', 'Student Friendly', 'Affordable'],
      location: 'Campus Drive, Nsukka, Enugu',
      agent: {
        name: 'Uche Nwafor',
        email: 'uche.nwafor@realtyhub.com',
        phone: '+2348142223344',
        whatsapp: '+2348142223344'
      }
    }
  ];

  return (
    <div className="space-y-2 ">
      <MainNav />
      <div className="pr-2 pl-4">
        <PropertiesNav />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-6 mt-4">
        {/* Property Listings */}
        <div className="space-y-6 px-3 md:px-0">
          {properties.map((house, index) => (
            <PropertyShowcaseCard key={index} {...house} />
          ))}
        </div>

        {/* Sticky Scroll-Reactive Ad */}
       <div className="hidden lg:block sticky top-24 h-fit w-[360px] relative z-10">
          <img
            src={adImages[adIndex]}
            alt={`Ad ${adIndex + 1}`}
            className="z-0 w-full rounded-xl shadow-lg object-cover transition-all duration-500"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Properties;
