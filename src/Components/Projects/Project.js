import React, { Component } from "react";
import "./Project.css";
// import "./style.css";
import GitHubImg from "../../Statics/Img/github.png";
// import loadSwiperImageScript from "./Swiper";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: this.props.project,
    };
  }

  componentDidMount() {
    // loadSwiperImageScript();
  }

  // showProjectDetail = (e) => {
  //   e.preventDefault();
  //   $(".flip-card-back").slideToggle("slow");
  // };

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
    let classList = "project-div flip-card project-bounce";
    if (this.props.width) {
      if (this.props.width === "wider") {
        classList += ` wider`;
      } else if (this.props.width === "widest") {
        classList += ` widest`;
      }
    } else {
      classList += ` normal`;
    }

    let style = {
      backgroundImage: `url(${imgUrl})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      heigth: "100%",
    };
    return (
      <div className={classList}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div
              className="project-img"
              // style={{ backgroundImage: `url(${imgUrl})` }}
              // style={style}
            >
              {/* <img src={imgUrl} alt={name} className="img1 display_block" /> */}
              <img src={imgUrl} alt={name} />
              {/* <img
                src={ComponentLb}
                alt={name}
                className="img2 display_none"
                // style={{ display: "none" }}
                // proIdx={proIdx}
              /> */}

              {/* <ul className="swiper-list">
                <li className="swiper-slide swiper-slide1">
                  <a href="javascript:;">
                    <img src={imgUrl} alt=""></img>
                  </a>
                </li>
                <li className="swiper-slide swiper-slide2">
                  <a href="javascript:;">
                    <img src={ComponentLb} alt=""></img>
                  </a>
                </li>
                <li className="swiper-slide swiper-slide3">
                  <a href="javascript:;">
                    <img src={NewsAssitant} alt=""></img>
                  </a>
                </li>
              </ul> */}
            </div>
            <div className="project-title">
              <p>{name}</p>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="project-info">
              <p className="project-info-name">{name}</p>
              <p className="project-info-description">{description}</p>
              <p className="project-info-techs">{techs}</p>
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
