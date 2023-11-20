import React from "react";
import "../style/Intro.css";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function Intro() {
  return (
    <div className="intro-con">
      <div id="typewriter-container">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hey, Uriel here.")
              .pauseFor(1400)
              .deleteAll()
              .typeString("Welcome to my Portfolio.")
              .start();
          }}
        />
      </div>
      <div id="sub-title">
        I build software and tackle complex technical challenges
      </div>
      <div id="intro-desc">
        I'm a Los Angeles-based software developer and IT support specialist
        with a degree in computer science and a minor in multimedia. I'm
        passionate about web, app, and game development, and I have experience
        in troubleshooting hardware, software, and network issues. My skills
        also extend to graphic design and 3D modeling. Beyond my technical
        knowledge, I have a keen interest in artificial intelligence, machine
        learning, space exploration, and gaming.
      </div>
      <div id="email-cont">
        <a
          href="mailto:uavila1623@gmail.com"
          id="intro-contact"
          aria-label="Email me"
        >
          Say hi
          <FontAwesomeIcon icon={faEnvelope} style={{ marginLeft: "8px" }} />
        </a>
      </div>
    </div>
  );
}
