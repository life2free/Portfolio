import React, { Component } from "react";
import "./ProjectList.css";
import Project from "./Project";
import GameOfWar from "../../Statics/Img/gameofwar.png";
import Hanoi from "../../Statics/Img/hanoi.png";
import ComponentLb from "../../Statics/Img/componentlibrary.png";
import NewsAssitant from "../../Statics/Img/newsassistant.png";
import NationalParks from "../../Statics/Img/nationalparks.png";
import ContactBook from "../../Statics/Img/contactbook.png";
import EnDever from "../../Statics/Img/endever.png";
import Cotripper from "../../Statics/Img/cotripper.png";

const projectList = [
  {
    name: "Game Of War",
    imgUrl: GameOfWar,
    description: "A card game built with javascript for users to play.",
    techs: "Javascript | HTML | CSS",
    githubUrl: "https://github.com/life2free/GameOfWar",
    deployUrl: "https://life2free.github.io/GameOfWar/",
    width: "",
  },
  {
    name: "Hanoi",
    imgUrl: Hanoi,
    description: "A mathematical game built with javascript for users to play.",
    techs: "Javascript | jQuery | HTML | CSS",
    githubUrl: "https://github.com/life2free/Hanoi",
    deployUrl: "https://life2free.github.io/Hanoi/",
    width: "",
  },
  {
    name: "Component Library",
    imgUrl: ComponentLb,
    description: "A collection of React UI components built with StoryBook.",
    techs: "React | Storybook | AdobeXd | HTML | CSS",
    githubUrl: "https://github.com/life2free/component-library",
    deployUrl:
      "https://thunderous-component-library.netlify.app/?path=/story/button-primary--primary",
    width: "",
  },
  {
    name: "National Parks",
    imgUrl: NationalParks,
    description: "A guide to National Parks in America",
    techs: "React | Javascript | HTML | CSS",
    githubUrl: "https://github.com/life2free/NationalParks",
    deployUrl: "https://nationalparksviewer.netlify.app",
    width: "",
  },
  {
    name: "News Assistant",
    imgUrl: NewsAssitant,
    description:
      "A full stack MERN application for users to search, create, edit, delete the news. ",
    techs: "React | Node | Express | MongoDB | JavaScript | HTML | CSS",
    githubUrl: "https://github.com/life2free/news-assistant",
    deployUrl: "https://thunderous-news-assistant.netlify.app/",
    width: "",
  },
  {
    name: "Contact Book",
    imgUrl: ContactBook,
    description:
      "A command line application for users to search, create, edit, delete the contact information.",
    techs: "Python3 | PostgreSQL | Peewee | CLI",
    githubUrl: "https://github.com/life2free/ContactBook_CommandLine",
    deployUrl: "https://github.com/life2free/ContactBook_CommandLine",
    width: "",
  },
  {
    name: "EnDever",
    imgUrl: EnDever,
    description:
      "A full stack application for developers to share ideas, discuss technologies.",
    techs: "React | Express | GitHub OAuth | MongoDB",
    githubUrl: "https://github.com/life2free/EnDever",
    deployUrl: "https://endeverweb.netlify.app/",
    width: "",
  },
  {
    name: "CoTripper",
    imgUrl: Cotripper,
    description: "Tourism website dedicated to help single mothers travel.",
    techs: "Python3 | Django | React | PostgreSQL",
    githubUrl: "https://github.com/CotripperPlatform/CoTrip",
    deployUrl: "https://cotripper.netlify.app",
    width: "",
  },
];

class ProjectList extends Component {
  constructor() {
    super();
  }
  render() {
    let list = "";
    list = projectList.map((item, i) => {
      return <Project project={item} key={i} width={item.width} />;
    });

    return <div className="projects-list-div">{list}</div>;
  }
}

export default ProjectList;
