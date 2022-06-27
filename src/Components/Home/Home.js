import React, { Component } from "react";
import loadMyScript from "./Star";
import "./Home.css";

class Home extends Component {
  componentDidMount() {
    loadMyScript();
    this.props.setHighLight(this.props.index);
  }
  render() {
    return (
      <div className="home-div">
        <div className="myinfo-div myinfo-bounce">
          <p className="myinfo-intro">
            Hello, My name is <span className="myname">Shimin Rao</span>
          </p>
          <p className="myinfo-title">
            A <span className="job-type">FULL STACK</span> Developer
          </p>
        </div>
        <div className="star-div">
          <canvas id="canvas"></canvas>
        </div>
      </div>
    );
  }
}

export default Home;
