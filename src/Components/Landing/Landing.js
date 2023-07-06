import { Link } from "react-router-dom";
import "./Landing.css";
import reusme from "../../reusme.pdf";

const Landing = () => {
  return (
    <div className="landing" id="Landing">
      <div className="landing-left">
        <div className="landing-left-wrapper">
          <h2 className="landing-intro">
            <span className="span-name">
              <span className="span-hello">Hello</span> , My na
            </span>
            me is
          </h2>
          <h1 className="landing-name">Eyad Adel</h1>
          <div className="landing-title">
            <div className="landing-title-warpper">
              <div className="landing-title-item">Web Developer</div>
              <div className="landing-title-item">JS Developer</div>
              <div className="landing-title-item">Full Stack Developer</div>
              <div className="landing-title-item">MEARN Developer</div>
              <div className="landing-title-item">Node JS Developer</div>
            </div>
          </div>
          <p className="landing-description">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern website, web services and
            online stores.
          </p>
          <a href={reusme} download="Reusme">
            <button className="cv-btn">Download CV</button>
          </a>
        </div>
      </div>
      <div className="landing-right">
        <div className="landing-bg"></div>
        <img className="landing-right-img" src={`Media/giphy.gif`} alt="" />
      </div>
    </div>
  );
};

export default Landing;
