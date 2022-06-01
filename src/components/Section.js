import React from "react";
import "../styles/components/SectionName.css";
import Animation from "./Animation";

const Section = ({value, font}) => {

  return (
    <div className="section-wrapper">
      <div className="section-name">
        {font}
        <h2 className="section-h2">{value}</h2>
        <div className="first-line"></div>
        <div className="second-line"></div>
      </div>
      {value !== 'Portfolio' ? <Animation/> : null }
    </div>
  );
};

export default Section;
