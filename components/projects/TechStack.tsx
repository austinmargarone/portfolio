import React from "react";
import SkillTile from "./SkillTile";
import {
  ReactIcon,
  ReduxIcon,
  NextIcon,
  TSIcon,
  HTMLIcon,
  CSSIcon,
  SassIcon,
  TailwindIcon,
  MotionIcon,
  GitIcon,
  GitHubIcon,
  NodeIcon,
  ExpressIcon,
  MongodbIcon,
} from "../svg";

type Props = {};

const TechStack = (props: Props) => {
  return (
    <section className="p3 md:p3lg">
      <div>
        <p className="projectsmalltitle md:smallbold mb-[.56rem] dark:text-blue1">
          Technologies used
        </p>
        <h4 className="projecttitle md:ptitle2 mb-[1.5rem] dark:text-white">
          Tech Stack
        </h4>
      </div>
      <div className="tiles flex">
        <SkillTile StackImage2={ReactIcon} />
        <SkillTile StackImage2={ReduxIcon} />
        <SkillTile StackImage2={NextIcon} />
        <SkillTile StackImage2={TSIcon} />
        <SkillTile StackImage2={HTMLIcon} />
        <SkillTile StackImage2={CSSIcon} />
        <SkillTile StackImage2={SassIcon} />
        <SkillTile StackImage2={TailwindIcon} />
        <SkillTile StackImage2={MotionIcon} />
        <SkillTile StackImage2={GitIcon} />
        <SkillTile StackImage2={GitHubIcon} />
        <SkillTile StackImage2={NodeIcon} />
        <SkillTile StackImage2={ExpressIcon} />
        <SkillTile StackImage2={MongodbIcon} />
      </div>
    </section>
  );
};

export default TechStack;
