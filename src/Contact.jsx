import React from "react";
import "./Contact.css";
import linkedinIcon from "./assets/LinkedIn_icon.svg.png";
import githubIcon from "./assets/github-icon-2.svg";

const Contact = () => {
  return (
    <div id="contact" className="section section-heading">
      Contact
      <p className="section-text"></p>
      <div className="contact-wrapper">
        <img className="contact-icon" src={githubIcon} alt="" srcset="" />{" "}
        <span> See more of what I have been working on </span>
        <img className="contact-icon" src={linkedinIcon} alt="" srcset="" />
        <span>
          {" "}
          Feel free to reach out to me if you are looking for a driven and
          knowledgeable IT professional to join your team or if you simply want
          to exchange ideas{" "}
        </span>
      </div>
    </div>
  );
};

export default Contact;
