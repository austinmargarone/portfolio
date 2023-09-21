import React from "react";
import SkillTile from "./SkillTile";
import {
  CSSIcon,
  ExpressIcon,
  GitHubIcon,
  GitIcon,
  HTMLIcon,
  JS,
  MaterialIcon,
  MongodbIcon,
  MotionIcon,
  NextIcon,
  NodeIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  TSIcon,
  TailwindIcon,
} from "../svg";

const MySkills = () => {
  return (
    <section className="mx-auto flex w-fit flex-col justify-center pb-[2rem] pt-[3rem] xs:max-w-[21.5rem] ss:max-w-[25rem] sm:max-w-[40rem] md:max-w-[65rem] md:flex-row xl:max-w-[90rem]">
      <div className="skills md:skillslg flex bg-white dark:bg-darkbg2">
        <h2 className="underline-magic mb-[2.5rem] flex w-fit text-center dark:text-white">
          My Skills
        </h2>
        <div className="tech md:techlg flex md:flex-row">
          <SkillTile StackImage={JS} />
          <SkillTile StackImage={ReactIcon} />
          <SkillTile StackImage={ReduxIcon} />
          <SkillTile StackImage={NextIcon} />
          <SkillTile StackImage={TSIcon} />
          <SkillTile StackImage={HTMLIcon} />
          <SkillTile StackImage={CSSIcon} />
          <SkillTile StackImage={SassIcon} />
          <SkillTile StackImage={MaterialIcon} />
          <SkillTile StackImage={TailwindIcon} />
          <SkillTile StackImage={MotionIcon} />
          <SkillTile StackImage={GitIcon} />
          <SkillTile StackImage={GitHubIcon} />
          <SkillTile StackImage={NodeIcon} />
          <SkillTile StackImage={ExpressIcon} />
          <SkillTile StackImage={MongodbIcon} />
        </div>
      </div>
    </section>
  );
};

export default MySkills;
