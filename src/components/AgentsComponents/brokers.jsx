import React, { useState } from 'react';
import { NIGERIA_STATES } from "../../utils/states";
import '../../styles/broker.css';
import AgentCard from './agentCard';

function Brokers() {
  const [selectedState, setSelectedState] = useState("");
  const agents = [
    {
      name: 'Annie Beatson',
      state: 'DAMAC Hills 2',
      image: 'https://images.bayut.com/thumbnails/755370268-800x600.jpeg',
      logo: 'https://images.bayut.com/thumbnails/167794707-240x180.jpeg',
      sale: 11,
      rent: 2,
      language: 'English'
    },
    {
      name: 'John Doe',
      state: 'Downtown Dubai',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      logo: 'https://dummyimage.com/100x40/000/fff&text=Agency+Logo',
      sale: 8,
      rent: 4,
      language: 'Arabic'
    },
    // Add more agent objects here
  ];

  return (
    <>
      <div className='container'>
        <div className="left-container">
          <div className="top-row">
            <div className="inner-box">
              Explore agents with a proven track record of high response rates and authentic listings.
            </div>
            <div className="inner-box2">
              <label htmlFor="state-select">State</label>
      <select
        id="state-select"
        value={selectedState}
        onChange={e => setSelectedState(e.target.value)}
      >
        <option value="">-- Choose a state --</option>
        {NIGERIA_STATES.map(state => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
            </div>
          </div>

          <div className="card">
            {agents.map((agent, index) => (
              <AgentCard key={index} {...agent} />
            ))}
          </div>
        </div>

        <div className='right-container'></div>
      </div>
    </>
  );
}

export default Brokers;
