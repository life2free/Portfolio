import React from "react";
import "./About.css";
import Avatar from "../../Img/avatar.png";

function About() {
  return (
    <div className="about-div">
      <h2 className="about-title">ABOUT ME</h2>
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

export default About;
