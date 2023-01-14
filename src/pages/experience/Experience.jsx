import Section from "../../components/Section";
import "../Page.css";
import { GiSkills } from "react-icons/gi";
import { SkillsDb } from "../../SkillsDB";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const Experience = () => {
  const [typeArray, setTypeArray] = useState([]);
  const [contentArray, setContentArray] = useState([]);
  const [actualIndex, setActualIndex] = useState(0);
  const buttonLanguageRef = useRef([]);
  const buttonTypeRef = useRef([]);

  const refActive = (ref, index, length) => {
    for (let x = 0; x < length; x++) {
      if (x === index) {
        ref.current[x].classList.add("active");
      } else {
        ref.current[x].classList.remove("active");
      }
    }
  };


  const handleClickContent = (index, button = null) => {
    if (button !== null) {
      refActive(buttonTypeRef, index, typeArray.length);
    }

    const array = [];
    typeArray.forEach((el, elIndex) => {
      if (index === elIndex) {
        el.sections.forEach((elin) => {
          array.push(elin);
        });
      }
    });

    setContentArray(array);
  };

  const handleClickType = (index, button = null) => {
    const array = [];
    SkillsDb.forEach((el, elIndex) => {
      if (index === elIndex) {
        el.frameworks.forEach((elin) => {
          array.push(elin);
        });
      }
    });
    if (button === null) {
      setActualIndex(index);
    } else {
      setActualIndex(0);
    }
    setTypeArray(array);
  };

  const handleClickLanguage = (index) => {
    refActive(buttonLanguageRef, index, SkillsDb.length);
    handleClickType(index, 1);
  };

  useEffect(() => {
    handleClickLanguage(0);
  }, []);

  useEffect(() => {
    refActive(buttonTypeRef, actualIndex, typeArray.length);
    handleClickContent(actualIndex);
  }, [typeArray]);

  return (
    <section className="experience">
      <Section
        value="Doświadczenie"
        font={<GiSkills className="section-icon" />}
      />
      <div className="skills-wrapper">
        <div className="skills-header">
          <div className="skills-language">
            {SkillsDb.map((el, index) => (
              <button
                className="skills-button-language"
                onClick={() => handleClickLanguage(index)}
                key={index}
                ref={(el) => (buttonLanguageRef.current[index] = el)}
              >
                {el.language}
              </button>
            ))}
          </div>
          <div className="skills-type">
            {typeArray.map((el, index) => (
              <button
                className="skills-button-type"
                onClick={() => handleClickContent(index, 1)}
                key={index}
                ref={(el) => (buttonTypeRef.current[index] = el)}
              >
                {el.framework}
              </button>
            ))}
          </div>
        </div>
        <div className="skills-body">
          <div className="content">
            <h4 className="inner-h3">Zapoznane</h4>
            {contentArray.map((el, index) => (
              <div className="inner-side" key={index}>
                <h4 className="h4-title">{el.title}</h4>
                {el.lessons.map((elin, index2) => (
                  <p className="text" key={index2}>
                    <span className="inner-text-span"></span>
                    {elin.text}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
