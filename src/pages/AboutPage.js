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
            Moje zainteresowanie w zakresie programowania zapoczątkowało w okresie technikum. Podjąłem wówczas kroki w tym kierunku i jako absolwent technikum rozpocząłem edukację na studiach informatycznych. Obecnie jestem studentem II roku i chciałbym prócz studiów pogłębiać swoją wiedzę w tym kierunku poprzez nabywanie doświadczenia (front-end). Jestem osobą dokładną, dopracowującą każdy szczegół. Lubię trudne wyzwania, gdyż to przy nich najwięcej się uczymy. Prócz programowania interesuję się grafiką komputerową, rysowaniem, muzyką i sportem.
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
                <h5 className="hobby-h5">Programowanie</h5>
              </div>
              <div className="about-hobby">
                <i className="fa-solid fa-pencil"></i>
                <h5 className="hobby-h5">Rysowanie</h5>
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
