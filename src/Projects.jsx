import React from "react";
import "./Projects.css";
import MovieReviewThumb from "./assets/MovieReviewThumb.jpg";
import HackerThumb from "./assets/HackerThumb.jpg";
import Placeholder from "./assets/Placeholder.png";
import ToDoThumb from "./assets/ToDoThumb.jpg";

const Projects = () => {
  return (
    <div id="projects" className="section section-heading">
      Projects
      <div className="section-text">
        <br />
        <div className="project">
          <div className="project-content">
            <a
              href="https://moviereview-team1.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-image-link">
              <img
                src={MovieReviewThumb}
                alt="Movie Review Page"
                className="project-image"
              />
            </a>
            <div className="project-description">
              <h3 className="project-title">
                Social Media Movie Review Page - Group Project
              </h3>
              <p className="project-tech">
                NeonDB, ReactJS, Render, Express, Tailwind, json
              </p>
            </div>
          </div>
        </div>

        <br />
        <div className="project">
          <div className="project-content">
            <a
              href="https://erdinc96.github.io/HackerNews/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-image-link">
              <img
                src={HackerThumb}
                alt="Hacker News Page"
                className="project-image"
              />
            </a>
            <div className="project-description">
              <h3 className="project-title">
                Reworking of the HackerNews Website - Group Project
              </h3>
              <p className="project-tech">
                ReactJS, Tailwind, SemanticUI, json
              </p>
            </div>
          </div>
        </div>

        <br />
        <div className="project">
          <div className="project-content">
            <a
              //   href=""
              target="_blank"
              rel="noopener noreferrer"
              className="project-image-link">
              <img
                src={Placeholder}
                alt="IP Project Page"
                className="project-image"
              />
            </a>
            <div className="project-description">
              <h3 className="project-title">
                Using API's to find user location - Solo Project
              </h3>
              <p className="project-tech">ReactJS, APIs, Tailwind</p>
            </div>
          </div>
        </div>

        <br />
        <div className="project">
          <div className="project-content">
            <a
              href="https://gfebruary.github.io/to-do-list/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-image-link">
              <img
                src={ToDoThumb}
                alt="ToDo List Thumb"
                className="project-image"
              />
            </a>
            <div className="project-description">
              <h3 className="project-title">
                Simple ToDo List - Group Project
              </h3>
              <p className="project-tech">ReactJS,Tailwind, LocalStorage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
