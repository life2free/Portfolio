import React, { Component } from "react";
import "./ProjectList.css";
import Project from "./Project";
import GameOfWar from "../../Img/gameofwar.png";
import Hanoi from "../../Img/hanoi.png";
import ComponentLb from "../../Img/componentlibrary.png";
import NewsAssitant from "../../Img/newsassistant.png";
import NationalParks from "../../Img/nationalparks.png";
import ContactBook from "../../Img/contactbook.png";

const projectList = [
  {
    name: "Game Of War",
    imgUrl: GameOfWar,
    description: "A card game built with javascript for users to play.",
    techs: "Javascript | Html | CSS",
    githubUrl: "https://github.com/life2free/GameOfWar",
    deployUrl: "https://life2free.github.io/GameOfWar/",
    wider: false,
  },
  {
    name: "Hanoi",
    imgUrl: Hanoi,
    description: "A mathematical game built with javascript for users to play.",
    techs: "Javascript | jQuery | Html | CSS",
    githubUrl: "https://github.com/life2free/Hanoi",
    deployUrl: "https://life2free.github.io/Hanoi/",
    wider: true,
  },
  {
    name: "Component Library",
    imgUrl: ComponentLb,
    description: "A collection of React UI components built with StoryBook.",
    techs: "React | Storybook | AdobeXd | Html | CSS",
    githubUrl: "https://github.com/life2free/component-library",
    deployUrl:
      "https://thunderous-component-library.netlify.app/?path=/story/button-primary--primary",
    wider: true,
  },

  {
    name: "National Parks",
    imgUrl: NationalParks,
    description:
      "A React app that communicate with 3rd-party APIs. Gets the natinal parks' information from public API and displays.",
    techs: "React | Javascript | Html | CSS",
    githubUrl: "https://git.generalassemb.ly/shimin/react-router-lab",
    deployUrl: "https://nationalparksviewer.netlify.app",
    wider: true,
  },
  {
    name: "Contact Book",
    imgUrl: ContactBook,
    description:
      "A command line application built with python and SQL database (PostgreSQL). With full CRUD capability, allow users to search, create, edit, delete the contact information.",
    techs: "Python3 | PostgreSQL | Peewee | pipenv | CLI",
    githubUrl: "https://github.com/life2free/ContactBook_CommandLine",
    deployUrl: "https://github.com/life2free/ContactBook_CommandLine",
    wider: false,
  },
  {
    name: "News Assistant",
    imgUrl: NewsAssitant,
    description:
      "A full stack application for users to search, create, edit, delete the news. Built the front-end with React, JavaScript. Implemented the RESTful Api for back-end with Node, Express and MongoDB.",
    techs: "React | Node | Express | MongoDB | JavaScript | Html | CSS",
    githubUrl: "https://github.com/life2free/news-assistant",
    deployUrl: "https://thunderous-news-assistant.netlify.app/",
    wider: true,
  },
];

class ProjectList extends Component {
  constructor() {
    super();
  }
  render() {
    let list = "";
    list = projectList.map((item, i) => {
      if (item.wider) {
        return <Project project={item} key={i} wider />;
      } else {
        return <Project project={item} key={i} />;
      }
    });

    return <div className="projects-list-div">{list}</div>;
  }
}

export default ProjectList;
