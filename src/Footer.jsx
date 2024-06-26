import React from "react";
import "./Footer.css";
import email from "./assets/email.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Gary February</p>
        <img src={email} alt="email address" srcset="" />
      </div>
    </footer>
  );
};

export default Footer;
