import React from "react";
import SkillTile from "./SkillTile";

type Props = {};

const MySkills = (props: Props) => {
  return (
    <section className="2xl:mx-auto 2xl:max-w-[120rem] mx-auto flex w-full max-w-[26rem] flex-col justify-center pb-[2rem] pt-[3rem] xs:mx-auto xs:max-w-[25rem] sm:mx-auto sm:max-w-[30rem] md:mx-auto md:max-w-[60rem] md:flex-row lg:mx-auto lg:max-w-[75rem] xl:mx-auto xl:max-w-[90rem]">
      <div className="skills md:skillslg flex min-w-[25rem] max-w-[80rem] bg-white">
        <h2 className="underline-magic mb-[2.5rem] flex w-fit text-center">
          My Skills
        </h2>
        <div className="tech md:techlg flex md:flex-row">
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
