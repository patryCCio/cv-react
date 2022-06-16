import React from "react";
import Section from "../components/Section";
import "../styles/pages/HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <Section value="Biblioteki" font={<i className="fa-solid fa-book"></i>}/>
    </div>
  );
};

export default HomePage;
