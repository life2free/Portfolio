import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
import "./App.css";
import Test from "./Components/Projects/Test";

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
          {/* <div className="Nav-myname">
            <p className="Nav-myname-info">Shimin Rao</p>
          </div> */}
          <div className="Nav-list">
            <div className="Nav-item highlight">
              <Link to="/">Home</Link>
            </div>
            <div className="Nav-item">
              <Link to="/Portfolio/about">About</Link>
            </div>
            <div className="Nav-item">
              <Link to="/Portfolio/skills">Skills</Link>
            </div>
            <div className="Nav-item">
              <Link to="/Portfolio/projects">Projects</Link>
            </div>
            <div className="Nav-item">
              <Link to="/Portfolio/resume">Resume</Link>
            </div>
            <div className="Nav-item">
              <Link to="/Portfolio/contact">Contact</Link>
            </div>
            {/* <div className="Nav-whitespace"></div> */}
          </div>
        </header>
        <main className="App-main">
          <Routes>
            <Route
              path=""
              exact
              element={<Home setHighLight={this.setHighLight} index="0" />}
            />
            <Route
              path="/"
              exact
              element={<Home setHighLight={this.setHighLight} index="0" />}
            />
            <Route
              path="/Portfolio"
              exact
              element={<Home setHighLight={this.setHighLight} index="0" />}
            />
            <Route
              path="/Portfolio/about"
              element={<About setHighLight={this.setHighLight} index="1" />}
            />
            <Route
              path="/Portfolio/skills"
              element={<Skills setHighLight={this.setHighLight} index="2" />}
            />
            <Route
              path="/Portfolio/projects"
              element={<Projects setHighLight={this.setHighLight} index="3" />}
            />
            <Route
              path="/Portfolio/resume"
              element={<Resume setHighLight={this.setHighLight} index="4" />}
            />
            <Route
              path="/Portfolio/contact"
              element={<Contact setHighLight={this.setHighLight} index="5" />}
            />
            <Route
              path="/Portfolio/test"
              element={<Test setHighLight={this.setHighLight} index="6" />}
            />
          </Routes>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
