import Section from "../../components/Section";
import "./Portfolio.css";
import { FaSuitcase } from "react-icons/fa";
import { useRef, useState } from "react";
import { PortfolioDB } from "../../PortfolioDB";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useEffect } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  DiCss3,
  DiSass,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMysql,
  DiBootstrap,
} from "react-icons/di";
import { SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";
import { BsFillPencilFill } from "react-icons/bs";
import FsLightbox from "fslightbox-react";

const Portfolio = () => {
  const [sizeArray, setSizeArray] = useState(0);
  const [actualNumber, setActualNumber] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const buttonTypeRef = useRef([]);
  const spanRef = useRef(null);
  const [toggler, setToggler] = useState(false);

  const refActive = (ref, index, length) => {
    for (let x = 0; x < length; x++) {
      if (x === index) {
        ref.current[x].classList.add("active");
      } else {
        ref.current[x].classList.remove("active");
      }
    }
  };

  const handleDecrement = () => {
    if (actualNumber === 0) {
      setActualNumber(sizeArray - 1);
    } else {
      setActualNumber(actualNumber - 1);
    }
  };

  const handleIncrement = () => {
    if (actualNumber === sizeArray - 1) {
      setActualNumber(0);
    } else {
      setActualNumber(actualNumber + 1);
    }
  };

  const getSize = (index, option = null) => {
    let length = PortfolioDB[index].array.length;
    setSizeArray(length);
  };

  const handleProgressbar = () => {
    let size = 100 / sizeArray;
    spanRef.current.style.width = `${size * (actualNumber + 1)}%`;
  };

  const handleData = () => {
    setTitle(PortfolioDB[activeIndex].array[actualNumber].title);
    setDesc(PortfolioDB[activeIndex].array[actualNumber].message);
  };

  const handleClickButtonType = (index) => {
    refActive(buttonTypeRef, index, PortfolioDB.length);
    setActualNumber(0);
    setActiveIndex(index);
    if (index === 0) {
      getSize(index, 1);
    } else {
      getSize(index);
    }
  };

  useEffect(() => {
    handleClickButtonType(0);
  }, []);

  useEffect(() => {
    handleProgressbar();
    handleData();
  }, [actualNumber, sizeArray]);

  return (
    <section className="portfolio">
      <Section
        value="Portfolio"
        font={<FaSuitcase className="section-icon" />}
      />

      <div className="portfolio-wrapper">
        <div className="portfolio-header">
          <div className="portfolio-type">
            {PortfolioDB.map((el, index) => (
              <button
                className="button-type"
                key={index}
                ref={(el) => (buttonTypeRef.current[index] = el)}
                onClick={() => handleClickButtonType(index)}
              >
                {el.name}
              </button>
            ))}
          </div>
        </div>
        <div className="portfolio-language">
          {PortfolioDB[activeIndex].array[actualNumber].html && (
            <AiFillHtml5 className="portfolio-language-icon html" />
          )}

          {PortfolioDB[activeIndex].array[actualNumber].css && (
            <DiCss3 className="portfolio-language-icon css" />
          )}

          {PortfolioDB[activeIndex].array[actualNumber].scss && (
            <DiSass className="portfolio-language-icon scss" />
          )}

          {PortfolioDB[activeIndex].array[actualNumber].bootstrap && (
            <DiBootstrap className="portfolio-language-icon bootstrap" />
          )}

          {PortfolioDB[activeIndex].array[actualNumber].js && (
            <DiJavascript1 className="portfolio-language-icon js" />
          )}

          {PortfolioDB[activeIndex].array[actualNumber].react && (
            <DiReact className="portfolio-language-icon react" />
          )}

          {PortfolioDB[activeIndex].array[actualNumber].node && (
            <DiNodejsSmall className="portfolio-language-icon node" />
          )}

          {PortfolioDB[activeIndex].array[actualNumber].mysql && (
            <DiMysql className="portfolio-language-icon mysql" />
          )}

          {PortfolioDB[activeIndex].array[actualNumber].illustrator && (
            <SiAdobeillustrator className="portfolio-language-icon illustrator" />
          )}

          {PortfolioDB[activeIndex].array[actualNumber].photoshop && (
            <SiAdobephotoshop className="portfolio-language-icon photoshop" />
          )}

          {PortfolioDB[activeIndex].array[actualNumber].pencil && (
            <BsFillPencilFill className="portfolio-language-icon pencil" />
          )}
        </div>
        <div className="portfolio-body">
          <h3 className="portfolio-title">{title}</h3>
          {activeIndex === 0 && <p className="portfolio-description">{desc}</p>}
          {activeIndex === 1 && (
            <div className="portfolio-drawings">
              <img
                src={PortfolioDB[activeIndex].array[actualNumber].url}
                alt={PortfolioDB[activeIndex].array[actualNumber].title}
              />
            </div>
          )}
          {activeIndex === 2 && <p className="portfolio-description">{desc}</p>}
          {activeIndex === 3 && <p className="portfolio-description">{desc}</p>}
        </div>
        <div className="portfolio-bottom">
          {activeIndex === 0 && (
            <a
              target="_blank"
              href={`./myprojects/teach/kat${actualNumber}/index.html`}
              className="portfolio-bottom-button"
            >
              Zobacz
            </a>
          )}

          {activeIndex === 1 && (
            <>
              <button
                onClick={() => setToggler(!toggler)}
                className="portfolio-bottom-button"
              >
                Zobacz
              </button>
              <FsLightbox
                toggler={toggler}
                sources={[PortfolioDB[activeIndex].array[actualNumber].url]}
              />
            </>
          )}

          {activeIndex === 2 && (
            <a
              target="_blank"
              href={`./myprojects/projects/kat${actualNumber}/index.html`}
              className="portfolio-bottom-button"
            >
              Zobacz
            </a>
          )}

          <p className="portfolio-size">
            <span className="portfolio-actual">{actualNumber + 1}</span>
            <span
              style={{
                color: "var(--theme1)",
                margin: "0 5px",
                transition: "0.3s",
              }}
            >
              /
            </span>
            <span className="portfolio-size-array">{sizeArray}</span>
          </p>
        </div>
        <div className="portfolio-footer">
          <BsFillArrowLeftCircleFill
            onClick={handleDecrement}
            className="portfolio-footer-icon"
          />
          <div className="portfolio-progressbar">
            <span className="portfolio-inner-progressbar" ref={spanRef} />
          </div>
          <BsFillArrowRightCircleFill
            onClick={handleIncrement}
            className="portfolio-footer-icon"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
