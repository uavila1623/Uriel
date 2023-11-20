import React from "react";
import "../style/MainLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function MainLinks() {
  return (
    <div className="link-cont">
      <a id="git-link" href="https://github.com/uavila1623">
        <FontAwesomeIcon
          icon={faGithub}
          style={{
            fontSize: 30,
          }}
        />
      </a>
      <a id="linkedIn-link" href="https://www.linkedin.com/in/uriel-avila1/">
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{
            fontSize: 30,
          }}
        />
      </a>
    </div>
  );
}
