import "./Section.css";
import Animation from "./Animation";

const Section = ({ value, font }) => {
  return (
    <div className="section-wrapper">
      <div className="section-name">
        {font}
        <h2 className="section-h2">{value}</h2>
        <div className="first-line"></div>
        <div className="second-line"></div>
      </div>
      <Animation />
    </div>
  );
};

export default Section;
