import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  setHighLight = (index) => {
    if (index !== undefined) {
      index = parseInt(index);
      this.setState({ index: index });
    }
  };

  render() {
    let navList = document.querySelector(".Nav-list");
    if (navList !== undefined && navList !== null) {
      let navItemList = navList.getElementsByTagName("div");
      if (navItemList !== undefined && navItemList.length > 0) {
        let index = this.state.index;
        for (let i = 0; i < navItemList.length; i++) {
          let item = navItemList[i];
          if (index === i) {
            item.className = "Nav-item highlight";
          } else {
            item.className = "Nav-item";
          }
        }
      }
    }
    return (
      <div className="App">
        <header className="App-header">
          <div className="Nav-myname">
            <p className="Nav-myname-info">Shimin Rao</p>
          </div>
          <div className="Nav-list">
            <div className="Nav-item highlight">
              <Link to="/">Home</Link>
            </div>
            <div className="Nav-item">
              <Link to="/about">About</Link>
            </div>
            <div className="Nav-item">
              <Link to="/skills">Skills</Link>
            </div>
            <div className="Nav-item">
              <Link to="/projects">Projects</Link>
            </div>
            <div className="Nav-item">
              <Link to="/resume">Resume</Link>
            </div>
            <div className="Nav-item">
              <Link to="/contact">Contact</Link>
            </div>
            {/* <div className="Nav-whitespace"></div> */}
          </div>
        </header>
        <main className="App-main">
          <Route
            path="/"
            exact
            render={() => {
              return <Home setHighLight={this.setHighLight} index="0" />;
            }}
          />
          <Route
            path="/about"
            render={() => {
              return <About setHighLight={this.setHighLight} index="1" />;
            }}
          />
          <Route
            path="/skills"
            render={() => {
              return <Skills setHighLight={this.setHighLight} index="2" />;
            }}
          />
          <Route
            path="/projects"
            render={() => {
              return <Projects setHighLight={this.setHighLight} index="3" />;
            }}
          />
          <Route
            path="/resume"
            render={() => {
              return <Resume setHighLight={this.setHighLight} index="4" />;
            }}
          />
          <Route
            path="/contact"
            render={() => {
              return <Contact setHighLight={this.setHighLight} index="5" />;
            }}
          />
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
