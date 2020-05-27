import React, { Component } from "react";
import "./About.css";
import Avatar from "../../Statics/Img/avatar.png";

// function About() {
class About extends Component {
  componentDidMount() {
    this.props.setHighLight(this.props.index);
  }
  render() {
    return (
      <div className="about-div">
        <p className="about-title">ABOUT ME</p>
        <div className="about-content">
          <div className="about-content-img">
            <img src={Avatar} alt="Shimin" />
          </div>
          <div className="about-content-detail">
            <p className="about-content-jobtitle">
              I'm a full-stack software engineer
            </p>
            <p className="about-content-detail-info">
              An experienced developer with over 7 years of software development
              testing experience and strong database and troubleshooting skills.
              As a task-oriented programmer, I am passionate about uncovering,
              analyzing, and finding solutions for difficult problems. I
              consistently take on new challenges and learn technologies that
              allow me to work alongside high performing teams.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
