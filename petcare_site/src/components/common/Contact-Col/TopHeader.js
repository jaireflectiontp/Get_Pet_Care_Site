import React from "react";
import "./top-header.scss";
const Contact = (props) => {
  const { icon, contactType, contactInfo } = props;
  return (
    <div className="top-header-col">
      <div className="top-header-icon">{icon}</div>
      <div className="top-header-details">
        <h6>{contactType}</h6>
        <span>{contactInfo}</span>
      </div>
    </div>
  );
};

export default Contact;
