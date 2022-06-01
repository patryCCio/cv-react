import React, { useEffect } from "react";
import { PageList } from "../pages/PageList";
import { NavLink } from "react-router-dom";
import "../styles/layouts/Navbar.css";

const Navbar = () => {
  let size = 0;
  let actualStatus = "";

  function checkActualStatus() {
    if (size > 1024) {
      actualStatus = "window";
    } else {
      actualStatus = "mobile";
    }
  }

  function checkSize() {
    size = window.innerWidth;
  }

  function resetClass() {
    const navbar = document.querySelector(".nav-ul");
    const burger = document.querySelector(".burger-wrapper");

    if (navbar.classList.contains("active")) navbar.classList.remove("active");
    if (navbar.classList.contains("window")) navbar.classList.remove("window");
    if (burger.classList.contains("active")) burger.classList.remove("active");
  }

  function addClass() {
    const navbar = document.querySelector(".nav-ul");
    if (actualStatus === "window") {
      navbar.dataset.state = "window";
    } else navbar.dataset.state = "mobile";
  }

  function doFunctions() {
    checkSize();
    checkActualStatus();
    resetClass();
    addClass();
  }

  useEffect(() => {
    const burger = document.querySelector(".burger-wrapper");
    const navbar = document.querySelector(".navbar");

    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      navbar.classList.toggle("active");
    });

    window.addEventListener("resize", doFunctions, false);
    doFunctions();
  });

  const pages = PageList.map((page) => (
    <NavLink key={page.name} className="nav-a" to={page.path}>
      {page.name}
      <span></span>
    </NavLink>
  ));

  return (
    <>
      <div className="burger-wrapper">
        <div className="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className="navbar-container">
        <h1 className="nav-h1">
          <span>P</span>
          <span>a</span>
          <span>t</span>
          <span>r</span>
          <span>y</span>
          <span>k</span>
        </h1>
        <nav className="navbar">
          <ul className="nav-ul">{pages}</ul>
        </nav>
      </nav>
    </>
  );
};

export default Navbar;
