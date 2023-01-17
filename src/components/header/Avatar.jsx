import { AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Avatar = () => {
  return (
    <div className="card-box">
      <div className="circle-avatar">
        <div className="circle-outer">
          <div className="circle-inner">
            <img
              className="circle-image"
              src="https://res.cloudinary.com/dgubzvsvn/image/upload/v1673722450/cv/layout/avatar_ltxevw.jpg"
              alt="avatar"
            ></img>
          </div>
        </div>
      </div>
      <div className="circle-body">
        <div className="card-header">
          <h3>
            Patryk Szczerbiński
            <span />
          </h3>
        </div>
        <div className="card-social-group">
          <a
            href="https://www.facebook.com/profile.php?id=100009011498937"
            target="_Blank"
            rel="noopener noreferrer"
            className="card-social"
          >
            <BsFacebook className="social-icon" />
          </a>
          <a
            href="https://github.com/patryCCio"
            target="_Blank"
            rel="noopener noreferrer"
            className="card-social"
          >
            <AiFillGithub className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/patryccio_art/"
            target="_Blank"
            rel="noopener noreferrer"
            className="card-social"
          >
            <BsInstagram className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
