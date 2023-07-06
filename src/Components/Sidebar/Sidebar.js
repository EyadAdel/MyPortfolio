import React from "react";
import "./Sidebar.css";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";
import { TbPhoneCall } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-scroll";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="image"></div>

      <Link
        activeClass="active"
        to="AboutMe"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        delay={0}
      >
        <div className="about">
          <BsFillPersonVcardFill className="icon" />
          <p>About</p>
        </div>
      </Link>

      <Link
        activeClass="active"
        to="Portfolio"
        spy={true}
        smooth={true}
        offset={50}
        duration={750}
        delay={0}
      >
        <div className="project">
          <AiOutlineProject className="icon" />
          <p>Portfolio</p>
        </div>
      </Link>

      <Link
        activeClass="active"
        to="Contact"
        spy={true}
        smooth={true}
        offset={50}
        duration={1000}
        delay={0}
      >
        <div className="contact">
          <TbPhoneCall className="icon" />
          <p>Contact</p>
        </div>
      </Link>

      <div className="links">
        <ul>
          <li>
            <a href="https://github.com/EyadAdel">
              <AiFillGithub className="git-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/eyad-adel-82508b178/">
              <BsLinkedin className="linked-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/The.Dreamer.Person">
              <FaFacebookSquare className="face-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
