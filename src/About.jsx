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
              As a seasoned IT Consultant with a robust background in IT project management, data processing, digital solutions, 
              and international supply chain management, I bring over a decade of expertise in optimizing processes and enhancing 
              customer experience across various sectors. 
              </p>
            <p>
              My experience spans high-stakes IT consulting, lifecycle management, 
              purchasing, and data-driven projects, equipping me with a holistic understanding of how 
              technology and data can drive business success.
            </p>
            <p>
            My ability to adapt quickly and my commitment to continuous learning are underscored by my certifications and training. 
                </p>
            <p>
            I hold a B.A. in Digital Media Design with a focus on game and animation, and have completed ITIL Foundation certification, web and app development bootcamps, 
              and specialized training in software and content management systems. My language skills include native English proficiency and strong German capabilities, 
              enabling me to work effectively in diverse and multilingual teams.
          </p>
            <p>
Driven by a passion for innovation, customer success, and operational excellence, 
              I am eager to contribute to forward-thinking projects where my cross-disciplinary expertise and proactive mindset can make a tangible impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
