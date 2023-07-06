import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about" id="AboutMe">
      <div className="about-left">
        <div className="about-image-bg"></div>
        <div className="about-image">
          <img
            src="https://res.cloudinary.com/dsfjtwsiz/image/upload/v1688611807/Untitled_iq2fxc.png"
            alt=""
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="title">About Me</h1>
        <h3>electrical engineer who found his passion in coding</h3>
        <p>
          a talented web developer with expertise in the MEARN stack. With a
          passion for creating dynamic and user-friendly web applications, this
          developer brings a wealth of experience to every project. Whether
          working independently or as part of a team, they have a proven track
          record of delivering high-quality work on time and within budget. With
          a keen eye for detail and a commitment to staying up-to-date with the
          latest web development trends and technologies, they are always
          pushing the boundaries of what is possible. If you're looking for a
          skilled and dedicated web developer to help bring your vision to life,
          look no further.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
