import React from "react";
import SkillTile from "./SkillTile";

type Props = {};

const TechStack = (props: Props) => {
  return (
    <section className="p3 md:p3lg">
      <div>
        <p className="projectsmalltitle mb-[.56rem]">Technologies used</p>
        <h4 className="projecttitle mb-[1.5rem]">Tech Stack</h4>
      </div>
      <div className="tiles flex">
        <SkillTile />
        <SkillTile />
        <SkillTile />
        <SkillTile />
        <SkillTile />
        <SkillTile />
        <SkillTile />
        <SkillTile />
        <SkillTile />
        <SkillTile />
        <SkillTile />
        <SkillTile />
        <SkillTile />
        <SkillTile />
      </div>
    </section>
  );
};

export default TechStack;
