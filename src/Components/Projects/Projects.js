import React, { Component } from "react";
import "./Projects.css";
import ProjectList from "./ProjectList";

class Projects extends Component {
  componentDidMount() {
    this.props.setHighLight(this.props.index);
  }
  viewMoreHandle = (e) => {
    e.preventDefault();
    window.open("https://github.com/life2free");
  };

  render() {
    return (
      <div className="projects-div">
        {/* <div className="projects-title">My Projects</div> */}
        <div className="projects-list">
          <ProjectList />
        </div>
        {/* <div style={{ clear: "left" }}></div> */}
        <div className="projects-view-more">
          <button
            className="projects-view-more-btn"
            onClick={this.viewMoreHandle}
          >
            view more on my github
          </button>
        </div>
      </div>
    );
  }
}

export default Projects;
