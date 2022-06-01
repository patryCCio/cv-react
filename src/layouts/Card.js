import React from "react";
import "../styles/layouts/Card.css";

const Card = () => {
  return (
    <div className="card-box">
      <div className="card-wrapper">
        <div className="circle-wrapper">
          <div className="circle-outer">
            <div className="circle-inner">
              <div className="circle-image"></div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="card-header">
            <h3>
              Patryk Szczerbiński
              <span></span>
            </h3>
          </div>
          <div className="card-social-group">
            <a href="https://www.facebook.com/profile.php?id=100009011498937" target="_Blank" rel="noopener noreferrer" className="card-social">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://github.com/patryCCio" target="_Blank"  rel="noopener noreferrer" className="card-social">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.instagram.com/patryccio/" target="_Blank"  rel="noopener noreferrer" className="card-social">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
