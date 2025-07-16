import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonGroup from '../GeneralComponents/ButtonGroup';
import DropdownGroup from '../GeneralComponents/DropdownGroup';

const PropertiesNav = () => {
  const [selectedTab, setSelectedTab] = useState('Buy');
  const [selectedBuyFilter, setSelectedBuyFilter] = useState('All');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showBuyRentModal, setShowBuyRentModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = showBuyRentModal ? 'hidden' : 'auto';
  }, [showBuyRentModal]);

  return (
    <div className="px-4 py-4 -mt-5 max-w-[90rem] mx-auto w-full md:sticky top-0 relative sm:z-[50]">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-2 flex-wrap w-full relative">

        {/* Buy / Rent Dropdown - Desktop */}
        <div className="hidden md:block">
          <DropdownGroup
            title={selectedTab}
            multiSelect={false}
            onSelect={(items) => items.length > 0 && setSelectedTab(items[0])}
            sections={[{ title: 'Purpose', items: ['Buy', 'Rent'] }]}
            className="w-[110px] z-[40]"
          />
        </div>

        {/* Location input with Buy/Rent button inside on mobile */}
        <div className="relative w-full md:w-[350px] mt-20 md:mt-0">
          <div className="absolute left-2 top-1/2 -translate-y-1/2 md:hidden z-10">
            <button
              onClick={() => setShowBuyRentModal(true)}
              className="bg-green-100 border-0 border-gray-400 px-2.5 py-1.5 rounded-md text-sm font-bold pl-2 text-green-600"
            >
              {selectedTab}
              <i className={`ml-2 z-[9999] fas ${showBuyRentModal ? 'fa-chevron-up' : 'fa-chevron-down'} text-[10px] text-gray-600`}></i>
            </button>
          </div>

          <i className="fas fa-map-marker-alt absolute md:left-3 left-5 top-1/2 -translate-y-1/2 text-green-600 text-xl md:block"></i>
          <input
            placeholder="Enter location"
            className="w-full md:pl-10 pl-20 pr-4 py-3 border border-gray-400 rounded-xl text-black shadow-md focus:outline-none text-sm"
          />
        </div>

        {/* ButtonGroup - Mobile only */}
        <div className="md:hidden w-full mt-2">
          <ButtonGroup
            buttons={["All", "Ready", "Off-Plan"]}
            selected={selectedBuyFilter}
            onSelect={setSelectedBuyFilter}
            className="rounded-b-xl border border-gray-400 shadow-md"
          />
        </div>

        {/* Dropdowns */}
        <DropdownGroup
          title="Top Cities"
          onSelect={(items) => console.log("City:", items)}
          sections={[{
            title: "Cities",
            items: ["Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan", "Uyo", "Benin City", "Kaduna", "Abeokuta", "Jos", "Awka", "Calabar"]
          }]}
          className="w-[150px] md:w-[190px] md:z-[100]"
        />

        <DropdownGroup
          title="Property Filters"
          onSelect={setSelectedFilters}
          sections={[{
            title: "Residential",
            items: ["Apartment", "Townhouse", "Villa Compound", "Bungalow", "Land", "Mansion", "Room", "Duplex", "Hotel Apartment", "Penthouse"]
          }, {
            title: "Commercial",
            items: ["Land", "Shop", "Warehouse", "Building", "Office", "Plaza", "Factory", "Workshop", "Restaurant Space", "Banking Hall", "Clinic/Hospital", "School"]
          }]}
          className="w-[150px] md:w-[190px] md:z-[100]"
        />

        <DropdownGroup
          title="Price Range"
          multiSelect={false}
          onSelect={(items) => console.log("Price Range:", items)}
          sections={[{
            title: "Price Range",
            items: ["₦0 - ₦500k", "₦500k - ₦1M", "₦1M - ₦5M", "₦5M - ₦10M", "₦10M - ₦50M", "₦50M+"]
          }]}
          className="w-[150px] md:w-[190px] md:z-[100]"
        />

        {/* ButtonGroup - Desktop only */}
        {selectedTab === "Buy" && (
          <div className="hidden md:flex w-full md:w-auto justify-center md:justify-start">
            <ButtonGroup
              buttons={["All", "Ready", "Off-Plan"]}
              selected={selectedBuyFilter}
              onSelect={setSelectedBuyFilter}
            />
          </div>
        )}
      </div>

      {/* Bottom Row */}
      <div className="hidden md:flex justify-between items-center mt-6 gap-4 w-full">
        <div className="flex flex-wrap gap-4 items-center">
          {[{ label: "TruCheck Listings" }, { label: "Properties With Floor Plans" }].map(({ label }, idx) => (
            <button
              key={idx}
              className="bg-white border border-gray-400 px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm text-sm hover:bg-gray-100 transition"
            >
              {label}
              <span className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center text-xs text-white font-bold">
                i
              </span>
            </button>
          ))}
        </div>

        <div className="ml-auto">
          <button
          onClick={() => navigate('/services')}
          className="text-green-600 px-6 py-2 font-bold hover:bg-gray-200 transition text-sm">
            Services
          </button>
        </div>
      </div>

      {/* Mobile Modal for Buy/Rent */}
      {showBuyRentModal && (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white w-[80%] max-w-sm rounded-xl p-6 space-y-4 shadow-xl text-center">
            <h2 className="text-lg font-semibold text-gray-800">Select Option</h2>
            {["Buy", "Rent"].map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  setSelectedTab(opt);
                  setShowBuyRentModal(false);
                }}
                className={`w-full py-2 rounded text-base font-medium ${
                  selectedTab === opt ? "bg-green-600 text-white" : "bg-gray-100 text-gray-800"
                }`}
              >
                {opt}
              </button>
            ))}
            <button
              onClick={() => setShowBuyRentModal(false)}
              className="text-sm text-gray-500 mt-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertiesNav;
