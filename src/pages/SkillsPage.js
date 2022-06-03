import React, { createElement, useEffect } from "react";
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

  function setInformation(key, actualNumber, leftSide, rightSide) {
    const sections = SkillsDb[key].frameworks[actualNumber].sections;
    leftSide.innerHTML = "";
    rightSide.innerHTML = "";

    const teach = document.createElement("h3");
    teach.classList.add("inner-h3");
    teach.textContent = "Nauczone";

    const teach2 = document.createElement("h3");
    teach2.classList.add("inner-h3");
    teach2.textContent = "Do nauki";

    leftSide.appendChild(teach);
    rightSide.appendChild(teach2);

    sections.forEach((section, index) => {
      let isTrue = false;
      let isFalse = false;
      let leftSideTrue;
      let rightSideTrue;
      let divEl;
      let divEl2;

      for (let x = 0; x < section.lessons.length; x++) {
        if (section.lessons[x].teached) isTrue = true;
        if (!section.lessons[x].teached) isFalse = true;
      }

      if (isTrue) {
        divEl = document.createElement("div");
        divEl.classList.add("inner-side");
        leftSideTrue = document.createElement("h4");
        leftSideTrue.classList.add("h4-title");
        leftSideTrue.textContent = section.title;
        divEl.appendChild(leftSideTrue);

        for (let x = 0; x < section.lessons.length; x++) {
          if (section.lessons[x].teached) {
            const p = document.createElement("p");
            p.classList.add("text");
            p.textContent = section.lessons[x].text;
            divEl.appendChild(p);
          }
        }
      }

      if (isFalse) {
        divEl2 = document.createElement("div");
        divEl2.classList.add("inner-side");
        rightSideTrue = document.createElement("h4");
        rightSideTrue.classList.add("h4-title");
        rightSideTrue.textContent = section.title;

        divEl2.appendChild(rightSideTrue);

        for (let x = 0; x < section.lessons.length; x++) {
          if (!section.lessons[x].teached) {
            const p = document.createElement("p");
            p.classList.add("text");
            p.textContent = section.lessons[x].text;
            divEl2.appendChild(p);
          }
        }
      }

      if (divEl !== undefined) {
        leftSide.appendChild(divEl);
      }

      if (divEl2 !== undefined) {
        rightSide.appendChild(divEl2);
      }
    });
  }

  useEffect(() => {
    const skills = SkillsDb;
    let buttonsFrameworks = [];
    const divLanguage = document.querySelector(".skills-language");
    const divType = document.querySelector(".skills-type");
    let firstTurn = true;
    const rightSide = document.querySelector(".right-side");
    const leftSide = document.querySelector(".left-side");
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
        setInformation(actualKey, 0, leftSide, rightSide);

        buttonsTypes.forEach((btnType) => {
          btnType.addEventListener("click", function () {
            actualNumber = Number(btnType.dataset.key);
            setActive(actualNumber, buttonsTypes);
            setInformation(actualKey, actualNumber, leftSide, rightSide);
          });
        });
      });
    });

    setInformation(0, 0, leftSide, rightSide);
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
          <div className="left-side">...</div>
          <div className="right-side">...</div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
