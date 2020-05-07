import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadHome: 0,
    };
  }

  homeLoad = () => {
    let loadHome = 1 - this.state.loadHome;
    this.setState({ loadHome: loadHome });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <div className="Nav-myname">
            <p>Shimin Rao</p>
          </div> */}
          <div className="Nav-list">
            <div className="Nav-item">
              <Link to="/">Home</Link>
            </div>
            <div className="Nav-item">
              <Link to="/about">About</Link>
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
              return <Home />;
            }}
          />
          <Route
            path="/about"
            render={() => {
              return <About />;
            }}
          />
          <Route
            path="/projects"
            render={() => {
              return <Projects />;
            }}
          />
          <Route
            path="/resume"
            render={() => {
              return <Resume />;
            }}
          />
          <Route
            path="/contact"
            render={() => {
              return <Contact />;
            }}
          />
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
