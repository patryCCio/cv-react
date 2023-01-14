import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Avatar from "./Avatar";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  const [url, setUrl] = useState("");
  const [alt, setAlt] = useState("");

  useEffect(() => {

    if (location.pathname === "/") {
      setUrl(
        "https://res.cloudinary.com/dgubzvsvn/image/upload/v1673721069/cv/layout/code-1076536_1280_kfwx00.jpg"
      );
      setAlt("")
    } else if (location.pathname === "/experience") {
      setUrl(
        "https://res.cloudinary.com/dgubzvsvn/image/upload/v1673721069/cv/layout/mountains-190055_1280_j78ye1.jpg"
      );
      setAlt("")
    } else {
      setUrl(
        "https://res.cloudinary.com/dgubzvsvn/image/upload/v1673721069/cv/layout/nature-3033979_1280_munja2.jpg"
      );
      setAlt("")
    }
  }, [location.pathname]);

  return (
    <header>
      <div className="img">
        <span />
        <img src={url} alt={alt} />
      </div>

      <div className="nav-name">
        <span>P</span>
        <span>a</span>
        <span>t</span>
        <span>r</span>
        <span>y</span>
        <span>k</span>
      </div>

      <Avatar />
    </header>
  );
};

export default Header;
