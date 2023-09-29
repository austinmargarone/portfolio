import React from "react";
import SkillTile from "./SkillTile";

type Props = { tech: string };

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
      <div className="tiles mx-auto flex w-[98%] justify-center">
        {props?.tech?.map((tech: string) => (
          <SkillTile prop={tech} key={tech} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
