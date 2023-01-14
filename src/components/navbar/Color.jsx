import { useEffect } from "react";
import { useState } from "react";
import { MdSettings } from "react-icons/md";

const Color = () => {
  const [indexActive, setIndexActive] = useState(0);

  const [isNight, setIsNight] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const array = [
    {
      theme1: "rgb(235, 46, 46)",
      theme2: "rgb(241, 70, 70)",
      theme3: "rgba(235, 46, 46, 0.6)",
      theme1Light: "rgb(192, 33, 33)",
      theme2Light: "rgb(241, 70, 70)",
      theme3Light: "rgba(192, 33, 33, 0.6)",
    },
    {
      theme1: "rgb(233, 90, 33)",
      theme2: "rgb(241, 124, 70)",
      theme3: "rgba(233, 90, 33, 0.6)",
      theme1Light: "rgb(210, 81, 31)",
      theme2Light: "rgb(214, 109, 60)",
      theme3Light: "rgba(210, 81, 31, 0.6)",
    },
    {
      theme1: "rgb(51, 159, 35)",
      theme2: "rgb(68, 186, 55)",
      theme3: "rgba(51, 159, 35, 0.6)",
      theme1Light: "rgb(42, 124, 30)",
      theme2Light: "rgb(59, 165, 47)",
      theme3Light: "rgba(42, 124, 30, 0.6)",
    },
    {
      theme1: "rgb(164, 153, 27)",
      theme2: "rgb(159, 173, 34)",
      theme3: "rgba(164, 153, 27, 0.6)",
      theme1Light: "rgb(209, 195, 43)",
      theme2Light: "rgb(182, 197, 48)",
      theme3Light: "rgba(209, 195, 43, 0.6)",
    },
    {
      theme1: "rgb(112, 34, 207)",
      theme2: "rgb(122, 80, 220)",
      theme3: "rgba(112, 34, 207, 0.6)",
      theme1Light: "rgb(112, 34, 207)",
      theme2Light: "rgb(122, 80, 220)",
      theme3Light: "rgba(112, 34, 207, 0.6)",
    },
    {
      theme1: "rgb(223, 38, 131)",
      theme2: "rgb(218, 81, 179)",
      theme3: "rgba(223, 38, 131, 0.6)",
      theme1Light: "rgb(223, 38, 131)",
      theme2Light: "rgb(218, 81, 179)",
      theme3Light: "rgba(223, 38, 131, 0.6)",
    },
  ];

  const handleClickColor = (index) => {
    if (isNight) {
      document.documentElement.style.setProperty(
        "--theme1",
        array[index].theme1
      );
      document.documentElement.style.setProperty(
        "--theme2",
        array[index].theme2
      );
      document.documentElement.style.setProperty(
        "--theme3",
        array[index].theme3
      );
    } else {
      document.documentElement.style.setProperty(
        "--theme1",
        array[index].theme1Light
      );
      document.documentElement.style.setProperty(
        "--theme2",
        array[index].theme2Light
      );
      document.documentElement.style.setProperty(
        "--theme3",
        array[index].theme3Light
      );
    }

    handleActiveIndex(index);
  };

  const handleActiveIndex = (index) => {
    setIndexActive(index);
  };

  useEffect(() => {
    handleClickColor(0);
  }, []);

  const handleClickSun = () => {
    if (!isNight) {
      document.documentElement.style.setProperty("--background1", "#1e2326");
      document.documentElement.style.setProperty("--background2", "#252a2e");
      document.documentElement.style.setProperty("--background3", "#313437");
      document.documentElement.style.setProperty("--text1", "#d0cccd");
      document.documentElement.style.setProperty("--text2", "#bbbbbb");
      document.documentElement.style.setProperty("--shadow1", "#121212");
      document.documentElement.style.setProperty(
        "--theme1",
        array[indexActive].theme1
      );
      document.documentElement.style.setProperty(
        "--theme2",
        array[indexActive].theme2
      );
      document.documentElement.style.setProperty(
        "--theme3",
        array[indexActive].theme3
      );
      document.documentElement.style.setProperty(
        "--background2-alpha",
        "rgba(37, 42, 46, 0.6)"
      );
    } else {
      document.documentElement.style.setProperty("--background1", "#a5a1a1");
      document.documentElement.style.setProperty("--background2", "#c1bdbd");
      document.documentElement.style.setProperty("--background3", "#dfe3e6");
      document.documentElement.style.setProperty("--text1", "rgb(74, 73, 73)");
      document.documentElement.style.setProperty("--text2", "#222");
      document.documentElement.style.setProperty("--shadow1", "#827979");
      document.documentElement.style.setProperty(
        "--theme1",
        array[indexActive].theme1Light
      );
      document.documentElement.style.setProperty(
        "--theme2",
        array[indexActive].theme2Light
      );
      document.documentElement.style.setProperty(
        "--theme3",
        array[indexActive].theme3Light
      );
      document.documentElement.style.setProperty(
        "--background2-alpha",
        "rgba(193, 189, 189, 0.6)"
      );
    }
    setIsNight(!isNight);

    /*
        --background1: #1e2326;
  --background2: #252a2e;
    */
  };

  const handleClickActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={isActive ? "color-switcher active" : "color-switcher"}>
      <div className="color-button">
        <MdSettings className="icon" onClick={handleClickActive} />
      </div>
      <div className="color-settings">
        <div className="color-light">
          <h3>Tryb nocny</h3>
          <div className={isNight ? "slider-box active" : "slider-box"}>
            <div className="slider"></div>
            <div className="dot" onClick={handleClickSun}>
              <span className="dot-inner"></span>
            </div>
          </div>
        </div>
        <div className="color-elements">
          <h3>Motyw</h3>
          <div className="color-el">
            {array.map((el, index) => {
              return (
                <div className="el-box" key={index}>
                  <div
                    className={index === indexActive ? "el active" : "el"}
                    style={{ backgroundColor: el.theme1 }}
                    onClick={() => handleClickColor(index)}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Color;
