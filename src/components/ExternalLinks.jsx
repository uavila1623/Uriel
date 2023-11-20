import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";

class ExternalLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }

  render() {
    return (
      <span className="external-links">
        <a className="github-icon" href={this.props.githubLink}>
          <FontAwesomeIcon
            icon={faGithub}
            style={{
              fontSize: 20,
            }}
          />
        </a>
        {this.props.openLink && (
          <a className="open-icon" href={this.props.openLink}>
            <FontAwesomeIcon
              icon={faExternalLinkSquareAlt}
              style={{
                fontSize: 20,
              }}
            />
          </a>
        )}
      </span>
    );
  }
}

export default ExternalLinks;
