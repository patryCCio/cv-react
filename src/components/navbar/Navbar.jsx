import { useState } from "react";
import { NavLink } from "react-router-dom";
import Color from "./Color";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClickActive = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div
        className={isActive ? "burger-wrapper active" : "burger-wrapper"}
        onClick={handleClickActive}
      >
        <div className="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className={isActive ? "active" : ""}>
        <ul className="navbar">
          <li>
            <NavLink onClick={() => setIsActive(false)} to="/">
              O mnie
            </NavLink>
            <span />
          </li>
          <li>
            <NavLink onClick={() => setIsActive(false)} to="experience">
              Doświadczenie
            </NavLink>
            <span />
          </li>
          <li>
            <NavLink onClick={() => setIsActive(false)} to="portfolio">
              Portfolio
            </NavLink>
            <span />
          </li>
        </ul>
      </nav>
      <Color />
    </>
  );
};

export default Navbar;
