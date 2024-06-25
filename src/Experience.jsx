import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div>
      <div id="experience" className="section section-heading">
        Experience
        <div className="section-text">
          <div className="resume-section"></div>
          <div className="experience-container">
            <div className="experience-item left-column">
              <span className="company-position">IT Consultant</span>

              <span className="company-name">
                Datamatics Global Services GmbH, Darmstadt
              </span>

              <span className="date">January 2019 - July 2023</span>
              <br />
            </div>

            <div className="experience-item right-column">
              <span className="company-position">Purchasing Manager</span>

              <span className="company-name">PrimoPet GmbH, Messel</span>

              <span className="date">July 2015 - December 2018</span>
              <br />
            </div>

            <div className="experience-item left-column">
              <span className="company-position">Test Driver</span>

              <span className="company-name">
                KJ Tech Services GmbH, Griesheim
              </span>

              <span className="date">April 2014 - July 2015</span>
              <br />
            </div>

            <div className="experience-item right-column">
              <span className="company-position">Data Manager Specialist</span>

              <span className="company-name">
                Datamatics Global Services GmbH, Griesheim
              </span>

              <span className="date">February 2010 - July 2012</span>
              <br />
            </div>

            <div className="experience-item left-column">
              <span className="company-position">Business English Trainer</span>

              <span className="company-name">Self-Employed, Germany</span>

              <span className="date">July 2007 - April 2010</span>
              <br />
            </div>

            <div className="experience-item right-column">
              <span className="company-position">Actuarial Assistant</span>

              <span className="company-name">
                Old Mutual Actuaries & Consultants, Cape Town
              </span>

              <span className="date">July 2006 - October 2008</span>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
