// Sidebar.js

import React, { useState } from "react";
import "../style/sideBarNav.css";
export default function sideBarNav() {
  const [displayText, setDisplayText] = useState("");

  const showText = (text) => {
    setDisplayText(text);
  };

  return (
    <div className="side-bar">
      <div id="screen">
        <div id="screen-cont">
          <span>{displayText}</span>
        </div>
        <ul className="radar">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div id="nav-buttons">
        <ul>
          <li>
            <a
              id="abt-button"
              href="#typewriter-container"
              onClick={() => showText("About")}
            >
              About
            </a>
          </li>
          <li>
            <a
              id="mdl-button"
              href="#mod-title"
              onClick={() => showText("Model")}
            >
              Model
            </a>
          </li>
          <li>
            <a
              id="exp-button"
              href="#exp-title"
              onClick={() => showText("Experience")}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              id="prj-button"
              href="#proj-title"
              onClick={() => showText("Projects")}
            >
              Projects
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
