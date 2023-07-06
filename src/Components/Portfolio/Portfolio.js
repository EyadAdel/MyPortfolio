import "./Portfolio.css";
import Project from "./Project/Project";
import { projects } from "../../data";

const Portfolio = () => {
  return (
    <div className="portfolio" id="Portfolio">
      <div className="portfolio-text">
        <h1 className="portfolio-title">Create & inspire. It's Eyad</h1>
        <p className="portfolio-description">
          Eyad is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="project-list">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
