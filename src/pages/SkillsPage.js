import React, { useEffect } from "react";
import Section from "../components/Section";
import "../styles/pages/SkillsPage.css";
import { SkillsDb } from "../database/SkillsDB";

const SkillsPage = () => {
  function createFrameworkButtons(key, buttonsFrameworks, divType) {
    buttonsFrameworks = SkillsDb[key].frameworks;
    buttonsFrameworks.forEach((frameworks, index) => {
      const button = document.createElement("button");
      button.classList.add("skills-button-type");
      button.dataset.key = index;
      button.textContent = frameworks.framework;
      divType.appendChild(button);
    });
  }

  function setActive(key, element) {
    element.forEach((button, index) => {
      if (index === Number(key)) button.classList.add("active");
      else button.classList.remove("active");
    });
  }

  function setInformation(key, actualNumber, content) {
    const sections = SkillsDb[key].frameworks[actualNumber].sections;
    content.innerHTML = "";

    const teach = document.createElement("h3");
    teach.classList.add("inner-h3");
    teach.textContent = "Zapoznane";

    content.appendChild(teach);

    sections.forEach((section, index) => {
      let contentTrue;
      let divEl;
      let contentSide;

      divEl = document.createElement("div");
      divEl.classList.add("inner-side");
      contentSide = document.createElement("h4");
      contentSide.classList.add("h4-title");
      contentSide.textContent = section.title;
      divEl.appendChild(contentSide);

      for (let x = 0; x < section.lessons.length; x++) {
        if (section.lessons[x].teached) {
          const p = document.createElement("p");
          const span = document.createElement('span');
          span.classList.add('inner-text-span');
          p.classList.add("text");
          p.appendChild(span);
          p.innerHTML = p.innerHTML + section.lessons[x].text;
          divEl.appendChild(p);
        }
      }
      content.appendChild(divEl);
    });
  }

  useEffect(() => {
    const skills = SkillsDb;
    let buttonsFrameworks = [];
    const divLanguage = document.querySelector(".skills-language");
    const divType = document.querySelector(".skills-type");
    let firstTurn = true;
    const content = document.querySelector(".content");
    let actualKey = 0;
    let actualNumber = 0;

    if (firstTurn) {
      divType.innerHTML = "";
      buttonsFrameworks = [];
      divLanguage.innerHTML = "";
      // ==========================

      skills.forEach((element, index) => {
        const div = document.createElement("button");
        div.classList.add("skills-button-language");
        div.dataset.key = index;
        div.textContent = element.language;
        divLanguage.appendChild(div);
      });
      createFrameworkButtons(0, buttonsFrameworks, divType);
      firstTurn = false;
    }
    const buttonsLanguages = document.querySelectorAll(
      ".skills-button-language"
    );

    let buttonsTypes = document.querySelectorAll(".skills-button-type");
    setActive(0, buttonsLanguages);
    setActive(0, buttonsTypes);

    buttonsLanguages.forEach((languageButton) => {
      languageButton.addEventListener("click", () => {
        buttonsFrameworks = [];
        buttonsTypes = [];
        divType.innerHTML = "";

        actualKey = Number(languageButton.dataset.key);

        createFrameworkButtons(actualKey, buttonsFrameworks, divType);

        buttonsTypes = document.querySelectorAll(".skills-button-type");
        setActive(actualKey, buttonsLanguages);
        setActive(0, buttonsTypes);
        setInformation(actualKey, 0, content);

        buttonsTypes.forEach((btnType) => {
          btnType.addEventListener("click", function () {
            actualNumber = Number(btnType.dataset.key);
            setActive(actualNumber, buttonsTypes);
            setInformation(actualKey, actualNumber, content);
          });
        });
      });
    });

    setInformation(0, 0, content);
  }, [SkillsDb]);

  return (
    <div className="skills">
      <Section
        value="Doświadczenie"
        font={<i className="fa-solid fa-list-check"></i>}
      />
      <div className="skills-wrapper">
        <div className="skills-header">
          <div className="skills-language"></div>
          <div className="skills-type"></div>
        </div>
        <div className="skills-body">
          <div className="content">...</div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
