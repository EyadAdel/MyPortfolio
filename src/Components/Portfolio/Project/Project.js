import "./Project.css";

const Project = ({ img, link }) => {
  return (
    <div className="project-card">
      <div className="project-browser">
        <div className="project-circle"></div>
        <div className="project-circle"></div>
        <div className="project-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={`Media/${img}`} alt="" className="project-image" />
      </a>
    </div>
  );
};

export default Project;
