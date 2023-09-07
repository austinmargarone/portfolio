import React from "react";
import SkillTile from "./SkillTile";

type Props = {};

const MySkills = (props: Props) => {
  return (
    <div className="bg-white">
      <h2>My Skills</h2>
      <div>
        <SkillTile imageUrl="" />
      </div>
    </div>
  );
};

export default MySkills;
