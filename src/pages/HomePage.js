import React from "react";
import Section from "../components/Section";
import "../styles/pages/HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <Section value="Home" font={<i className="fa-solid fa-house"></i>}/>
    </div>
  );
};

export default HomePage;
