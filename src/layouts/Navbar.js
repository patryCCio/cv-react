import React, { useEffect, useState } from "react";
import { PageList } from "../pages/PageList";
import { NavLink } from "react-router-dom";
import "../styles/layouts/Navbar.css";

const Navbar = () => {
  let actualStatus = '';
  let isChange = true;

  function checkActualStatus() {
    if (window.innerWidth > 1024) {
      actualStatus = 'window';
      isChange = true;
    } else {
      actualStatus = 'mobile'
      isChange = true;
    }
  }

  function resetClass(navbar, burger) {
    navbar.classList.remove('active');
    burger.classList.remove('active');
  }

  function addClass(navbar, burger) {

    if (actualStatus === "window") {
      navbar.dataset.status = "window";
      burger.dataset.status = "window";
    } else {
      navbar.dataset.status = "mobile";
      burger.dataset.status = "mobile";
    }
  }

  function doFunctions() {
    const burger = document.querySelector(".burger-wrapper");
    const navbar = document.querySelector(".navbar-container");
    checkActualStatus();
    if (isChange === true) {
      resetClass(navbar, burger);
      addClass(navbar, burger);
      isChange = false;
    }
  }

  useEffect(() => {
    const burger = document.querySelector(".burger-wrapper");
    const navbar = document.querySelector(".navbar-container");
    const liEl = document.querySelectorAll(".nav-ul .nav-a");

    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      navbar.classList.toggle("active");
    });

    liEl.forEach((li) => {
      li.addEventListener("click", () => {
        if (burger.classList.contains("active"))
          burger.classList.remove("active");
        if (navbar.classList.contains("active"))
          navbar.classList.remove("active");
      });
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
