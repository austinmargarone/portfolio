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
        <SkillTile StackImage={ReactIcon} />
        <SkillTile StackImage={ReduxIcon} />
        <SkillTile StackImage={NextIcon} />
        <SkillTile StackImage={TSIcon} />
        <SkillTile StackImage={HTMLIcon} />
        <SkillTile StackImage={CSSIcon} />
        <SkillTile StackImage={SassIcon} />
        <SkillTile StackImage={TailwindIcon} />
        <SkillTile StackImage={MotionIcon} />
        <SkillTile StackImage={GitIcon} />
        <SkillTile StackImage={GitHubIcon} />
        <SkillTile StackImage={NodeIcon} />
        <SkillTile StackImage={ExpressIcon} />
        <SkillTile StackImage={MongodbIcon} />
      </div>
    </section>
  );
};

export default TechStack;
