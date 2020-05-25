import React, { Component } from "react";
import "./SkillTable.css";

class SkillTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { imgUrl, category, acquiredSkills } = {
      ...this.props.acquiredCategorySkills,
    };

    let list = "";
    list = acquiredSkills.map((item, i) => {
      return (
        <p className="skilltable-acquiredSkills-item" key={i}>
          {item}
        </p>
      );
    });
    return (
      <div className="skilltable-div">
        <div className="skilltable-img">
          <img src={imgUrl} alt={category} />
        </div>
        <div className="skilltable-category">
          <p className="skilltable-category-info">{category}</p>
        </div>
        <div className="skilltable-acquiredSkills">{list}</div>
      </div>
    );
  }
}

export default SkillTable;
