import React from 'react';
import agentOne from '../../assets/images/agent1.jpg';
import agentTwo from '../../assets/images/agent2.jpg';
import agentThree from '../../assets/images/agent3.jpg';
import agentFour from '../../assets/images/agent1.jpg';

function TrustedAgent() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 bg-gray-900 rounded-xl shadow-lg -mt-60 md:-mt-16 md:mb-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        {/* Images - Left Side with overlap */}
        <div className="flex items-center justify-center md:justify-start -space-x-4">
          <img
            src={agentOne}
            alt=""
            className="h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-white"
          />
          <img
            src={agentTwo}
            alt=""
            className="h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-white"
          />
          <img
            src={agentThree}
            alt=""
            className="h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-white"
          />
          <img
            src={agentFour}
            alt=""
            className="h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-white"
          />
        </div>

        {/* Center Text */}
        <div className="text-center md:text-left flex-1 px-2">
          <h2 className="text-lg md:text-xl font-bold text-white">
            Trusted Agents
          </h2>
          <p className="text-white text-sm">
            Our agents are verified and trusted to help you find your dream
            property.
          </p>
        </div>

        {/* Button - Right Side */}
        <div className="hidden md:flex justify-center md:justify-end cursor-pointer md:cursor-default">
          <button className="bg-white text-green-900 px-4 py-3 rounded-lg hover:bg-gray-200 transition font-bold text-sm md:text-base">
            Meet Agents
            <i className="fas fa-chevron-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrustedAgent;
