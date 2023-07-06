import { Link } from "react-router-dom";
import "./Landing.css";

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
          <a href="https://api.cloudinary.com/v1_1/dsfjtwsiz/image/download?api_key=397683248416134&attachment=true&audit_context=eyJhY3Rvcl90eXBlIjoidXNlciIsImFjdG9yX2lkIjoiOGVlZTg2NWFhZDkyMzY5MzY3ZjhkODVmMDBmNDA3NDciLCJ1c2VyX2V4dGVybmFsX2lkIjoiMzg0MWRlMGNhNTFlYTM1M2JjNzY0OGQxOTU0NTZiIiwidXNlcl9jdXN0b21faWQiOiJsZW8uYWRlbDE1MEBnbWFpbC5jb20iLCJjb21wb25lbnQiOiJjb25zb2xlIn0%3D&public_id=Eyad_Adel-1_yynzds&signature=088c38d7e3d95e0626975d59f148ccd31f76de14&source=ml&target_filename=Eyad_Adel-1_yynzds.pdf&timestamp=1688612624&type=upload">
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
