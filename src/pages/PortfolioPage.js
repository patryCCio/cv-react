import React, { useEffect } from "react";
import Section from "../components/Section";
import "../styles/pages/PortfolioPage.css";
import { PortfolioDB } from "../database/PortfolioDB";

const PortfolioPage = () => {
  const portfolio = PortfolioDB;

  useEffect(() => {
    // DOM elements
    const progressBar = document.querySelector(".portfolio-progressbar");
    const progressBarSpan = document.querySelector(
      ".portfolio-progressbar .portfolio-inner-progressbar"
    );
    const portfolioTitle = document.querySelector(
      ".portfolio-body .portfolio-title"
    );
    const portfolioDescription = document.querySelector(
      ".portfolio-body .portfolio-description"
    );
    const portfolioActual = document.querySelector(
      ".portfolio-size .portfolio-actual"
    );
    const portfolioSizeArray = document.querySelector(
      ".portfolio-size .portfolio-size-array"
    );
    const leftArrow = document.querySelector(".portfolio-footer #left-arrow");
    const rightArrow = document.querySelector(".portfolio-footer #right-arrow");
    const portfolioAnimation1 = document.querySelectorAll(
      ".portfolio-animation"
    );
    const portfolioAnimation2 = document.querySelectorAll(
      ".portfolio-animation2"
    );
    const portfolioLanguage = document.querySelector(".portfolio-language");
    const portfolioBody = document.querySelector(".portfolio-body");
    const portfolioA = document.querySelector(".portfolio-bottom-button");

    // DB
    const types = ["teach", "projects", "clients"];
    const teach = portfolio[0].teach;
    const projects = portfolio[0].projects;
    const clients = portfolio[0].clients;
    let actualType = types[0];

    

    // buttons
    const buttonsType = document.querySelectorAll(
      ".portfolio-type .button-type"
    );
    const buttonsLanguage = document.querySelectorAll(
      ".portfolio-language .button-language"
    );

    const allLanguages = teach.map(course => course[0]);

    // sizes
    let sizeArray;
    let sizeProgressBar;
    let sizeProgressBarSpan;
    let actualNumber = 0;
    let languageNumber = 0;
    let limitForLanguage = 0;
    let actualLanguageNumber = 0;

    let urlProject = "/cv-react/myprojects/";

    function checkSizeProgressBar() {
      sizeProgressBar = progressBar.offsetWidth;
    }
    function selectButton() {
      buttonsType.forEach((button) => {
        if (button.dataset.key === actualType) {
          button.classList.add("active");
        } else button.classList.remove("active");
      });
    }

    function fillSizeArray() {
      if (actualType === "teach") {
        actualLanguageNumber = 0;
        languageNumber = 0;
        limitForLanguage = teach[0][1].length;
        sizeArray = 0;
        teach.forEach((element) => {
          sizeArray += element[1].length;
        });
      } else if (actualType === "projects") {
        sizeArray = projects.length;
      } else if (actualType === "clients") {
        sizeArray = clients.length;
      }
      actualNumber = 1;
    }

    function fillSpan() {
      portfolioActual.innerHTML = actualNumber;
      portfolioSizeArray.innerHTML = sizeArray;
    }

    function fillWidthSpan() {
      sizeProgressBarSpan = sizeProgressBar / sizeArray;
      progressBarSpan.style.width = sizeProgressBarSpan * actualNumber + "px";
    }

    function setAll() {
      if (actualType === "teach") {
        portfolioTitle.textContent =
          teach[languageNumber][1][actualLanguageNumber].title;
        portfolioDescription.textContent =
          teach[languageNumber][1][actualLanguageNumber].message;
        portfolioA.href = `${urlProject + actualType + '/' + allLanguages[languageNumber]}/kat${
          actualLanguageNumber
        }/`;
      } else if (actualType === "projects") {
        portfolioTitle.innerHTML = projects[actualNumber - 1].title;
        portfolioDescription.innerHTML = projects[actualNumber - 1].message;
        portfolioA.href = `${urlProject + actualType}/kat${
          actualNumber - 1
        }/`;
      } else if (actualType === "clients") {
        portfolioTitle.innerHTML = clients[actualNumber - 1].title;
        portfolioDescription.innerHTML = clients[actualNumber - 1].message;
        portfolioA.href = `${urlProject + actualType}/kat${
          actualNumber - 1
        }/`;
      }
    }

    checkSizeProgressBar();

    function init() {
      checkSizeProgressBar();
      selectButton();
      fillSizeArray();
      fillWidthSpan();
      fillSpan();
      setAll();
      repairArray("none");
      setPadding(0);
    }

    function arrowClick() {
      fillWidthSpan();
      fillSpan();
      setAll();
    }

    function repairArray(option) {
      if (option === "right") {
        actualLanguageNumber++;
        if (actualLanguageNumber === limitForLanguage) {
          languageNumber++;
          actualLanguageNumber = 0;
          if (languageNumber === teach.length) languageNumber = 0;
          limitForLanguage = teach[languageNumber][1].length;
        }
      } else if (option === "left") {
        actualLanguageNumber--;
        if (actualLanguageNumber === -1) {
          languageNumber--;
          if (languageNumber === -1) languageNumber = teach.length - 1;
          limitForLanguage = teach[languageNumber][1].length;
          actualLanguageNumber = limitForLanguage - 1;
        }
      }

      buttonsLanguage.forEach((button, index) => {
        if (index === languageNumber) {
          button.classList.add("active");
        } else button.classList.remove("active");
      });
    }

    leftArrow.addEventListener("click", () => {
      actualNumber--;
      if (actualNumber === 0) {
        actualNumber = sizeArray;
      }
      portfolioAnimation2.forEach((animation) => {
        animation.classList.add("active");
      });

      setTimeout(() => {
        portfolioAnimation2.forEach((animation) => {
          animation.classList.remove("active");
        });
      }, 1500);
      if (actualType === "teach") {
        repairArray("left");
      }
      arrowClick();
    });

    rightArrow.addEventListener("click", () => {
      actualNumber++;
      if (actualNumber === sizeArray + 1) {
        actualNumber = 1;
      }
      portfolioAnimation1.forEach((animation) => {
        animation.classList.add("active");
      });

      setTimeout(() => {
        portfolioAnimation1.forEach((animation) => {
          animation.classList.remove("active");
        });
      }, 2000);
      if (actualType === "teach") {
        repairArray("right");
      }
      arrowClick();
    });

    function setActiveButton() {
      buttonsLanguage.forEach((buttonAdd, index) => {
        if (index === languageNumber) buttonAdd.classList.add("active");
        else buttonAdd.classList.remove("active");
      });

      actualNumber = 1;
      actualLanguageNumber = 0;
      limitForLanguage = teach[languageNumber][1].length;
      for (let x = 0; x < languageNumber; x++) {
        actualNumber += teach[x][1].length;
      }
      setAll();
      fillWidthSpan();
      fillSpan();
    }

    function setPadding(index) {
      if (index === 0) {
        portfolioLanguage.classList.remove("active");
        portfolioBody.classList.add("active");
      } else {
        portfolioLanguage.classList.add("active");
        portfolioBody.classList.remove("active");
      }
    }

    buttonsLanguage.forEach((button, index) => {
      button.addEventListener("click", () => {
        if (actualType === "teach") {
          languageNumber = index;
          setActiveButton();
        }
      });
    });

    buttonsType.forEach((button, index) => {
      button.addEventListener("click", () => {
        setPadding(index);

        actualType = button.dataset.key;
        selectButton();
        fillSizeArray();
        if (actualType === "teach") {
          setActiveButton();
        }
        arrowClick();
        setAll();
      });
    });

    window.addEventListener("resize", init);
    init();
  }, [portfolio]);

  return (
    <div className="portfolio">
      <Section
        value="Portfolio"
        font={<i className="fa-solid fa-diagram-project"></i>}
      />
      <span className="portfolio-animation" />
      <span className="portfolio-animation" />
      <span className="portfolio-animation" />
      <span className="portfolio-animation" />
      <span className="portfolio-animation" />
      <span className="portfolio-animation" />
      <span className="portfolio-animation" />
      <span className="portfolio-animation" />
      <span className="portfolio-animation" />
      <span className="portfolio-animation" />
      <span className="portfolio-animation" />
      <span className="portfolio-animation" />

      <span className="portfolio-animation2" />
      <span className="portfolio-animation2" />
      <span className="portfolio-animation2" />
      <span className="portfolio-animation2" />
      <span className="portfolio-animation2" />
      <span className="portfolio-animation2" />
      <span className="portfolio-animation2" />
      <span className="portfolio-animation2" />
      <span className="portfolio-animation2" />
      <span className="portfolio-animation2" />
      <span className="portfolio-animation2" />
      <span className="portfolio-animation2" />

      <div className="portfolio-wrapper">
        <div className="portfolio-language">
          <button className="button-language">CSS</button>
          <button className="button-language">JS</button>
          <button className="button-language">React</button>
        </div>
        <div className="portfolio-header">
          <div className="portfolio-type">
            <button data-key="teach" className="button-type">
              Nauka
            </button>
            <button data-key="projects" className="button-type">
              Projekty
            </button>
            <button data-key="clients" className="button-type">
              Klienci
            </button>
          </div>
        </div>

        <div className="portfolio-body">
          <h3 className="portfolio-title">?</h3>
          <p className="portfolio-description">?</p>
        </div>
        <div className="portfolio-bottom">
          <a
            href="myprojects/teach/kat0/index.html"
            target="_blank"
            className="portfolio-bottom-button"
          >
            Zobacz
          </a>
          <p className="portfolio-size">
            <span className="portfolio-actual"></span>
            <span
              style={{
                color: "rgb(235, 46, 46)",
                margin: "0 5px",
              }}
            >
              /
            </span>
            <span className="portfolio-size-array"></span>
          </p>
        </div>
        <div className="portfolio-footer">
          <i id="left-arrow" className="fa-solid fa-circle-chevron-left"></i>
          <div className="portfolio-progressbar">
            <span className="portfolio-inner-progressbar"></span>
          </div>
          <i id="right-arrow" className="fa-solid fa-circle-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
