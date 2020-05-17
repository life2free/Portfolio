import React, { Component } from "react";
import "./Skills.css";
import SkillTable from "./SkillTable";
import FrontEnd from "../../Img/frontend.png";
import BackEnd from "../../Img/backend.jpeg";
import Database from "../../Img/database.png";
import FrameWork from "../../Img/framework.png";
import Tools from "../../Img/tools.png";

const skillList = [
  {
    imgUrl: FrontEnd,
    category: "FRONT END",
    acquiredSkills: ["React", "Html", "Javascript", "jQuery", "CSS"],
  },
  {
    imgUrl: BackEnd,
    category: "BACK END",
    acquiredSkills: ["Java", "Python", "Node.js", "C", "C#", "VBA"],
  },
  {
    imgUrl: Database,
    category: "DATABASE",
    acquiredSkills: ["Oracle", "SQL Server", "MySql", "MongoDB", "PostgreSQL"],
  },
  {
    imgUrl: FrameWork,
    category: "FrameWork",
    acquiredSkills: ["Spring", "Django", "Express", "Hibernate", "Struts"],
  },
  {
    imgUrl: Tools,
    category: "TOOLS & OTHERS",
    acquiredSkills: [
      "Eclipse",
      "IntelliJ IDEA",
      "Visual Studio",
      "Git/Github",
      "Docker",
      "Maven",
      "Jenkins",
      "Tomcat",
      "IIS",
      "Ant",
    ],
  },
];

class Skills extends Component {
  componentDidMount() {
    this.props.setHighLight(this.props.index);
  }
  render() {
    let list = "";
    list = skillList.map((item, i) => {
      return <SkillTable acquiredCategorySkills={item} key={i} />;
    });
    return (
      <div className="skills-div">
        <div className="skills-title">My Skills</div>
        <div className="skills-list">
          {/* <SkillList /> */}
          {list}
        </div>
      </div>
    );
  }
}

export default Skills;
