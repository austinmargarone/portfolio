import React from "react";
import SkillTile from "./SkillTile";

type Props = {};

const MySkills = (props: Props) => {
  return (
    <section className="mx-auto flex w-fit flex-col justify-center pb-[2rem] pt-[3rem] md:max-w-[60rem] md:flex-row xl:max-w-[80rem]">
      <div className="skills md:skillslg flex min-w-[25rem] max-w-[80rem] bg-white dark:bg-darkbg2">
        <h2 className="underline-magic mb-[2.5rem] flex w-fit text-center dark:text-white">
          My Skills
        </h2>
        <div className="tech md:techlg flex md:flex-row">
          <SkillTile imageUrl="/js.svg" />
          <SkillTile imageUrl="/react.svg" />
          <SkillTile imageUrl="/Redux.svg" />
          <SkillTile imageUrl="Next.svg" />
          <SkillTile imageUrl="ts.svg" />
          <SkillTile imageUrl="html.svg" />
          <SkillTile imageUrl="css.svg" />
          <SkillTile imageUrl="sass.svg" />
          <SkillTile imageUrl="Material.svg" />
          <SkillTile imageUrl="tailwind.svg" />
          <SkillTile imageUrl="Motion.svg" />
          <SkillTile imageUrl="git.svg" />
          <SkillTile imageUrl="github.svg" />
          <SkillTile imageUrl="nodejs.svg" />
          <SkillTile imageUrl="ex.svg" />
          <SkillTile imageUrl="mongodb.svg" />
        </div>
      </div>
    </section>
  );
};

export default MySkills;
