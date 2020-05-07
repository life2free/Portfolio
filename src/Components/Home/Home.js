import React, { Component } from "react";
import loadMyScript from "./Star";
import "./Home.css";

class Home extends Component {
  componentDidMount() {
    loadMyScript();
  }
  render() {
    return (
      <div className="home-div">
        <div className="myinfo-div">
          <p className="myinfo-intro">Hello, My name is Shimin Rao</p>
          <p className="myinfo-title">A FULL STACK Developer</p>
        </div>
        <div className="star-div">
          <canvas id="canvas"></canvas>
        </div>
      </div>
    );
  }
}

export default Home;
