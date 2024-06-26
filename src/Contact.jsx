import React from "react";
import "./Contact.css";
import linkedinIcon from "./assets/LinkedIn_icon.svg.png";
import githubIcon from "./assets/github-icon-2.svg";

const Contact = () => {
  return (
    <div id="contact" className="section section-heading">
      Contact
      <div className="section-text">
        <div className="contact-wrapper">
          <div className="contact-item">
            <img className="contact-icon" src={githubIcon} alt="GitHub Icon" />
            <span className="contact-text">
              See more of what I have been working on
            </span>
          </div>

          <div className="contact-item">
            <img
              className="contact-icon"
              src={linkedinIcon}
              alt="LinkedIn Icon"
            />
            <span className="contact-text">
              Feel free to reach out to me if you are looking for a driven and
              knowledgeable IT professional to join your team or if you simply
              want to exchange ideas
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
