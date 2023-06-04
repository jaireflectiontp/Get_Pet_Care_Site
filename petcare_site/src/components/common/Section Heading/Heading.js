import React from "react";
import "./heading.scss"
const Heading = (props) => {
  const { pageHeading, headingTitle } = props;
  return (
    <div className="heading-container">
      <h6>{pageHeading}</h6>
      <h2>{headingTitle}</h2>
    </div>
  );
};

export default Heading;
