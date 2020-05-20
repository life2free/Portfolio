import React, { Component } from "react";
import "./Contact.css";
import GitHubImg from "../../Img/github.png";
import LinkedinImg from "../../Img/linkedin.png";
import EmailImg from "../../Img/email.png";

class Contact extends Component {
  componentDidMount() {
    this.props.setHighLight(this.props.index);
  }

  gotoLinkHandle = (e) => {
    e.preventDefault();
    let url = e.target.getAttribute("url");
    if (url !== undefined && url.trim() !== "") {
      window.open(url.trim());
    }
  };
  render() {
    return (
      <div className="contact-div">
        <p className="contact-title">Keep in touch!</p>
        <div className="contact-info">
          <p>
            If you have any questions or want to talk with me, please feel free
            to contact me.
          </p>
          <p>I'd love to hear from you. Let's get in contact!</p>
        </div>
        <div className="contact-link">
          <div className="contact-link-img contact-link-img-linkedin">
            <img
              src={LinkedinImg}
              alt="Linkedin"
              onClick={this.gotoLinkHandle}
              url="https://www.linkedin.com/in/shiminrao"
            ></img>
          </div>
          <div className="contact-link-img contact-link-img-github">
            <img
              src={GitHubImg}
              alt="Github"
              onClick={this.gotoLinkHandle}
              url="https://github.com/life2free"
            ></img>
          </div>
          <div className="contact-link-img-email">
            <a href="mailto:thunderous_0518@hotmail.com">
              <img src={EmailImg} alt="Email"></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
