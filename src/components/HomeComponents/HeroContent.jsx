import React, { useState } from 'react';
import ButtonGroup from '../GeneralComponents/ButtonGroup';
import DropdownGroup from '../GeneralComponents/DropdownGroup';

function HeroContent() {
  const [selectedTab, setSelectedTab] = useState('Buy');
  const [selectedBuyFilter, setSelectedBuyFilter] = useState('All');
  const [selectedFilters, setSelectedFilters] = useState([]);

  return (
    <div className="grid gap-5 px-4 py-5 md:bg-gray-100 rounded-xl mt-5 mb-28 max-w-4xl mx-auto">
      {/* Top Row */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
        <div className="w-full sm:w-auto flex justify-center sm:justify-start">
          <ButtonGroup
            buttons={["Buy", "Rent"]}
            selected={selectedTab}
            onSelect={setSelectedTab}
          />
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row flex-1 gap-3">
          <div className="relative w-full">
            <i className="fas fa-map-marker-alt absolute left-4 md:top-1/2 top-5 -translate-y-1/2 text-green-600 text-xl"></i>
            <input
              className="w-full pl-10 pr-5 py-5 md:py-3 border border-gray-400 rounded-b-xl md:rounded-xl text-black md:mt-0 -mt-4 md:shadow shadow-lg focus:outline-none focus:ring-0 focus:border-gray-400 text-lg md:text-sm"
              placeholder="Enter location"
            />
          </div>
          <button className="w-full sm:w-auto bg-green-600 text-white px-6 py-3 mt-3 md:mt-0 rounded-xl font-bold hover:bg-green-700 transition">
            Search
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="hidden gap-5 w-full sm:flex sm:flex-wrap md:gap-2 mt-5 md:mt-0">
        {selectedTab === "Buy" ? (
          <ButtonGroup
            buttons={["All", "Ready", "Off-Plan"]}
            selected={selectedBuyFilter}
            onSelect={setSelectedBuyFilter}
          />
        ) : (
          <DropdownGroup
            title="Rent Duration"
            multiSelect={false}
            onSelect={(items) => console.log("Selected Rent Type:", items)}
            sections={[
              {
                title: "Duration",
                items: ["Yearly", "Monthly", "Weekly", "Daily"],
              },
            ]}
          />
        )}

        {/* Top Cities */}
        <DropdownGroup
          title="Top Cities"
          onSelect={(items) => console.log("Selected City:", items)}
          sections={[
            {
              title: "Cities",
              items: [
                "Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan",
                "Enugu", "Benin City", "Kaduna", "Abeokuta", "Jos",
                "Awka", "Calabar"
              ],
            },
          ]}
        />

        {/* Property Types */}
        <DropdownGroup
          title="Property Filters"
          onSelect={(items) => setSelectedFilters(items)}
          sections={[
            {
              title: "Residential",
              items: [
                "Apartment", "Townhouse", "Villa Compound", "Bungalow",
                "Land", "Mansion", "Room", "Duplex", "Hotel Apartment", "Penthouse",
              ],
            },
            {
              title: "Commercial",
              items: [
                "Land", "Shop", "Warehouse", "Building", "Office", "Plaza",
                "Factory", "Workshop", "Restaurant Space", "Banking Hall",
                "Clinic/Hospital", "School"
              ],
            },
          ]}
        />

        {/* Price Range */}
        <DropdownGroup
          title="Price(NGN)"
          multiSelect={false}
          onSelect={(items) => console.log("Selected Price Range:", items)}
          sections={[
            {
              title: "Price(NGN)",
              items: [
                "₦0 - ₦500k",
                "₦500k - ₦1M",
                "₦1M - ₦5M",
                "₦5M - ₦10M",
                "₦10M - ₦50M",
                "₦50M+"
              ],
            },
          ]}
        />
      </div>

      {/* Banner */}
      <div className="hidden md:flex bg-[#D1F0E2] p-4 rounded-lg flex-col md:flex-row justify-between items-start md:items-center gap-2 text-left text-black mt-5 md:mt-0">
        <p>Want to find more about Nigeria real estates using AI?</p>
        <p className="text-green-800 font-bold cursor-pointer">
          Try DevadGPT <i className="fas fa-arrow-right ml-1"></i>
        </p>
      </div>
    </div>
  );
}

export default HeroContent;
