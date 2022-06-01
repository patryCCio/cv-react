import React from "react";
import Section from "../components/Section";
import '../styles/pages/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact">
      <Section value="Kontakt" font={<i className="fa-solid fa-mobile-screen"></i>}/>
    </div>
  );
};

export default ContactPage;
