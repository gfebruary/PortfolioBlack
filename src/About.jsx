import React from "react";
import myPicture from "./assets/February_Gary.jpg";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="section-text about-text">
        <div className="about-content">
          <img className="head-shot" src={myPicture} />
          <div className="about-description">
            <p>
              Results-oriented IT professional with 15+ years of experience
              across diverse industries including IT consulting.
            </p>
            <p>
              Leveraging a degree in Digital Media Design, I bring a unique
              perspective to technical challenges.
            </p>
            <p>
              Proven ability to manage and execute complex projects, effectively
              communicate with stakeholders, and deliver results on time and
              within budget.
            </p>
            <p>
              Currently expanding my skill set to transition into software
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
