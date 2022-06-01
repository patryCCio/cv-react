import React from "react";
import Section from "../components/Section";
import '../styles/pages/ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="error">
      <Section value="Error" font={<i className="fa-solid fa-bomb"></i>}/>
    </div>
  );
};

export default ErrorPage;
