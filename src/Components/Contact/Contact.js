import React, { Component } from "react";
import "./Contact.css";
import GitHubImg from "../../Statics/Img/github.png";
import LinkedinImg from "../../Statics/Img/linkedin.png";
import EmailImg from "../../Statics/Img/email.png";
import Config from "../../Config/Config";
import EmailSend from "./EmailSend";

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
        <div className="contact-info-div">
          <div className="contact-title-div">
            test
            <p className="contact-title">Keep in touch!</p>
          </div>
          <div className="contact-info">
            {/* <p className="contact-info-detail">
              If you have any questions or want to talk with me, please feel
              free to contact me.
            </p> */}
            <p className="contact-info-detail">
              I'd love to hear from you. Let's get in contact!
            </p>
          </div>
        </div>
        <div className="contact-emailsend">
          <EmailSend />
        </div>
        <div className="contact-link">
          <div className="contact-link-img contact-link-img-linkedin">
            <img
              src={LinkedinImg}
              alt="Linkedin"
              onClick={this.gotoLinkHandle}
              url={Config.LinkedIn}
            ></img>
          </div>
          <div className="contact-link-img contact-link-img-github">
            <img
              src={GitHubImg}
              alt="Github"
              onClick={this.gotoLinkHandle}
              url={Config.GitHub}
            ></img>
          </div>
          {/* <div className="contact-link-img  contact-link-img-email">
            <a href="mailto:thunderous_0518@hotmail.com">
              <img src={EmailImg} alt="Email"></img>
            </a>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Contact;
