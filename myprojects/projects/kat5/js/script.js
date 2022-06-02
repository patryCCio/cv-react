// My library
import { Animation } from "../AnimationPS/js/main.js";
Animation.scroll("ease", 1000, 10, true, true, true, 100, true);

// Script

const info = [
  {
    name: "HTML 5",
    percent: 75,
  },

  {
    name: "CSS",
    percent: 70,
  },

  {
    name: "JavaScript",
    percent: 70,
  },

  {
    name: "NodeJS",
    percent: 50,
  },

  {
    name: "React",
    percent: 0,
  },

  {
    name: "Angular",
    percent: 20,
  },

  {
    name: "Java",
    percent: 65,
  },
];

const roundPackage = document.querySelectorAll(".round-package");

const buttonTeach = document.querySelector("#teach-button");
const buttonProject = document.querySelector("#project-button");

const projectLanguage = document.querySelector(".project-language");

buttonTeach.addEventListener("click", () => {
  if (buttonTeach.classList.contains("active")) return null;

  projectLanguage.style.visibility = "visible";
  buttonProject.classList.remove("active");
  buttonTeach.classList.add("active");
});

buttonProject.addEventListener("click", () => {
  if (buttonProject.classList.contains("active")) return null;

  projectLanguage.style.visibility = "hidden";
  buttonTeach.classList.remove("active");
  buttonProject.classList.add("active");
});

roundPackage.forEach((element, index) => {
  element.addEventListener("mouseenter", () => {
    element.classList.add("active");
    element.querySelector(".content").innerHTML = info[index].percent + "%";
  });

  element.addEventListener("mouseleave", () => {
    element.classList.remove("active");
  });
});
