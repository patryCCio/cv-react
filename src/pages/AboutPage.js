import React from "react";
import Section from "../components/Section";
import "../styles/pages/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about">
      <Section
        value="O mnie"
        font={<i className="fa-solid fa-circle-info"></i>}
      />

      <section className="about-content">
        <div className="about-content-top">
          <p>
            <span className="about-span">Nazywam się Patryk Szczerbiński!</span>{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            efficitur vestibulum mi, vitae viverra massa ornare non. Etiam
            vestibulum finibus arcu. Vivamus et maximus ante. Aenean dignissim
            auctor volutpat. Vivamus vitae ligula id augue rhoncus aliquet.
            Donec facilisis purus a diam dapibus dapibus. In hac habitasse
            platea dictumst. Nunc tempor metus ac ipsum aliquet, in facilisis
            nibh pellentesque.
          </p>
        </div>
        <div className="about-content-bottom">
          <div className="about-content-left-bottom">
            <h3 className="about-h3">Informacje ogólne</h3>
            <div className="about-personal-info">
              <p>
                <span className="about-personal-info-span">
                <i className="fa-solid fa-cake-candles"></i> </span>
                08.03.2000 r.
              </p>
              <p>
                <span className="about-personal-info-span"><i className="fa-solid fa-mobile-screen-button"></i> </span> +48
                502 495 064
              </p>
              <p>
                <span className="about-personal-info-span"><i className="fa-solid fa-at"></i> </span>
                szczerbinski.patryk@wp.pl
              </p>
              <p>
                <span className="about-personal-info-span"><i className="fa-solid fa-location-dot"></i> </span>
                Warszawa
              </p>
              <p>
                <span className="about-personal-info-span">
                <i className="fa-solid fa-briefcase"></i> </span>
                <span className="job">Praktyki</span>
              </p>
            </div>
          </div>
          <div className="about-line"></div>
          <div className="about-content-right-bottom">
            <h3 className="about-h3">Zainteresowania</h3>
            <div className="about-hobby-box">
              <div className="about-hobby">
                <i className="fa-solid fa-computer"></i>
                <h5 className="hobby-h5">Programming</h5>
              </div>
              <div className="about-hobby">
                <i className="fa-solid fa-pencil"></i>
                <h5 className="hobby-h5">Malowanie</h5>
              </div>
              <div className="about-hobby">
                <i className="fa-solid fa-music"></i>
                <h5 className="hobby-h5">Muzyka</h5>
              </div>
              <div className="about-hobby">
                <i className="fa-solid fa-futbol"></i>
                <h5 className="hobby-h5">Sport</h5>
              </div>
              <div className="about-hobby">
                <i className="fa-solid fa-headset"></i>
                <h5 className="hobby-h5">Gry</h5>
              </div>

              <div className="about-hobby">
                <i className="fa-solid fa-film"></i>
                <h5 className="hobby-h5">Kinematografia</h5>
              </div>

              <div className="about-hobby">
                <i className="fa-solid fa-atom"></i>
                <h5 className="hobby-h5">Fizyka</h5>
              </div>

              <div className="about-hobby">
                <i className="fa-solid fa-car"></i>
                <h5 className="hobby-h5">Samochody</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
