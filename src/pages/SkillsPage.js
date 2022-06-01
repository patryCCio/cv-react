import React from "react";
import Section from "../components/Section";
import "../styles/pages/SkillsPage.css";

const SkillsPage = () => {
  return (
    <div className="skills">
      <Section value="Doświadczenie" font={<i className="fa-solid fa-list-check"></i>}/>
      <div className="skills-wrapper">
        <div className="skills-languages">
          <div className="skills-box">
            
          </div>
        </div>
        <div className="skills-description">

        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
