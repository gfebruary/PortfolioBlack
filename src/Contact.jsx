import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="section section-heading">
      Contact
      <p className="section-text"></p>
      <div className="contact-wrapper">
        <img
          className="contact-icon"
          src="../src/assets/LinkedIn_icon.svg.png"
          alt=""
          srcset=""
        />
        <img
          className="contact-icon"
          src="../src/assets/github-icon-2.svg"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export default Contact;
