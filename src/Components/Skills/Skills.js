import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-warpper">
        <div className="skills-left">
          <ul>
            <li>My Focus</li>
            <li>UI/UX designer's</li>
            <li>Responsive design</li>
            <li>WEB design</li>
            <li>Mobile App design</li>
          </ul>
        </div>
        <div className="skills-right">
          <div className="skill-item">
            <img
              src={`Media/html5.d0addc05618b04fad8a920667bd781d7.svg`}
              alt=""
            />
            <span>HTML 5</span>
          </div>

          <div className="skill-item">
            <img
              src={`Media/css3.7b05526845d7a6672ee3f536a71c20f8.svg`}
              alt=""
            />
            <span>CSS 3</span>
          </div>

          <div className="skill-item">
            <img
              src={`Media/sass.8aa78a8393470431c8036541f0708bd7.svg`}
              alt=""
            />
            <span>SASS</span>
          </div>

          <div className="skill-item">
            <img
              src={`Media/javascript.0d91e52c206882a56a42eac8507d7b44 .svg`}
              alt=""
            />
            <span>JavaScript</span>
          </div>

          <div className="skill-item">
            <img src={`Media/tailwind.bf288b24c40bf937884e.png`} alt="" />
            <span>Tailwind</span>
          </div>

          <div className="skill-item">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <span>Styled Components</span>
          </div>

          <div className="skill-item">
            <img
              src={`Media/bootstrap5.98585727bcfe0b1555649ec9bbab236c.svg`}
              alt=""
            />
            <span>BootStrap</span>
          </div>

          <div className="skill-item">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <span>JQuery</span>
          </div>

          <div className="skill-item">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <span>Materials ui</span>
          </div>

          <div className="skill-item">
            <img
              src={`Media/react.1c1edc1f970a2944f689dcff8329bede.svg`}
              alt=""
            />
            <span>React</span>
          </div>

          <div className="skill-item">
            <img
              src={`Media/redux.71eb13e2fdd1de624e9a856125906e3b.svg`}
              alt=""
            />
            <span>Redux</span>
          </div>

          <div className="skill-item">
            <img src={`Media/angular-icon-logo.png`} alt="" />
            <span>Angular</span>
          </div>

          <div className="skill-item">
            <img src={`Media/node.png`} alt="" />
            <span>Node JS</span>
          </div>

          <div className="skill-item">
            <img src={`Media/mongodb-ar21.png`} alt="" />
            <span>Mongo DB</span>
          </div>

          <div className="skill-item">
            <img
              src={`Media/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzIiIGFyaWEtaGlkZGVuPSJ0cnVlIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgd2lkdGg9IjMyIiBkYXRhLXZpZXctY29tcG9uZW50PSJ0cnVlIiBjbGFz.svg`}
              alt=""
            />
            <span>Github</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
