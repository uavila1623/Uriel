import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";
import "../style/Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderClosed } from "@fortawesome/free-regular-svg-icons";

export default function Projects() {
  const tech_stack = ["Javascript", "Python", "React.js", "Java", "HTML & CSS"];
  const spotlightProjects = {
    "Lab Link": {
      title: "Lab Link",
      desc: "A web app marketplace used to find open source research projects.",
      techStack: "Javascript, HTML, CSS",
      link: "",
      open: "",
      image: "/assets/SpaceApp.jpeg",
    },
    Niburu: {
      title: "Niburu",
      desc: "A machine learning web app that makes weather predictions based on past weather data.",
      techStack: "Flask, Javascript, HTML, Jupyter Notebook",
      link: "",
      open: "",
      image: "/assets/Niburu.jpg",
    },
  };
  const projects = {
    "Lab Link": {
      desc: "A marketplace web app integrated with a nasa 3D model and NASA research data. Created to help researchers connect, learn about organizations, and share open source projetcs.",
      techStack: "Javascript, HTML, CSS",
      link: "https://github.com/lab-link/lab-link-web-app",
      open: "",
    },
    Niburu: {
      desc: "Machine learning web app capable of making predictions using libraries from scikit-learn. It can generate different types of charts as well and has the ability to search through the data.",
      techStack: "Python, Javascript, , HTML, CSS, Jupyter Notebook",
      link: "https://github.com/uavila1623/Niburu",
      open: "",
    },
    Portfolio: {
      desc: "A website dedicated to showcasing my projects and my developer skills. Integrated with an interactive 3D model that I built using Blender.",
      techStack: "React, HTML, CSS, React-Three-Fiber, Blender",
      link: "https://github.com/uavila1623/Uriel",
      open: "",
    },
  };

  const tech_item = tech_stack.map((stack) => <li>{stack}</li>);
  return (
    <div className="proj-cont">
      <div id="proj-title">➤Projects</div>
      <div className="tech-div">
        <div id="stack-title">Tech Stack</div>
        <div className="tech-list">
          <ul className="tech-s">
            {tech_stack.map(function (tech_item, i) {
              return <li>{tech_item}</li>;
            })}
          </ul>
        </div>
      </div>
      <div id="projects">
        <div id="carousel-div">
          <Carousel>
            {Object.keys(spotlightProjects).map((key, i) => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={spotlightProjects[key]["image"]}
                  alt={key}
                />
                <div className="caption-bg">
                  <Carousel.Caption>
                    <h3>{spotlightProjects[key]["title"]}</h3>
                    <p>
                      {spotlightProjects[key]["desc"]}
                      <p className="techStack">
                        {spotlightProjects[key]["techStack"]}
                      </p>
                    </p>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div id="projects-con">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">
                    <FontAwesomeIcon
                      icon={faFolderClosed}
                      style={{
                        fontSize: 20,
                      }}
                    />
                  </div>
                  <ExternalLinks
                    githubLink={projects[key]["link"]}
                    openLink={projects[key]["open"]}
                  ></ExternalLinks>
                </div>
                <div id="card-title">{key}</div>
                <div className="card-desc">{projects[key]["desc"]}</div>
                <div className="card-tech">{projects[key]["techStack"]}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
