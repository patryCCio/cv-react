import Section from "../../components/Section";
import "../Page.css";
import { IoIosInformationCircle } from "react-icons/io";
import { FaBirthdayCake, FaGlobeAmericas, FaSuitcase } from "react-icons/fa";
import {
  BsCode,
  BsFillPencilFill,
  BsFillPhoneFill,
  BsHeadset,
  BsMusicNote,
} from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { BiFootball } from "react-icons/bi";

const About = () => {
  return (
    <section className="about">
      <Section
        value="O mnie"
        font={<IoIosInformationCircle className="section-icon" />}
      />

      <div className="content">
        <p>
          <strong>Nazywam się Patryk Szczerbiński!</strong> Moje zainteresowanie
          w zakresie programowania zapoczątkowało w okresie technikum. Podjąłem
          wówczas kroki w tym kierunku i jako absolwent technikum rozpocząłem
          edukację na studiach informatycznych. Obecnie jestem studentem III
          roku i prócz nich chciałbym pogłębiać swoją wiedzę w tym kierunku
          poprzez nabywanie doświadczenia{" "}
          <strong>(front-end / full-stack)</strong>. Jestem osobą dokładną,
          dopracowującą każdy szczegół. Lubię trudne wyzwania, gdyż to przy nich
          najwięcej się uczymy. Prócz programowania interesuję się grafiką
          komputerową, rysowaniem, muzyką i sportem.
        </p>
        <div className="bottom">
          <div className="left">
            <h3>Informacje ogólne</h3>
            <div className="informations">
              <div className="info">
                <FaBirthdayCake className="info-icon" />
                <p className="info-p">08.03.2000 r.</p>
              </div>

              <div className="info">
                <BsFillPhoneFill className="info-icon" />
                <p className="info-p">+48 502 495 064</p>
              </div>

              <div className="info">
                <MdAlternateEmail className="info-icon" />
                <p className="info-p">szczerbinski.patryk@wp.pl</p>
              </div>

              <div className="info">
                <HiLocationMarker className="info-icon" />
                <p className="info-p">Warszawa</p>
              </div>

              <div className="info">
                <FaSuitcase className="info-icon" />
                <p className="info-p">
                  <span>Praktyki</span>
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <h3>Zainteresowania</h3>
            <div className="hobbies">
              <div className="hobby">
                <BsCode className="hobby-icon" />
                <p className="hobby-p">Programowanie</p>
              </div>
              <div className="hobby">
                <BsFillPencilFill className="hobby-icon" />
                <p className="hobby-p">Rysowanie</p>
              </div>
              <div className="hobby">
                <BsMusicNote className="hobby-icon" />
                <p className="hobby-p">Muzyka</p>
              </div>
              <div className="hobby">
                <BiFootball className="hobby-icon" />
                <p className="hobby-p">Sport</p>
              </div>
              <div className="hobby">
                <BsHeadset className="hobby-icon" />
                <p className="hobby-p">Gry</p>
              </div>
              <div className="hobby">
                <FaGlobeAmericas className="hobby-icon" />
                <p className="hobby-p">Podróżowanie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
