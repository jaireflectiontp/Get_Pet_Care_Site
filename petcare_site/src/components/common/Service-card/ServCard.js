import React from "react";
import "./servcard.scss";
const ServCard = (props) => {
  const { servLogo, servTitle, servNote } = props;
  return (
    <div className="serv-card-container">
      <div className="card-in">
        <div className="serv-logo">{servLogo}</div>
        <div className="serv-detail">
          <h4>{servTitle}</h4>
          <p>{servNote}</p>
          <div className="more-btn"><button>READ MORE</button></div>
        </div>
      </div>
    </div>
  );
};

export default ServCard;
