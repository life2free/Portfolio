import React, { Component } from "react";
import "./Skills.css";
import SkillTable from "./SkillTable";
import FrontEnd from "../../Statics/Img/frontend.png";
import BackEnd from "../../Statics/Img/backend.jpeg";
import Database from "../../Statics/Img/database.png";
import FrameWork from "../../Statics/Img/framework.png";
import Tools from "../../Statics/Img/tools.png";

const skillList = [
  {
    imgUrl: FrontEnd,
    category: "FRONT END",
    acquiredSkills: [
      "React",
      "Angular",
      "Html",
      "JavaScript",
      "TypeScript",
      "jQuery",
      "CSS",
    ],
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
    acquiredSkills: [
      "Spring",
      "Spring Boot",
      "Hibernate",
      "Struts",
      "Django",
      "Express",
    ],
  },
  {
    imgUrl: Tools,
    category: "OTHERS",
    acquiredSkills: [
      "Tomcat",
      "IIS",
      "Git/Github",
      "Kubernetes",
      "Docker",
      "Maven",
      "Jenkins",
      "Ant",
      "Eclipse",
      "IntelliJ IDEA",
      "JIRA",
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
        {/* <div className="skills-title">My Skills</div> */}
        <div className="skills-list">{list}</div>
      </div>
    );
  }
}

export default Skills;
