import { Link } from "react-scroll";
import "./Contact.css";
import { FaAngleUp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Let's discuss your project</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img
                src="https://icon-library.com/images/tel-icon/tel-icon-18.jpg"
                alt=""
              />
              +201028252809
            </div>
            <div className="contact-info-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDhexSODY5grfYo83hwexlb8TpCqxCEFHSWrG7ukvvORfMh3vPoh6D9sM8AO8piA13VE&usqp=CAU"
                alt=""
              />
              eyad.adel150@gmail.com
            </div>
            <div className="contact-info-item">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              Misr Aswan Street , Qena Egypt
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-description">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
      <Link
        activeClass="active"
        to="Landing"
        spy={true}
        smooth={true}
        offset={50}
        duration={1000}
        delay={0}
      >
        <div className="download">
          <button className="button">
            <FaAngleUp />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Contact;
