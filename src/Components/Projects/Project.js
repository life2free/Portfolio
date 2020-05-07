import React, { Component } from "react";
import "./Project.css";
import GitHubImg from "../../Img/github.png";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: this.props.project,
    };
  }
  visitLinkHandle = (e) => {
    e.preventDefault();
    window.open(this.state.project.deployUrl);
  };

  githubLinkHandle = (e) => {
    e.preventDefault();
    window.open(this.state.project.githubUrl);
  };

  render() {
    let { name, imgUrl, description, techs } = {
      ...this.state.project,
    };
    let classList = "project-div flip-card";
    if (this.props.wider) {
      classList += ` wider`;
    } else {
      classList += ` normal`;
    }

    return (
      <div className={classList}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="project-img">
              <img src={imgUrl} alt={name} />
            </div>
            <div className="project-title">
              <p>{name}</p>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="project-info">
              <h1>{name}</h1>
              <p>{description}</p>
              <p>{techs}</p>
            </div>

            <div className="project-relatedlink">
              <button className="visit-link" onClick={this.visitLinkHandle}>
                visit
              </button>
              <div className="github">
                <img
                  src={GitHubImg}
                  alt={name}
                  onClick={this.githubLinkHandle}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
