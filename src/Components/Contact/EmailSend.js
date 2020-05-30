import React, { Component } from "react";
import Reaptcha from "reaptcha";
import "./EmailSend.css";
import Config from "../../Config/Config";

class EmailSend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      verified: false,
      enableSend: true,
      captchaReady: false,
      sendStatus: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.checkBeforeSendEmail()) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          subject: this.state.subject,
          message: this.state.message,
        }),
      };
      fetch(`${Config.FormspreeApi}`, requestOptions)
        .then((response) => {
          if (response.status === 200) {
            console.log("success");
            this.setState({
              sendStatus: "SUCCESS",
              enableSend: false,
            });
          } else {
            console.log("Send failure. ");
            this.setState({
              sendStatus: "FAILURE",
              enableSend: false,
            });
          }
        })
        .catch((error) => {
          console.log("Send failure. ", error);
          this.setState({ sendStatus: "FAILURE", enableSend: false });
        });
    }
  };

  resetStates = () => {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
      verified: false,
    });
  };

  checkBeforeSendEmail = () => {
    if (this.state.name.trim() === "") {
      alert("Please input your name!");
      this.setState({ name: "" });
      return false;
    }
    if (this.state.email.trim() === "") {
      alert("Please input your email!");
      this.setState({ email: "" });
      return false;
    }
    if (this.state.subject.trim() === "") {
      alert("Please input your subject!");
      this.setState({ subject: "" });
      return false;
    }
    if (this.state.message.trim() === "") {
      alert("Please input your message!");
      this.setState({ message: "" });
      return false;
    }

    return true;
  };

  changeHandle = (e) => {
    let targetId = e.target.id;
    let targetValue = e.target.value;
    switch (targetId) {
      case "name-input": {
        this.setState({ name: targetValue });
        break;
      }
      case "email-input": {
        this.setState({ email: targetValue });
        break;
      }
      case "subject-input": {
        this.setState({ subject: targetValue });
        break;
      }
      case "message-input": {
        this.setState({ message: targetValue });
        break;
      }
      default:
    }
  };

  onLoad = () => {
    this.setState({
      captchaReady: true,
    });
  };

  // specifying verify callback function
  verifyCallback = (response) => {
    document.querySelector(".reaptcha-div").classList.toggle("div-invisible");
    document
      .querySelector(".emailsend-form-div")
      .classList.toggle("div-invisible");
  };

  trySendAgainHandle = (e) => {
    e.preventDefault();
    window.location.reload(false);
  };

  render() {
    const { sendStatus } = this.state;

    if (sendStatus !== "") {
      let emailSendResultMessageEle = document.getElementById(
        "emailsend-resultmessage"
      );
      if (sendStatus === "SUCCESS") {
        emailSendResultMessageEle.innerText =
          "Thanks! I will reply to you ASAP.";
        emailSendResultMessageEle.className = "emailsend-success";
      } else if (sendStatus === "FAILURE") {
        emailSendResultMessageEle.innerText =
          "Ooops! Send failed. You can try again.";
        emailSendResultMessageEle.className = "emailsend-failure";
      }

      document
        .querySelector(".emailsend-trymore")
        .classList.toggle("div-invisible");
    }

    return (
      <div className="emailsend-div">
        <div className="reaptcha-div ">
          <Reaptcha
            ref={(e) => (this.recaptcha = e)}
            sitekey={Config.RecaptchaSiteKey}
            onLoad={this.onLoad}
            onVerify={this.verifyCallback}
            // explicit
          />
        </div>
        <div className="emailsend-form-div div-invisible">
          <form className="emailsend-form" onSubmit={this.handleSubmit}>
            <div className="name-container email-property-container">
              <input
                type="text"
                id="name-input"
                className="email-property-input"
                required="required"
                placeholder="Name"
                value={this.state.name}
                onChange={this.changeHandle}
              />
            </div>
            <div className="email-property-container">
              <input
                type="email"
                id="email-input"
                className="email-property-input"
                required="required"
                placeholder="Email"
                value={this.state.email}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$$"
                // onChange={this.changeHandle}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  this.setState({ email: e.target.value })
                }
              />
            </div>
            <div className="email-property-container">
              <input
                type="text"
                id="subject-input"
                className="email-property-input"
                required="required"
                placeholder="Subject"
                value={this.state.subject}
                onChange={this.changeHandle}
              />
            </div>
            <div className="email-property-container">
              <textarea
                type="text"
                id="message-input"
                className="email-property-input"
                required="required"
                rows="7"
                cols="70"
                placeholder="Message"
                value={this.state.message}
                onChange={this.changeHandle}
              />
            </div>
            <div className="eemailsend-submit-div">
              <input
                className="emailsend-submit"
                value="Send"
                type="submit"
                disabled={!this.state.enableSend}
              />
            </div>
          </form>
        </div>
        <div className="emailsend-resultmessage-div">
          <p id="emailsend-resultmessage"></p>
          <p className="emailsend-trymore div-invisible">
            {" "}
            Click{" "}
            <a
              className="emailsend-trymore-link"
              href="#"
              onClick={this.trySendAgainHandle}
            >
              here
            </a>{" "}
            to send again!
          </p>
        </div>
      </div>
    );
  }
}
export default EmailSend;
