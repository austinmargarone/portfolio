import React from "react";
import SkillTile from "./SkillTile";

type Props = {};

const MySkills = (props: Props) => {
  return (
    <section className="mx-auto flex w-fit flex-col justify-center pb-[2rem] pt-[3rem] md:flex-row xl:max-w-[120rem]">
      <div className="skills md:skillslg flex min-w-[25rem] max-w-[80rem] bg-white">
        <h2 className="mb-[2.5rem] flex text-center">My Skills</h2>
        <div className="tech flex">
          <SkillTile imageUrl="" />
          <SkillTile imageUrl="" />
          <SkillTile imageUrl="" />
          <SkillTile imageUrl="" />
          <SkillTile imageUrl="" />
          <SkillTile imageUrl="" />
          <SkillTile imageUrl="" />
          <SkillTile imageUrl="" />
          <SkillTile imageUrl="" />
          <SkillTile imageUrl="" />
          <SkillTile imageUrl="" />
          <SkillTile imageUrl="" />
        </div>
      </div>
    </section>
  );
};

export default MySkills;
