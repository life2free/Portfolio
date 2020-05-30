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
            {/* <p className="about-content-jobtitle">
              I'm a full-stack software engineer
            </p>
            <p className="about-content-detail-info">
              An experienced developer with over 7 years of software development
              testing experience and strong database and troubleshooting skills.
              As a task-oriented programmer, I am passionate about uncovering,
              analyzing, and finding solutions for difficult problems. I
              consistently take on new challenges and learn technologies that
              allow me to work alongside high performing teams.
            </p> */}
            <ul>
              {/* <li>Came form China</li> */}
              <li>Majored in Computer Science and Technology</li>
              <li>Graduated from Huaqiao University in 2006</li>
              <li>
                Worked as Software Engineer over 7 years, developed web
                applications for financial customers with java
              </li>
              {/* <li>Came to US in August 2013</li> */}
              <li>
                Before joined General Assembly, worked part-time as a software
                testing engineer
              </li>
              <li>
                Chose General Assembly to sharpen my skills, meet new people and
                keep myself up to date with the latest technologies
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
