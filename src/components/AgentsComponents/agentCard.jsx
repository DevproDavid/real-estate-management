import React from 'react';
import '../../styles/agentCard.css';

function AgentCard({ image, logo, name, state, rent, sale, language }) {
  return (
    <>
    <div className="agent-card">
      <div className="agent-top">
        <div className="agent-image">
          <img src={image} alt={name} />
        </div>
        <div className="agent-info">
          <div className="agent-name">{name}</div>
          <div className="agent-area">
            Serves in <b>{state}</b>
          </div>
          {/* <div className="agent-stats">Speaks: {language}</div> */}
        </div>
      </div>

      <div className="agent-sales">
        <div>{sale} Sale</div>
        <div>{rent} Rent</div>
      </div>

      <div className="agency-logo">
        <img src={logo} alt="Agency Logo" />
      </div>
    </div>
    </>
  );
}

export default AgentCard;
